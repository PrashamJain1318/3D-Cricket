/**
 * AIBatsman: Simulates AI batting behavior against the user's bowled deliveries.
 */

import { SHOT_TYPES, DELIVERY_TYPES } from '../utils/constants';

export class AIBatsman {
  constructor(difficulty = 'medium') {
    this.difficulty = difficulty;
  }

  setDifficulty(diff) {
    this.difficulty = diff;
  }

  evaluateShot(bowledBall) {
    const { speed, deliveryType, line, lineOffset, swing } = bowledBall;
    const rand = Math.random();

    let shotType = SHOT_TYPES.STRAIGHT_DRIVE;
    let timingZone = 'GOOD';
    let runs = 0;
    let isWicket = false;
    let dismissalType = null;
    let shotDescription = '';

    // Fast yorker on middle stump
    if (deliveryType === DELIVERY_TYPES.YORKER && line === 'STUMPS') {
      if (speed > 135) {
        if (rand < 0.65) {
          isWicket = true;
          dismissalType = 'BOWLED';
          shotDescription = 'Bowled! Beaten all ends up by sheer pace!';
        } else {
          runs = 1;
          shotType = SHOT_TYPES.DEFENSIVE;
          shotDescription = 'Dug out brilliantly into the crease for a single.';
        }
      } else {
        runs = rand < 0.5 ? 1 : 2;
        shotType = SHOT_TYPES.STRAIGHT_DRIVE;
        shotDescription = 'Jamming the bat down for a couple.';
      }
    } else if (deliveryType === DELIVERY_TYPES.BOUNCER) {
      if (speed > 138) {
        if (rand < 0.45) {
          isWicket = true;
          dismissalType = 'CAUGHT';
          shotDescription = 'Top edged the bouncer, caught at fine leg!';
        } else if (rand < 0.75) {
          runs = 0;
          shotType = SHOT_TYPES.DEFENSIVE;
          shotDescription = 'Ducked cleanly under the fiery bouncer.';
        } else {
          runs = 4;
          shotType = SHOT_TYPES.HOOK_SHOT;
          shotDescription = 'Rolled the wrists on the hook for FOUR!';
        }
      } else {
        runs = rand < 0.6 ? 4 : 6;
        shotType = SHOT_TYPES.PULL_SHOT;
        shotDescription = 'Dispatched the short ball emphatically over midwicket!';
      }
    } else if (line === 'OUTSIDE_OFF') {
      if (Math.abs(swing) > 0.3 && rand < 0.4) {
        isWicket = true;
        dismissalType = 'CAUGHT';
        shotDescription = 'Edged the swinging delivery! Caught behind!';
      } else if (rand < 0.6) {
        runs = 4;
        shotType = SHOT_TYPES.COVER_DRIVE;
        shotDescription = 'Exquisite cover drive piercing the gap for FOUR!';
      } else {
        runs = 1;
        shotType = SHOT_TYPES.SQUARE_CUT;
        shotDescription = 'Steered away towards third man for one.';
      }
    } else if (line === 'DOWN_LEG') {
      if (rand < 0.5) {
        runs = 4;
        shotType = SHOT_TYPES.FLICK_SHOT;
        shotDescription = 'Whipped off the pads elegantly for FOUR!';
      } else {
        runs = 2;
        shotType = SHOT_TYPES.SWEEP_SHOT;
        shotDescription = 'Glanced down to fine leg for two runs.';
      }
    } else {
      // Good length middle stump
      if (speed > 142 && rand < 0.3) {
        isWicket = true;
        dismissalType = 'BOWLED';
        shotDescription = 'Castle knocked over! Superb bowling!';
      } else if (rand < 0.4) {
        runs = 0;
        shotType = SHOT_TYPES.DEFENSIVE;
        shotDescription = 'Solid forward defensive stroke.';
      } else if (rand < 0.75) {
        runs = 1;
        shotType = SHOT_TYPES.STRAIGHT_DRIVE;
        shotDescription = 'Pushed gently down the ground for a single.';
      } else {
        runs = 4;
        shotType = SHOT_TYPES.STRAIGHT_DRIVE;
        shotDescription = 'Timed through mid-on for a pristine boundary!';
      }
    }

    return {
      shotType,
      runs,
      isWicket,
      dismissalType,
      shotDescription,
      isSix: runs === 6,
      isFour: runs === 4,
    };
  }
}
