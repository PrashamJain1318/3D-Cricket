/**
 * PoseProcessor: Normalizes raw MediaPipe landmarks based on body center & shoulder width
 * Invariant to camera distance, player height, and aspect ratios.
 */

import { calculateJointAngle, distance2D } from '../utils/math';
import { Vector3Smoother } from '../utils/smoothing';

// MediaPipe Pose Landmark Indices
export const LANDMARKS = {
  NOSE: 0,
  LEFT_EYE_INNER: 1,
  LEFT_EYE: 2,
  LEFT_EYE_OUTER: 3,
  RIGHT_EYE_INNER: 4,
  RIGHT_EYE: 5,
  RIGHT_EYE_OUTER: 6,
  LEFT_EAR: 7,
  RIGHT_EAR: 8,
  MOUTH_LEFT: 9,
  MOUTH_RIGHT: 10,
  LEFT_SHOULDER: 11,
  RIGHT_SHOULDER: 12,
  LEFT_ELBOW: 13,
  RIGHT_ELBOW: 14,
  LEFT_WRIST: 15,
  RIGHT_WRIST: 16,
  LEFT_PINKY: 17,
  RIGHT_PINKY: 18,
  LEFT_INDEX: 19,
  RIGHT_INDEX: 20,
  LEFT_THUMB: 21,
  RIGHT_THUMB: 22,
  LEFT_HIP: 23,
  RIGHT_HIP: 24,
  LEFT_KNEE: 25,
  RIGHT_KNEE: 26,
  LEFT_ANKLE: 27,
  RIGHT_ANKLE: 28,
  LEFT_HEEL: 29,
  RIGHT_HEEL: 30,
  LEFT_FOOT_INDEX: 31,
  RIGHT_FOOT_INDEX: 32,
};

export class PoseProcessor {
  constructor() {
    this.baseline = {
      shoulderWidth: 0.3,
      torsoHeight: 0.45,
      armLength: 0.35,
      bodyCenter: { x: 0.5, y: 0.5, z: 0 },
      isCalibrated: false,
    };

    this.smoothers = {};
    Object.values(LANDMARKS).forEach((idx) => {
      this.smoothers[idx] = new Vector3Smoother(0.4);
    });
  }

  setBaseline(baseline) {
    this.baseline = { ...this.baseline, ...baseline, isCalibrated: true };
  }

  process(rawLandmarks, mirror = true) {
    if (!rawLandmarks || rawLandmarks.length < 33) {
      return null;
    }

    // Optionally mirror X coordinate for natural selfie-cam feeling
    const landmarks = rawLandmarks.map((lm, idx) => {
      const target = {
        x: mirror ? 1.0 - lm.x : lm.x,
        y: lm.y,
        z: lm.z || 0,
        visibility: lm.visibility !== undefined ? lm.visibility : 1.0,
      };
      const smoothed = this.smoothers[idx].update(target);
      return {
        ...smoothed,
        visibility: target.visibility,
      };
    });

    const lShoulder = landmarks[LANDMARKS.LEFT_SHOULDER];
    const rShoulder = landmarks[LANDMARKS.RIGHT_SHOULDER];
    const lHip = landmarks[LANDMARKS.LEFT_HIP];
    const rHip = landmarks[LANDMARKS.RIGHT_HIP];
    const lWrist = landmarks[LANDMARKS.LEFT_WRIST];
    const rWrist = landmarks[LANDMARKS.RIGHT_WRIST];
    const lElbow = landmarks[LANDMARKS.LEFT_ELBOW];
    const rElbow = landmarks[LANDMARKS.RIGHT_ELBOW];

    // Check visibility confidence
    const upperBodyVisible =
      (lShoulder.visibility > 0.4 || rShoulder.visibility > 0.4) &&
      (lWrist.visibility > 0.4 || rWrist.visibility > 0.4);

    const shoulderMid = {
      x: (lShoulder.x + rShoulder.x) * 0.5,
      y: (lShoulder.y + rShoulder.y) * 0.5,
      z: ((lShoulder.z || 0) + (rShoulder.z || 0)) * 0.5,
    };

    const hipMid = {
      x: (lHip.x + rHip.x) * 0.5,
      y: (lHip.y + rHip.y) * 0.5,
      z: ((lHip.z || 0) + (rHip.z || 0)) * 0.5,
    };

    const currentShoulderWidth = Math.max(0.1, distance2D(lShoulder, rShoulder));
    const currentTorsoHeight = Math.max(0.15, distance2D(shoulderMid, hipMid));

    const scaleFactor = this.baseline.isCalibrated
      ? this.baseline.shoulderWidth / currentShoulderWidth
      : 1.0 / (currentShoulderWidth * 3.3);

    // Normalization origin: shoulder midpoint
    const normalizedLandmarks = landmarks.map((lm) => ({
      x: (lm.x - shoulderMid.x) * scaleFactor,
      y: (lm.y - shoulderMid.y) * scaleFactor,
      z: ((lm.z || 0) - shoulderMid.z) * scaleFactor,
      visibility: lm.visibility,
    }));

    // Calculate joint angles in degrees
    const leftElbowAngle = calculateJointAngle(lShoulder, lElbow, lWrist);
    const rightElbowAngle = calculateJointAngle(rShoulder, rElbow, rWrist);
    const leftShoulderAngle = calculateJointAngle(lHip, lShoulder, lElbow);
    const rightShoulderAngle = calculateJointAngle(rHip, rShoulder, rElbow);

    // Torso lean / spine tilt angle
    const spineVector = { x: shoulderMid.x - hipMid.x, y: shoulderMid.y - hipMid.y };
    const spineTilt = Math.atan2(spineVector.x, -spineVector.y) * (180 / Math.PI);

    // Both hands combined centroid (where bat grip is located)
    const handsCentroid = {
      x: (normalizedLandmarks[LANDMARKS.LEFT_WRIST].x + normalizedLandmarks[LANDMARKS.RIGHT_WRIST].x) * 0.5,
      y: (normalizedLandmarks[LANDMARKS.LEFT_WRIST].y + normalizedLandmarks[LANDMARKS.RIGHT_WRIST].y) * 0.5,
      z: (normalizedLandmarks[LANDMARKS.LEFT_WRIST].z + normalizedLandmarks[LANDMARKS.RIGHT_WRIST].z) * 0.5,
    };

    return {
      rawLandmarks: landmarks,
      normalizedLandmarks,
      shoulderMid,
      hipMid,
      shoulderWidth: currentShoulderWidth,
      torsoHeight: currentTorsoHeight,
      upperBodyVisible,
      jointAngles: {
        leftElbowAngle,
        rightElbowAngle,
        leftShoulderAngle,
        rightShoulderAngle,
        spineTilt,
      },
      handsCentroid,
      leftWrist: normalizedLandmarks[LANDMARKS.LEFT_WRIST],
      rightWrist: normalizedLandmarks[LANDMARKS.RIGHT_WRIST],
      timestamp: performance.now(),
    };
  }
}
