/**
 * GestureRecognizer: Detects specific posture gestures for calibration & navigation
 */

import { distance2D } from '../utils/math';
import { LANDMARKS } from './PoseProcessor';

export class GestureRecognizer {
  static detectCalibrationPose(processedPose, currentStep) {
    if (!processedPose || !processedPose.rawLandmarks) {
      return { completed: false, feedback: 'Stand inside the camera view' };
    }

    const { rawLandmarks, normalizedLandmarks, shoulderWidth, jointAngles } = processedPose;
    const lWrist = rawLandmarks[LANDMARKS.LEFT_WRIST];
    const rWrist = rawLandmarks[LANDMARKS.RIGHT_WRIST];
    const lShoulder = rawLandmarks[LANDMARKS.LEFT_SHOULDER];
    const rShoulder = rawLandmarks[LANDMARKS.RIGHT_SHOULDER];
    const lHip = rawLandmarks[LANDMARKS.LEFT_HIP];
    const rHip = rawLandmarks[LANDMARKS.RIGHT_HIP];

    // Basic visibility check
    const isVisible = (lShoulder.visibility > 0.5 || rShoulder.visibility > 0.5) &&
                      (lHip.visibility > 0.3 || rHip.visibility > 0.3);

    if (!isVisible) {
      return { completed: false, feedback: 'Please step back so your upper body is visible' };
    }

    switch (currentStep) {
      case 'DETECT_PLAYER':
        // Stable upright standing posture
        if (shoulderWidth > 0.12 && shoulderWidth < 0.6) {
          return { completed: true, feedback: 'Player detected! Stand still...' };
        }
        return { completed: false, feedback: 'Adjust your distance to the camera' };

      case 'RAISE_ARMS':
        // Both wrists elevated above shoulders
        const bothArmsUp = lWrist.y < lShoulder.y && rWrist.y < rShoulder.y;
        if (bothArmsUp) {
          return { completed: true, feedback: 'Arms raised! Excellent.' };
        }
        return { completed: false, feedback: 'Raise both arms up high above your shoulders' };

      case 'LEAN_LEFTSIDE':
        // Torso tilt or leaning left
        if (jointAngles.spineTilt < -12) {
          return { completed: true, feedback: 'Good lean left!' };
        }
        return { completed: false, feedback: 'Lean slightly to your left' };

      case 'LEAN_RIGHTSIDE':
        // Torso tilt or leaning right
        if (jointAngles.spineTilt > 12) {
          return { completed: true, feedback: 'Good lean right!' };
        }
        return { completed: false, feedback: 'Lean slightly to your right' };

      case 'BATTING_STANCE':
        // Side-on posture: wrists together below chest, slight knee/elbow bend
        const handsTogether = distance2D(lWrist, rWrist) < 0.25;
        const handsAtStance = normalizedLandmarks[LANDMARKS.LEFT_WRIST].y > -0.1;
        if (handsTogether && handsAtStance) {
          return { completed: true, feedback: 'Batting stance locked!' };
        }
        return { completed: false, feedback: 'Hold virtual bat with both hands in batting stance' };

      default:
        return { completed: true, feedback: 'Ready to Play' };
    }
  }
}
