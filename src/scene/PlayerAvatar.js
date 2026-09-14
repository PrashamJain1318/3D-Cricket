/**
 * PlayerAvatar: Procedural 3D cricket batsman with styled gear, bat attachment,
 * animated shot states, and direct Computer Vision pose linkage.
 */

import * as THREE from 'three';
import { SHOT_TYPES } from '../utils/constants';
import { lerp } from '../utils/math';

export class PlayerAvatar {
  constructor(scene, position = { x: 0, y: 0, z: 9.0 }) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.position.set(position.x, position.y, position.z);

    this.animState = 'STANCE';
    this.animProgress = 0;
    this.batTargetRot = new THREE.Euler(0, 0, 0);
    this.batTargetPos = new THREE.Vector3(0, 0, 0);

    this.buildCharacter();
    this.scene.add(this.root);
  }

  buildCharacter() {
    // Materials
    const jerseyMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.5 }); // Deep Blue Team India style
    const trousersMat = new THREE.MeshStandardMaterial({ color: 0x172554, roughness: 0.6 });
    const padsMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 }); // White batting pads
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.7 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.3 });
    const visorMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.4 }); // Golden willow bat
    const gripMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.8 }); // Red rubber grip

    // --- TORSO ---
    this.torso = new THREE.Group();
    this.torso.position.set(0, 1.05, 0);

    const chestGeo = new THREE.BoxGeometry(0.42, 0.48, 0.24);
    const chestMesh = new THREE.Mesh(chestGeo, jerseyMat);
    chestMesh.castShadow = true;
    this.torso.add(chestMesh);

    // --- HEAD & HELMET ---
    this.head = new THREE.Group();
    this.head.position.set(0, 0.38, 0);

    const headGeo = new THREE.SphereGeometry(0.13, 16, 16);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    this.head.add(headMesh);

    const helmetGeo = new THREE.SphereGeometry(0.145, 16, 16);
    const helmetMesh = new THREE.Mesh(helmetGeo, helmetMat);
    helmetMesh.position.set(0, 0.02, -0.01);
    this.head.add(helmetMesh);

    // Helmet grill / visor
    const visorGeo = new THREE.TorusGeometry(0.12, 0.012, 8, 16, Math.PI);
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.rotation.x = Math.PI * 0.45;
    visorMesh.position.set(0, -0.02, 0.08);
    this.head.add(visorMesh);

    this.torso.add(this.head);

    // --- ARMS & BAT ---
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.25, 0.18, 0);
    const armGeo = new THREE.CylinderGeometry(0.05, 0.045, 0.32, 10);
    const lArmMesh = new THREE.Mesh(armGeo, jerseyMat);
    lArmMesh.position.set(0, -0.16, 0);
    this.leftArm.add(lArmMesh);

    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.25, 0.18, 0);
    const rArmMesh = new THREE.Mesh(armGeo, jerseyMat);
    rArmMesh.position.set(0, -0.16, 0);
    this.rightArm.add(rArmMesh);

    // Forearms / Gloves
    this.leftForearm = new THREE.Group();
    this.leftForearm.position.set(0, -0.32, 0);
    const gloveGeo = new THREE.BoxGeometry(0.08, 0.12, 0.09);
    const lGloveMesh = new THREE.Mesh(gloveGeo, gloveMat);
    this.leftForearm.add(lGloveMesh);
    this.leftArm.add(this.leftForearm);

    this.rightForearm = new THREE.Group();
    this.rightForearm.position.set(0, -0.32, 0);
    const rGloveMesh = new THREE.Mesh(gloveGeo, gloveMat);
    this.rightForearm.add(rGloveMesh);
    this.rightArm.add(this.rightForearm);

    this.torso.add(this.leftArm);
    this.torso.add(this.rightArm);

    // --- CRICKET BAT ---
    this.bat = new THREE.Group();
    this.bat.position.set(0, -0.1, 0.12);

    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.32, 8);
    const handleMesh = new THREE.Mesh(handleGeo, gripMat);
    handleMesh.position.set(0, 0.16, 0);
    this.bat.add(handleMesh);

    // Blade
    const bladeGeo = new THREE.BoxGeometry(0.12, 0.62, 0.045);
    const bladeMesh = new THREE.Mesh(bladeGeo, woodMat);
    bladeMesh.position.set(0, -0.31, 0);
    bladeMesh.castShadow = true;
    this.bat.add(bladeMesh);

    this.rightForearm.add(this.bat);

    // --- LEGS & PADS ---
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.13, 0.75, 0);
    const thighGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.38, 10);
    const lThighMesh = new THREE.Mesh(thighGeo, trousersMat);
    lThighMesh.position.set(0, -0.19, 0);
    this.leftLeg.add(lThighMesh);

    const padGeo = new THREE.BoxGeometry(0.14, 0.44, 0.12);
    const lPadMesh = new THREE.Mesh(padGeo, padsMat);
    lPadMesh.position.set(0, -0.42, 0.04);
    lPadMesh.castShadow = true;
    this.leftLeg.add(lPadMesh);

    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.13, 0.75, 0);
    const rThighMesh = new THREE.Mesh(thighGeo, trousersMat);
    rThighMesh.position.set(0, -0.19, 0);
    this.rightLeg.add(rThighMesh);

    const rPadMesh = new THREE.Mesh(padGeo, padsMat);
    rPadMesh.position.set(0, -0.42, 0.04);
    rPadMesh.castShadow = true;
    this.rightLeg.add(rPadMesh);

    this.root.add(this.torso);
    this.root.add(this.leftLeg);
    this.root.add(this.rightLeg);

    // Setup initial batting stance posture (Side-on facing bowler down z = -10)
    this.applyStancePose();
  }

  applyStancePose() {
    this.root.rotation.y = Math.PI * 0.45; // Side on
    this.torso.rotation.x = 0.15; // Slight crouch
    this.head.rotation.y = -Math.PI * 0.42; // Head turned straight to bowler

    this.leftArm.rotation.set(0.4, 0.2, 0.3);
    this.rightArm.rotation.set(0.5, -0.3, -0.2);
    this.bat.rotation.set(-0.6, 0.2, 0.1);
  }

  triggerShotAnimation(shotType) {
    this.animState = shotType || SHOT_TYPES.STRAIGHT_DRIVE;
    this.animProgress = 0;
  }

  triggerCelebration() {
    this.animState = 'CELEBRATION';
    this.animProgress = 0;
  }

  triggerDismissal() {
    this.animState = 'DISMISSAL';
    this.animProgress = 0;
  }

  // Map real-time Computer Vision wrist/hand coordinates to virtual bat
  applyVSPose(processedPose, movement) {
    if (!processedPose || !movement) return;

    const { handsCentroid } = processedPose;
    const { wristSpeed, swingTrajectory } = movement;

    // Smoothly blend bat tilt and angle according to hand coordinates
    const targetBatRotX = -0.4 + (swingTrajectory.dy || 0) * 1.5;
    const targetBatRotY = (swingTrajectory.dx || 0) * 2.0;
    const targetBatRotZ = (processedPose.jointAngles.spineTilt || 0) * 0.03;

    this.bat.rotation.x = lerp(this.bat.rotation.x, targetBatRotX, 0.35);
    this.bat.rotation.y = lerp(this.bat.rotation.y, targetBatRotY, 0.35);
    this.bat.rotation.z = lerp(this.bat.rotation.z, targetBatRotZ, 0.35);

    // Torso lean
    this.torso.rotation.z = lerp(this.torso.rotation.z, (processedPose.jointAngles.spineTilt || 0) * 0.015, 0.25);
  }

  update(dt, time) {
    if (this.animState === 'STANCE') {
      // Subtle idle breathing and bat tapping
      const breath = Math.sin(time * 3) * 0.02;
      this.torso.position.y = 1.05 + breath;
      this.bat.position.y = -0.1 + Math.sin(time * 6) * 0.015;
      return;
    }

    this.animProgress += dt * 3.5; // Fast responsive shot animation
    const t = Math.min(1.0, this.animProgress);

    switch (this.animState) {
      case SHOT_TYPES.STRAIGHT_DRIVE:
      case SHOT_TYPES.COVER_DRIVE:
        // Lean forward into full drive with high elbow
        this.torso.rotation.x = lerp(0.15, 0.45, Math.sin(t * Math.PI));
        this.rightArm.rotation.x = lerp(0.5, -1.2, Math.sin(t * Math.PI));
        this.leftArm.rotation.x = lerp(0.4, -0.9, Math.sin(t * Math.PI));
        this.bat.rotation.x = lerp(-0.6, 1.4, Math.sin(t * Math.PI));
        break;

      case SHOT_TYPES.PULL_SHOT:
      case SHOT_TYPES.HOOK_SHOT:
        // Torso swivel, cross bat swing across leg side
        this.root.rotation.y = lerp(Math.PI * 0.45, -Math.PI * 0.15, Math.sin(t * Math.PI));
        this.bat.rotation.set(0.2, 1.2 * Math.sin(t * Math.PI), -0.8 * Math.sin(t * Math.PI));
        break;

      case SHOT_TYPES.SQUARE_CUT:
        // High backlift to offside slash
        this.bat.rotation.set(-0.8, -1.1 * Math.sin(t * Math.PI), 0.5 * Math.sin(t * Math.PI));
        break;

      case SHOT_TYPES.LOFTED_DRIVE:
        // High elevation follow through
        this.bat.rotation.x = lerp(-0.6, 2.2, Math.sin(t * Math.PI));
        this.torso.rotation.x = lerp(0.15, -0.2, Math.sin(t * Math.PI));
        break;

      case SHOT_TYPES.DEFENSIVE:
        // Compact forward defence block
        this.torso.rotation.x = lerp(0.15, 0.35, Math.sin(t * Math.PI));
        this.bat.rotation.set(0.1, 0, 0);
        break;

      case 'CELEBRATION':
        // Bat raised high in triumph
        this.rightArm.rotation.set(-1.8, 0, 0);
        this.bat.rotation.set(1.5, 0, 0);
        this.head.rotation.set(-0.3, 0, 0);
        break;

      case 'DISMISSAL':
        // Head in hands disappointment
        this.head.rotation.set(0.6, 0, 0);
        this.torso.rotation.set(0.4, 0, 0);
        break;
    }

    if (this.animProgress >= 1.0 && this.animState !== 'CELEBRATION' && this.animState !== 'DISMISSAL') {
      this.animState = 'STANCE';
      this.applyStancePose();
    }
  }

  dispose() {
    this.scene.remove(this.root);
  }
}
