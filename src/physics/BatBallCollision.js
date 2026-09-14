/**
 * BatBallCollision: Evaluates spatial & temporal collision between bat and ball.
 */

import { TIMING_ZONES, PITCH_DIMENSIONS, SHOT_TYPES } from '../utils/constants';
import { clamp, distance3D } from '../utils/math';

export class BatBallCollision {
  constructor() {
    this.batsmanZ = 9.0; // Batsman crease position
    this.strikeZoneZMin = 7.8;
    this.strikeZoneZMax = 9.6;
    this.sweetSpotZ = 8.8; // Ideal contact point
    this.hasCollidedThisBall = false;
  }

  reset() {
    this.hasCollidedThisBall = false;
  }

  checkCollision(ballPosition, ballVelocity, batInfo, isManualSwing = false) {
    if (this.hasCollidedThisBall) return null;

    const ballZ = ballPosition.z;

    // Check if ball is within strike zone depth
    if (ballZ < this.strikeZoneZMin || ballZ > this.strikeZoneZMax) {
      return null;
    }

    const { shotType, isTriggered, wristSpeed, power } = batInfo;
    const isBattingActive = isTriggered || isManualSwing;

    if (!isBattingActive) {
      return null;
    }

    // Temporal timing calculation based on distance to ideal contact point
    const deltaZ = ballZ - this.sweetSpotZ;
    let timingZone = TIMING_ZONES.GOOD;
    let timingScore = 0.8; // 0 to 1 multiplier

    if (Math.abs(deltaZ) < 0.25) {
      timingZone = TIMING_ZONES.PERFECT;
      timingScore = 1.0;
    } else if (deltaZ < -0.25 && deltaZ >= -0.55) {
      timingZone = TIMING_ZONES.EARLY;
      timingScore = 0.75;
    } else if (deltaZ < -0.55) {
      timingZone = TIMING_ZONES.VERY_EARLY;
      timingScore = 0.45;
    } else if (deltaZ > 0.25 && deltaZ <= 0.55) {
      timingZone = TIMING_ZONES.LATE;
      timingScore = 0.7;
    } else if (deltaZ > 0.55) {
      timingZone = TIMING_ZONES.VERY_LATE;
      timingScore = 0.4;
    }

    // Lateral (X) and vertical (Y) reach check
    const batReachX = clamp(batInfo.direction ? batInfo.direction / 45 : 0, -0.6, 0.6);
    const lateralDiff = Math.abs(ballPosition.x - batReachX);
    const verticalDiff = Math.abs(ballPosition.y - 0.7);

    // Is it a clean hit, an edge, or a miss?
    let contactQuality = 'SWEET_SPOT';
    if (lateralDiff > 0.65 || verticalDiff > 0.9) {
      return null; // Complete miss
    } else if (lateralDiff > 0.4 || timingScore < 0.5) {
      contactQuality = 'EDGE';
    } else if (timingZone === TIMING_ZONES.PERFECT && lateralDiff < 0.25) {
      contactQuality = 'SWEET_SPOT';
    } else {
      contactQuality = 'MIDDLE';
    }

    this.hasCollidedThisBall = true;

    return {
      collided: true,
      timingZone,
      timingScore,
      contactQuality,
      contactPoint: { ...ballPosition },
      shotType: shotType !== SHOT_TYPES.NONE ? shotType : SHOT_TYPES.STRAIGHT_DRIVE,
      power: power || 1.0,
      timestamp: performance.now(),
    };
  }
}
