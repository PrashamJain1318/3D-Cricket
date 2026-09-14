/**
 * BallPhysics: Realistic 3D cricket ball flight, bounce, spin, swing and boundary physics.
 */

import { PITCH_DIMENSIONS, FIELD_RADIUS, DELIVERY_TYPES } from '../utils/constants';
import { clamp } from '../utils/math';

export class BallPhysics {
  constructor() {
    this.position = { x: 0, y: 1.8, z: -10 }; // Bowler end at z = -10, Batsman at z = 9
    this.velocity = { x: 0, y: 0, z: 0 };
    this.acceleration = { x: 0, y: -9.81, z: 0 };
    this.radius = PITCH_DIMENSIONS.BALL_RADIUS;
    this.isBounced = false;
    this.bounceCount = 0;
    this.inFlight = false;
    this.isDead = false;
    this.deliveryType = DELIVERY_TYPES.GOOD_LENGTH;
    this.spin = { x: 0, y: 0, z: 0 };
    this.swingForce = 0;
    this.dragCoeff = 0.0035;
    this.restitution = 0.58; // Turf pitch bounce
    this.friction = 0.72; // Pitch seam grip
    this.lastPitchContact = null;
    this.trail = [];
  }

  reset(bowlerReleasePos = { x: 0.2, y: 2.1, z: -10 }) {
    this.position = { ...bowlerReleasePos };
    this.velocity = { x: 0, y: 0, z: 0 };
    this.acceleration = { x: 0, y: -9.81, z: 0 };
    this.isBounced = false;
    this.bounceCount = 0;
    this.inFlight = false;
    this.isDead = false;
    this.lastPitchContact = null;
    this.trail = [];
  }

  deliver(speedKmh, deliveryType = DELIVERY_TYPES.GOOD_LENGTH, lineOffset = 0, swingAmount = 0) {
    this.deliveryType = deliveryType;
    this.inFlight = true;
    this.isBounced = false;
    this.bounceCount = 0;
    this.isDead = false;
    this.swingForce = swingAmount;

    // Convert km/h to m/s in game scale
    const speedMs = (speedKmh * 1000) / 3600;
    const pitchDistance = 19.0; // Distance to popping crease
    const travelTime = pitchDistance / speedMs;

    let targetZBounce = 3.5; // Good length (meters before batsman at z=9)
    let initialVy = -0.5;

    switch (deliveryType) {
      case DELIVERY_TYPES.YORKER:
        targetZBounce = 8.2; // Right in blockhole at batsman's feet
        initialVy = -1.2;
        break;
      case DELIVERY_TYPES.BOUNCER:
        targetZBounce = -1.5; // Short pitch
        initialVy = -3.8;
        break;
      case DELIVERY_TYPES.FULL_TOSS:
        targetZBounce = 15.0; // Over batsman without bouncing
        initialVy = 0.8;
        break;
      case DELIVERY_TYPES.INSWING:
        targetZBounce = 4.0;
        this.swingForce = -0.6;
        break;
      case DELIVERY_TYPES.OUTSWING:
        targetZBounce = 4.0;
        this.swingForce = 0.6;
        break;
      case DELIVERY_TYPES.OFF_SPIN:
        targetZBounce = 4.5;
        this.spin.x = -1.2;
        break;
      case DELIVERY_TYPES.LEG_SPIN:
        targetZBounce = 4.5;
        this.spin.x = 1.2;
        break;
      case DELIVERY_TYPES.SLOWER_BALL:
        targetZBounce = 4.0;
        initialVy = 0.5;
        break;
      default:
        targetZBounce = 3.5;
        initialVy = -1.4;
    }

    const vz = speedMs;
    const vx = lineOffset / travelTime;
    const vy = initialVy;

    this.velocity = { x: vx, y: vy, z: vz };
  }

  update(dt, onBounce = null) {
    if (!this.inFlight || this.isDead) return this.position;

    const clampedDt = Math.min(0.05, dt);

    // Apply Drag
    const speedSq = this.velocity.x ** 2 + this.velocity.y ** 2 + this.velocity.z ** 2;
    const speed = Math.sqrt(speedSq);
    if (speed > 0) {
      const drag = this.dragCoeff * speedSq;
      this.velocity.x -= (this.velocity.x / speed) * drag * clampedDt;
      this.velocity.y -= (this.velocity.y / speed) * drag * clampedDt;
      this.velocity.z -= (this.velocity.z / speed) * drag * clampedDt;
    }

    // Apply Gravity
    this.velocity.y += this.acceleration.y * clampedDt;

    // Apply Aerodynamic Swing (Magnus effect in air before pitch bounce)
    if (!this.isBounced && Math.abs(this.swingForce) > 0.01) {
      this.velocity.x += this.swingForce * clampedDt * 2.5;
    }

    // Update Position
    this.position.x += this.velocity.x * clampedDt;
    this.position.y += this.velocity.y * clampedDt;
    this.position.z += this.velocity.z * clampedDt;

    // Pitch & Ground Bounce Detection
    const pitchSurfaceY = this.radius;
    if (this.position.y <= pitchSurfaceY) {
      this.position.y = pitchSurfaceY;

      // First Pitch Bounce
      if (!this.isBounced) {
        this.isBounced = true;
        this.bounceCount = 1;
        this.lastPitchContact = { ...this.position };

        // Normal restitution + seam/spin reaction
        let restitution = this.restitution;
        if (this.deliveryType === DELIVERY_TYPES.BOUNCER) restitution *= 1.35;
        if (this.deliveryType === DELIVERY_TYPES.YORKER) restitution *= 0.7;

        this.velocity.y = -this.velocity.y * restitution;
        this.velocity.z = this.velocity.z * this.friction;

        // Apply pitch spin deviation on bounce
        if (Math.abs(this.spin.x) > 0.1) {
          this.velocity.x += this.spin.x * 1.5;
        }

        if (onBounce) onBounce(this.position, Math.abs(this.velocity.y));
      } else {
        // Subsequent ground rolls & hops
        this.bounceCount++;
        this.velocity.y = -this.velocity.y * 0.45;
        this.velocity.x *= 0.88;
        this.velocity.z *= 0.88;

        if (Math.abs(this.velocity.y) < 0.2 && Math.abs(this.velocity.z) < 0.5 && Math.abs(this.velocity.x) < 0.5) {
          this.velocity.y = 0;
          this.velocity.x = 0;
          this.velocity.z = 0;
          this.inFlight = false;
        }
      }
    }

    // Boundary check (distance from pitch center > FIELD_RADIUS)
    const distFromCenter = Math.sqrt(this.position.x ** 2 + this.position.z ** 2);
    if (distFromCenter > FIELD_RADIUS) {
      this.inFlight = false;
    }

    // Store trail points for visual rendering
    if (this.inFlight) {
      this.trail.push({ ...this.position });
      if (this.trail.length > 25) this.trail.shift();
    }

    return this.position;
  }
}
