/**
 * KeyboardControls: Full desktop keyboard fallback controls for batting, bowling, and camera.
 */

import { SHOT_TYPES } from '../utils/constants';

export class KeyboardControls {
  constructor(options = {}) {
    this.keys = {};
    this.onShotTrigger = options.onShotTrigger || null;
    this.onBowlTrigger = options.onBowlTrigger || null;
    this.onCameraSwitch = options.onCameraSwitch || null;
    this.onPauseToggle = options.onPauseToggle || null;
    this.onDebugToggle = options.onDebugToggle || null;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  attach() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  detach() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(e) {
    if (e.repeat) return;
    this.keys[e.code] = true;

    // F3 -> Debug overlay
    if (e.code === 'F3') {
      e.preventDefault();
      if (this.onDebugToggle) this.onDebugToggle();
      return;
    }

    // Escape -> Pause menu
    if (e.code === 'Escape') {
      e.preventDefault();
      if (this.onPauseToggle) this.onPauseToggle();
      return;
    }

    // C -> Camera switch
    if (e.code === 'KeyC') {
      e.preventDefault();
      if (this.onCameraSwitch) this.onCameraSwitch();
      return;
    }

    // Batting Shot Keyboard Shortcuts:
    // Space: Straight Drive / Powerful swing
    if (e.code === 'Space') {
      e.preventDefault();
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.STRAIGHT_DRIVE,
          power: 1.1,
          isTriggered: true,
          confidence: 100,
        });
      }
      if (this.onBowlTrigger) {
        this.onBowlTrigger();
      }
    }

    // F: Cover Drive
    if (e.code === 'KeyF') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.COVER_DRIVE,
          power: 1.15,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // Q: Pull Shot
    if (e.code === 'KeyQ') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.PULL_SHOT,
          power: 1.2,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // E: Defensive forward
    if (e.code === 'KeyE') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.DEFENSIVE,
          power: 0.5,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // W / ArrowUp: Lofted Drive (Six!)
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.LOFTED_DRIVE,
          power: 1.35,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // A / ArrowLeft: Square Cut
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.SQUARE_CUT,
          power: 1.1,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // D / ArrowRight: Flick Shot
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.FLICK_SHOT,
          power: 1.05,
          isTriggered: true,
          confidence: 100,
        });
      }
    }

    // S / ArrowDown: Sweep Shot
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      if (this.onShotTrigger) {
        this.onShotTrigger({
          shotType: SHOT_TYPES.SWEEP_SHOT,
          power: 1.0,
          isTriggered: true,
          confidence: 100,
        });
      }
    }
  }

  onKeyUp(e) {
    this.keys[e.code] = false;
  }
}
