/**
 * GameContext: Centralized React state store integrating Game Logic, Computer Vision, Audio, and Storage.
 */

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { GAME_STATES, GAME_MODES, CAMERA_VIEWS, SHOT_TYPES } from '../utils/constants';
import { StorageManager } from '../utils/storage';
import { soundManager } from '../audio/AudioManager';
import { MatchManager } from '../game/MatchManager';
import { PoseDetector } from '../vision/PoseDetector';

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  // --- STATE ---
  const [gameState, setGameState] = useState(GAME_STATES.START_SCREEN);
  const [gameMode, setGameMode] = useState(GAME_MODES.QUICK_MATCH);
  const [profile, setProfile] = useState(() => StorageManager.getProfile());
  const [settings, setSettings] = useState(() => StorageManager.getSettings());
  const [score, setScore] = useState(null);
  const [visionData, setVisionData] = useState({
    fps: 0,
    isCameraActive: false,
    poseDetected: false,
    batting: null,
    bowling: null,
    movement: null,
  });
  const [notification, setNotification] = useState(null);
  const [matchSummary, setMatchSummary] = useState(null);
  const [targetShot, setTargetShot] = useState(null);
  const [isDebugOpen, setIsDebugOpen] = useState(false);
  const [cameraView, setCameraView] = useState(CAMERA_VIEWS.BATSMAN_FOLLOW);

  // --- REFS ---
  const matchManagerRef = useRef(null);
  const poseDetectorRef = useRef(null);
  const isInitializedRef = useRef(false);

  // Initialize systems once
  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const mm = new MatchManager(soundManager);
    const pd = new PoseDetector();

    matchManagerRef.current = mm;
    poseDetectorRef.current = pd;

    // Hook MatchManager callbacks
    mm.onStateChange = (st) => setGameState(st);
    mm.onScoreUpdate = (sc) => setScore({ ...sc });
    mm.onNotification = (notif) => {
      setNotification(notif);
      setTimeout(() => setNotification((prev) => (prev?.id === notif.id ? null : prev)), 2800);
    };
    mm.onMatchComplete = (summary) => {
      setMatchSummary(summary);
      setProfile({ ...summary.updatedProfile });
    };

    // Hook PoseDetector updates
    pd.onPoseUpdate = (res) => {
      setVisionData({
        fps: res.fps,
        isCameraActive: pd.isCameraActive,
        poseDetected: !!res.processedPose,
        batting: res.batting,
        bowling: res.bowling,
        movement: res.movement,
        processedPose: res.processedPose,
      });
    };

    // Apply sound settings
    soundManager.setMuted(!settings.soundEnabled);
    soundManager.setVolume(settings.volume);
  }, []);

  // Update sound on settings change
  const updateSettings = useCallback((newSettings) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      StorageManager.saveSettings(updated);
      if (newSettings.soundEnabled !== undefined) soundManager.setMuted(!newSettings.soundEnabled);
      if (newSettings.volume !== undefined) soundManager.setVolume(newSettings.volume);
      if (newSettings.handedness !== undefined && poseDetectorRef.current) {
        poseDetectorRef.current.battingDetector.setHandedness(newSettings.handedness);
        poseDetectorRef.current.bowlingDetector.setBowlingArm(newSettings.handedness);
      }
      return updated;
    });
  }, []);

  const startMatch = useCallback((mode = GAME_MODES.QUICK_MATCH, options = {}) => {
    setGameMode(mode);
    setMatchSummary(null);
    if (matchManagerRef.current) {
      matchManagerRef.current.initMatch(mode, options);
      if (mode === GAME_MODES.SHOT_MASTER) {
        setTargetShot(matchManagerRef.current.targetShotType);
      }
    }
  }, []);

  const pauseMatch = useCallback(() => {
    if (gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.BALL_IN_PLAY) {
      setGameState(GAME_STATES.PAUSED);
    }
  }, [gameState]);

  const resumeMatch = useCallback(() => {
    if (gameState === GAME_STATES.PAUSED) {
      setGameState(GAME_STATES.PLAYING);
    }
  }, [gameState]);

  const restartMatch = useCallback(() => {
    startMatch(gameMode);
  }, [gameMode, startMatch]);

  const exitToMenu = useCallback(() => {
    setGameState(GAME_STATES.MAIN_MENU);
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        gameMode,
        profile,
        setProfile,
        settings,
        updateSettings,
        score,
        visionData,
        notification,
        matchSummary,
        targetShot,
        isDebugOpen,
        setIsDebugOpen,
        cameraView,
        setCameraView,
        matchManager: matchManagerRef.current,
        poseDetector: poseDetectorRef.current,
        audioManager: soundManager,
        startMatch,
        pauseMatch,
        resumeMatch,
        restartMatch,
        exitToMenu,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
