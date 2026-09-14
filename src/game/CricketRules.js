/**
 * CricketRules: Official cricket match rules engine
 */

import { PITCH_DIMENSIONS } from '../utils/constants';

export class CricketRules {
  static checkDismissal(ballPosition, ballPhysics, batsmanCollided, collisionResult) {
    const { STUMP_WIDTH, STUMP_HEIGHT } = PITCH_DIMENSIONS;

    // Check if ball crashed into batsman's stumps (z ≈ 9.6 - 10.2, |x| < 0.2, y < STUMP_HEIGHT)
    if (!batsmanCollided && ballPosition.z >= 9.6 && ballPosition.z <= 10.4) {
      if (Math.abs(ballPosition.x) <= STUMP_WIDTH * 0.7 && ballPosition.y <= STUMP_HEIGHT + 0.1) {
        return { isWicket: true, dismissalType: 'BOWLED', description: 'BOWLED! Stumps shattered!' };
      }
    }

    // Check caught off edge
    if (batsmanCollided && collisionResult) {
      if (collisionResult.contactQuality === 'EDGE' && collisionResult.expectedOutcome === 'CAUGHT') {
        return { isWicket: true, dismissalType: 'CAUGHT', description: 'CAUGHT! Edged to wicketkeeper!' };
      }
    }

    return { isWicket: false, dismissalType: null, description: null };
  }

  static isOverComplete(legalBallsBowled) {
    return legalBallsBowled >= 6;
  }

  static calculateRunRate(runs, balls) {
    if (balls === 0) return 0.0;
    const overs = Math.floor(balls / 6) + (balls % 6) / 6;
    return overs > 0 ? (runs / overs).toFixed(2) : 0.0;
  }

  static calculateRequiredRunRate(runsNeeded, ballsRemaining) {
    if (ballsRemaining <= 0) return runsNeeded > 0 ? 99.9 : 0.0;
    const oversRemaining = ballsRemaining / 6;
    return (runsNeeded / oversRemaining).toFixed(2);
  }
}
