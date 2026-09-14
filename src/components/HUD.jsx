/**
 * HUD: Broadcast-style cricket scoreboard, ball timeline, delivery banner, and shot master card.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { GAME_MODES, SHOT_NAMES } from '../utils/constants';
import { Trophy, Target, Pause, Video } from 'lucide-react';

export const HUD = ({ onTogglePause, onCycleCamera }) => {
  const { score, gameMode, targetShot, matchManager } = useGame();

  if (!score) return null;

  const rrr = score.getRequiredRunRate ? score.getRequiredRunRate() : null;
  const currentDelivery = matchManager?.currentDelivery;

  return (
    <div className="w-full flex flex-col justify-between pointer-events-none select-none">
      {/* Top Bar: TV Scoreboard & Match Info */}
      <div className="flex items-start justify-between gap-4">
        {/* Left: Main Scoreboard */}
        <div className="glass-panel tv-scoreboard interactive-ui">
          <div className="score-main">
            <span className="score-runs">{score.totalRuns}</span>
            <span className="score-slash">/</span>
            <span className="score-wickets">{score.wickets}</span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">OVERS</span>
            <span className="text-lg font-extrabold font-chakra text-white">
              {score.getOversDisplay ? score.getOversDisplay() : '0.0'}
              <span className="text-xs text-slate-400 font-normal"> / {score.maxOvers}.0</span>
            </span>
          </div>

          {/* Over Timeline Dots */}
          <div className="over-balls-container border-l border-white/10 pl-3">
            {score.thisOver && score.thisOver.length > 0 ? (
              score.thisOver.map((b, idx) => {
                let dotClass = 'ball-dot';
                if (b === '4') dotClass += ' boundary-four';
                else if (b === '6') dotClass += ' boundary-six';
                else if (b === 'W') dotClass += ' wicket';
                return (
                  <div key={idx} className={dotClass}>
                    {b}
                  </div>
                );
              })
            ) : (
              <span className="text-xs text-slate-500 font-mono">NEW OVER</span>
            )}
          </div>
        </div>

        {/* Center: Delivery Pitch Info */}
        {currentDelivery && (
          <div className="glass-panel px-4 py-2 border-cyan-500/30 flex items-center gap-3 animate-float">
            <span className="text-xs font-bold text-amber-400 font-chakra uppercase">
              {currentDelivery.speed} KM/H
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="text-xs font-semibold text-slate-200">
              {currentDelivery.name}
            </span>
          </div>
        )}

        {/* Right: Target & RRR / Actions */}
        <div className="flex items-center gap-3 interactive-ui">
          {score.targetRuns && (
            <div className="glass-panel px-4 py-2 flex items-center gap-3 border-amber-500/30">
              <Target className="w-4 h-4 text-amber-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">TARGET: {score.targetRuns}</span>
                <span className="text-xs text-slate-300 font-semibold">
                  Need {Math.max(0, score.targetRuns - score.totalRuns)} from {Math.max(0, score.maxBalls - score.totalBalls)} balls (RRR: {rrr})
                </span>
              </div>
            </div>
          )}

          {/* Camera Switch & Pause Buttons */}
          <button
            onClick={onCycleCamera}
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-white/15 text-slate-200 transition-colors shadow-lg"
            title="Switch Camera View (C)"
          >
            <Video className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePause}
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-white/15 text-slate-200 transition-colors shadow-lg"
            title="Pause Game (Esc)"
          >
            <Pause className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Center: Shot Master Goal */}
      {gameMode === GAME_MODES.SHOT_MASTER && targetShot && (
        <div className="self-center glass-panel-glow px-6 py-2.5 mb-4 flex items-center gap-3">
          <Trophy className="w-5 h-5 text-amber-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">TARGET SHOT CHALLENGE</span>
            <span className="text-sm font-extrabold font-chakra text-amber-300">
              {SHOT_NAMES[targetShot] || targetShot} <span className="text-xs text-white font-normal">(+150 PTS BONUS)</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
