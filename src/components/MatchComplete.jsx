/**
 * MatchComplete: Match summary scorecard, rewards presentation, and replay options.
 */

import React, { useEffect } from 'react';
import { useGame } from '../state/GameContext';
import confetti from 'canvas-confetti';
import { Trophy, Award, RotateCcw, Home, Sparkles, Coins, Zap } from 'lucide-react';
import { GAME_STATES } from '../utils/constants';

export const MatchComplete = () => {
  const { matchSummary, restartMatch, setGameState } = useGame();

  useEffect(() => {
    if (matchSummary?.result?.isWin) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#f59e0b', '#10b981', '#ffffff'],
      });
    }
  }, [matchSummary]);

  if (!matchSummary) return null;

  const { result, score, earnedXP, earnedCoins, newMissions } = matchSummary;

  return (
    <div className="modal-backdrop select-none">
      <div className="modal-content glass-panel-glow max-w-lg flex flex-col gap-5 p-6 animate-popBanner">
        {/* Result Header */}
        <div className="text-center">
          <div
            className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 shadow-lg ${
              result.isWin
                ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-900 shadow-amber-500/40'
                : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Trophy className="w-9 h-9" />
          </div>

          <h2
            className={`text-3xl font-black font-chakra uppercase ${
              result.isWin ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'text-slate-200'
            }`}
          >
            {result.title}
          </h2>
          <p className="text-xs text-slate-300 mt-1">{result.message}</p>
        </div>

        {/* Scorecard Summary */}
        <div className="bg-slate-900/80 rounded-xl p-4 border border-white/10 flex items-center justify-around">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase">FINAL SCORE</span>
            <div className="text-3xl font-extrabold font-chakra text-white mt-0.5">
              {score.totalRuns}<span className="text-lg text-slate-400">/{score.wickets}</span>
            </div>
            <span className="text-xs text-slate-400">({score.getOversDisplay ? score.getOversDisplay() : '0.0'} ov)</span>
          </div>

          <div className="w-[1px] h-12 bg-white/10" />

          <div className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Fours:</span>
              <strong className="text-cyan-400 font-mono">{score.fours}</strong>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Sixes:</span>
              <strong className="text-amber-400 font-mono">{score.sixes}</strong>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Strike Rate:</span>
              <strong className="text-emerald-400 font-mono">{score.getStrikeRate ? score.getStrikeRate() : '0.0'}</strong>
            </div>
          </div>
        </div>

        {/* Rewards Earned */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold font-chakra text-cyan-200">MATCH REWARDS</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold font-chakra">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">
              +{earnedXP} XP
            </span>
            <span className="px-2.5 py-1 rounded bg-yellow-500/20 text-yellow-300">
              +{earnedCoins} 🪙
            </span>
          </div>
        </div>

        {/* Newly Unlocked Missions Alert */}
        {newMissions && newMissions.length > 0 && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-emerald-300 font-chakra">MISSION COMPLETED!</span>
              <p className="text-slate-300 text-[11px]">{newMissions[0].title}: {newMissions[0].description}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={restartMatch}
            className="btn-primary flex-1 text-xs py-2.5 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> PLAY AGAIN
          </button>
          <button
            onClick={() => setGameState(GAME_STATES.MAIN_MENU)}
            className="btn-secondary flex-1 text-xs py-2.5 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> MAIN MENU
          </button>
        </div>
      </div>
    </div>
  );
};
