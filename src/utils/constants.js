/**
 * Cricket Vision AI — Core Constants & Configurations
 */

export const GAME_STATES = {
  LOADING: 'LOADING',
  START_SCREEN: 'START_SCREEN',
  CAMERA_PERMISSION: 'CAMERA_PERMISSION',
  CALIBRATION: 'CALIBRATION',
  MAIN_MENU: 'MAIN_MENU',
  MATCH_SETUP: 'MATCH_SETUP',
  CAREER_MENU: 'CAREER_MENU',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  BALL_IN_PLAY: 'BALL_IN_PLAY',
  BALL_RESULT: 'BALL_RESULT',
  MISSION_COMPLETE: 'MISSION_COMPLETE',
  GAME_OVER: 'GAME_OVER',
  MATCH_COMPLETE: 'MATCH_COMPLETE',
};

export const GAME_MODES = {
  QUICK_MATCH: 'QUICK_MATCH',
  BATTING_CHALLENGE: 'BATTING_CHALLENGE',
  BOWLING_CHALLENGE: 'BOWLING_CHALLENGE',
  SHOT_MASTER: 'SHOT_MASTER',
  TARGET_CHASE: 'TARGET_CHASE',
};

export const SHOT_TYPES = {
  STRAIGHT_DRIVE: 'STRAIGHT_DRIVE',
  COVER_DRIVE: 'COVER_DRIVE',
  SQUARE_CUT: 'SQUARE_CUT',
  PULL_SHOT: 'PULL_SHOT',
  HOOK_SHOT: 'HOOK_SHOT',
  SWEEP_SHOT: 'SWEEP_SHOT',
  FLICK_SHOT: 'FLICK_SHOT',
  LOFTED_DRIVE: 'LOFTED_DRIVE',
  DEFENSIVE: 'DEFENSIVE',
  NONE: 'NONE',
};

export const SHOT_NAMES = {
  STRAIGHT_DRIVE: 'Straight Drive',
  COVER_DRIVE: 'Cover Drive',
  SQUARE_CUT: 'Square Cut',
  PULL_SHOT: 'Pull Shot',
  HOOK_SHOT: 'Hook Shot',
  SWEEP_SHOT: 'Sweep',
  FLICK_SHOT: 'Flick',
  LOFTED_DRIVE: 'Lofted Drive',
  DEFENSIVE: 'Defensive Forward',
  NONE: 'No Shot',
};

export const TIMING_ZONES = {
  VERY_EARLY: 'VERY_EARLY',
  EARLY: 'EARLY',
  PERFECT: 'PERFECT',
  GOOD: 'GOOD',
  LATE: 'LATE',
  VERY_LATE: 'VERY_LATE',
  MISSED: 'MISSED',
};

export const DELIVERY_TYPES = {
  GOOD_LENGTH: 'GOOD_LENGTH',
  YORKER: 'YORKER',
  BOUNCER: 'BOUNCER',
  FULL_TOSS: 'FULL_TOSS',
  INSWING: 'INSWING',
  OUTSWING: 'OUTSWING',
  OFF_SPIN: 'OFF_SPIN',
  LEG_SPIN: 'LEG_SPIN',
  SLOWER_BALL: 'SLOWER_BALL',
};

export const CAMERA_VIEWS = {
  BATSMAN_FOLLOW: 'BATSMAN_FOLLOW',
  BATSMAN_CLOSE: 'BATSMAN_CLOSE',
  BROADCAST: 'BROADCAST',
  BOWLER_VIEW: 'BOWLER_VIEW',
  BALL_CAM: 'BALL_CAM',
};

export const PITCH_DIMENSIONS = {
  LENGTH: 20.12, // 22 yards in meters scale
  WIDTH: 3.05,
  CREASE_DISTANCE: 1.22, // Popping crease distance from stumps
  STUMP_HEIGHT: 0.71,
  STUMP_WIDTH: 0.23,
  BALL_RADIUS: 0.08,
  BAT_LENGTH: 0.88,
};

export const FIELD_RADIUS = 68; // Boundary radius

export const PLAYER_RANKS = [
  { level: 1, title: 'Beginner Batter', xpNeeded: 0 },
  { level: 2, title: 'Street Cricketer', xpNeeded: 250 },
  { level: 3, title: 'Club Player', xpNeeded: 600 },
  { level: 4, title: 'Academy Prospect', xpNeeded: 1200 },
  { level: 5, title: 'Domestic League Star', xpNeeded: 2000 },
  { level: 6, title: 'Pro Batter', xpNeeded: 3200 },
  { level: 7, title: 'National Team Cap', xpNeeded: 4800 },
  { level: 8, title: 'Cricket Icon', xpNeeded: 7000 },
  { level: 9, title: 'World Champion', xpNeeded: 10000 },
  { level: 10, title: 'Cricket Legend', xpNeeded: 15000 },
];
