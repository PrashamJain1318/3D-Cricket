/**
 * MissionManager: Manages career missions, unlocks, rewards, and progression leveling.
 */

import { PLAYER_RANKS } from '../utils/constants';
import { StorageManager } from '../utils/storage';

export const MISSIONS_LIST = [
  {
    id: 'm1',
    title: 'First Innings',
    description: 'Score 10 runs in a single match.',
    rewardXP: 100,
    rewardCoins: 50,
    check: (stats) => stats.totalRuns >= 10 || stats.matchRuns >= 10,
  },
  {
    id: 'm2',
    title: 'Boundary Hunter',
    description: 'Hit your first FOUR in any mode.',
    rewardXP: 150,
    rewardCoins: 75,
    check: (stats) => stats.matchFours >= 1 || stats.totalFours >= 1,
  },
  {
    id: 'm3',
    title: 'Maximum Power',
    description: 'Clear the ropes for a colossal SIX!',
    rewardXP: 250,
    rewardCoins: 120,
    check: (stats) => stats.matchSixes >= 1 || stats.totalSixes >= 1,
  },
  {
    id: 'm4',
    title: 'Master of Timing',
    description: 'Execute a shot with PERFECT timing.',
    rewardXP: 200,
    rewardCoins: 100,
    check: (stats) => stats.hasPerfectTiming === true,
  },
  {
    id: 'm5',
    title: 'Shot Master Extraordinaire',
    description: 'Successfully execute 3 different shot types.',
    rewardXP: 300,
    rewardCoins: 150,
    check: (stats) => (stats.uniqueShotsCount || 0) >= 3,
  },
  {
    id: 'm6',
    title: 'Wicket Taker',
    description: 'Take your first wicket in Bowling Challenge.',
    rewardXP: 350,
    rewardCoins: 180,
    check: (stats) => stats.totalWickets >= 1 || stats.matchWickets >= 1,
  },
  {
    id: 'm7',
    title: 'Blitzkrieg Chase',
    description: 'Complete a Target Chase victory!',
    rewardXP: 450,
    rewardCoins: 250,
    check: (stats) => stats.targetChasedSuccess === true,
  },
  {
    id: 'm8',
    title: 'Cricket Vision Star',
    description: 'Accumulate 100 career runs.',
    rewardXP: 600,
    rewardCoins: 400,
    check: (stats) => (stats.totalRuns || 0) >= 100,
  },
];

export class MissionManager {
  static checkMissions(currentStats, profile) {
    const progress = StorageManager.getMissionsProgress();
    const newlyCompleted = [];
    let updatedProfile = { ...profile };

    MISSIONS_LIST.forEach((mission) => {
      if (!progress[mission.id]) {
        const isPassed = mission.check(currentStats);
        if (isPassed) {
          progress[mission.id] = { completed: true, timestamp: Date.now() };
          newlyCompleted.push(mission);
          
          updatedProfile.xp += mission.rewardXP;
          updatedProfile.coins += mission.rewardCoins;
        }
      }
    });

    if (newlyCompleted.length > 0) {
      StorageManager.saveMissionsProgress(progress);
      updatedProfile = this.updatePlayerRank(updatedProfile);
      StorageManager.saveProfile(updatedProfile);
    }

    return { newlyCompleted, updatedProfile, progress };
  }

  static updatePlayerRank(profile) {
    let currentLevel = 1;
    for (let i = PLAYER_RANKS.length - 1; i >= 0; i--) {
      if (profile.xp >= PLAYER_RANKS[i].xpNeeded) {
        currentLevel = PLAYER_RANKS[i].level;
        break;
      }
    }
    return { ...profile, level: currentLevel };
  }

  static getPlayerRankTitle(level) {
    const rank = PLAYER_RANKS.find((r) => r.level === level) || PLAYER_RANKS[0];
    return rank.title;
  }
}
