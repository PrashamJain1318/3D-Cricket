/**
 * DeliveryManager: AI Bowler logic, delivery selection, and bowling variations.
 */

import { DELIVERY_TYPES } from '../utils/constants';
import { randomChoice, randomRange } from '../utils/math';

export class DeliveryManager {
  constructor(difficulty = 'medium') {
    this.difficulty = difficulty; // 'easy' | 'medium' | 'hard' | 'pro'
    this.deliveryHistory = [];
  }

  setDifficulty(diff) {
    this.difficulty = diff;
  }

  generateDelivery(ballNumber = 1) {
    let deliveryType = DELIVERY_TYPES.GOOD_LENGTH;
    let speedKmh = 132;
    let lineOffset = 0; // 0 = middle stump, -0.4 = outside off, +0.3 = down leg
    let swingAmount = 0;

    const rand = Math.random();

    if (this.difficulty === 'easy') {
      // Predictable, medium-paced good length
      if (rand < 0.7) {
        deliveryType = DELIVERY_TYPES.GOOD_LENGTH;
        speedKmh = randomRange(115, 125);
        lineOffset = randomRange(-0.15, 0.1);
      } else if (rand < 0.85) {
        deliveryType = DELIVERY_TYPES.FULL_TOSS;
        speedKmh = randomRange(110, 120);
        lineOffset = 0;
      } else {
        deliveryType = DELIVERY_TYPES.BOUNCER;
        speedKmh = randomRange(120, 128);
        lineOffset = randomRange(-0.2, 0.1);
      }
    } else if (this.difficulty === 'medium') {
      // Balanced mix of fast, swing, and variation
      if (rand < 0.5) {
        deliveryType = DELIVERY_TYPES.GOOD_LENGTH;
        speedKmh = randomRange(128, 138);
        lineOffset = randomRange(-0.25, 0.15);
      } else if (rand < 0.65) {
        deliveryType = DELIVERY_TYPES.OUTSWING;
        speedKmh = randomRange(130, 140);
        lineOffset = -0.3;
        swingAmount = 0.5;
      } else if (rand < 0.8) {
        deliveryType = DELIVERY_TYPES.INSWING;
        speedKmh = randomRange(132, 142);
        lineOffset = 0.1;
        swingAmount = -0.5;
      } else if (rand < 0.9) {
        deliveryType = DELIVERY_TYPES.YORKER;
        speedKmh = randomRange(135, 145);
        lineOffset = randomRange(-0.1, 0.1);
      } else {
        deliveryType = DELIVERY_TYPES.BOUNCER;
        speedKmh = randomRange(136, 146);
        lineOffset = randomRange(-0.2, 0.1);
      }
    } else {
      // Hard / Pro: Fast, high swing, deceptive yorkers & slower balls
      if (rand < 0.35) {
        deliveryType = DELIVERY_TYPES.YORKER;
        speedKmh = randomRange(142, 152);
        lineOffset = randomRange(-0.15, 0.1);
      } else if (rand < 0.6) {
        deliveryType = DELIVERY_TYPES.OUTSWING;
        speedKmh = randomRange(138, 148);
        lineOffset = -0.35;
        swingAmount = 0.7;
      } else if (rand < 0.8) {
        deliveryType = DELIVERY_TYPES.BOUNCER;
        speedKmh = randomRange(140, 150);
        lineOffset = randomRange(-0.2, 0.2);
      } else if (rand < 0.9) {
        deliveryType = DELIVERY_TYPES.SLOWER_BALL;
        speedKmh = randomRange(108, 116);
        lineOffset = randomRange(-0.2, 0.1);
      } else {
        deliveryType = DELIVERY_TYPES.INSWING;
        speedKmh = randomRange(140, 148);
        lineOffset = 0.15;
        swingAmount = -0.65;
      }
    }

    const delivery = {
      type: deliveryType,
      speed: Math.round(speedKmh),
      lineOffset,
      swingAmount,
      name: this.getDeliveryDisplayName(deliveryType),
    };

    this.deliveryHistory.push(delivery);
    return delivery;
  }

  getDeliveryDisplayName(type) {
    switch (type) {
      case DELIVERY_TYPES.YORKER: return 'Toecrusher Yorker';
      case DELIVERY_TYPES.BOUNCER: return 'Sharp Bouncer';
      case DELIVERY_TYPES.FULL_TOSS: return 'Juicy Full Toss';
      case DELIVERY_TYPES.INSWING: return 'Inswinger';
      case DELIVERY_TYPES.OUTSWING: return 'Outswinger';
      case DELIVERY_TYPES.OFF_SPIN: return 'Off-Cutter';
      case DELIVERY_TYPES.LEG_SPIN: return 'Leg-Break';
      case DELIVERY_TYPES.SLOWER_BALL: return 'Deceptive Slower Ball';
      default: return 'Good Length Pace';
    }
  }
}
