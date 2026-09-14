/**
 * BowlingDetector: Analyzes user's bowling arm rotation, windup, and release mechanics.
 * Translates movement into game delivery metrics: speed (km/h), line, length, and swing.
 */

import { DELIVERY_TYPES } from '../utils/constants';
import { clamp } from '../utils/math';

export class BowlingDetector {
  constructor(bowlingArm = 'right') {
    this.bowlingArm = bowlingArm; // 'right' | 'left'
    this.state = 'IDLE'; // 'IDLE' | 'WINDUP' | 'OVERHEAD' | 'RELEASED'
    this.overheadTime = 0;
    this.peakWristY = 1.0;
    this.releaseHistory = [];
  }

  setBowlingArm(arm) {
    this.bowlingArm = arm;
  }

  reset() {
    this.state = 'IDLE';
    this.overheadTime = 0;
    this.peakWristY = 1.0;
  }

  detectBowlingAction(movement, processedPose) {
    if (!movement || !processedPose) {
      return null;
    }

    const { rawLandmarks, normalizedLandmarks, jointAngles } = processedPose;
    const { wristSpeed } = movement;

    const wrist = this.bowlingArm === 'right' ? normalizedLandmarks[16] : normalizedLandmarks[15];
    const elbow = this.bowlingArm === 'right' ? normalizedLandmarks[14] : normalizedLandmarks[13];
    const shoulder = this.bowlingArm === 'right' ? normalizedLandmarks[12] : normalizedLandmarks[11];

    if (!wrist || !shoulder) return null;

    const isArmHigh = wrist.y < -0.35; // Hands raised above shoulder
    const isOverhead = wrist.y < -0.6; // High overhead release point

    if (this.state === 'IDLE') {
      if (isArmHigh && wristSpeed > 1.2) {
        this.state = 'OVERHEAD';
        this.overheadTime = performance.now();
        this.peakWristY = wrist.y;
      }
    } else if (this.state === 'OVERHEAD') {
      if (wrist.y < this.peakWristY) {
        this.peakWristY = wrist.y;
      }

      // Fast downward motion after overhead reach = RELEASE
      if (wrist.y > -0.1 && wristSpeed > 2.0) {
        this.state = 'RELEASED';
        const duration = Math.max(0.08, (performance.now() - this.overheadTime) / 1000);

        // Convert velocity into simulated km/h (115 - 150 km/h)
        const rawSpeed = clamp(110 + (wristSpeed * 8) + (1.0 / duration) * 5, 105, 155);
        const speed = Math.round(rawSpeed);

        // Line calculation: based on horizontal release offset relative to shoulder
        const horizontalOffset = (wrist.x - shoulder.x);
        let line = 'STUMPS';
        let lineOffset = 0; // meters from center
        if (horizontalOffset < -0.15) {
          line = 'OUTSIDE_OFF';
          lineOffset = -0.45;
        } else if (horizontalOffset > 0.15) {
          line = 'DOWN_LEG';
          lineOffset = 0.45;
        }

        // Length calculation: based on release height and angle
        let deliveryType = DELIVERY_TYPES.GOOD_LENGTH;
        let lengthZone = 'GOOD_LENGTH';

        if (this.peakWristY < -0.8 && wristSpeed > 3.2) {
          deliveryType = DELIVERY_TYPES.BOUNCER;
          lengthZone = 'SHORT_PITCH';
        } else if (wrist.y > 0.15) {
          deliveryType = DELIVERY_TYPES.YORKER;
          lengthZone = 'FULL_YORKER';
        } else if (speed > 138) {
          deliveryType = DELIVERY_TYPES.INSWING;
          lengthZone = 'GOOD_LENGTH';
        } else if (speed < 118) {
          deliveryType = DELIVERY_TYPES.SLOWER_BALL;
          lengthZone = 'FULL_TOSS';
        }

        // Swing based on elbow angle & wrist lateral follow-through
        let swing = 0;
        if (this.bowlingArm === 'right') {
          swing = horizontalOffset * 1.5;
        } else {
          swing = -horizontalOffset * 1.5;
        }

        const result = {
          speed,
          deliveryType,
          lengthZone,
          line,
          lineOffset,
          swing: clamp(swing, -0.6, 0.6),
          peakHeight: Math.abs(this.peakWristY),
          confidence: clamp(Math.round(75 + wristSpeed * 6), 70, 98),
          timestamp: performance.now(),
        };

        this.releaseHistory.push(result);
        return result;
      }
    }

    return null;
  }
}
