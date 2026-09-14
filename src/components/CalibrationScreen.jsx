/**
 * CalibrationScreen: Step-by-step interactive player pose calibration wizard.
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../state/GameContext';
import { GestureRecognizer } from '../vision/GestureRecognizer';
import { GAME_STATES } from '../utils/constants';
import { CheckCircle2, ChevronRight, Sparkles, UserCheck, ShieldAlert, ArrowRight } from 'lucide-react';

const CALIBRATION_STEPS = [
  {
    id: 'DETECT_PLAYER',
    title: 'Stand In Front Of Camera',
    desc: 'Position yourself 1.5m – 2.5m from your webcam so your upper body is clearly visible.',
  },
  {
    id: 'RAISE_ARMS',
    title: 'Raise Your Arms',
    desc: 'Raise both arms up above your shoulders to calibrate arm span and reaches.',
  },
  {
    id: 'LEAN_LEFTSIDE',
    title: 'Lean Left',
    desc: 'Lean your upper torso slightly to the left side to calculate spine rotation.',
  },
  {
    id: 'LEAN_RIGHTSIDE',
    title: 'Lean Right',
    desc: 'Lean your upper torso slightly to the right side.',
  },
  {
    id: 'BATTING_STANCE',
    title: 'Take Batting Stance',
    desc: 'Assume your natural cricket batting stance holding your virtual bat.',
  },
];

export const CalibrationScreen = () => {
  const { visionData, poseDetector, setGameState } = useGame();
  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState('Initializing camera...');
  const [stepSuccessFrames, setStepSuccessFrames] = useState(0);

  const currentStep = CALIBRATION_STEPS[stepIndex];

  useEffect(() => {
    if (!visionData.processedPose) {
      setFeedback('Stand inside the camera frame...');
      return;
    }

    const res = GestureRecognizer.detectCalibrationPose(visionData.processedPose, currentStep.id);
    setFeedback(res.feedback);

    if (res.completed) {
      setStepSuccessFrames((prev) => {
        const next = prev + 1;
        if (next >= 15) {
          // Stable posture held for ~0.5s -> Advance to next step
          if (stepIndex < CALIBRATION_STEPS.length - 1) {
            setStepIndex((s) => s + 1);
          } else {
            // Completed all calibration steps! Save baseline
            if (poseDetector) {
              poseDetector.processor.setBaseline({
                shoulderWidth: visionData.processedPose.shoulderWidth,
                torsoHeight: visionData.processedPose.torsoHeight,
              });
            }
            setTimeout(() => {
              setGameState(GAME_STATES.MAIN_MENU);
            }, 800);
          }
          return 0;
        }
        return next;
      });
    } else {
      setStepSuccessFrames(0);
    }
  }, [visionData, currentStep, stepIndex, poseDetector, setGameState]);

  const handleSkip = () => {
    setGameState(GAME_STATES.MAIN_MENU);
  };

  const progressPct = ((stepIndex + 1) / CALIBRATION_STEPS.length) * 100;

  return (
    <div className="modal-backdrop">
      <div className="modal-content glass-panel-glow flex flex-col gap-6 select-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <div>
              <h2 className="text-xl font-bold font-chakra text-white uppercase">PLAYER CALIBRATION</h2>
              <p className="text-xs text-slate-400">Step {stepIndex + 1} of {CALIBRATION_STEPS.length}</p>
            </div>
          </div>
          <button
            onClick={handleSkip}
            className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
          >
            Skip Calibration
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Step Instructions */}
        <div className="flex flex-col items-center text-center py-4 px-6 bg-slate-900/60 rounded-xl border border-white/5">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center mb-3">
            <UserCheck className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>

          <h3 className="text-xl font-extrabold font-chakra text-white mb-2">{currentStep.title}</h3>
          <p className="text-sm text-slate-300 max-w-md">{currentStep.desc}</p>

          {/* Real-time status feedback */}
          <div className="mt-5 px-4 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{feedback}</span>
          </div>
        </div>

        {/* Privacy badge */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Vision processing runs 100% locally on your device.
          </span>

          <button
            onClick={() => {
              if (stepIndex < CALIBRATION_STEPS.length - 1) setStepIndex((s) => s + 1);
              else setGameState(GAME_STATES.MAIN_MENU);
            }}
            className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
