/**
 * ParticleSystem: Lightweight GPU/Three.js particle effects for pitch dust, bat sparks, and ball trails.
 */

import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.createMaterials();
  }

  createMaterials() {
    // Pitch dust material
    this.dustMaterial = new THREE.MeshBasicMaterial({
      color: 0xdfcfb0,
      transparent: true,
      opacity: 0.65,
    });

    // Bat spark material
    this.sparkMaterial = new THREE.MeshBasicMaterial({
      color: 0xffe680,
      transparent: true,
      opacity: 0.85,
    });

    this.sharedSphereGeo = new THREE.SphereGeometry(0.04, 5, 5);
  }

  spawnPitchDust(position, speed = 1.0) {
    const count = Math.min(12, Math.floor(6 + speed * 4));
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sharedSphereGeo, this.dustMaterial.clone());
      mesh.position.set(
        position.x + (Math.random() - 0.5) * 0.2,
        position.y + 0.05,
        position.z + (Math.random() - 0.5) * 0.2
      );

      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);

      const vx = (Math.random() - 0.5) * 1.5;
      const vy = 0.8 + Math.random() * 1.8;
      const vz = (Math.random() - 0.5) * 1.5;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(vx, vy, vz),
        gravity: -5.0,
        life: 1.0,
        decay: 2.2 + Math.random() * 1.0,
      });
    }
  }

  spawnBatHitSparks(position) {
    for (let i = 0; i < 16; i++) {
      const mesh = new THREE.Mesh(this.sharedSphereGeo, this.sparkMaterial.clone());
      mesh.position.set(position.x, position.y, position.z);
      const scale = 0.5 + Math.random() * 0.7;
      mesh.scale.set(scale, scale, scale);

      const angle = Math.random() * Math.PI * 2;
      const speed = 2.0 + Math.random() * 4.0;
      const vx = Math.cos(angle) * speed;
      const vy = 1.0 + Math.random() * 3.0;
      const vz = Math.sin(angle) * speed;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(vx, vy, vz),
        gravity: -7.0,
        life: 1.0,
        decay: 3.5 + Math.random() * 2.0,
      });
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay * dt;

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        if (p.mesh.material.dispose) p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      p.velocity.y += p.gravity * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);
      p.mesh.material.opacity = p.life;
      p.mesh.scale.multiplyScalar(1.0 + dt * 0.4);
    }
  }

  clear() {
    this.particles.forEach((p) => {
      this.scene.remove(p.mesh);
    });
    this.particles = [];
  }
}
