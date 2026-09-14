/**
 * GameCanvas: WebGL 3D Canvas Controller binding Three.js Scene, Characters, Physics, and Vision Input.
 */

import React, { useRef, useEffect, useState } from 'react';
import { useGame } from '../state/GameContext';
import { StadiumScene } from '../scene/StadiumScene';
import { PlayerAvatar } from '../scene/PlayerAvatar';
import { BowlerAvatar } from '../scene/BowlerAvatar';
import { WicketsMesh } from '../scene/WicketsMesh';
import { ParticleSystem } from '../scene/ParticleSystem';
import { BallPhysics } from '../physics/BallPhysics';
import { KeyboardControls } from '../controls/KeyboardControls';
import { GAME_STATES, GAME_MODES, CAMERA_VIEWS } from '../utils/constants';

export const GameCanvas = ({
  onCycleCamera,
  onTogglePause,
  onToggleDebug,
  onShotTriggerRef,
  onBowlTriggerRef,
}) => {
  const containerRef = useRef(null);
  const {
    gameState,
    gameMode,
    settings,
    visionData,
    matchManager,
    setIsDebugOpen,
    cameraView,
    setCameraView,
  } = useGame();

  const [renderFps, setRenderFps] = useState(60);

  // References for scene & loop
  const sceneRef = useRef(null);
  const playerRef = useRef(null);
  const bowlerRef = useRef(null);
  const wicketsBatRef = useRef(null);
  const wicketsBowlRef = useRef(null);
  const particlesRef = useRef(null);
  const ballPhysicsRef = useRef(null);
  const reqAnimIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Initialize Stadium Scene
    const stadium = new StadiumScene(containerRef.current, {
      quality: settings.graphicsQuality,
      dayNightMode: settings.dayNightMode,
      cameraView: cameraView,
    });
    sceneRef.current = stadium;

    // 2. Initialize Characters & Physics
    const player = new PlayerAvatar(stadium.scene, { x: 0, y: 0, z: 9.0 });
    const bowler = new BowlerAvatar(stadium.scene, { x: 0.3, y: 0, z: -10.0 });
    const wicketsBat = new WicketsMesh(stadium.scene, 9.8, true);
    const wicketsBowl = new WicketsMesh(stadium.scene, -10.0, false);
    const particles = new ParticleSystem(stadium.scene);
    const ballPhysics = new BallPhysics();

    playerRef.current = player;
    bowlerRef.current = bowler;
    wicketsBatRef.current = wicketsBat;
    wicketsBowlRef.current = wicketsBowl;
    particlesRef.current = particles;
    ballPhysicsRef.current = ballPhysics;

    // 3. Connect Keyboard Controls
    const keyboard = new KeyboardControls({
      onShotTrigger: (shotInfo) => {
        if (playerRef.current) playerRef.current.triggerShotAnimation(shotInfo.shotType);
        if (matchManager) matchManager.processBatSwing(ballPhysicsRef.current, shotInfo, true);
      },
      onBowlTrigger: () => {
        if (gameMode === GAME_MODES.BOWLING_CHALLENGE && matchManager) {
          matchManager.processUserBowling(
            {
              speed: 135,
              deliveryType: 'GOOD_LENGTH',
              line: 'STUMPS',
              lineOffset: 0,
              swing: 0,
            },
            ballPhysicsRef.current
          );
        }
      },
      onCameraSwitch: () => {
        const nextCam = stadium.cycleCameraView();
        setCameraView(nextCam);
      },
      onPauseToggle: () => onTogglePause(),
      onDebugToggle: () => setIsDebugOpen((prev) => !prev),
    });
    keyboard.attach();

    // Export manual triggers for UI/Mobile buttons
    if (onShotTriggerRef) {
      onShotTriggerRef.current = (shotInfo) => {
        if (playerRef.current) playerRef.current.triggerShotAnimation(shotInfo.shotType);
        if (matchManager) matchManager.processBatSwing(ballPhysicsRef.current, shotInfo, true);
      };
    }

    if (onBowlTriggerRef) {
      onBowlTriggerRef.current = () => {
        if (matchManager) {
          matchManager.processUserBowling(
            {
              speed: 136,
              deliveryType: 'GOOD_LENGTH',
              line: 'STUMPS',
              lineOffset: 0,
              swing: 0,
            },
            ballPhysicsRef.current
          );
        }
      };
    }

    // 4. Hook MatchManager events
    if (matchManager) {
      matchManager.onBallHit = (hitResult) => {
        stadium.triggerCameraShake(hitResult.isSix ? 0.6 : 0.35);
        particles.spawnBatHitSparks(hitResult.contactPoint);
      };

      matchManager.onWicket = (dismissal) => {
        if (dismissal.dismissalType === 'BOWLED') {
          wicketsBat.shatter();
          stadium.triggerCameraShake(0.5);
        }
        if (playerRef.current) playerRef.current.triggerDismissal();
      };
    }

    // 5. Main Render Loop
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = (currentTime) => {
      reqAnimIdRef.current = requestAnimationFrame(animate);

      const dt = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      // FPS tracking
      frameCount++;
      if (currentTime - lastFpsTime >= 1000) {
        setRenderFps(Math.round((frameCount * 1000) / (currentTime - lastFpsTime)));
        frameCount = 0;
        lastFpsTime = currentTime;
      }

      // Update Characters
      player.update(dt, currentTime * 0.001);
      bowler.update(dt);
      wicketsBat.update(dt);
      particles.update(dt);

      // Update Ball Physics
      if (ballPhysics.inFlight) {
        ballPhysics.update(dt, (bouncePos, impactSpeed) => {
          particles.spawnPitchDust(bouncePos, impactSpeed);
          if (stadium) stadium.triggerCameraShake(0.1);
        });

        // Check dismissal or passing batsman
        if (matchManager) {
          matchManager.checkBallPastBatsman(ballPhysics);
        }
      }

      // Render Scene
      stadium.render(ballPhysics, dt);
    };

    reqAnimIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqAnimIdRef.current) cancelAnimationFrame(reqAnimIdRef.current);
      keyboard.detach();
      stadium.dispose();
    };
  }, [matchManager, setIsDebugOpen, setCameraView, onTogglePause, gameMode]);

  // Update Stadium Lighting & Quality on settings changes
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setDayNightMode(settings.dayNightMode);
    }
  }, [settings.dayNightMode]);

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setCameraView(cameraView);
    }
  }, [cameraView]);

  // Live Computer Vision Kinematics Linkage to Player Bat & Bowling triggers
  useEffect(() => {
    if (!visionData || !playerRef.current) return;

    // Bat kinematic tracking
    if (visionData.processedPose && visionData.movement) {
      playerRef.current.applyVSPose(visionData.processedPose, visionData.movement);

      // Evaluate Batting Swing Trigger
      if (visionData.batting && visionData.batting.isTriggered && matchManager) {
        playerRef.current.triggerShotAnimation(visionData.batting.shotType);
        matchManager.processBatSwing(ballPhysicsRef.current, visionData.batting, false);
      }

      // Evaluate Bowling Release Trigger (Bowling Challenge Mode)
      if (gameMode === GAME_MODES.BOWLING_CHALLENGE && visionData.bowling && matchManager) {
        matchManager.processUserBowling(visionData.bowling, ballPhysicsRef.current);
      }
    }
  }, [visionData, matchManager, gameMode]);

  // Automatic AI Bowler Delivery Trigger when in PLAYING state
  useEffect(() => {
    if (gameState === GAME_STATES.PLAYING && matchManager && bowlerRef.current) {
      if (gameMode !== GAME_MODES.BOWLING_CHALLENGE) {
        // Reset wickets mesh for new ball
        if (wicketsBatRef.current) wicketsBatRef.current.reset();

        const delivery = matchManager.prepareDelivery();
        if (delivery) {
          // Bowler begins run-up
          bowlerRef.current.startRunUp((releasePos) => {
            if (ballPhysicsRef.current) {
              ballPhysicsRef.current.reset(releasePos);
            }
            matchManager.onBallReleased(ballPhysicsRef.current);
          });
        }
      }
    }
  }, [gameState, matchManager, gameMode]);

  return (
    <div ref={containerRef} className="canvas-viewport" />
  );
};
