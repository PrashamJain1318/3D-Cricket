/**
 * Smoothing, dead-zone and velocity filtering for noisy webcam pose tracking
 */

export class LowPassFilter {
  constructor(alpha = 0.3) {
    this.alpha = alpha;
    this.value = null;
  }

  filter(val) {
    if (this.value === null || isNaN(this.value)) {
      this.value = val;
      return val;
    }
    this.value = this.alpha * val + (1 - this.alpha) * this.value;
    return this.value;
  }

  reset() {
    this.value = null;
  }
}

export class Vector3Smoother {
  constructor(alpha = 0.35) {
    this.alpha = alpha;
    this.current = { x: 0, y: 0, z: 0 };
    this.initialized = false;
  }

  update(target, dt = 0.016) {
    if (!target) return this.current;
    if (!this.initialized) {
      this.current = { x: target.x || 0, y: target.y || 0, z: target.z || 0 };
      this.initialized = true;
      return this.current;
    }

    const effectiveAlpha = Math.min(1, this.alpha * (dt / 0.016));
    this.current.x += (target.x - this.current.x) * effectiveAlpha;
    this.current.y += (target.y - this.current.y) * effectiveAlpha;
    this.current.z += (target.z - this.current.z) * effectiveAlpha;
    return this.current;
  }

  reset() {
    this.initialized = false;
  }
}

export class MovingAverageBuffer {
  constructor(size = 5) {
    this.size = size;
    this.buffer = [];
  }

  push(val) {
    this.buffer.push(val);
    if (this.buffer.length > this.size) {
      this.buffer.shift();
    }
  }

  average() {
    if (this.buffer.length === 0) return 0;
    const sum = this.buffer.reduce((acc, v) => acc + v, 0);
    return sum / this.buffer.length;
  }

  max() {
    if (this.buffer.length === 0) return 0;
    return Math.max(...this.buffer);
  }

  clear() {
    this.buffer = [];
  }
}
