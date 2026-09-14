/**
 * SettingsModal: Preferences for audio, graphics quality, Day/Night stadium mode, and handedness.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { X, Volume2, VolumeX, Sun, Moon, Sparkles, UserCheck } from 'lucide-react';

export const SettingsModal = ({ onClose }) => {
  const { settings, updateSettings } = useGame();

  return (
    <div className="modal-backdrop select-none">
      <div className="modal-content glass-panel-glow max-w-md flex flex-col gap-5 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="text-lg font-bold font-chakra text-white uppercase">GAME SETTINGS</h3>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {/* Audio */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
              <span>Sound Effects</span>
            </div>
            <button
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`px-3 py-1 text-xs rounded-lg font-bold font-chakra ${
                settings.soundEnabled ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {settings.soundEnabled ? 'ENABLED' : 'MUTED'}
            </button>
          </div>

          {/* Stadium Day / Night Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              {settings.dayNightMode === 'day' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
              <span>Stadium Lighting</span>
            </div>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => updateSettings({ dayNightMode: 'day' })}
                className={`px-2.5 py-1 text-xs rounded font-bold font-chakra ${
                  settings.dayNightMode === 'day' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
                }`}
              >
                DAY
              </button>
              <button
                onClick={() => updateSettings({ dayNightMode: 'night' })}
                className={`px-2.5 py-1 text-xs rounded font-bold font-chakra ${
                  settings.dayNightMode === 'night' ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                NIGHT
              </button>
            </div>
          </div>

          {/* Graphics Quality */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Graphics Quality</span>
            </div>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-white/10">
              {['low', 'medium', 'high'].map((q) => (
                <button
                  key={q}
                  onClick={() => updateSettings({ graphicsQuality: q })}
                  className={`px-2 py-1 text-[11px] uppercase rounded font-bold font-chakra ${
                    settings.graphicsQuality === q ? 'bg-cyan-600 text-white' : 'text-slate-400'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Batter Handedness */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>Player Handedness</span>
            </div>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => updateSettings({ handedness: 'right' })}
                className={`px-2.5 py-1 text-xs rounded font-bold font-chakra ${
                  settings.handedness === 'right' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                RIGHT
              </button>
              <button
                onClick={() => updateSettings({ handedness: 'left' })}
                className={`px-2.5 py-1 text-xs rounded font-bold font-chakra ${
                  settings.handedness === 'left' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                LEFT
              </button>
            </div>
          </div>
        </div>

        <button onClick={onClose} className="btn-primary text-xs py-2 mt-2 w-full">
          SAVE & CLOSE
        </button>
      </div>
    </div>
  );
};
