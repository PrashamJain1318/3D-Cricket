/**
 * VisionHUD: Compact Computer Vision telemetry widget showing camera status,
 * detected shot, confidence percentage, and movement energy.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { SHOT_NAMES } from '../utils/constants';
import { Camera, Zap, Eye, Keyboard } from 'lucide-react';

export const VisionHUD = () => {
  const { visionData } = useGame();
  const { isCameraActive, poseDetected, batting, movement, fps } = visionData;

  const shotName = batting?.shotType ? SHOT_NAMES[batting.shotType] || batting.shotType : 'Stance Ready';
  const confidence = batting?.confidence || (poseDetected ? 85 : 0);
  const wristSpeed = movement?.wristSpeed ? movement.wristSpeed.toFixed(1) : '0.0';

  return (
    <div className="glass-panel vision-hud-panel select-none pointer-events-auto">
      {/* Camera Status */}
      <div className="flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5">
          {isCameraActive ? (
            <>
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold text-emerald-400 font-chakra">VISION ACTIVE</span>
            </>
          ) : (
            <>
              <Keyboard className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold text-amber-400 font-chakra">KEYBOARD MODE</span>
            </>
          )}
        </div>
        <span className="text-[10px] text-slate-400 font-mono">{fps || 30} FPS</span>
      </div>

      {/* Detected Shot & Confidence */}
      <div className="flex flex-col gap-1 mt-1 border-t border-white/10 pt-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">DETECTED SHOT</span>
          <span className="text-cyan-300 font-bold font-chakra truncate max-w-[110px]">{shotName}</span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-300">
          <span className="text-slate-400 text-[10px]">CONFIDENCE</span>
          <span className="font-mono font-bold text-amber-300">{confidence}%</span>
        </div>

        <div className="confidence-bar-bg">
          <div className="confidence-bar-fill" style={{ width: `${confidence}%` }} />
        </div>
      </div>

      {/* Movement Kinetic Meter */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
        <span className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-amber-400" /> SPEED
        </span>
        <span className="font-mono text-slate-200">{wristSpeed} m/s</span>
      </div>
    </div>
  );
};
