/**
 * LocalStorage manager for Cricket Vision AI player progression and settings
 */

const STORAGE_KEYS = {
  PROFILE: 'cva_player_profile',
  SETTINGS: 'cva_game_settings',
  MISSIONS: 'cva_missions_progress',
  STATS: 'cva_game_stats',
};

const DEFAULT_PROFILE = {
  level: 1,
  xp: 0,
  coins: 100,
  bestScore: 0,
  matchesPlayed: 0,
  matchesWon: 0,
  totalRuns: 0,
  totalFours: 0,
  totalSixes: 0,
  totalWickets: 0,
};

const DEFAULT_SETTINGS = {
  soundEnabled: true,
  musicEnabled: true,
  volume: 0.8,
  graphicsQuality: 'medium', // 'low' | 'medium' | 'high'
  dayNightMode: 'day', // 'day' | 'night'
  cameraView: 'BATSMAN_FOLLOW',
  showPoseOverlay: true,
  mirrorWebcam: true,
  handedness: 'right', // 'right' | 'left'
  battingSensitivity: 1.0,
};

export class StorageManager {
  static getProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return data ? { ...DEFAULT_PROFILE, ...JSON.parse(data) } : { ...DEFAULT_PROFILE };
    } catch {
      return { ...DEFAULT_PROFILE };
    }
  }

  static saveProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('Failed to save profile to localStorage', e);
    }
  }

  static getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : { ...DEFAULT_SETTINGS };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  static saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings to localStorage', e);
    }
  }

  static getMissionsProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MISSIONS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  static saveMissionsProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEYS.MISSIONS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save missions to localStorage', e);
    }
  }
}
