/**
 * MatchManager: Orchestrates the overall cricket match lifecycle, game modes, and transitions.
 */

import { GAME_MODES, GAME_STATES, SHOT_TYPES, TIMING_ZONES, DELIVERY_TYPES } from '../utils/constants';
import { ScoreManager } from './ScoreManager';
import { DeliveryManager } from './DeliveryManager';
import { AIBatsman } from './AIBatsman';
import { BatBallCollision } from '../physics/BatBallCollision';
import { ShotPhysics } from '../physics/ShotPhysics';
import { CricketRules } from './CricketRules';
import { MissionManager } from './MissionManager';
import { StorageManager } from '../utils/storage';

export class MatchManager {
  constructor(audioManager) {
    this.audio = audioManager;
    this.scoreManager = new ScoreManager();
    this.deliveryManager = new DeliveryManager('medium');
    this.aiBatsman = new AIBatsman('medium');
    this.collision = new BatBallCollision();

    this.mode = GAME_MODES.QUICK_MATCH;
    this.state = GAME_STATES.START_SCREEN;
    this.currentDelivery = null;
    this.currentShotResult = null;
    this.notification = null;
    this.targetShotType = null; // For Shot Master mode
    this.matchStats = {
      uniqueShots: new Set(),
      hasPerfectTiming: false,
    };

    this.onStateChange = null;
    this.onScoreUpdate = null;
    this.onNotification = null;
    this.onBallDelivered = null;
    this.onBallHit = null;
    this.onWicket = null;
    this.onMatchComplete = null;
  }

  initMatch(mode = GAME_MODES.QUICK_MATCH, options = {}) {
    this.mode = mode;
    this.matchStats = {
      uniqueShots: new Set(),
      hasPerfectTiming: false,
    };
    this.currentDelivery = null;
    this.currentShotResult = null;

    let targetRuns = null;
    let maxOvers = 2;

    if (mode === GAME_MODES.BATTING_CHALLENGE) {
      maxOvers = 1; // 6 deliveries challenge
    } else if (mode === GAME_MODES.BOWLING_CHALLENGE) {
      maxOvers = 1; // 6 deliveries as bowler
    } else if (mode === GAME_MODES.SHOT_MASTER) {
      maxOvers = 1;
      this.pickNextTargetShot();
    } else if (mode === GAME_MODES.TARGET_CHASE) {
      maxOvers = 2;
      targetRuns = options.targetRuns || 36; // 36 runs from 12 balls
    }

    this.scoreManager.reset(targetRuns, maxOvers);
    this.deliveryManager.setDifficulty(options.difficulty || 'medium');
    this.aiBatsman.setDifficulty(options.difficulty || 'medium');

    this.setState(GAME_STATES.PLAYING);
    if (this.onScoreUpdate) this.onScoreUpdate(this.scoreManager);
  }

  pickNextTargetShot() {
    const shotList = [
      SHOT_TYPES.STRAIGHT_DRIVE,
      SHOT_TYPES.COVER_DRIVE,
      SHOT_TYPES.SQUARE_CUT,
      SHOT_TYPES.PULL_SHOT,
      SHOT_TYPES.LOFTED_DRIVE,
      SHOT_TYPES.FLICK_SHOT,
    ];
    this.targetShotType = shotList[Math.floor(Math.random() * shotList.length)];
  }

  setState(newState) {
    this.state = newState;
    if (this.onStateChange) {
      this.onStateChange(newState);
    }
  }

  showNotification(title, subtitle, type = 'info', duration = 2500) {
    const notif = { title, subtitle, type, id: Date.now() };
    this.notification = notif;
    if (this.onNotification) this.onNotification(notif);
  }

  // Bowler starts run-up
  prepareDelivery() {
    if (this.scoreManager.isMatchFinished()) {
      this.endMatch();
      return null;
    }

    this.collision.reset();
    this.currentShotResult = null;
    this.currentDelivery = this.deliveryManager.generateDelivery(this.scoreManager.totalBalls + 1);

    if (this.audio) {
      this.audio.playBeep(false);
    }

    if (this.mode === GAME_MODES.SHOT_MASTER) {
      this.pickNextTargetShot();
    }

    return this.currentDelivery;
  }

  // Bowler releases ball
  onBallReleased(ballPhysics) {
    if (!this.currentDelivery) return;
    this.setState(GAME_STATES.BALL_IN_PLAY);

    if (this.audio) {
      this.audio.playBowlingRelease();
    }

    ballPhysics.deliver(
      this.currentDelivery.speed,
      this.currentDelivery.type,
      this.currentDelivery.lineOffset,
      this.currentDelivery.swingAmount
    );

    if (this.onBallDelivered) {
      this.onBallDelivered(this.currentDelivery);
    }
  }

  // Evaluate bat swing on incoming ball
  processBatSwing(ballPhysics, batInfo, isManualSwing = false) {
    if (this.state !== GAME_STATES.BALL_IN_PLAY) return null;

    const collisionResult = this.collision.checkCollision(
      ballPhysics.position,
      ballPhysics.velocity,
      batInfo,
      isManualSwing
    );

    if (!collisionResult) return null;

    // Ball struck by bat
    const shotOutcome = ShotPhysics.computeShotTrajectory(collisionResult, batInfo, ballPhysics);
    this.currentShotResult = { ...collisionResult, ...shotOutcome };

    this.matchStats.uniqueShots.add(collisionResult.shotType);
    if (collisionResult.timingZone === TIMING_ZONES.PERFECT) {
      this.matchStats.hasPerfectTiming = true;
    }

    // Sound & Notifications
    if (this.audio) {
      this.audio.playBatHit(batInfo.power, collisionResult.contactQuality === 'SWEET_SPOT');
    }

    if (shotOutcome.isSix) {
      this.showNotification('SIX!', `${collisionResult.shotType.replace('_', ' ')} • Maximum!`, 'six');
      if (this.audio) this.audio.playBoundaryCelebration(true);
    } else if (shotOutcome.isBoundary) {
      this.showNotification('FOUR!', 'Cracking boundary to the ropes!', 'four');
      if (this.audio) this.audio.playBoundaryCelebration(false);
    } else if (collisionResult.timingZone === TIMING_ZONES.PERFECT) {
      this.showNotification('PERFECT TIMING!', 'Pure perfection in the sweet spot!', 'perfect');
    }

    // Shot Master mode bonus
    if (this.mode === GAME_MODES.SHOT_MASTER) {
      if (collisionResult.shotType === this.targetShotType) {
        this.showNotification('TARGET SHOT HIT!', '+150 Bonus Points for Target Mastery!', 'success');
        shotOutcome.runs += 2;
      }
    }

    if (this.onBallHit) {
      this.onBallHit(this.currentShotResult);
    }

    return this.currentShotResult;
  }

  // Player Bowling Mode (User bowls, AI bats)
  processUserBowling(bowledData, ballPhysics) {
    if (this.mode !== GAME_MODES.BOWLING_CHALLENGE) return;
    this.setState(GAME_STATES.BALL_IN_PLAY);

    if (this.audio) {
      this.audio.playBowlingRelease();
    }

    ballPhysics.deliver(bowledData.speed, bowledData.deliveryType, bowledData.lineOffset, bowledData.swing);
    
    // AI Batsman reaction
    const aiReaction = this.aiBatsman.evaluateShot(bowledData);
    this.currentShotResult = aiReaction;

    setTimeout(() => {
      if (aiReaction.isWicket) {
        this.showNotification('WICKET!', aiReaction.shotDescription, 'wicket');
        if (this.audio) this.audio.playWicketHit();
      } else if (aiReaction.isSix) {
        this.showNotification('AI Hits SIX!', aiReaction.shotDescription, 'six');
        if (this.audio) this.audio.playBoundaryCelebration(true);
      } else if (aiReaction.isFour) {
        this.showNotification('AI Hits FOUR!', aiReaction.shotDescription, 'four');
        if (this.audio) this.audio.playBoundaryCelebration(false);
      }

      this.resolveBallOutcome({
        runs: aiReaction.runs,
        isWicket: aiReaction.isWicket,
        dismissalType: aiReaction.dismissalType,
        shotType: aiReaction.shotType,
        timingZone: 'GOOD',
      });
    }, 1200);
  }

  // Check dismissal if ball passes bat
  checkBallPastBatsman(ballPhysics) {
    if (this.state !== GAME_STATES.BALL_IN_PLAY) return;

    const dismissal = CricketRules.checkDismissal(
      ballPhysics.position,
      ballPhysics,
      this.collision.hasCollidedThisBall,
      this.currentShotResult
    );

    if (dismissal.isWicket) {
      if (this.audio) this.audio.playWicketHit();
      this.showNotification(dismissal.description, 'Clean bowled!', 'wicket');
      if (this.onWicket) this.onWicket(dismissal);

      this.resolveBallOutcome({
        runs: 0,
        isWicket: true,
        dismissalType: dismissal.dismissalType,
        shotType: 'NONE',
        timingZone: 'MISSED',
      });
      return;
    }

    // Dot ball if ball crossed boundary/wicket without hit
    if (!this.collision.hasCollidedThisBall && ballPhysics.position.z > 10.5) {
      this.resolveBallOutcome({
        runs: 0,
        isWicket: false,
        dismissalType: null,
        shotType: 'NONE',
        timingZone: 'MISSED',
      });
    }
  }

  resolveBallOutcome(outcome) {
    if (this.state === GAME_STATES.BALL_RESULT || this.state === GAME_STATES.MATCH_COMPLETE) return;

    this.setState(GAME_STATES.BALL_RESULT);
    this.scoreManager.recordDelivery(outcome);

    if (this.onScoreUpdate) {
      this.onScoreUpdate(this.scoreManager);
    }

    // Check match completion
    if (this.scoreManager.isMatchFinished()) {
      setTimeout(() => {
        this.endMatch();
      }, 1600);
    } else {
      // Auto queue next ball after brief delay
      setTimeout(() => {
        if (this.state === GAME_STATES.BALL_RESULT) {
          this.setState(GAME_STATES.PLAYING);
        }
      }, 2200);
    }
  }

  endMatch() {
    this.setState(GAME_STATES.MATCH_COMPLETE);
    const result = this.scoreManager.getMatchResult();

    // Player XP & Progression update
    const profile = StorageManager.getProfile();
    const earnedXP = this.scoreManager.totalRuns * 15 + this.scoreManager.sixes * 25 + (result.isWin ? 200 : 50);
    const earnedCoins = this.scoreManager.totalRuns * 5 + (result.isWin ? 100 : 25);

    const updatedProfile = {
      ...profile,
      matchesPlayed: profile.matchesPlayed + 1,
      matchesWon: profile.matchesWon + (result.isWin ? 1 : 0),
      totalRuns: profile.totalRuns + this.scoreManager.totalRuns,
      totalFours: profile.totalFours + this.scoreManager.fours,
      totalSixes: profile.totalSixes + this.scoreManager.sixes,
      bestScore: Math.max(profile.bestScore, this.scoreManager.totalRuns),
      xp: profile.xp + earnedXP,
      coins: profile.coins + earnedCoins,
    };

    // Check career missions
    const missionStats = {
      matchRuns: this.scoreManager.totalRuns,
      totalRuns: updatedProfile.totalRuns,
      matchFours: this.scoreManager.fours,
      totalFours: updatedProfile.totalFours,
      matchSixes: this.scoreManager.sixes,
      totalSixes: updatedProfile.totalSixes,
      matchWickets: this.scoreManager.bowlerScore.wickets,
      totalWickets: updatedProfile.totalWickets,
      hasPerfectTiming: this.matchStats.hasPerfectTiming,
      uniqueShotsCount: this.matchStats.uniqueShots.size,
      targetChasedSuccess: this.mode === GAME_MODES.TARGET_CHASE && result.isWin,
    };

    const missionResult = MissionManager.checkMissions(missionStats, updatedProfile);
    StorageManager.saveProfile(missionResult.updatedProfile);

    if (result.isWin && this.audio) {
      this.audio.playVictory();
    }

    const matchSummary = {
      result,
      score: this.scoreManager,
      earnedXP,
      earnedCoins,
      newMissions: missionResult.newlyCompleted,
      updatedProfile: missionResult.updatedProfile,
    };

    if (this.onMatchComplete) {
      this.onMatchComplete(matchSummary);
    }
  }
}
