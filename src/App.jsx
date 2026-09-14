/**
 * Cricket Vision AI — Main Application Entry Component
 */

import React, { useState, useRef } from 'react';
import { GameProvider, useGame } from './state/GameContext';
import { GameCanvas } from './components/GameCanvas';
import { HUD } from './components/HUD';
import { VisionHUD } from './components/VisionHUD';
import { CameraPreview } from './components/CameraPreview';
import { MainMenu } from './components/MainMenu';
import { CalibrationScreen } from './components/CalibrationScreen';
import { CareerScreen } from './components/CareerScreen';
import { MatchComplete } from './components/MatchComplete';
import { PauseMenu } from './components/PauseMenu';
import { SettingsModal } from './components/SettingsModal';
import { MobileControls } from './components/MobileControls';
import { DebugOverlay } from './components/DebugOverlay';
import { GAME_STATES } from './utils/constants';
import { Smartphone, RotateCw } from 'lucide-react';
import './styles/global.css';
import './styles/game.css';

const GameRoot = () => {
  const {
    gameState,
    setGameState,
    notification,
    isDebugOpen,
    setIsDebugOpen,
    pauseMatch,
    resumeMatch,
    cameraView,
    setCameraView,
  } = useGame();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const shotTriggerRef = useRef(null);
  const bowlTriggerRef = useRef(null);

  const isPlaying =
    gameState === GAME_STATES.PLAYING ||
    gameState === GAME_STATES.BALL_IN_PLAY ||
    gameState === GAME_STATES.BALL_RESULT;

  const handleTogglePause = () => {
    if (gameState === GAME_STATES.PAUSED) resumeMatch();
    else if (isPlaying) pauseMatch();
  };

  const handleCycleCamera = () => {
    setCameraView((curr) => {
      if (curr === 'BATSMAN_FOLLOW') return 'BROADCAST';
      if (curr === 'BROADCAST') return 'BATSMAN_CLOSE';
      if (curr === 'BATSMAN_CLOSE') return 'BOWLER_VIEW';
      return 'BATSMAN_FOLLOW';
    });
  };

  return (
    <div className="game-container">
      {/* 3D WebGL Cricket Stadium Canvas Viewport */}
      <GameCanvas
        onCycleCamera={handleCycleCamera}
        onTogglePause={handleTogglePause}
        onToggleDebug={() => setIsDebugOpen((prev) => !prev)}
        onShotTriggerRef={shotTriggerRef}
        onBowlTriggerRef={bowlTriggerRef}
      />

      {/* In-Game HUD & Vision Overlay (Visible during match play) */}
      {isPlaying && (
        <div className="ui-overlay">
          {/* Top Row: Scoreboard & Vision Telemetry */}
          <div className="w-full flex items-start justify-between gap-4">
            <HUD onTogglePause={handleTogglePause} onCycleCamera={handleCycleCamera} />
            <div className="flex flex-col items-end gap-3 interactive-ui">
              <VisionHUD />
            </div>
          </div>

          {/* Center Banner: Big SIX! / FOUR! / WICKET! / PERFECT TIMING! */}
          {notification && (
            <div className="banner-center">
              <span className={`banner-title ${notification.type}`}>
                {notification.title}
              </span>
              <span className="text-sm font-semibold font-chakra text-white/90 px-4 py-1 rounded-full bg-black/60 border border-white/20 mt-1">
                {notification.subtitle}
              </span>
            </div>
          )}

          {/* Bottom Row: Mobile Virtual Pad & Camera PIP Preview */}
          <div className="w-full flex items-end justify-between">
            <MobileControls
              onTriggerShot={(shotInfo) => shotTriggerRef.current && shotTriggerRef.current(shotInfo)}
              onTriggerBowl={() => bowlTriggerRef.current && bowlTriggerRef.current()}
            />
            <CameraPreview />
          </div>
        </div>
      )}

      {/* Screen Menus & Modals */}
      {gameState === GAME_STATES.START_SCREEN && (
        <MainMenu onOpenSettings={() => setIsSettingsOpen(true)} />
      )}

      {gameState === GAME_STATES.MAIN_MENU && (
        <MainMenu onOpenSettings={() => setIsSettingsOpen(true)} />
      )}

      {gameState === GAME_STATES.CALIBRATION && <CalibrationScreen />}

      {gameState === GAME_STATES.CAREER_MENU && <CareerScreen />}

      {gameState === GAME_STATES.PAUSED && (
        <PauseMenu onOpenSettings={() => setIsSettingsOpen(true)} />
      )}

      {gameState === GAME_STATES.MATCH_COMPLETE && <MatchComplete />}

      {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}

      {/* F3 Debug Telemetry Overlay */}
      {isDebugOpen && <DebugOverlay />}
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <GameRoot />
    </GameProvider>
  );
}
