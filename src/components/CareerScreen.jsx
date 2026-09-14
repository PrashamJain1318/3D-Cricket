/**
 * CareerScreen: Player achievements, career missions, unlock badges and stats.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { MISSIONS_LIST, MissionManager } from '../game/MissionManager';
import { StorageManager } from '../utils/storage';
import { GAME_STATES } from '../utils/constants';
import { Award, CheckCircle2, Lock, ArrowLeft, Trophy, Zap, Coins } from 'lucide-react';

export const CareerScreen = () => {
  const { profile, setGameState } = useGame();
  const progress = StorageManager.getMissionsProgress();
  const rankTitle = MissionManager.getPlayerRankTitle(profile.level);

  return (
    <div className="modal-backdrop overflow-y-auto py-8 select-none">
      <div className="w-full max-w-4xl px-6 flex flex-col gap-6">
        {/* Header */}
        <div className="glass-panel p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGameState(GAME_STATES.MAIN_MENU)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-bold font-chakra text-white uppercase">CAREER & MISSIONS</h2>
              <p className="text-xs text-slate-400">Complete challenges to earn XP, rank up and claim coins.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-1.5 text-amber-300 text-xs font-bold font-chakra">
              <Coins className="w-4 h-4 text-amber-400" /> {profile.coins} COINS
            </div>
          </div>
        </div>

        {/* Player Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="glass-panel p-4 flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">CAREER RUNS</span>
            <span className="text-2xl font-black font-chakra text-cyan-400 mt-1">{profile.totalRuns}</span>
          </div>
          <div className="glass-panel p-4 flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">FOURS HIT</span>
            <span className="text-2xl font-black font-chakra text-blue-400 mt-1">{profile.totalFours}</span>
          </div>
          <div className="glass-panel p-4 flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">SIXES SMASHED</span>
            <span className="text-2xl font-black font-chakra text-amber-400 mt-1">{profile.totalSixes}</span>
          </div>
          <div className="glass-panel p-4 flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">MATCHES WON</span>
            <span className="text-2xl font-black font-chakra text-emerald-400 mt-1">
              {profile.matchesWon} <span className="text-xs text-slate-500">/ {profile.matchesPlayed}</span>
            </span>
          </div>
        </div>

        {/* Missions List */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold font-chakra text-slate-300 uppercase tracking-wider">
            CAREER MISSIONS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MISSIONS_LIST.map((m) => {
              const isCompleted = !!progress[m.id];
              return (
                <div
                  key={m.id}
                  className={`glass-panel p-4 rounded-xl flex items-start justify-between gap-3 border ${
                    isCompleted ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold font-chakra text-white">{m.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">{m.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold font-chakra px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      +{m.rewardXP} XP
                    </span>
                    <span className="text-[10px] font-bold font-chakra text-slate-400">
                      +{m.rewardCoins} 🪙
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
