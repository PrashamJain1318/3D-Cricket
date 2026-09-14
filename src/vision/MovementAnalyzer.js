/**
 * MovementAnalyzer: Analyzes temporal pose frames to compute velocities,
 * accelerations, hand trajectories, swing arcs and kinetic energy.
 */

import { MovingAverageBuffer } from '../utils/smoothing';

export class MovementAnalyzer {
  constructor(historyLength = 16) {
    this.historyLength = historyLength;
    this.frames = [];
    this.wristVelocitySmoother = new MovingAverageBuffer(4);
    this.bodyMovementSmoother = new MovingAverageBuffer(6);
  }

  addFrame(processedPose) {
    if (!processedPose) return;
    
    this.frames.push(processedPose);
    if (this.frames.length > this.historyLength) {
      this.frames.shift();
    }
  }

  clear() {
    this.frames = [];
    this.wristVelocitySmoother.clear();
    this.bodyMovementSmoother.clear();
  }

  analyze() {
    if (this.frames.length < 2) {
      return {
        wristSpeed: 0,
        wristVelocity: { x: 0, y: 0, z: 0 },
        swingTrajectory: { dx: 0, dy: 0, dz: 0 },
        bodyVelocity: { x: 0, y: 0 },
        bodySpeed: 0,
        isSwinging: false,
        swingPhase: 'IDLE',
        dominantHand: 'right',
      };
    }

    const current = this.frames[this.frames.length - 1];
    const prev = this.frames[this.frames.length - 2];
    const dt = Math.max(0.01, (current.timestamp - prev.timestamp) / 1000);

    // Compute velocity of hands centroid
    const vHands = {
      x: (current.handsCentroid.x - prev.handsCentroid.x) / dt,
      y: (current.handsCentroid.y - prev.handsCentroid.y) / dt,
      z: (current.handsCentroid.z - prev.handsCentroid.z) / dt,
    };

    const handsSpeed = Math.sqrt(vHands.x * vHands.x + vHands.y * vHands.y + vHands.z * vHands.z);
    this.wristVelocitySmoother.push(handsSpeed);
    const smoothedWristSpeed = this.wristVelocitySmoother.average();

    // Body center horizontal displacement
    const bodyVel = {
      x: (current.shoulderMid.x - prev.shoulderMid.x) / dt,
      y: (current.shoulderMid.y - prev.shoulderMid.y) / dt,
    };
    const bodySpeed = Math.sqrt(bodyVel.x * bodyVel.x + bodyVel.y * bodyVel.y);
    this.bodyMovementSmoother.push(bodySpeed);

    // Analyze swing trajectory over the whole window (lookback 5-10 frames)
    const lookback = Math.min(8, this.frames.length);
    const startFrame = this.frames[this.frames.length - lookback];
    const trajectory = {
      dx: current.handsCentroid.x - startFrame.handsCentroid.x,
      dy: current.handsCentroid.y - startFrame.handsCentroid.y,
      dz: current.handsCentroid.z - startFrame.handsCentroid.z,
    };

    // Determine swing state
    const isSwinging = smoothedWristSpeed > 1.8;

    let swingPhase = 'IDLE';
    if (isSwinging) {
      if (trajectory.dy < -0.15) {
        swingPhase = 'DOWNSWING'; // hands moving downwards into shot
      } else if (trajectory.dy > 0.15) {
        swingPhase = 'FOLLOW_THROUGH'; // upward follow through
      } else {
        swingPhase = 'CROSS_BAT'; // horizontal cut or pull
      }
    } else if (current.handsCentroid.y < -0.2) {
      swingPhase = 'BACKLIFT';
    } else {
      swingPhase = 'STANCE';
    }

    return {
      wristSpeed: smoothedWristSpeed,
      rawWristSpeed: handsSpeed,
      wristVelocity: vHands,
      swingTrajectory: trajectory,
      bodyVelocity: bodyVel,
      bodySpeed: this.bodyMovementSmoother.average(),
      isSwinging,
      swingPhase,
      jointAngles: current.jointAngles,
      currentHands: current.handsCentroid,
      spineTilt: current.jointAngles.spineTilt,
    };
  }
}
