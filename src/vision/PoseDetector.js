/**
 * PoseDetector: Manages camera video stream, MediaPipe Pose pipeline,
 * canvas debug overlay drawing, and throttled inference.
 */

import { PoseProcessor, LANDMARKS } from './PoseProcessor';
import { MovementAnalyzer } from './MovementAnalyzer';
import { BattingDetector } from './BattingDetector';
import { BowlingDetector } from './BowlingDetector';

export class PoseDetector {
  constructor() {
    this.videoElement = null;
    this.canvasElement = null;
    this.ctx = null;
    this.pose = null;
    this.camera = null;
    this.isRunning = false;
    this.isCameraActive = false;
    this.isLoaded = false;
    this.fps = 0;
    this.frameCount = 0;
    this.lastFpsTime = performance.now();
    this.lastInferenceTime = 0;
    this.inferenceInterval = 35; // ~28 FPS inference cap for smooth 60fps Three.js

    this.processor = new PoseProcessor();
    this.analyzer = new MovementAnalyzer();
    this.battingDetector = new BattingDetector('right');
    this.bowlingDetector = new BowlingDetector('right');

    this.onPoseUpdate = null;
    this.onStatusChange = null;
    this.onError = null;

    this.latestResult = {
      processedPose: null,
      movement: null,
      batting: null,
      bowling: null,
    };
  }

  async init(videoElement, canvasElement = null) {
    this.videoElement = videoElement;
    this.canvasElement = canvasElement;
    if (canvasElement) {
      this.ctx = canvasElement.getContext('2d');
    }

    try {
      this.updateStatus('INITIALIZING_MEDIAPIPE', 'Loading vision model...');
      
      // Load MediaPipe Pose
      let PoseClass = window.Pose;
      if (!PoseClass) {
        try {
          const mpPose = await import('@mediapipe/pose');
          PoseClass = mpPose.Pose || mpPose.default?.Pose || window.Pose;
        } catch {
          // Fallback to CDN script if direct import has bundling quirk
          PoseClass = await this.loadPoseFromCDN();
        }
      }

      if (!PoseClass) {
        throw new Error('MediaPipe Pose library could not be loaded');
      }

      this.pose = new PoseClass({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
        },
      });

      this.pose.setOptions({
        modelComplexity: 1, // 0 = Lite, 1 = Full (great balance of speed and precision)
        smoothLandmarks: true,
        enableSegmentation: false,
        smoothSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      this.pose.onResults(this.handleResults.bind(this));
      this.isLoaded = true;
      this.updateStatus('READY', 'Vision model ready');
      return true;
    } catch (err) {
      console.warn('PoseDetector init error:', err);
      this.updateStatus('ERROR', err.message);
      if (this.onError) this.onError(err);
      return false;
    }
  }

  loadPoseFromCDN() {
    return new Promise((resolve, reject) => {
      if (window.Pose) return resolve(window.Pose);
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js';
      script.crossOrigin = 'anonymous';
      script.onload = () => resolve(window.Pose);
      script.onerror = (e) => reject(new Error('Failed to load MediaPipe Pose from CDN'));
      document.head.appendChild(script);
    });
  }

  async startCamera(facingMode = 'user') {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      const err = new Error('Webcam API is not supported in this browser environment');
      if (this.onError) this.onError(err);
      return false;
    }

    try {
      this.updateStatus('REQUESTING_CAMERA', 'Requesting camera access...');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30 },
        },
        audio: false,
      });

      if (this.videoElement) {
        this.videoElement.srcObject = stream;
        await new Promise((resolve) => {
          this.videoElement.onloadedmetadata = () => {
            this.videoElement.play();
            resolve();
          };
        });
      }

      this.isCameraActive = true;
      this.isRunning = true;
      this.updateStatus('ACTIVE', 'Camera active');
      this.startProcessingLoop();
      return true;
    } catch (err) {
      console.warn('Camera access error:', err);
      this.isCameraActive = false;
      this.updateStatus('CAMERA_DENIED', 'Camera permission denied or unavailable');
      if (this.onError) this.onError(err);
      return false;
    }
  }

  stopCamera() {
    this.isRunning = false;
    this.isCameraActive = false;
    if (this.videoElement && this.videoElement.srcObject) {
      const tracks = this.videoElement.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      this.videoElement.srcObject = null;
    }
    this.updateStatus('STOPPED', 'Camera stopped');
  }

  startProcessingLoop() {
    const processFrame = async () => {
      if (!this.isRunning) return;

      const now = performance.now();
      if (
        this.videoElement &&
        this.videoElement.readyState >= 2 &&
        this.pose &&
        now - this.lastInferenceTime >= this.inferenceInterval
      ) {
        this.lastInferenceTime = now;
        try {
          await this.pose.send({ image: this.videoElement });
        } catch (e) {
          // Skip frame hitch
        }
      }

      requestAnimationFrame(processFrame);
    };

    requestAnimationFrame(processFrame);
  }

  handleResults(results) {
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFpsTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsTime));
      this.frameCount = 0;
      this.lastFpsTime = now;
    }

    if (!results || !results.poseLandmarks) {
      this.latestResult = {
        processedPose: null,
        movement: null,
        batting: null,
        bowling: null,
        fps: this.fps,
      };
      if (this.onPoseUpdate) this.onPoseUpdate(this.latestResult);
      return;
    }

    const processedPose = this.processor.process(results.poseLandmarks, true);
    this.analyzer.addFrame(processedPose);
    const movement = this.analyzer.analyze();
    const batting = this.battingDetector.detectShot(movement, processedPose);
    const bowling = this.bowlingDetector.detectBowlingAction(movement, processedPose);

    this.latestResult = {
      processedPose,
      movement,
      batting,
      bowling,
      fps: this.fps,
    };

    if (this.canvasElement && this.ctx) {
      this.drawSkeletonOverlay(processedPose);
    }

    if (this.onPoseUpdate) {
      this.onPoseUpdate(this.latestResult);
    }
  }

  drawSkeletonOverlay(processedPose) {
    if (!this.ctx || !this.canvasElement || !processedPose) return;
    const { width, height } = this.canvasElement;
    this.ctx.clearRect(0, 0, width, height);

    const landmarks = processedPose.rawLandmarks;
    if (!landmarks) return;

    // Connections
    const connections = [
      [LANDMARKS.LEFT_SHOULDER, LANDMARKS.RIGHT_SHOULDER],
      [LANDMARKS.LEFT_SHOULDER, LANDMARKS.LEFT_ELBOW],
      [LANDMARKS.LEFT_ELBOW, LANDMARKS.LEFT_WRIST],
      [LANDMARKS.RIGHT_SHOULDER, LANDMARKS.RIGHT_ELBOW],
      [LANDMARKS.RIGHT_ELBOW, LANDMARKS.RIGHT_WRIST],
      [LANDMARKS.LEFT_SHOULDER, LANDMARKS.LEFT_HIP],
      [LANDMARKS.RIGHT_SHOULDER, LANDMARKS.RIGHT_HIP],
      [LANDMARKS.LEFT_HIP, LANDMARKS.RIGHT_HIP],
      [LANDMARKS.LEFT_HIP, LANDMARKS.LEFT_KNEE],
      [LANDMARKS.LEFT_KNEE, LANDMARKS.LEFT_ANKLE],
      [LANDMARKS.RIGHT_HIP, LANDMARKS.RIGHT_KNEE],
      [LANDMARKS.RIGHT_KNEE, LANDMARKS.RIGHT_ANKLE],
    ];

    // Draw lines
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#06b6d4'; // Cyan glowing skeleton
    this.ctx.beginPath();
    connections.forEach(([i, j]) => {
      const p1 = landmarks[i];
      const p2 = landmarks[j];
      if (p1 && p2 && p1.visibility > 0.4 && p2.visibility > 0.4) {
        this.ctx.moveTo(p1.x * width, p1.y * height);
        this.ctx.lineTo(p2.x * width, p2.y * height);
      }
    });
    this.ctx.stroke();

    // Draw joints
    landmarks.forEach((lm, idx) => {
      if (lm.visibility > 0.4) {
        this.ctx.beginPath();
        this.ctx.arc(lm.x * width, lm.y * height, idx === LANDMARKS.NOSE ? 5 : 4, 0, 2 * Math.PI);
        this.ctx.fillStyle = idx === LANDMARKS.LEFT_WRIST || idx === LANDMARKS.RIGHT_WRIST ? '#f43f5e' : '#22c55e';
        this.ctx.fill();
      }
    });
  }

  updateStatus(state, message) {
    if (this.onStatusChange) {
      this.onStatusChange({ state, message, fps: this.fps });
    }
  }
}
