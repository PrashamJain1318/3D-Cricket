/**
 * BattingDetector: Robust heuristic cricket shot classification
 * Based on wrist velocity, elbow angles, swing plane, torso tilt, hand trajectory, and elevation.
 */

import { SHOT_TYPES } from '../utils/constants';
import { clamp } from '../utils/math';

export class BattingDetector {
  constructor(handedness = 'right') {
    this.handedness = handedness; // 'right' | 'left'
    this.swingHistory = [];
    this.lastTriggeredShot = null;
    this.triggerCooldown = 0;
  }

  setHandedness(h) {
    this.handedness = h;
  }

  detectShot(movement, processedPose, ballProximity = 1.0) {
    if (!movement || !processedPose) {
      return {
        shotType: SHOT_TYPES.NONE,
        confidence: 0,
        power: 0,
        elevation: 0,
        direction: 0,
        isTriggered: false,
      };
    }

    const { wristSpeed, wristVelocity, swingTrajectory, currentHands, spineTilt } = movement;
    const { jointAngles } = processedPose;

    // Multiplier based on handedness
    const offsideDir = this.handedness === 'right' ? -1 : 1;
    const legsideDir = this.handedness === 'right' ? 1 : -1;

    // Horizontal swing component towards offside or legside
    const offsideMotion = swingTrajectory.dx * offsideDir;
    const legsideMotion = swingTrajectory.dx * legsideDir;
    const verticalMotion = -swingTrajectory.dy; // Positive = upward swing
    const forwardMotion = swingTrajectory.dz || 0;

    // Minimum swing velocity threshold
    const minSwingSpeed = 1.6;
    const isDefensive = wristSpeed > 0.6 && wristSpeed < minSwingSpeed && currentHands.y > 0;
    const isFullSwing = wristSpeed >= minSwingSpeed;

    if (!isFullSwing && !isDefensive) {
      return {
        shotType: SHOT_TYPES.NONE,
        confidence: 0,
        power: clamp(wristSpeed / 3.0, 0, 1),
        elevation: 0,
        direction: 0,
        isTriggered: false,
      };
    }

    let candidate = SHOT_TYPES.STRAIGHT_DRIVE;
    let confidence = 70;
    let elevation = 15; // Launch angle degrees (15 = ground/firm, 35 = lofted)
    let direction = 0; // Azimuth: 0 = straight, -30 = offside, +30 = legside

    // Shot Classification Heuristics:
    if (isDefensive) {
      candidate = SHOT_TYPES.DEFENSIVE;
      confidence = 85;
      elevation = 5;
      direction = 0;
    } else if (currentHands.y < -0.2 && Math.abs(swingTrajectory.dx) > 0.25) {
      // Hands high above shoulders + horizontal slash = HOOK / PULL
      if (legsideMotion > 0.15) {
        if (currentHands.y < -0.4) {
          candidate = SHOT_TYPES.HOOK_SHOT;
          confidence = clamp(75 + wristSpeed * 8, 70, 96);
          elevation = 28;
          direction = 45 * legsideDir;
        } else {
          candidate = SHOT_TYPES.PULL_SHOT;
          confidence = clamp(80 + wristSpeed * 6, 75, 98);
          elevation = 18;
          direction = 35 * legsideDir;
        }
      } else {
        // High slash to offside = CUT SHOT
        candidate = SHOT_TYPES.SQUARE_CUT;
        confidence = clamp(78 + wristSpeed * 7, 72, 95);
        elevation = 14;
        direction = -40 * offsideDir;
      }
    } else if (verticalMotion > 0.4 && wristSpeed > 2.5) {
      // High upward follow-through with rapid acceleration = LOFTED DRIVE
      candidate = SHOT_TYPES.LOFTED_DRIVE;
      confidence = clamp(80 + verticalMotion * 20, 75, 98);
      elevation = 38; // High in the air for SIX!
      direction = offsideMotion > 0.15 ? -20 * offsideDir : (legsideMotion > 0.15 ? 20 * legsideDir : 0);
    } else if (offsideMotion > 0.2) {
      // Stepped or leaned into offside drive = COVER DRIVE
      candidate = SHOT_TYPES.COVER_DRIVE;
      confidence = clamp(78 + offsideMotion * 35, 75, 96);
      elevation = 12;
      direction = -28 * offsideDir;
    } else if (legsideMotion > 0.2 && verticalMotion < 0.2) {
      // Wrist flick or sweep to leg side
      if (currentHands.y > 0.35) {
        candidate = SHOT_TYPES.SWEEP_SHOT;
        confidence = clamp(80 + legsideMotion * 25, 72, 94);
        elevation = 8;
        direction = 50 * legsideDir;
      } else {
        candidate = SHOT_TYPES.FLICK_SHOT;
        confidence = clamp(82 + legsideMotion * 20, 76, 95);
        elevation = 15;
        direction = 30 * legsideDir;
      }
    } else {
      // Vertical bat swing down the ground = STRAIGHT DRIVE
      candidate = SHOT_TYPES.STRAIGHT_DRIVE;
      confidence = clamp(75 + wristSpeed * 6, 70, 95);
      elevation = 14;
      direction = 0;
    }

    // Power calculation (0.4 to 1.5 multiplier)
    const rawPower = (wristSpeed / 3.0) * (confidence / 100);
    const power = clamp(rawPower * 1.2, 0.4, 1.6);

    return {
      shotType: candidate,
      confidence: Math.round(confidence),
      power,
      elevation,
      direction,
      wristSpeed,
      isTriggered: isFullSwing || isDefensive,
    };
  }
}
