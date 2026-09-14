/**
 * DebugOverlay: F3 Developer telemetry HUD for performance, joint angles, and physics tracking.
 */

import React from 'react';
import { useGame } from '../state/GameContext';

export const DebugOverlay = ({ ballPhysics, renderFps = 60 }) => {
  const { gameState, gameMode, visionData, matchManager } = useGame();
  const { processedPose, movement, batting, fps: poseFps } = visionData;

  const ballPos = ballPhysics ? ballPhysics.position : { x: 0, y: 0, z: 0 };
  const ballVel = ballPhysics ? ballPhysics.velocity : { x: 0, y: 0, z: 0 };

  return (
    <div className="absolute top-16 left-4 z-50 bg-black/85 border border-cyan-500/40 rounded-lg p-3 text-[11px] font-mono text-cyan-300 pointer-events-none select-none max-w-xs shadow-2xl backdrop-blur-md">
      <div className="font-bold text-white border-b border-white/20 pb-1 mb-1.5 flex justify-between">
        <span>DEBUG TELEMETRY</span>
        <span className="text-amber-400">F3 TO HIDE</span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-400">Render FPS:</span>
        <span>{renderFps}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Pose FPS:</span>
        <span>{poseFps || 0}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Game State:</span>
        <span className="text-emerald-400">{gameState}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Game Mode:</span>
        <span>{gameMode}</span>
      </div>

      <div className="mt-1.5 pt-1.5 border-t border-white/10 text-slate-300">
        <div className="text-white font-semibold mb-0.5">Computer Vision:</div>
        <div className="flex justify-between">
          <span className="text-slate-400">Pose Detected:</span>
          <span>{processedPose ? 'YES' : 'NO'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Wrist Speed:</span>
          <span>{movement?.wristSpeed ? movement.wristSpeed.toFixed(2) : 0} m/s</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Spine Tilt:</span>
          <span>{processedPose?.jointAngles ? processedPose.jointAngles.spineTilt.toFixed(1) : 0}°</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Shot / Conf:</span>
          <span className="text-amber-300">
            {batting?.shotType || 'NONE'} ({batting?.confidence || 0}%)
          </span>
        </div>
      </div>

      <div className="mt-1.5 pt-1.5 border-t border-white/10 text-slate-300">
        <div className="text-white font-semibold mb-0.5">Ball Physics:</div>
        <div className="flex justify-between">
          <span className="text-slate-400">Pos (X,Y,Z):</span>
          <span>{ballPos.x.toFixed(1)}, {ballPos.y.toFixed(1)}, {ballPos.z.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Vel (Z):</span>
          <span>{ballVel.z.toFixed(1)} m/s</span>
        </div>
      </div>
    </div>
  );
};
