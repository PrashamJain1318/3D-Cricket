/**
 * PauseMenu: In-game pause modal for resumption, restart, settings, or exiting.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { Play, RotateCcw, Settings, Home, X } from 'lucide-react';

export const PauseMenu = ({ onOpenSettings }) => {
  const { resumeMatch, restartMatch, exitToMenu } = useGame();

  return (
    <div className="modal-backdrop select-none">
      <div className="modal-content glass-panel-glow max-w-sm flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="text-lg font-bold font-chakra text-white uppercase">GAME PAUSED</h3>
          <button onClick={resumeMatch} className="p-1 rounded text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5 mt-2">
          <button
            onClick={resumeMatch}
            className="btn-primary text-xs py-3 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" /> RESUME MATCH
          </button>

          <button
            onClick={restartMatch}
            className="btn-secondary text-xs py-2.5 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> RESTART MATCH
          </button>

          <button
            onClick={onOpenSettings}
            className="btn-secondary text-xs py-2.5 flex items-center justify-center gap-2"
          >
            <Settings className="w-4 h-4" /> SETTINGS
          </button>

          <button
            onClick={exitToMenu}
            className="btn-secondary text-xs py-2.5 flex items-center justify-center gap-2 text-rose-300 hover:text-rose-200 border-rose-500/20"
          >
            <Home className="w-4 h-4" /> EXIT TO MAIN MENU
          </button>
        </div>
      </div>
    </div>
  );
};
