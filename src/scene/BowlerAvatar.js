/**
 * BowlerAvatar: Procedural 3D cricket fast bowler with run-up and delivery action.
 */

import * as THREE from 'three';
import { lerp } from '../utils/math';

export class BowlerAvatar {
  constructor(scene, position = { x: 0.3, y: 0, z: -10 }) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.position.set(position.x, position.y, position.z);

    this.isBowling = false;
    this.runUpProgress = 0;
    this.onRelease = null;
    this.hasReleasedThisBall = false;

    this.buildCharacter();
    this.scene.add(this.root);
  }

  buildCharacter() {
    // Materials
    const jerseyMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.5 }); // Forest Green kit
    const trousersMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.6 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xc68642, roughness: 0.7 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });

    // Torso
    this.torso = new THREE.Group();
    this.torso.position.set(0, 1.1, 0);

    const chestGeo = new THREE.BoxGeometry(0.42, 0.5, 0.24);
    const chestMesh = new THREE.Mesh(chestGeo, jerseyMat);
    chestMesh.castShadow = true;
    this.torso.add(chestMesh);

    // Head
    this.head = new THREE.Group();
    this.head.position.set(0, 0.38, 0);
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), skinMat);
    const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.135, 16, 16), hairMat);
    hairMesh.position.set(0, 0.04, -0.02);
    this.head.add(headMesh);
    this.head.add(hairMesh);
    this.torso.add(this.head);

    // Bowling Arm (Right arm)
    this.bowlingArm = new THREE.Group();
    this.bowlingArm.position.set(0.26, 0.2, 0);
    const armGeo = new THREE.CylinderGeometry(0.05, 0.045, 0.55, 10);
    armGeo.translate(0, -0.25, 0);
    const rArmMesh = new THREE.Mesh(armGeo, jerseyMat);
    this.bowlingArm.add(rArmMesh);
    this.torso.add(this.bowlingArm);

    // Non-bowling Arm (Left arm)
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.26, 0.2, 0);
    const lArmMesh = new THREE.Mesh(armGeo.clone(), jerseyMat);
    this.leftArm.add(lArmMesh);
    this.torso.add(this.leftArm);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.82, 10);
    legGeo.translate(0, -0.41, 0);

    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.13, 0.82, 0);
    const lLegMesh = new THREE.Mesh(legGeo, trousersMat);
    lLegMesh.castShadow = true;
    this.leftLeg.add(lLegMesh);

    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.13, 0.82, 0);
    const rLegMesh = new THREE.Mesh(legGeo.clone(), trousersMat);
    rLegMesh.castShadow = true;
    this.rightLeg.add(rLegMesh);

    this.root.add(this.torso);
    this.root.add(this.leftLeg);
    this.root.add(this.rightLeg);

    this.resetToMark();
  }

  resetToMark() {
    this.root.position.set(0.3, 0, -10.0);
    this.root.rotation.set(0, 0, 0);
    this.torso.rotation.set(0, 0, 0);
    this.bowlingArm.rotation.set(0, 0, 0);
    this.leftArm.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.isBowling = false;
    this.runUpProgress = 0;
    this.hasReleasedThisBall = false;
  }

  startRunUp(onReleaseCallback) {
    this.onRelease = onReleaseCallback;
    this.isBowling = true;
    this.runUpProgress = 0;
    this.hasReleasedThisBall = false;
    this.root.position.set(0.3, 0, -17.0); // Start at top of run-up mark
  }

  update(dt) {
    if (!this.isBowling) return;

    this.runUpProgress += dt * 0.95; // ~1.05s run-up duration
    const t = Math.min(1.0, this.runUpProgress);

    // Smooth approach run from z = -17 to z = -10
    this.root.position.z = lerp(-17.0, -10.0, t);

    // Running legs cycle
    const runCycle = t * 16 * Math.PI;
    this.leftLeg.rotation.x = Math.sin(runCycle) * 0.6;
    this.rightLeg.rotation.x = -Math.sin(runCycle) * 0.6;

    // Delivery stride and windmill arm rotation in final 35% of run-up
    if (t > 0.65) {
      const deliveryT = (t - 0.65) / 0.35; // 0 to 1
      this.bowlingArm.rotation.x = -deliveryT * Math.PI * 2.2; // Full windmill circle
      this.torso.rotation.x = lerp(0, 0.35, deliveryT);

      // Release point occurs when arm is overhead (around deliveryT ≈ 0.5)
      if (deliveryT >= 0.5 && !this.hasReleasedThisBall) {
        this.hasReleasedThisBall = true;
        if (this.onRelease) {
          const releasePos = {
            x: this.root.position.x + 0.25,
            y: 2.15,
            z: this.root.position.z + 0.2,
          };
          this.onRelease(releasePos);
        }
      }
    } else {
      this.bowlingArm.rotation.x = -Math.sin(runCycle) * 0.4;
      this.leftArm.rotation.x = Math.sin(runCycle) * 0.4;
    }

    // Finished delivery
    if (t >= 1.0) {
      this.isBowling = false;
      // Settle at bowling crease
      this.root.position.set(0.3, 0, -10.0);
      this.bowlingArm.rotation.set(0, 0, 0);
      this.torso.rotation.set(0, 0, 0);
      this.leftLeg.rotation.set(0, 0, 0);
      this.rightLeg.rotation.set(0, 0, 0);
    }
  }

  dispose() {
    this.scene.remove(this.root);
  }
}
