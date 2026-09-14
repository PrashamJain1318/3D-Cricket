/**
 * MobileControls: Touchscreen button overlay for mobile users.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { SHOT_TYPES, GAME_MODES } from '../utils/constants';

export const MobileControls = ({ onTriggerShot, onTriggerBowl }) => {
  const { gameMode } = useGame();

  const isBowlingMode = gameMode === GAME_MODES.BOWLING_CHALLENGE;

  return (
    <div className="w-full flex items-end justify-between pointer-events-none select-none pb-2">
      {/* Left Pad: Directional Shot Options */}
      {!isBowlingMode ? (
        <div className="flex flex-col gap-2 pointer-events-auto">
          <div className="flex gap-2">
            <button
              onTouchStart={() => onTriggerShot({ shotType: SHOT_TYPES.LOFTED_DRIVE, power: 1.3 })}
              onClick={() => onTriggerShot({ shotType: SHOT_TYPES.LOFTED_DRIVE, power: 1.3 })}
              className="w-14 h-12 rounded-xl bg-amber-500/80 active:bg-amber-600 text-slate-950 font-chakra font-bold text-xs flex items-center justify-center border border-amber-300 shadow-lg"
            >
              SIX 🚀
            </button>
            <button
              onTouchStart={() => onTriggerShot({ shotType: SHOT_TYPES.COVER_DRIVE, power: 1.15 })}
              onClick={() => onTriggerShot({ shotType: SHOT_TYPES.COVER_DRIVE, power: 1.15 })}
              className="w-14 h-12 rounded-xl bg-cyan-600/80 active:bg-cyan-700 text-white font-chakra font-bold text-xs flex items-center justify-center border border-cyan-400 shadow-lg"
            >
              COVER
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onTouchStart={() => onTriggerShot({ shotType: SHOT_TYPES.PULL_SHOT, power: 1.2 })}
              onClick={() => onTriggerShot({ shotType: SHOT_TYPES.PULL_SHOT, power: 1.2 })}
              className="w-14 h-12 rounded-xl bg-purple-600/80 active:bg-purple-700 text-white font-chakra font-bold text-xs flex items-center justify-center border border-purple-400 shadow-lg"
            >
              PULL
            </button>
            <button
              onTouchStart={() => onTriggerShot({ shotType: SHOT_TYPES.DEFENSIVE, power: 0.5 })}
              onClick={() => onTriggerShot({ shotType: SHOT_TYPES.DEFENSIVE, power: 0.5 })}
              className="w-14 h-12 rounded-xl bg-slate-700/80 active:bg-slate-800 text-slate-300 font-chakra font-bold text-xs flex items-center justify-center border border-slate-500 shadow-lg"
            >
              DEFEND
            </button>
          </div>
        </div>
      ) : (
        <div />
      )}

      {/* Right Primary Action Button: SWING / BOWL */}
      <div className="pointer-events-auto pr-2">
        {!isBowlingMode ? (
          <button
            onTouchStart={() => onTriggerShot({ shotType: SHOT_TYPES.STRAIGHT_DRIVE, power: 1.15 })}
            onClick={() => onTriggerShot({ shotType: SHOT_TYPES.STRAIGHT_DRIVE, power: 1.15 })}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 active:scale-95 text-white font-black font-chakra text-sm flex flex-col items-center justify-center border-2 border-white/30 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            <span>HIT</span>
            <span className="text-[9px] text-cyan-200">SWING</span>
          </button>
        ) : (
          <button
            onTouchStart={onTriggerBowl}
            onClick={onTriggerBowl}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 active:scale-95 text-white font-black font-chakra text-sm flex flex-col items-center justify-center border-2 border-white/30 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          >
            <span>BOWL</span>
            <span className="text-[9px] text-emerald-200">DELIVER</span>
          </button>
        )}
      </div>
    </div>
  );
};
