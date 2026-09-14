/**
 * ShotPhysics: Computes exit velocity, launch vector, and fielding outcome from bat-ball collision.
 */

import { SHOT_TYPES, TIMING_ZONES, FIELD_RADIUS } from '../utils/constants';
import { clamp, degToRad } from '../utils/math';

export class ShotPhysics {
  static computeShotTrajectory(collisionResult, batInfo, ballPhysics) {
    const { timingZone, timingScore, contactQuality, shotType } = collisionResult;
    const power = batInfo.power || 1.0;

    // Base exit speed in m/s (20m/s to 45m/s)
    let baseSpeed = 26;

    // Shot type specific launch elevation & azimuth angles
    let elevationDeg = 12; // Degrees above horizontal
    let azimuthDeg = 0; // 0 = straight back towards bowler, -45 = cover, +45 = midwicket

    switch (shotType) {
      case SHOT_TYPES.STRAIGHT_DRIVE:
        elevationDeg = 10;
        azimuthDeg = 0;
        baseSpeed = 30;
        break;
      case SHOT_TYPES.COVER_DRIVE:
        elevationDeg = 11;
        azimuthDeg = -38;
        baseSpeed = 32;
        break;
      case SHOT_TYPES.SQUARE_CUT:
        elevationDeg = 13;
        azimuthDeg = -75;
        baseSpeed = 31;
        break;
      case SHOT_TYPES.PULL_SHOT:
        elevationDeg = 18;
        azimuthDeg = 55;
        baseSpeed = 34;
        break;
      case SHOT_TYPES.HOOK_SHOT:
        elevationDeg = 32;
        azimuthDeg = 68;
        baseSpeed = 36;
        break;
      case SHOT_TYPES.SWEEP_SHOT:
        elevationDeg = 8;
        azimuthDeg = 75;
        baseSpeed = 25;
        break;
      case SHOT_TYPES.FLICK_SHOT:
        elevationDeg = 14;
        azimuthDeg = 35;
        baseSpeed = 28;
        break;
      case SHOT_TYPES.LOFTED_DRIVE:
        elevationDeg = 38; // High arc for 6s
        azimuthDeg = -15;
        baseSpeed = 38;
        break;
      case SHOT_TYPES.DEFENSIVE:
        elevationDeg = 4;
        azimuthDeg = 10;
        baseSpeed = 10;
        break;
      default:
        elevationDeg = 12;
        azimuthDeg = 0;
        baseSpeed = 25;
    }

    // Adjust for Edge vs Sweet spot
    if (contactQuality === 'EDGE') {
      azimuthDeg = -85 + Math.random() * 10; // Fly to slips/gully/third man
      elevationDeg = 20 + Math.random() * 15;
      baseSpeed *= 0.65;
    } else if (contactQuality === 'SWEET_SPOT') {
      baseSpeed *= 1.25;
    }

    // Apply timing multiplier & player swing power
    const finalSpeed = baseSpeed * timingScore * clamp(power, 0.6, 1.4);

    // Convert spherical angles to 3D Cartesian velocity vector
    // Ball shoots backwards towards bowler/fielders (negative Z in coordinate frame)
    const elRad = degToRad(elevationDeg);
    const azRad = degToRad(azimuthDeg);

    const vy = finalSpeed * Math.sin(elRad);
    const vHorizontal = finalSpeed * Math.cos(elRad);
    const vx = vHorizontal * Math.sin(azRad);
    const vz = -vHorizontal * Math.cos(azRad); // Traveling back towards field

    // Update ball physics instance
    ballPhysics.velocity = { x: vx, y: vy, z: vz };
    ballPhysics.isBounced = false; // Reset bounce flag for outfield tracking
    ballPhysics.bounceCount = 0;

    // Estimate expected cricket outcome
    let expectedOutcome = 'DOT';
    let runs = 0;

    // Range calculation: R = (v^2 * sin(2 * theta)) / g
    const estAirDistance = ((finalSpeed * Math.cos(elRad)) * (2 * vy / 9.81));

    if (contactQuality === 'EDGE' && timingZone !== TIMING_ZONES.PERFECT) {
      expectedOutcome = Math.random() > 0.4 ? 'CAUGHT' : 'EDGE_FOUR';
      runs = expectedOutcome === 'CAUGHT' ? 0 : 4;
    } else if (shotType === SHOT_TYPES.DEFENSIVE) {
      expectedOutcome = 'DOT';
      runs = 0;
    } else if (timingZone === TIMING_ZONES.PERFECT && elevationDeg > 25 && estAirDistance > 60) {
      expectedOutcome = 'SIX';
      runs = 6;
    } else if (finalSpeed > 24) {
      expectedOutcome = 'FOUR';
      runs = 4;
    } else if (finalSpeed > 17) {
      expectedOutcome = '2_RUNS';
      runs = 2;
    } else if (finalSpeed > 10) {
      expectedOutcome = '1_RUN';
      runs = 1;
    } else {
      expectedOutcome = 'DOT';
      runs = 0;
    }

    return {
      finalSpeed,
      elevationDeg,
      azimuthDeg,
      expectedOutcome,
      runs,
      isBoundary: runs === 4 || runs === 6,
      isSix: runs === 6,
    };
  }
}
