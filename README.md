# Cricket Vision AI — 3D Computer-Vision Powered Cricket Game

> **Your movement. Your shot. Your game.**  
> A real-time, playable 3D cricket game running entirely inside your browser, powered by Computer Vision human pose estimation and procedural WebGL/Three.js graphics.

---

## 🏏 Overview & Features

- **Real-Time Computer Vision Detection**: Detects human body landmarks (wrists, elbows, shoulders, hips, knees, ankles) from standard browser webcam feeds with ~25–30 FPS pose processing decoupled from 60 FPS Three.js rendering.
- **Smart Kinematic Shot Classifier**: Heuristically classifies cricket shots based on wrist acceleration, swing plane, elevation, and torso rotation:
  - Straight Drive
  - Cover Drive
  - Square Cut
  - Pull Shot & Hook Shot
  - Lofted Drive (Sixes)
  - Sweep & Flick
  - Forward Defensive
- **Gestural Bowling Challenge**: Detects windmill arm wind-up, overhead reach, and release timing to compute simulated speed (110–155 km/h), swing, pitch line, and bounce length.
- **Interactive Player Calibration**: Automatically normalizes player dimensions relative to shoulder width and torso height for distance-invariant detection.
- **Full Fallback Keyboard & Touch Controls**: Seamless fallback if camera access is denied or unavailable.
- **Realistic 3D Cricket Stadium**: Procedural lush outfield, central clay pitch strip, popping crease markings, 3D stumps with breakaway shatter physics, instanced grandstand crowd, 4 floodlight towers, scoreboard, and Day/Night mode lighting.
- **5 Engaging Game Modes**:
  1. **Quick Match**: 2 Overs against varied AI bowling deliveries.
  2. **Batting Challenge**: 6 testing balls (Yorkers, Bouncers, Inswing, Spin).
  3. **Bowling Challenge**: Bowl using physical arm motion against AI batsman.
  4. **Shot Master**: Execute specific on-demand shots for bonus scores.
  5. **Target Chase**: High-pressure chase (e.g. 36 runs off 12 balls).
- **Career Missions & Progression**: 8 career missions, XP leveling (Beginner Batter to Cricket Legend), coins economy, and statistics persisted in `localStorage`.
- **Procedural Audio Synthesizer**: Pure Web Audio API procedural sound effects (bat-on-ball crack, grass bounce thumps, wicket clattering, crowd roars, boundary sirens) with zero external audio assets required.

---

## 🚀 Quick Start (Local Development)

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready assets will be located in the `dist/` directory.

---

## 🌐 Production Deployment (Hostinger / Static Hosting)

1. Run `npm run build` locally or inside your CI/CD pipeline.
2. Upload the generated files inside `dist/` into your `public_html/` folder on Hostinger.
3. **Important Note on Webcam Access**: Modern browsers strictly enforce that `navigator.mediaDevices.getUserMedia` is only available in **Secure Contexts (HTTPS)** or `localhost`. Ensure your Hostinger domain has an active SSL certificate (Let's Encrypt / HTTPS enabled).

---

## 🎮 Game Controls

### Computer Vision Mode (Primary)
- Stand 1.5m – 2.5m in front of your webcam.
- **Batting**: Assume stance and swing your hands forward, lofted, or across to trigger corresponding cricket strokes in real time.
- **Bowling**: Raise bowling arm overhead and bring down sharply to release the ball.

### Keyboard Fallback Controls
| Key | Action |
| :--- | :--- |
| `Space` | Straight Drive / Swing Bat / Release Bowl |
| `F` | Cover Drive |
| `Q` | Pull Shot |
| `A` / `ArrowLeft` | Square Cut |
| `D` / `ArrowRight` | Flick Shot |
| `W` / `ArrowUp` | Lofted Drive (Six!) |
| `S` / `ArrowDown` | Sweep Shot |
| `E` | Defensive Forward Block |
| `C` | Cycle Camera View (Follow, Broadcast, Close-up, Bowler) |
| `Esc` | Pause / Resume Match |
| `F3` | Toggle Developer Debug Telemetry HUD |

### Touch Controls
- Dedicated on-screen touch buttons for mobile devices: `HIT`, `SIX`, `COVER`, `PULL`, `DEFEND`, and `BOWL`.

---

## 🔒 Security & Privacy Notice
All Computer Vision and camera frame processing runs **100% locally** on the player's device using client-side JavaScript. No video frames, camera feeds, or facial images are ever recorded, saved, or uploaded to any external server.
