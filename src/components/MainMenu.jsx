/**
 * MainMenu: Game mode selection, player career banner, and launch screen.
 */

import React from 'react';
import { useGame } from '../state/GameContext';
import { GAME_MODES, GAME_STATES, PLAYER_RANKS } from '../utils/constants';
import { MissionManager } from '../game/MissionManager';
import {
  Play,
  Zap,
  Target,
  Trophy,
  Flame,
  Award,
  Settings,
  Sliders,
  Coins,
  ShieldCheck,
} from 'lucide-react';

export const MainMenu = ({ onOpenSettings }) => {
  const { profile, startMatch, setGameState } = useGame();
  const rankTitle = MissionManager.getPlayerRankTitle(profile.level);

  const nextRank = PLAYER_RANKS.find((r) => r.level === profile.level + 1) || {
    xpNeeded: profile.xp + 1000,
  };
  const currentRank = PLAYER_RANKS.find((r) => r.level === profile.level) || { xpNeeded: 0 };
  const xpInLevel = profile.xp - currentRank.xpNeeded;
  const xpForLevel = nextRank.xpNeeded - currentRank.xpNeeded;
  const progressPct = Math.min(100, Math.max(0, (xpInLevel / xpForLevel) * 100));

  const gameModes = [
    {
      id: GAME_MODES.QUICK_MATCH,
      title: 'Quick Match',
      desc: '2 Overs match. Face varied AI deliveries & post a mammoth score.',
      icon: Play,
      accent: 'from-blue-600 to-cyan-500',
      tag: 'POPULAR',
    },
    {
      id: GAME_MODES.BATTING_CHALLENGE,
      title: 'Batting Challenge',
      desc: 'Face 6 testing deliveries: Yorkers, Bouncers, Inswing & Spin.',
      icon: Zap,
      accent: 'from-amber-500 to-orange-600',
      tag: 'INTENSE',
    },
    {
      id: GAME_MODES.BOWLING_CHALLENGE,
      title: 'Bowling Challenge',
      desc: 'Use arm rotation gestures to bowl. Knock down the AI wickets!',
      icon: Flame,
      accent: 'from-emerald-500 to-teal-600',
      tag: 'CV EXCLUSIVE',
    },
    {
      id: GAME_MODES.SHOT_MASTER,
      title: 'Shot Master',
      desc: 'Execute target shots (Cover Drive, Pull, Cut, Six) on command.',
      icon: Target,
      accent: 'from-purple-600 to-pink-600',
      tag: 'SKILL TEST',
    },
    {
      id: GAME_MODES.TARGET_CHASE,
      title: 'Target Chase',
      desc: 'Chase 36 runs off 12 deliveries with required run rate pressure!',
      icon: Trophy,
      accent: 'from-rose-600 to-red-600',
      tag: 'CHALLENGE',
    },
  ];

  return (
    <div className="modal-backdrop select-none overflow-y-auto py-8">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-6">
        {/* Top Header & Profile Banner */}
        <div className="glass-panel p-5 flex flex-wrap items-center justify-between gap-4 border-cyan-500/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold font-chakra text-2xl text-white shadow-lg shadow-cyan-500/30">
              L{profile.level}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-chakra text-white">{rankTitle}</h3>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                  LEVEL {profile.level}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-400" />
                  <strong className="text-amber-300">{profile.coins}</strong> Coins
                </span>
                <span>•</span>
                <span>Best: <strong className="text-white">{profile.bestScore}</strong> Runs</span>
                <span>•</span>
                <span>Matches: <strong className="text-white">{profile.matchesPlayed}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGameState(GAME_STATES.CAREER_MENU)}
              className="btn-secondary text-xs flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-400" /> Missions
            </button>
            <button
              onClick={() => setGameState(GAME_STATES.CALIBRATION)}
              className="btn-secondary text-xs flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-cyan-400" /> Calibrate
            </button>
            <button
              onClick={onOpenSettings}
              className="btn-secondary text-xs p-2.5"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title Hero */}
        <div className="text-center py-4">
          <h1 className="text-5xl md:text-6xl font-black font-chakra tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400 drop-shadow-[0_4px_24px_rgba(6,182,212,0.4)]">
            CRICKET VISION AI
          </h1>
          <p className="text-sm md:text-base text-cyan-300/80 font-medium tracking-wide mt-2">
            Your movement. Your shot. Your game. Powered by Real-Time Computer Vision.
          </p>
        </div>

        {/* Game Mode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gameModes.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => startMatch(m.id)}
                className="glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)] flex flex-col justify-between gap-4 group relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${m.accent} opacity-10 rounded-bl-full group-hover:opacity-25 transition-opacity`}
                />

                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold font-chakra px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {m.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-chakra text-white group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
                </div>

                <button className="btn-primary w-full text-xs py-2 mt-1">
                  PLAY NOW
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Privacy & Controls Notice */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 glass-panel px-4 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Camera stream processed 100% locally in browser. No video is ever stored or uploaded.</span>
          </div>
          <div className="text-[11px] text-slate-500 font-mono">
            Desktop: [SPACE] Bat / Bowl • [W/A/S/D] Directional Shots • [C] Camera • [F3] Debug
          </div>
        </div>
      </div>
    </div>
  );
};
