/**
 * ScoreManager: Tracks runs, wickets, overs, balls timeline, and live cricket statistics.
 */

import { CricketRules } from './CricketRules';

export class ScoreManager {
  constructor() {
    this.reset();
  }

  reset(targetRuns = null, maxOvers = 2) {
    this.totalRuns = 0;
    this.wickets = 0;
    this.maxWickets = 2; // For quick game modes (1 wicket allowed in solo, or 2 in quick match)
    this.totalBalls = 0;
    this.maxOvers = maxOvers;
    this.maxBalls = maxOvers * 6;
    this.targetRuns = targetRuns;
    this.thisOver = []; // History of balls in current over: ['1', '4', '0', '6', 'W', '2']
    this.fours = 0;
    this.sixes = 0;
    this.dots = 0;
    this.history = []; // Complete delivery-by-delivery match log
    this.batterScore = {
      name: 'Player',
      runs: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
    };
    this.bowlerScore = {
      name: 'AI Bowler',
      overs: '0.0',
      runs: 0,
      wickets: 0,
    };
  }

  recordDelivery({ runs = 0, isWicket = false, dismissalType = null, shotType = 'NONE', timingZone = 'GOOD' }) {
    this.totalBalls++;
    this.batterScore.balls++;

    if (isWicket) {
      this.wickets++;
      this.thisOver.push('W');
      this.bowlerScore.wickets++;
    } else {
      this.totalRuns += runs;
      this.batterScore.runs += runs;
      this.bowlerScore.runs += runs;

      if (runs === 4) {
        this.fours++;
        this.batterScore.fours++;
        this.thisOver.push('4');
      } else if (runs === 6) {
        this.sixes++;
        this.batterScore.sixes++;
        this.thisOver.push('6');
      } else if (runs === 0) {
        this.dots++;
        this.thisOver.push('•');
      } else {
        this.thisOver.push(`${runs}`);
      }
    }

    // Over completion check
    if (this.thisOver.length >= 6) {
      this.thisOver = []; // Start fresh over
    }

    // Update bowler overs string (e.g. "1.3")
    const completedOvers = Math.floor(this.totalBalls / 6);
    const ballsInCurrentOver = this.totalBalls % 6;
    this.bowlerScore.overs = `${completedOvers}.${ballsInCurrentOver}`;

    const deliveryRecord = {
      ballNumber: this.totalBalls,
      runs,
      isWicket,
      dismissalType,
      shotType,
      timingZone,
      totalRuns: this.totalRuns,
      wickets: this.wickets,
      timestamp: Date.now(),
    };
    this.history.push(deliveryRecord);

    return deliveryRecord;
  }

  getOversDisplay() {
    const completedOvers = Math.floor(this.totalBalls / 6);
    const ballsInOver = this.totalBalls % 6;
    return `${completedOvers}.${ballsInOver}`;
  }

  getRunRate() {
    return CricketRules.calculateRunRate(this.totalRuns, this.totalBalls);
  }

  getRequiredRunRate() {
    if (!this.targetRuns) return null;
    const runsNeeded = Math.max(0, this.targetRuns - this.totalRuns);
    const ballsRemaining = Math.max(0, this.maxBalls - this.totalBalls);
    return CricketRules.calculateRequiredRunRate(runsNeeded, ballsRemaining);
  }

  getStrikeRate() {
    if (this.batterScore.balls === 0) return '0.0';
    return ((this.batterScore.runs / this.batterScore.balls) * 100).toFixed(1);
  }

  isMatchFinished() {
    // 1. All wickets lost
    if (this.wickets >= this.maxWickets) return true;
    // 2. Overs completed
    if (this.totalBalls >= this.maxBalls) return true;
    // 3. Target achieved in Target Chase
    if (this.targetRuns && this.totalRuns >= this.targetRuns) return true;

    return false;
  }

  getMatchResult() {
    if (this.targetRuns) {
      if (this.totalRuns >= this.targetRuns) {
        return { isWin: true, title: 'TARGET ACHIEVED!', message: `Won with ${this.maxBalls - this.totalBalls} balls to spare!` };
      } else {
        return { isWin: false, title: 'TARGET MISSED', message: `Fell short by ${this.targetRuns - this.totalRuns} runs.` };
      }
    }

    if (this.totalRuns >= 30) {
      return { isWin: true, title: 'VICTORY!', message: `Splendid batting! Scored ${this.totalRuns} runs.` };
    } else {
      return { isWin: false, title: 'MATCH CONCLUDED', message: `Final Score: ${this.totalRuns}/${this.wickets}` };
    }
  }
}
