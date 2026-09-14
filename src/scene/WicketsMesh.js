/**
 * WicketsMesh: 3D cricket stumps and bails with breakaway physics on bowled.
 */

import * as THREE from 'three';
import { PITCH_DIMENSIONS } from '../utils/constants';

export class WicketsMesh {
  constructor(scene, zPosition = 9.8, isBatsmanEnd = true) {
    this.scene = scene;
    this.zPosition = zPosition;
    this.isBatsmanEnd = isBatsmanEnd;
    this.group = new THREE.Group();
    this.stumps = [];
    this.bails = [];
    this.isShattered = false;
    this.shatteredPieces = [];

    this.init();
  }

  init() {
    // Wood material
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0xdeb887,
      roughness: 0.4,
      metalness: 0.1,
    });

    const bailMat = new THREE.MeshStandardMaterial({
      color: 0xeedcb3,
      roughness: 0.3,
      metalness: 0.1,
    });

    const { STUMP_HEIGHT, STUMP_WIDTH } = PITCH_DIMENSIONS;
    const stumpRadius = 0.022;
    const stumpSpacing = STUMP_WIDTH / 2;

    const stumpGeo = new THREE.CylinderGeometry(stumpRadius, stumpRadius * 0.9, STUMP_HEIGHT, 12);
    stumpGeo.translate(0, STUMP_HEIGHT / 2, 0);

    // 3 Stumps (Off, Middle, Leg)
    const offsets = [-stumpSpacing, 0, stumpSpacing];
    offsets.forEach((offsetX, idx) => {
      const stump = new THREE.Mesh(stumpGeo, woodMat);
      stump.position.set(offsetX, 0, this.zPosition);
      stump.castShadow = true;
      stump.receiveShadow = true;
      this.group.add(stump);
      this.stumps.push({
        mesh: stump,
        origPos: stump.position.clone(),
        origRot: stump.rotation.clone(),
      });
    });

    // 2 Bails resting on top
    const bailGeo = new THREE.CylinderGeometry(0.012, 0.012, stumpSpacing * 1.1, 8);
    bailGeo.rotateZ(Math.PI / 2);

    const bailOffsets = [-stumpSpacing * 0.5, stumpSpacing * 0.5];
    bailOffsets.forEach((offsetX) => {
      const bail = new THREE.Mesh(bailGeo, bailMat);
      bail.position.set(offsetX, STUMP_HEIGHT + 0.012, this.zPosition);
      bail.castShadow = true;
      this.group.add(bail);
      this.bails.push({
        mesh: bail,
        origPos: bail.position.clone(),
        origRot: bail.rotation.clone(),
      });
    });

    this.scene.add(this.group);
  }

  shatter(impactVelocity = { x: 0, y: 1.5, z: 6 }) {
    if (this.isShattered) return;
    this.isShattered = true;

    // Send stumps and bails flying realistically
    this.stumps.forEach((s, idx) => {
      const vx = (Math.random() - 0.5) * 3 + (idx - 1) * 1.2;
      const vy = 2.5 + Math.random() * 3.5;
      const vz = 4.0 + Math.random() * 4.0;
      const rotV = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );

      this.shatteredPieces.push({
        mesh: s.mesh,
        velocity: new THREE.Vector3(vx, vy, vz),
        rotVelocity: rotV,
      });
    });

    this.bails.forEach((b) => {
      const vx = (Math.random() - 0.5) * 4;
      const vy = 4.0 + Math.random() * 4.0;
      const vz = 5.0 + Math.random() * 5.0;
      const rotV = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );

      this.shatteredPieces.push({
        mesh: b.mesh,
        velocity: new THREE.Vector3(vx, vy, vz),
        rotVelocity: rotV,
      });
    });
  }

  reset() {
    this.isShattered = false;
    this.shatteredPieces = [];
    this.stumps.forEach((s) => {
      s.mesh.position.copy(s.origPos);
      s.mesh.rotation.copy(s.origRot);
    });
    this.bails.forEach((b) => {
      b.mesh.position.copy(b.origPos);
      b.mesh.rotation.copy(b.origRot);
    });
  }

  update(dt) {
    if (!this.isShattered) return;

    this.shatteredPieces.forEach((p) => {
      p.velocity.y -= 9.81 * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);

      p.mesh.rotation.x += p.rotVelocity.x * dt;
      p.mesh.rotation.y += p.rotVelocity.y * dt;
      p.mesh.rotation.z += p.rotVelocity.z * dt;

      // Floor bounce
      if (p.mesh.position.y < 0.02) {
        p.mesh.position.y = 0.02;
        p.velocity.y = -p.velocity.y * 0.4;
        p.velocity.x *= 0.8;
        p.velocity.z *= 0.8;
      }
    });
  }

  dispose() {
    this.scene.remove(this.group);
  }
}
