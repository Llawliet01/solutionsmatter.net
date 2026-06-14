'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Cpu, Layout, Compass, Users } from 'lucide-react';
import CTA from '@/components/CTA';

export default function AboutPage() {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Track scroll progress for reactive HTML text overlays [0 to 1]
  const [scrollProgress, setScrollProgress] = useState(0);

  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Security-First Architecture',
      desc: 'We integrate role-based database permissions, HIPAA encryption compliance, and API security tokens within every custom build from day one.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Technical Excellence',
      desc: 'Our codebases rely on industry-standard React/NextJS frontends, PostgreSQL databases, Docker container pipelines, and AWS staging networks.'
    },
    {
      icon: <Layout size={28} />,
      title: 'Operational Transparency',
      desc: 'We coordinate tasks through two-week Agile sprints. Clients receive access to live staging links and code logs to monitor development progress.'
    },
    {
      icon: <Compass size={28} />,
      title: 'Absolute IP Ownership',
      desc: 'We build clean, customized systems with zero per-user licensing fees. The software code and database files belong entirely to your company.'
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const canvasEl = canvasRef.current;
    const trackEl = trackRef.current;
    if (!canvasEl || !trackEl) return;

    document.body.classList.add('hide-footer');

    // ─── 1. THREE.JS SCENE SETUP ───
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      canvasEl.clientWidth / canvasEl.clientHeight,
      0.1,
      100
    );
    camera.position.z = 16;

    // Renderer (transparent background)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvasEl.clientWidth, canvasEl.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ─── 2. TEXT POINT SAMPLING ───
    // Draw "SOLUTIONS" and "MATTER" onto offscreen canvas and sample pixel positions
    const getTargetCoordinates = () => {
      const w = 800;
      const h = 300;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return [];

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      // Stylized premium bold sans-serif text shape (much bolder for clarity)
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 80px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SOLUTIONS', w / 2, 105);
      ctx.fillText('MATTER', w / 2, 185);

      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      const points = [];
      const step = 4; // Sample every 4th pixel for high resolution

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const idx = (y * w + x) * 4;
          const redVal = pixels[idx];
          if (redVal > 200) { // White pixel representing text font
            points.push({
              x: (x - w / 2) * 0.028,
              y: -(y - h / 2) * 0.028,
              z: (Math.random() - 0.5) * 0.3 // Soft 3D depth jitter
            });
          }
        }
      }
      return points;
    };

    const targetPoints = getTargetCoordinates();
    const N = targetPoints.length || 1000;

    // ─── 3. PARTICLE POINTS GEOMETRY ───
    const randomPositions = [];
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsPosArray = new Float32Array(N * 3);

    for (let i = 0; i < N; i++) {
      // Generate scattered random coordinates in a 3D sphere/box
      const rx = (Math.random() - 0.5) * 42;
      const ry = (Math.random() - 0.5) * 42;
      const rz = (Math.random() - 0.5) * 42;
      randomPositions.push({ x: rx, y: ry, z: rz });

      pointsPosArray[i * 3] = rx;
      pointsPosArray[i * 3 + 1] = ry;
      pointsPosArray[i * 3 + 2] = rz;
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointsPosArray, 3));

    // Smooth round particle texture drawing
    const createParticleTexture = () => {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const cx = c.getContext('2d');
      const grad = cx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      cx.fillStyle = grad;
      cx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(c);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#8B5CF6'), // Brighter brand lavender for legibility
      size: 0.26, // Sleeker dots size
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      map: createParticleTexture(),
      depthWrite: false
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // ─── 4. CONNECTING NETWORK LINES ───
    const links = [];
    const maxLinks = 1600;
    // Lower threshold (0.20 units = ~7px) connects neighbors *within* letters
    // but prevents links from bridging across the empty gap between different letters
    const threshold = 0.20; 

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const p1 = targetPoints[i];
        const p2 = targetPoints[j];
        if (p1 && p2) {
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
          if (dist < threshold) {
            links.push({ i, j });
            if (links.length >= maxLinks) break;
          }
        }
      }
      if (links.length >= maxLinks) break;
    }

    const linesGeometry = new THREE.BufferGeometry();
    const linesPosArray = new Float32Array(links.length * 6);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linesPosArray, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#A78BFA'), // Brighter glowing lines
      transparent: true,
      opacity: 0, // initially hidden
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    // ─── 5. GSAP SCROLL SCUBBING BINDING ───
    let scrollObj = { progress: 0 };

    const scrollTimeline = gsap.to(scrollObj, {
      progress: 1,
      scrollTrigger: {
        trigger: trackEl,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.15,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        }
      }
    });



    // ─── 7. ANIMATION RENDER LOOP ───
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const p = scrollObj.progress; // scrubbed scroll progress [0 to 1]

      const pointsPos = pointsGeometry.attributes.position.array;
      const currentPos = [];



      // Morph particle positions
      for (let i = 0; i < N; i++) {
        const r = randomPositions[i];
        const t = targetPoints[i] || r; // Fallback to random if target isn't defined

        // Organic assembly stagger delay based on index (completes at 1.0 progress)
        const startProgress = 0.05 + (i % 100) * 0.002; // ranges from 0.05 to 0.25
        const duration = 0.75;
        let localT = (p - startProgress) / duration;
        localT = Math.max(0, Math.min(1, localT));

        // Smooth cubic ease-in-out curve
        const easedT = localT < 0.5
          ? 4 * localT * localT * localT
          : 1 - Math.pow(-2 * localT + 2, 3) / 2;

        // Ambient float space drift (drifts at 0% scroll, locks into position at 100%)
        const driftX = Math.sin(time * 0.6 + i * 0.1) * 0.8 * (1 - easedT);
        const driftY = Math.cos(time * 0.6 + i * 0.15) * 0.8 * (1 - easedT);
        const driftZ = Math.sin(time * 0.4 + i * 0.2) * 0.6 * (1 - easedT);

        let px = r.x + (t.x - r.x) * easedT + driftX;
        let py = r.y + (t.y - r.y) * easedT + driftY;
        let pz = r.z + (t.z - r.z) * easedT + driftZ;



        pointsPos[i * 3] = px;
        pointsPos[i * 3 + 1] = py;
        pointsPos[i * 3 + 2] = pz;

        currentPos.push({ x: px, y: py, z: pz });
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      // Update lines segments coordinates to match current points
      let lineIdx = 0;
      const linesPos = linesGeometry.attributes.position.array;
      for (let k = 0; k < links.length; k++) {
        const link = links[k];
        const p1 = currentPos[link.i];
        const p2 = currentPos[link.j];
        if (p1 && p2) {
          linesPos[lineIdx++] = p1.x;
          linesPos[lineIdx++] = p1.y;
          linesPos[lineIdx++] = p1.z;
          linesPos[lineIdx++] = p2.x;
          linesPos[lineIdx++] = p2.y;
          linesPos[lineIdx++] = p2.z;
        }
      }
      linesGeometry.attributes.position.needsUpdate = true;

      // Scale line connectivity opacity based on scroll
      if (p < 0.3) {
        linesMaterial.opacity = 0;
      } else {
        const lineFade = (p - 0.3) / 0.35; // completes by 65% scroll
        linesMaterial.opacity = Math.max(0, Math.min(0.35, lineFade * 0.35));
      }

      // Camera drift offset
      camera.position.x = Math.sin(time * 0.2) * 0.4;
      camera.position.y = Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ─── 8. RESIZE EVENT HANDLER ───
    const handleResize = () => {
      const width = canvasEl.clientWidth;
      const height = canvasEl.clientHeight;
      const aspect = width / height;

      // Adjust camera distance dynamically for mobile viewports
      if (aspect < 1.0) {
        camera.position.z = 24; // Push back on portrait mobile screen
      } else {
        camera.position.z = 16; // Normal desktop view
      }

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Trigger initial layout setup

    // ─── 9. CLEANUP / DISPOSE ───
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('hide-footer');
      
      scrollTimeline.kill();
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  // Compute text opacities dynamically for smooth fading
  const initOpacity = Math.max(0, 1 - scrollProgress * 3.5);
  const finalOpacity = Math.max(0, (scrollProgress - 0.60) * 4); // starts fading in at 60%, fully opaque by 85%

  return (
    <div className="about-page-wrapper">
      
      {/* 3D SCROLL PARTICLE HERO TRACK */}
      <div className="about-hero-scroll-track" ref={trackRef}>
        <div className="about-hero-sticky">
          
          {/* WebGL Canvas */}
          <canvas 
            className="about-hero-canvas" 
            ref={canvasRef}
          ></canvas>

          {/* Initial Overlay (0% - 25% Scroll) */}
          <div 
            className="about-hero-overlay-init" 
            style={{ 
              opacity: initOpacity,
              pointerEvents: initOpacity > 0.05 ? 'auto' : 'none'
            }}
          >
            <span className="badge">Who We Are</span>
            <h1>Chaos to Clarity</h1>
            <p>Scroll down to watch fragmented particles organize into clean, integrated structures.</p>
            <div className="scroll-down-mouse">
              <span className="mouse-wheel"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
