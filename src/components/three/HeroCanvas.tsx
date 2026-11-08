"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0c10, 0.025);

    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffb703, 2, 50);
    pointLight2.position.set(-10, -10, -5);
    scene.add(pointLight2);

    const lensGroup = new THREE.Group();

    const ringGeo = new THREE.TorusGeometry(5, 0.3, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x1f2833,
      metalness: 0.8,
      roughness: 0.2,
    });
    const outerRing = new THREE.Mesh(ringGeo, ringMat);
    lensGroup.add(outerRing);

    const apertureGeo = new THREE.TorusGeometry(3.5, 0.15, 16, 60);
    const apertureMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
    });
    const innerRing = new THREE.Mesh(apertureGeo, apertureMat);
    lensGroup.add(innerRing);

    const coreGeo = new THREE.IcosahedronGeometry(2, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x4facfe,
      emissive: 0x004488,
      specular: 0xffffff,
      shininess: 100,
      transparent: true,
      opacity: 0.85,
      wireframe: true,
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    lensGroup.add(coreSphere);

    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color(0x00f2fe);
    const color2 = new THREE.Color(0xffb703);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = Math.random() > 0.5 ? color1 : color2;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    scene.add(lensGroup);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      lensGroup.rotation.x = elapsedTime * 0.2;
      lensGroup.rotation.y = elapsedTime * 0.3;
      coreSphere.rotation.y = -elapsedTime * 0.5;
      innerRing.rotation.z = elapsedTime * 0.4;
      particles.rotation.y = elapsedTime * 0.05;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      lensGroup.position.x = targetX * 10;
      lensGroup.position.y = -targetY * 10;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      apertureGeo.dispose();
      apertureMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-80"
      aria-hidden
    />
  );
}
