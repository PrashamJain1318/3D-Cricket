/**
 * StadiumScene: Complete 3D Cricket Stadium with Pitch, Boundary, Stands, Instanced Crowd,
 * Floodlights, Ball Mesh, Dynamic Lighting, and Cinematic Camera Controller.
 */

import * as THREE from 'three';
import { PITCH_DIMENSIONS, FIELD_RADIUS, CAMERA_VIEWS } from '../utils/constants';
import { clamp, lerp } from '../utils/math';

export class StadiumScene {
  constructor(canvasContainer, options = {}) {
    this.container = canvasContainer;
    this.quality = options.quality || 'medium';
    this.dayNightMode = options.dayNightMode || 'day';
    this.currentCameraView = options.cameraView || CAMERA_VIEWS.BATSMAN_FOLLOW;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300);
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.quality !== 'low',
      powerPreference: 'high-performance',
      alpha: false,
    });

    this.ballMesh = null;
    this.ballTrailLine = null;
    this.lights = {};
    this.floodlights = [];
    this.cameraShakeIntensity = 0;
    this.cameraTargetPos = new THREE.Vector3(0, 3.2, 14.5);
    this.cameraLookTarget = new THREE.Vector3(0, 1.2, 0);

    this.initRenderer();
    this.buildLighting();
    this.buildPitchAndGround();
    this.buildBoundaryAndStands();
    this.buildFloodlights();
    this.buildScoreboardScreen();
    this.buildBallMesh();
    this.setDayNightMode(this.dayNightMode);

    this.onWindowResize = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.onWindowResize);
  }

  initRenderer() {
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.quality === 'high' ? 2.0 : 1.5));
    this.renderer.shadowMap.enabled = this.quality !== 'low';
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.container.appendChild(this.renderer.domElement);
  }

  buildLighting() {
    // Ambient Light
    this.lights.ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.lights.ambient);

    // Directional Sun Light
    this.lights.sun = new THREE.DirectionalLight(0xfffaed, 1.4);
    this.lights.sun.position.set(35, 60, 40);
    if (this.quality !== 'low') {
      this.lights.sun.castShadow = true;
      this.lights.sun.shadow.mapSize.width = 1024;
      this.lights.sun.shadow.mapSize.height = 1024;
      this.lights.sun.shadow.camera.near = 10;
      this.lights.sun.shadow.camera.far = 150;
      this.lights.sun.shadow.camera.left = -30;
      this.lights.sun.shadow.camera.right = 30;
      this.lights.sun.shadow.camera.top = 30;
      this.lights.sun.shadow.camera.bottom = -30;
      this.lights.sun.shadow.bias = -0.0005;
    }
    this.scene.add(this.lights.sun);

    // Hemisphere Light
    this.lights.hemi = new THREE.HemisphereLight(0x87ceeb, 0x1e3a1e, 0.45);
    this.scene.add(this.lights.hemi);

    // Atmosphere Fog
    this.scene.fog = new THREE.FogExp2(0xcfe6ff, 0.0045);
    this.scene.background = new THREE.Color(0x87ceeb);
  }

  buildPitchAndGround() {
    // 1. Lush Outfield Grass (Oval)
    const grassGeo = new THREE.CircleGeometry(FIELD_RADIUS + 8, 48);
    grassGeo.rotateX(-Math.PI / 2);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x228833, // Emerald green cricket outfield
      roughness: 0.85,
      metalness: 0.05,
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.receiveShadow = true;
    grassMesh.position.y = -0.01;
    this.scene.add(grassMesh);

    // Outfield concentric cut grass stripes
    for (let r = 15; r <= FIELD_RADIUS; r += 12) {
      const ringGeo = new THREE.RingGeometry(r, r + 6, 48);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x2bb042,
        transparent: true,
        opacity: 0.2,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.y = 0.001;
      this.scene.add(ringMesh);
    }

    // 2. Central Cricket Pitch Strip
    const { LENGTH, WIDTH, CREASE_DISTANCE } = PITCH_DIMENSIONS;
    const pitchGeo = new THREE.PlaneGeometry(WIDTH, LENGTH + 2.5);
    pitchGeo.rotateX(-Math.PI / 2);

    const pitchMat = new THREE.MeshStandardMaterial({
      color: 0xcaa670, // Natural dry clay / turf pitch strip
      roughness: 0.95,
      metalness: 0.02,
    });
    const pitchMesh = new THREE.Mesh(pitchGeo, pitchMat);
    pitchMesh.receiveShadow = true;
    pitchMesh.position.set(0, 0.005, 0);
    this.scene.add(pitchMesh);

    // 3. Crease Markings (White painted lines)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const createCreaseLine = (width, thickness, zPos) => {
      const lineGeo = new THREE.PlaneGeometry(width, thickness);
      lineGeo.rotateX(-Math.PI / 2);
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.set(0, 0.012, zPos);
      this.scene.add(line);
    };

    // Batsman Popping Crease (z = 8.8) and Bowling Crease (z = 10.0)
    createCreaseLine(2.44, 0.08, 8.8);
    createCreaseLine(2.64, 0.05, 10.0);

    // Bowler Popping Crease (z = -8.8) and Bowling Crease (z = -10.0)
    createCreaseLine(2.44, 0.08, -8.8);
    createCreaseLine(2.64, 0.05, -10.0);
  }

  buildBoundaryAndStands() {
    // Boundary Rope
    const ropeRadius = FIELD_RADIUS;
    const ropeGeo = new THREE.TorusGeometry(ropeRadius, 0.08, 8, 64);
    ropeGeo.rotateX(Math.PI / 2);
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 });
    const ropeMesh = new THREE.Mesh(ropeGeo, ropeMat);
    ropeMesh.position.y = 0.08;
    this.scene.add(ropeMesh);

    // Triangular Advertising Wedges along boundary
    const adCount = 36;
    const adGeo = new THREE.CylinderGeometry(0.3, 0.3, 2.5, 3);
    adGeo.rotateZ(Math.PI / 2);
    const adMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 });

    for (let i = 0; i < adCount; i++) {
      const angle = (i / adCount) * Math.PI * 2;
      const x = Math.sin(angle) * (ropeRadius + 0.8);
      const z = Math.cos(angle) * (ropeRadius + 0.8);

      const ad = new THREE.Mesh(adGeo, adMat);
      ad.position.set(x, 0.15, z);
      ad.rotation.y = angle + Math.PI / 2;
      this.scene.add(ad);
    }

    // Tiered Grandstands with Instanced Spectators
    this.buildGrandstands();
  }

  buildGrandstands() {
    const standInnerRadius = FIELD_RADIUS + 4;
    const standOuterRadius = FIELD_RADIUS + 24;
    const tiers = 6;
    const standMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });

    for (let t = 0; t < tiers; t++) {
      const r1 = standInnerRadius + t * 3.2;
      const r2 = r1 + 3.0;
      const height = (t + 1) * 2.2;

      const tierGeo = new THREE.CylinderGeometry(r2, r1, 2.0, 48, 1, true);
      const tierMesh = new THREE.Mesh(tierGeo, standMat);
      tierMesh.position.y = height - 1.0;
      this.scene.add(tierMesh);
    }

    // Instanced Crowd Spectators (Performant colored boxes)
    const crowdCount = this.quality === 'low' ? 300 : 1200;
    const crowdGeo = new THREE.BoxGeometry(0.35, 0.65, 0.35);
    const crowdMat = new THREE.MeshStandardMaterial({ roughness: 0.8 });
    const instancedCrowd = new THREE.InstancedMesh(crowdGeo, crowdMat, crowdCount);

    const dummy = new THREE.Object3D();
    const colors = [
      new THREE.Color(0xef4444),
      new THREE.Color(0x3b82f6),
      new THREE.Color(0xf59e0b),
      new THREE.Color(0x10b981),
      new THREE.Color(0xffffff),
      new THREE.Color(0x8b5cf6),
    ];

    for (let i = 0; i < crowdCount; i++) {
      const tierIdx = Math.floor(Math.random() * tiers);
      const radius = standInnerRadius + tierIdx * 3.2 + 1.2 + (Math.random() - 0.5) * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (tierIdx + 1) * 2.2 + 0.35;

      dummy.position.set(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
      dummy.rotation.y = angle + Math.PI; // Facing stadium center
      dummy.scale.set(0.9 + Math.random() * 0.3, 0.9 + Math.random() * 0.3, 0.9 + Math.random() * 0.3);
      dummy.updateMatrix();

      instancedCrowd.setMatrixAt(i, dummy.matrix);
      instancedCrowd.setColorAt(i, colors[Math.floor(Math.random() * colors.length)]);
    }

    instancedCrowd.instanceMatrix.needsUpdate = true;
    if (instancedCrowd.instanceColor) instancedCrowd.instanceColor.needsUpdate = true;
    this.scene.add(instancedCrowd);
  }

  buildFloodlights() {
    const towerPositions = [
      { x: -55, z: -55 },
      { x: 55, z: -55 },
      { x: -55, z: 55 },
      { x: 55, z: 55 },
    ];

    const towerMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.6, roughness: 0.4 });
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    towerPositions.forEach((pos, idx) => {
      const towerGroup = new THREE.Group();
      towerGroup.position.set(pos.x, 0, pos.z);

      // Main pillar mast
      const mastGeo = new THREE.CylinderGeometry(0.5, 1.2, 38, 8);
      mastGeo.translate(0, 19, 0);
      const mast = new THREE.Mesh(mastGeo, towerMat);
      towerGroup.add(mast);

      // Light grid panel
      const panelGeo = new THREE.BoxGeometry(6, 4, 0.5);
      const panel = new THREE.Mesh(panelGeo, towerMat);
      panel.position.set(0, 38, 0);
      panel.lookAt(0, 1, 0); // Point towards pitch center

      // Light bulbs array
      const bulbGeo = new THREE.SphereGeometry(0.35, 8, 8);
      for (let bx = -2.2; bx <= 2.2; bx += 1.1) {
        for (let by = -1.2; by <= 1.2; by += 1.2) {
          const bulb = new THREE.Mesh(bulbGeo, lampMat);
          bulb.position.set(bx, by, 0.3);
          panel.add(bulb);
        }
      }

      towerGroup.add(panel);
      this.scene.add(towerGroup);

      // Actual SpotLight from tower
      const spotLight = new THREE.SpotLight(0xfff5e6, 0, 140, Math.PI * 0.3, 0.4, 1.0);
      spotLight.position.set(pos.x, 38, pos.z);
      spotLight.target.position.set(0, 0, 0);
      this.scene.add(spotLight);
      this.scene.add(spotLight.target);
      this.floodlights.push(spotLight);
    });
  }

  buildScoreboardScreen() {
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 24, -FIELD_RADIUS - 16);

    const frameGeo = new THREE.BoxGeometry(22, 10, 1.5);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    screenGroup.add(frame);

    // Screen display panel
    const displayGeo = new THREE.PlaneGeometry(20, 8.5);
    const displayMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.z = 0.8;
    screenGroup.add(display);

    this.scene.add(screenGroup);
  }

  buildBallMesh() {
    const ballGeo = new THREE.SphereGeometry(PITCH_DIMENSIONS.BALL_RADIUS, 16, 16);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626, // Classic Red Kookaburra cricket ball
      roughness: 0.35,
      metalness: 0.15,
    });

    this.ballMesh = new THREE.Mesh(ballGeo, ballMat);
    this.ballMesh.castShadow = true;
    this.ballMesh.position.set(0, 1.5, -10);
    this.scene.add(this.ballMesh);

    // White seam ring around cricket ball
    const seamGeo = new THREE.TorusGeometry(PITCH_DIMENSIONS.BALL_RADIUS * 1.01, 0.005, 8, 24);
    const seamMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const seamMesh = new THREE.Mesh(seamGeo, seamMat);
    seamMesh.rotation.x = Math.PI / 2;
    this.ballMesh.add(seamMesh);
  }

  setDayNightMode(mode = 'day') {
    this.dayNightMode = mode;
    if (mode === 'day') {
      this.scene.background = new THREE.Color(0x87ceeb);
      this.scene.fog.color.setHex(0xcfe6ff);
      this.lights.ambient.intensity = 0.65;
      this.lights.sun.intensity = 1.4;
      this.lights.hemi.intensity = 0.45;
      this.floodlights.forEach((fl) => (fl.intensity = 0));
    } else {
      // Night Match Under Floodlights
      this.scene.background = new THREE.Color(0x050811);
      this.scene.fog.color.setHex(0x0a1128);
      this.lights.ambient.intensity = 0.2;
      this.lights.sun.intensity = 0.15;
      this.lights.hemi.intensity = 0.15;
      this.floodlights.forEach((fl) => (fl.intensity = 1.6));
    }
  }

  setCameraView(view) {
    this.currentCameraView = view;
  }

  cycleCameraView() {
    const views = [
      CAMERA_VIEWS.BATSMAN_FOLLOW,
      CAMERA_VIEWS.BROADCAST,
      CAMERA_VIEWS.BATSMAN_CLOSE,
      CAMERA_VIEWS.BOWLER_VIEW,
    ];
    const currIdx = views.indexOf(this.currentCameraView);
    const nextIdx = (currIdx + 1) % views.length;
    this.setCameraView(views[nextIdx]);
    return views[nextIdx];
  }

  triggerCameraShake(amount = 0.3) {
    this.cameraShakeIntensity = Math.min(0.8, this.cameraShakeIntensity + amount);
  }

  updateCamera(ballPhysics, dt) {
    // Camera View Positions
    let targetPos = new THREE.Vector3();
    let lookTarget = new THREE.Vector3();

    const ballPos = ballPhysics ? ballPhysics.position : { x: 0, y: 1.0, z: 0 };
    const isBallHit = ballPhysics && ballPhysics.velocity.z < -2.0;

    if (this.currentCameraView === CAMERA_VIEWS.BALL_CAM || (isBallHit && Math.abs(ballPhysics.velocity.z) > 15)) {
      // Cinematic Ball Follow Cam on big hit
      targetPos.set(ballPos.x * 0.4, Math.max(3.5, ballPos.y + 4.0), ballPos.z + 12.0);
      lookTarget.set(ballPos.x, ballPos.y, ballPos.z);
    } else {
      switch (this.currentCameraView) {
        case CAMERA_VIEWS.BATSMAN_FOLLOW:
          targetPos.set(0.6, 2.7, 13.8); // Behind batsman looking towards bowler
          lookTarget.set(0, 1.4, -4.0);
          break;

        case CAMERA_VIEWS.BATSMAN_CLOSE:
          targetPos.set(1.6, 1.8, 10.5); // Close side-on action angle
          lookTarget.set(0, 1.2, 8.5);
          break;

        case CAMERA_VIEWS.BROADCAST:
          targetPos.set(0, 9.5, -28.0); // High TV camera behind bowler
          lookTarget.set(0, 1.0, 6.0);
          break;

        case CAMERA_VIEWS.BOWLER_VIEW:
          targetPos.set(0, 2.8, -16.0); // Bowler third person view
          lookTarget.set(0, 1.2, 9.0);
          break;

        default:
          targetPos.set(0.6, 2.7, 13.8);
          lookTarget.set(0, 1.4, -4.0);
      }
    }

    // Smooth camera interpolation
    this.cameraTargetPos.lerp(targetPos, Math.min(1.0, dt * 6.0));
    this.cameraLookTarget.lerp(lookTarget, Math.min(1.0, dt * 8.0));

    // Apply Camera Shake
    let shakeOffset = new THREE.Vector3();
    if (this.cameraShakeIntensity > 0.005) {
      shakeOffset.set(
        (Math.random() - 0.5) * this.cameraShakeIntensity,
        (Math.random() - 0.5) * this.cameraShakeIntensity,
        (Math.random() - 0.5) * this.cameraShakeIntensity
      );
      this.cameraShakeIntensity *= Math.max(0, 1.0 - dt * 6.0);
    }

    this.camera.position.copy(this.cameraTargetPos).add(shakeOffset);
    this.camera.lookAt(this.cameraLookTarget);
  }

  updateBallMesh(ballPhysics) {
    if (!this.ballMesh || !ballPhysics) return;
    this.ballMesh.position.set(ballPhysics.position.x, ballPhysics.position.y, ballPhysics.position.z);
    // Ball spin rotation
    this.ballMesh.rotation.x += 0.2;
    this.ballMesh.rotation.y += 0.1;
  }

  render(ballPhysics, dt) {
    this.updateCamera(ballPhysics, dt);
    this.updateBallMesh(ballPhysics);
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    if (!this.container) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  dispose() {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer && this.renderer.domElement && this.container) {
      this.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
  }
}
