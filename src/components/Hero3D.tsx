import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let animationFrameId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 8.5;
      camera.position.y = 0.5;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // Lighting: Warm gold accent light + Forest emerald ambient + Tech specular
      const ambientLight = new THREE.AmbientLight(0xd4e8dc, 1.2);
      scene.add(ambientLight);

      const goldLight = new THREE.PointLight(0xd4a574, 3.5, 20);
      goldLight.position.set(4, 4, 5);
      scene.add(goldLight);

      const emeraldLight = new THREE.PointLight(0x58c28a, 2.5, 20);
      emeraldLight.position.set(-4, -2, 4);
      scene.add(emeraldLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 1.8);
      topLight.position.set(0, 8, 4);
      scene.add(topLight);

      // Main Group that rotates smoothly
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. Sleek Smartphone / Tech Device Core
      const phoneGeometry = new THREE.BoxGeometry(2.4, 4.4, 0.22);
      const phoneMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x11291b,
        metalness: 0.85,
        roughness: 0.2,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
      });
      const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
      mainGroup.add(phone);

      // Screen Glass with subtle glowing circular HUD
      const screenGeometry = new THREE.PlaneGeometry(2.15, 4.0);
      const screenCanvas = document.createElement('canvas');
      screenCanvas.width = 512;
      screenCanvas.height = 1024;
      const ctx = screenCanvas.getContext('2d')!;
      
      // Draw Circular Economy HUD texture on screen
      ctx.fillStyle = '#0f2418';
      ctx.fillRect(0, 0, 512, 1024);
      
      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, 512, 1024);
      grad.addColorStop(0, '#1A5C3A');
      grad.addColorStop(1, '#0d281a');
      ctx.fillStyle = grad;
      ctx.roundRect(24, 60, 464, 900, 24);
      ctx.fill();

      // Circular revival symbol on screen
      ctx.strokeStyle = '#D4A574';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(256, 460, 140, 0.2 * Math.PI, 1.8 * Math.PI);
      ctx.stroke();

      ctx.strokeStyle = '#58C28A';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(256, 460, 140, 1.2 * Math.PI, 0.8 * Math.PI);
      ctx.stroke();

      // Screen Text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('YourScraper', 256, 440);
      ctx.fillStyle = '#D4A574';
      ctx.font = '500 24px sans-serif';
      ctx.fillText('CIRCULAR VALUATION', 256, 490);
      ctx.fillStyle = '#A3CBB3';
      ctx.font = '400 20px sans-serif';
      ctx.fillText('E-Waste → New Purpose', 256, 680);

      const screenTexture = new THREE.CanvasTexture(screenCanvas);
      const screenMaterial = new THREE.MeshBasicMaterial({
        map: screenTexture,
        transparent: true,
      });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.z = 0.12;
      mainGroup.add(screen);

      // Gold Metallic Edge Frame for smartphone
      const frameGeometry = new THREE.BoxGeometry(2.46, 4.46, 0.18);
      const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4a574,
        metalness: 0.95,
        roughness: 0.25,
      });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      mainGroup.add(frame);

      // 2. Circular Orbit Rings (The Circular Economy Loops)
      const ring1Geom = new THREE.TorusGeometry(3.6, 0.04, 16, 100);
      const ring1Mat = new THREE.MeshStandardMaterial({
        color: 0xd4a574,
        metalness: 0.9,
        roughness: 0.3,
        emissive: 0x543f25,
        emissiveIntensity: 0.4,
      });
      const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      mainGroup.add(ring1);

      const ring2Geom = new THREE.TorusGeometry(4.2, 0.03, 16, 100);
      const ring2Mat = new THREE.MeshStandardMaterial({
        color: 0x58c28a,
        metalness: 0.8,
        roughness: 0.4,
        emissive: 0x1f5c3a,
        emissiveIntensity: 0.3,
      });
      const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = -Math.PI / 5;
      mainGroup.add(ring2);

      // 3. Orbiting Microchips and Electronic Nodes
      const nodes: THREE.Mesh[] = [];
      const nodeCount = 7;
      const chipGeometry = new THREE.BoxGeometry(0.35, 0.35, 0.12);
      const chipMat = new THREE.MeshStandardMaterial({
        color: 0xd4a574,
        metalness: 0.9,
        roughness: 0.2,
      });
      const greenMat = new THREE.MeshStandardMaterial({
        color: 0x58c28a,
        metalness: 0.7,
        roughness: 0.3,
      });

      for (let i = 0; i < nodeCount; i++) {
        const mesh = new THREE.Mesh(chipGeometry, i % 2 === 0 ? chipMat : greenMat);
        mainGroup.add(mesh);
        nodes.push(mesh);
      }

      // 4. Floating Particles (Recoverable precious materials: gold, silicon, copper)
      const particleCount = 45;
      const particleGeom = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const r = 2.5 + Math.random() * 3.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI;

        positions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
        positions[i * 3 + 1] = r * Math.sin(phi);
        positions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);

        // Gold & Emerald particles
        if (Math.random() > 0.5) {
          colors[i * 3] = 0.83; // R (Gold)
          colors[i * 3 + 1] = 0.65; // G
          colors[i * 3 + 2] = 0.45; // B
        } else {
          colors[i * 3] = 0.35; // R (Mint)
          colors[i * 3 + 1] = 0.76; // G
          colors[i * 3 + 2] = 0.54; // B
        }
      }

      particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.09,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
      });
      const particleSystem = new THREE.Points(particleGeom, particleMat);
      mainGroup.add(particleSystem);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        setIsInteractive(true);
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0];
          const rect = container.getBoundingClientRect();
          mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
          mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        }
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse lerp
        targetX += (mouseX * 0.4 - targetX) * 0.05;
        targetY += (mouseY * 0.3 - targetY) * 0.05;

        // Floating & rotation
        mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15 + targetY * 0.5;
        mainGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.35 + targetX;
        mainGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.15 - targetY * 0.5;
        mainGroup.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05;

        // Rotate circular rings in opposite directions
        ring1.rotation.z = elapsedTime * 0.25;
        ring2.rotation.z = -elapsedTime * 0.18;
        particleSystem.rotation.y = elapsedTime * 0.08;

        // Update orbiting nodes
        nodes.forEach((node, idx) => {
          const angle = elapsedTime * 0.6 + (idx * Math.PI * 2) / nodeCount;
          const radius = 3.6;
          node.position.x = Math.cos(angle) * radius;
          node.position.y = Math.sin(angle * 1.5) * 1.2;
          node.position.z = Math.sin(angle) * (radius * 0.6);
          node.rotation.x = elapsedTime * 1.5;
          node.rotation.y = elapsedTime * 2;
        });

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (err) {
      console.warn('Three.js initialization notice, using visual fallback:', err);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="relative w-72 h-96 rounded-3xl bg-[#133E27] border border-[#D4A574]/30 shadow-2xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#1A5C3A] border-2 border-[#D4A574] flex items-center justify-center mb-4 shadow-lg">
            <span className="text-3xl">♻️</span>
          </div>
          <h4 className="font-heading font-bold text-white text-lg mb-1">YourScraper Ecosystem</h4>
          <p className="text-sm text-emerald-200/80">Turn Trash Into Treasure</p>
          <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#D4A574] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#D4A574] animate-pulse" />
            Live Circular Valuation
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
      {/* Three.js canvas container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating interactive badge */}
      <div className="absolute bottom-4 right-4 sm:right-8 bg-[#0F291B]/80 backdrop-blur-md border border-[#D4A574]/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#58C28A] animate-pulse" />
        <span className="text-[11px] font-medium text-[#E4EDE7] tracking-wide">
          {isInteractive ? 'Interactive 3D Ecosystem' : 'Hover to rotate circular loop'}
        </span>
      </div>
    </div>
  );
};
