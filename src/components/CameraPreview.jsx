/**
 * CameraPreview: Floating Picture-in-Picture webcam view with live skeleton landmarks canvas.
 */

import React, { useRef, useEffect, useState } from 'react';
import { useGame } from '../state/GameContext';
import { Camera, CameraOff, RefreshCw, Eye, EyeOff, Sliders } from 'lucide-react';
import { GAME_STATES } from '../utils/constants';

export const CameraPreview = () => {
  const { poseDetector, settings, setGameState, visionData } = useGame();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const initCamera = async () => {
      if (!poseDetector || !videoRef.current || !canvasRef.current) return;
      setIsInitializing(true);
      
      const loaded = await poseDetector.init(videoRef.current, canvasRef.current);
      if (loaded && isMounted) {
        await poseDetector.startCamera();
      }
      if (isMounted) setIsInitializing(false);
    };

    initCamera();

    return () => {
      isMounted = false;
      if (poseDetector) {
        poseDetector.stopCamera();
      }
    };
  }, [poseDetector]);

  const toggleCamera = async () => {
    if (!poseDetector) return;
    if (poseDetector.isCameraActive) {
      poseDetector.stopCamera();
    } else {
      setIsInitializing(true);
      await poseDetector.startCamera();
      setIsInitializing(false);
    }
  };

  const handleOpenCalibration = () => {
    setGameState(GAME_STATES.CALIBRATION);
  };

  return (
    <div className="camera-pip group">
      <video ref={videoRef} playsInline muted autoPlay />
      <canvas
        ref={canvasRef}
        width={320}
        height={240}
        style={{ display: showOverlay ? 'block' : 'none' }}
      />

      {/* Camera Status Badge */}
      <div className="camera-badge">
        <span className="camera-dot-pulse" />
        <span>{visionData.isCameraActive ? 'LIVE' : 'OFFLINE'}</span>
      </div>

      {/* Hover Floating Controls */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 pointer-events-auto">
        <div className="flex justify-end gap-1.5">
          <button
            onClick={() => setShowOverlay((prev) => !prev)}
            className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-200"
            title={showOverlay ? 'Hide Skeleton' : 'Show Skeleton'}
          >
            {showOverlay ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleOpenCalibration}
            className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-cyan-300"
            title="Calibrate Pose Baseline"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={toggleCamera}
            disabled={isInitializing}
            className="px-3 py-1 text-xs rounded bg-cyan-600 hover:bg-cyan-500 font-bold font-chakra flex items-center gap-1.5"
          >
            {visionData.isCameraActive ? (
              <>
                <CameraOff className="w-3 h-3" /> Disable
              </>
            ) : (
              <>
                <Camera className="w-3 h-3" /> Enable
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
