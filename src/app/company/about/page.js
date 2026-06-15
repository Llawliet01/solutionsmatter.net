'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  ShieldCheck, Cpu, Layout, Compass, Users, 
  ShieldAlert, TrendingUp, Globe, Heart, Award, 
  CheckCircle2, ChevronRight, Search, ArrowRight, 
  MessageSquare, Landmark, HelpCircle, Layers, Play,
  Lightbulb, Handshake, ShoppingCart, Factory, Rocket
} from 'lucide-react';
import CTA from '@/components/CTA';
import './about.css';

export default function AboutPage() {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Track scroll progress for reactive HTML text overlays [0 to 1]
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom states for 12 sections
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeService, setActiveService] = useState('ai');
  const [selectedTech, setSelectedTech] = useState(null);
  const [expandedProcessStep, setExpandedProcessStep] = useState(null);
  const [flippedHex, setFlippedHex] = useState(null);

  // Data structures for interactive sections
  const storyTimeline = [
    { year: 'Phase 1', title: 'The Problem', tag: 'Problem', desc: 'Fragmented corporate systems, manual pipeline sheets, and disconnected SQL databases block administrative speed and scale.', icon: <ShieldAlert size={20} />, image: '/images/story_problem.webp' },
    { year: 'Phase 2', title: 'The Opportunity', tag: 'Opportunity', desc: 'Architecting centralized databases and unified Next.js/Web conduits to unify lead management and user records.', icon: <Compass size={20} />, image: '/images/story_opportunity.webp' },
    { year: 'Phase 3', title: 'The Innovation', tag: 'Innovation', desc: 'Pioneering custom codebases, encryption compliance matrices, and docker environments with zero licensing traps.', icon: <Cpu size={20} />, image: '/images/story_innovation.webp' },
    { year: 'Phase 4', title: 'Strategic Growth', tag: 'Growth', desc: 'Scaling operations and transactions for thousands of active users without any software licensing bloat.', icon: <TrendingUp size={20} />, image: '/images/story_growth.webp' },
    { year: 'Phase 5', title: 'The Future', tag: 'Future', desc: 'Implementing localized neural LLM pipelines and automated cloud analytics that optimize workflows in real-time.', icon: <Globe size={20} />, image: '/images/story_future.webp' }
  ];

  const coreValues = [
    { key: 'innovation', title: 'Innovation', icon: <Lightbulb size={26} style={{ color: 'var(--about-cyan)' }} />, desc: 'We engineer custom pipelines that replace manual operations and human bottlenecks with secure, automated cloud workloads. By designing smart APIs, event-driven microservices, and serverless compute, we ensure your operations scale seamlessly.', size: 'v-large' },
    { key: 'partnership', title: 'Partnership', icon: <Handshake size={26} style={{ color: 'var(--about-purple)' }} />, desc: 'We act as your direct technical partners. We don\'t hide behind account managers; we offer transparent, direct access to code commits, raw logs, and live staging links, building deep technical alignment.', size: 'small' },
    { key: 'excellence', title: 'Excellence', icon: <Award size={26} style={{ color: 'var(--about-cyan)' }} />, desc: 'We deliver code built to last. Our team writes clean, modular React/Next.js components, designs high-integrity database schemas with strict index keys, and integrates automated test suites to verify every deployment.', size: 'small' },
    { key: 'growth', title: 'Growth', icon: <TrendingUp size={26} style={{ color: 'var(--about-purple)' }} />, desc: 'Our architectures are optimized to grow with you. From tuning heavy SQL queries to configuring high-throughput caching layers and scale groups, we ensure your backend supports traffic and transaction capacity surges.', size: 'small' },
    { key: 'trust', title: 'Trust', icon: <ShieldCheck size={26} style={{ color: 'var(--about-cyan)' }} />, desc: 'We believe in complete transparency. There are no proprietary software traps, seat licensing locks, or hidden subscription gates. You own 100% of the repository, design assets, database structures, and runtime configuration keys.', size: 'small' }
  ];

  const services = {
    ai: { title: 'AI & Automation', centerDesc: 'Private LLMs & automated workflows.', desc: 'We build private language models and predictive algorithms to automate administrative tasks and support operations securely.' },
    cloud: { title: 'Cloud DevOps', centerDesc: 'Kubernetes routing & Docker staging.', desc: 'High-availability infrastructure relying on Docker clusters, automated scale groups, and robust API endpoints.' },
    mobile: { title: 'Mobile Dev', centerDesc: 'Cross-platform native React engines.', desc: 'High-performance React Native applications featuring full offline capabilities and seamless local storage synchronization.' },
    web: { title: 'Web Development', centerDesc: 'Premium React UI & rate-limited backends.', desc: 'State-of-the-art Next.js web application designs with full SEO configuration and optimized server render trees.' },
    crm: { title: 'Custom CRM', centerDesc: 'Lead flows & transaction tracking.', desc: 'Bespoke customer platforms structured around your sales parameters, with zero recurring user license fees.' },
    erp: { title: 'Enterprise ERP', centerDesc: 'Unified database systems & access.', desc: 'Integrated dashboards linking financials, operational assets, and permission profiles in one console.' }
  };

  const whyChooseUs = [
    { title: 'Spotlight Security', desc: 'Every database and endpoint is locked with HIPAA-compliant encryption standards and API security tokens.', isLarge: true, bgImage: '/images/why_security.webp' },
    { title: 'Absolute IP Ownership', desc: 'The source repository and relational schemas are 100% owned by your business.', isLarge: false, bgImage: '/images/why_ip.webp' },
    { title: 'No Licensing Traps', desc: 'Pay only for hosting infrastructure. Scale database rows infinitely without seat licenses.', isLarge: false, bgImage: '/images/why_licensing.webp' },
    { title: 'Predictable Sprints', desc: 'Bi-weekly builds deployed to staging links so you can click, test, and audit progress in real-time.', isLarge: true, bgImage: '/images/why_sprints.webp' }
  ];

  const processSteps = [
    { num: '01', title: 'Discover', details: 'We map your database workflows, code dependencies, and operational bottlenecks.' },
    { num: '02', title: 'Plan', details: 'Creating software architecture diagrams, system blueprints, and Sprint timelines.' },
    { num: '03', title: 'Design', details: 'Creating component libraries, interactive prototypes, and relational database schemas.' },
    { num: '04', title: 'Develop', details: 'Writing modular components and backend API endpoints with integrated unit tests.' },
    { num: '05', title: 'Deploy', details: 'Hosting isolated Docker container pipelines in AWS staging zones for client tests.' },
    { num: '06', title: 'Support', details: 'Continuous database tuning, security patches, and ongoing version upgrades.' }
  ];

  const techLogos = [
    { name: 'React', desc: 'Component architecture framework.', capabilities: ['Dynamic rendering', 'High performance virtual DOM', 'Reusable component design'] },
    { name: 'Next.js', desc: 'Server-side rendering framework.', capabilities: ['Server actions', 'Static site generation', 'API route handlers'] },
    { name: 'Node.js', desc: 'Scalable backend runtime environment.', capabilities: ['Asynchronous event model', 'Fast execution', 'Rich package library'] },
    { name: 'Three.js', desc: 'WebGL 3D engine.', capabilities: ['GPU acceleration', 'Custom shader materials', 'Smooth mesh transforms'] },
    { name: 'PostgreSQL', desc: 'Relational database engine.', capabilities: ['Row-level security', 'Complex JSON queries', 'Indexing strategies'] },
    { name: 'Docker', desc: 'Application containerization tool.', capabilities: ['Immutable environments', 'Microservice separation', 'Easy staging migration'] },
    { name: 'AWS', desc: 'Cloud infrastructure hosting.', capabilities: ['S3 encryption', 'EC2 load balancers', 'CloudFront CDN networks'] },
    { name: 'GSAP', desc: 'High-performance animation engine.', capabilities: ['Sub-pixel render accuracy', 'Timeline scrubbing control', 'Fluid physics properties'] }
  ];

  const industriesList = [
    { name: 'Healthcare', icon: <Heart size={36} />, solutions: 'HIPAA compliance pipelines, medical database encryption, telemetry dashboards.', slug: 'healthcare' },
    { name: 'Finance', icon: <Landmark size={36} />, solutions: 'High-durability transaction ledgers, bank API aggregations, data validation.', slug: 'finance' },
    { name: 'Retail & Ecom', icon: <ShoppingCart size={36} />, solutions: 'Custom inventory systems, Stripe payment checkouts, database sync.', slug: 'retail' },
    { name: 'Manufacturing', icon: <Factory size={36} />, solutions: 'Supply-chain logistics loggers, real-time telemetry, equipment alerts.', slug: 'manufacturing' },
    { name: 'SaaS Platforms', icon: <Rocket size={36} />, solutions: 'Multi-tenant database schemas, subscription webhooks, scalable APIs.', slug: 'saas' }
  ];

  const testimonials = [
    { text: 'Redesigned our inventory database, eliminating licensing fees and reducing synchronization lag by 90%.', author: 'Sarah Jenkins', role: 'CTO', initial: 'S' },
    { text: 'Solutions Matter built our patient tracking system. The HIPAA compliance parameters were met perfectly, and delivery was on time.', author: 'Dr. Michael Chen', role: 'Director', initial: 'M' },
    { text: 'The bi-weekly staging builds allowed us to test features as they were developed. Zero surprises at launch.', author: 'David Vance', role: 'VP Operations', initial: 'D' },
    { text: 'Replacing our legacy CRM with a custom Next.js portal saved us thousands in seat fees and let us automate workflows.', author: 'Amanda Ross', role: 'CEO', initial: 'A' }
  ];

  const faqData = [
    { q: 'Who owns the custom software code?', a: 'You do. We grant complete intellectual property rights. The repository access, database design files, and deployment scripts belong fully to your company.' },
    { q: 'How do you bill for development services?', a: 'We bill in predictable fixed monthly payments matching Sprint cycles. No hidden fees or per-user costs.' },
    { q: 'Do you design software to handle high compliance standards?', a: 'Yes. We build HIPAA-compliant, secure database schemas with audited encryption models and role-based permissions.' },
    { q: 'Can you migrate data from our existing legacy system?', a: 'We regularly migrate MySQL, Excel, and legacy spreadsheets into modern, scalable PostgreSQL relational tables, ensuring data integrity.' },
    { q: 'How do we track progress during the build?', a: 'You get full access to code commit logs and active staging links updated at the end of every two-week Sprint.' }
  ];

  // Center node math helper
  const getWheelNodeCoords = (index) => {
    const angle = (index * Math.PI) / 3 - Math.PI / 2;
    const r = 190;
    return {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r
    };
  };

  const getWheelNodeInnerCoords = (index, r) => {
    const angle = (index * Math.PI) / 3 - Math.PI / 2;
    return {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r
    };
  };

  // Card cursor spotlight effect
  const handleSpotlight = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spot-x', `${x}px`);
    card.style.setProperty('--spot-y', `${y}px`);
  };

  // Card 3D tilt hover effect
  const handleTiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const angleX = -(y - yc) / (rect.height / 10);
    const angleY = (x - xc) / (rect.width / 10);
    
    gsap.to(card, {
      rotateX: angleX,
      rotateY: angleY,
      scale: 1.03,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTiltLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  // Magnetic Button Effect
  const handleMagneticMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    gsap.to(btn, {
      x: distanceX * 0.35,
      y: distanceY * 0.35,
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  
  const handleMagneticLeave = (e) => {
    const btn = e.currentTarget;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  // Live filter FAQs
  const filteredFaqs = faqData.filter(item => 
    item.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    item.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const ctaTitle = "Let's Build Something That Matters";

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.body.classList.add('about-page-active');
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track mouse coordinates for Custom Cursor follow logic
    const cursor = document.getElementById('about-cursor');
    const follower = document.getElementById('about-cursor-follower');
    
    const onMouseMove = (e) => {
      if (!cursor || !follower) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // Attach custom cursor expansions for interactive items
    const setupCursorListeners = () => {
      const interactiveElements = document.querySelectorAll(
        '.btn, .about-glass-card, .about-value-card, .about-wheel-node, .about-industry-hex-wrapper, .about-tech-logo-card, .about-faq-item, .about-testimonial-card'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', (e) => {
          cursor?.classList.add('active');
          follower?.classList.add('active');
          let hoverText = 'Explore';
          if (e.target.closest('.about-value-card')) hoverText = 'Expand';
          else if (e.target.closest('.about-wheel-node')) hoverText = 'Hover';
          else if (e.target.closest('.about-industry-hex-wrapper')) hoverText = 'Flip';
          else if (e.target.closest('.about-tech-logo-card')) hoverText = 'Open';
          
          if (follower) follower.textContent = hoverText;
        });
        
        el.addEventListener('mouseleave', () => {
          cursor?.classList.remove('active');
          follower?.classList.remove('active');
          if (follower) follower.textContent = '';
        });
      });
    };
    setupCursorListeners();

    // Backdrop float circular decorations animation
    const decors = document.querySelectorAll('.about-decor-circle');
    decors.forEach((decor, index) => {
      gsap.to(decor, {
        y: (index % 2 === 0 ? 150 : -150),
        x: (index % 2 === 0 ? 80 : -80),
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-page-wrapper',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        }
      });
    });

    const canvasEl = canvasRef.current;
    const trackEl = trackRef.current;
    if (!canvasEl || !trackEl) return;

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

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 80px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SOLUTIONS', w / 2, 105);
      ctx.fillText('MATTER', w / 2, 185);

      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      const points = [];
      const step = 4;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const idx = (y * w + x) * 4;
          const redVal = pixels[idx];
          if (redVal > 200) {
            points.push({
              x: (x - w / 2) * 0.028,
              y: -(y - h / 2) * 0.028,
              z: (Math.random() - 0.5) * 0.3
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
    const corePositions = [];
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsPosArray = new Float32Array(N * 3);

    for (let i = 0; i < N; i++) {
      const rx = (Math.random() - 0.5) * 42;
      const ry = (Math.random() - 0.5) * 42;
      const rz = (Math.random() - 0.5) * 42;
      randomPositions.push({ x: rx, y: ry, z: rz });

      const phi = Math.acos(-1.0 + (2.0 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      const rCore = 0.8 + Math.sin(phi * 4.0) * 0.2 + (i / N) * 1.2;
      corePositions.push({
        x: rCore * Math.sin(phi) * Math.cos(theta),
        y: rCore * Math.sin(phi) * Math.sin(theta),
        z: rCore * Math.cos(phi)
      });

      pointsPosArray[i * 3] = rx;
      pointsPosArray[i * 3 + 1] = ry;
      pointsPosArray[i * 3 + 2] = rz;
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointsPosArray, 3));

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
      color: new THREE.Color('#8B5CF6'),
      size: 0.26,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      map: createParticleTexture(),
      depthWrite: false
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // ─── 3.5 Scene 1: Digital Chaos Mesh Instantiation ───
    const chaosGroup = new THREE.Group();
    scene.add(chaosGroup);
    const chaosObjects = [];

    const makeCodeTexture = (text) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 48;
      const cx = c.getContext('2d');
      cx.fillStyle = 'rgba(15, 23, 42, 0.6)';
      cx.fillRect(0, 0, 256, 48);
      cx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
      cx.lineWidth = 1.5;
      cx.strokeRect(0, 0, 256, 48);
      cx.fillStyle = '#38bdf8';
      cx.font = '12px monospace';
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillText(text, 128, 24);
      return new THREE.CanvasTexture(c);
    };

    const makeUITexture = (type) => {
      const c = document.createElement('canvas');
      c.width = 128;
      c.height = 128;
      const cx = c.getContext('2d');
      cx.fillStyle = 'rgba(15, 23, 42, 0.65)';
      cx.fillRect(0, 0, 128, 128);
      cx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      cx.lineWidth = 1.5;
      cx.strokeRect(0, 0, 128, 128);
      
      cx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      cx.lineWidth = 1;
      cx.beginPath();
      for (let x = 16; x < 128; x += 16) {
        cx.moveTo(x, 0); cx.lineTo(x, 128);
      }
      for (let y = 16; y < 128; y += 16) {
        cx.moveTo(0, y); cx.lineTo(128, y);
      }
      cx.stroke();

      if (type === 'chart') {
        cx.strokeStyle = '#ef4444';
        cx.lineWidth = 1.5;
        cx.beginPath();
        cx.moveTo(10, 100);
        cx.lineTo(40, 50);
        cx.lineTo(75, 85);
        cx.lineTo(115, 25);
        cx.stroke();
      } else {
        cx.fillStyle = 'rgba(139, 92, 246, 0.7)';
        cx.fillRect(20, 40, 12, 70);
        cx.fillRect(40, 20, 12, 90);
        cx.fillRect(60, 60, 12, 50);
        cx.fillRect(80, 75, 12, 35);
        cx.fillRect(100, 30, 12, 80);
      }
      return new THREE.CanvasTexture(c);
    };

    const codeTexts = [
      "import { API } from 'matter';",
      "fetch('/api/v1/clarity')",
      "class Security extends Shield",
      "const silo = new DataSilo()",
      "import React, { useState }",
      "<div>Disconnected</div>",
      "db.query('SELECT *')",
      "const glitch = Math.random()",
      "system.align()",
      "integrity.verify()"
    ];

    for (let i = 0; i < 35; i++) {
      let geom, mat, mesh, baseScale = 1.0;
      const rx = (Math.random() - 0.5) * 36.0;
      const ry = (Math.random() - 0.5) * 20.0;
      const rz = (Math.random() - 0.5) * 16.0;

      if (i < 15) {
        const type = i % 3;
        if (type === 0) geom = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        else if (type === 1) geom = new THREE.OctahedronGeometry(1.0);
        else geom = new THREE.TorusGeometry(0.7, 0.18, 8, 24);

        mat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(i % 2 === 0 ? '#8B5CF6' : '#38BDF8'),
          wireframe: true,
          transparent: true,
          opacity: 0.6,
          depthWrite: false
        });
        mesh = new THREE.Mesh(geom, mat);
      } else if (i < 25) {
        geom = new THREE.PlaneGeometry(3.2, 0.6);
        const text = codeTexts[i - 15] || "const x = undefined;";
        mat = new THREE.MeshBasicMaterial({
          map: makeCodeTexture(text),
          transparent: true,
          opacity: 0.8,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        mesh = new THREE.Mesh(geom, mat);
      } else {
        geom = new THREE.PlaneGeometry(1.8, 1.8);
        mat = new THREE.MeshBasicMaterial({
          map: makeUITexture(i % 2 === 0 ? 'chart' : 'bars'),
          transparent: true,
          opacity: 0.75,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        mesh = new THREE.Mesh(geom, mat);
      }

      mesh.position.set(rx, ry, rz);
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, 0);
      chaosGroup.add(mesh);

      chaosObjects.push({
        mesh,
        geometry: geom,
        material: mat,
        basePos: new THREE.Vector3(rx, ry, rz),
        speed: new THREE.Vector3(0.2 + Math.random() * 0.4, 0.2 + Math.random() * 0.4, 0.1 + Math.random() * 0.2),
        rotSpeed: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0),
        phase: Math.random() * 100,
        baseScale,
        baseOpacity: mat.opacity
      });
    }

    // ─── 4. CONNECTING NETWORK LINES ───
    const links = [];
    const maxLinks = 1600;
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
      color: new THREE.Color('#A78BFA'),
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    const shockwaveGroup = new THREE.Group();
    scene.add(shockwaveGroup);
    const shockwaveRings = [];
    for (let k = 0; k < 2; k++) {
      const ringGeo = new THREE.RingGeometry(0.1, 0.15, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(k === 0 ? '#8B5CF6' : '#38BDF8'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      shockwaveGroup.add(ringMesh);
      shockwaveRings.push({
        mesh: ringMesh,
        material: ringMat,
        phaseOffset: k * 0.5
      });
    }

    const trailIndices = [];
    for (let i = 0; i < N; i += Math.max(1, Math.floor(N / 80))) {
      trailIndices.push(i);
    }
    const trailGeometry = new THREE.BufferGeometry();
    const trailPosArray = new Float32Array(trailIndices.length * 6);
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPosArray, 3));
    const trailMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#A78BFA'),
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const trailSegments = new THREE.LineSegments(trailGeometry, trailMaterial);
    scene.add(trailSegments);

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

    // ─── 6. INTERACTIVE TIMELINE PATH DRAWING (GSAP) ───
    const activePath = document.querySelector('.about-story-svg-track path.active-path');
    if (activePath) {
      const pathLength = activePath.getTotalLength();
      activePath.style.strokeDasharray = pathLength;
      activePath.style.strokeDashoffset = pathLength;
      
      gsap.to(activePath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-story-timeline-container',
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: true
        }
      });
    }

    const timelineItems = document.querySelectorAll('.about-story-item');
    timelineItems.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => item.classList.add('active'),
          onLeaveBack: () => item.classList.remove('active'),
          toggleActions: 'play none none reverse'
        }
      });
    });

    // ─── 7. ANIMATION REVEAL ELEMENTS ───
    const reveals = document.querySelectorAll('.about-reveal-section');
    reveals.forEach((sec) => {
      gsap.fromTo(sec, 
        { opacity: 0, y: 70 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // ─── 7.5. METRICS COUNT-UP ───
    const metricNums = document.querySelectorAll('.about-metric-num');
    metricNums.forEach((el) => {
      const targetVal = parseInt(el.getAttribute('data-target'));
      const obj = { value: 0 };
      gsap.to(obj, {
        value: targetVal,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.value) + (el.getAttribute('data-suffix') || '');
        }
      });
    });

    // ─── 7.8. PROCESS HORIZONTAL PROGRESS TIMELINE ───
    gsap.to('.about-process-timeline-bar-fill', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-process-horizontal-container',
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: true
      }
    });

    const processStepsElements = document.querySelectorAll('.about-process-step');
    processStepsElements.forEach((step) => {
      gsap.to(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          onEnter: () => step.classList.add('active'),
          onLeaveBack: () => step.classList.remove('active')
        }
      });
    });

    // ─── 7.9. INDUSTRIES HEXAGONS POP ANIMATION ───
    gsap.fromTo('.about-industry-hex-wrapper',
      { scale: 0.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.06,
        duration: 0.7,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.about-industries-grid',
          start: 'top 85%'
        }
      }
    );

    // ─── 7.95. HERO STAGGERED LINE REVEAL ───
    gsap.to('.about-hero-heading-wrapper .line-reveal span', {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-hero-heading-wrapper',
        start: 'top 85%'
      }
    });

    // ─── 7.96. FINAL CTA CHARACTER REVEAL ───
    const chars = document.querySelectorAll('.about-final-cta-container h2 .char-reveal');
    if (chars.length > 0) {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-final-cta-section',
          start: 'top 75%'
        }
      });
    }

    // ─── 8. ANIMATION RENDER LOOP ───
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const p = scrollObj.progress;

      const pointsPos = pointsGeometry.attributes.position.array;
      const currentPos = [];

      const fade = p < 0.20 ? 1.0 : Math.max(0.0, 1.0 - (p - 0.20) / 0.25);
      
      chaosObjects.forEach((obj) => {
        obj.mesh.visible = fade > 0.001;
        if (obj.mesh.visible) {
          obj.mesh.position.x = obj.basePos.x + Math.sin(time * obj.speed.x + obj.phase) * 0.8;
          obj.mesh.position.y = obj.basePos.y + Math.cos(time * obj.speed.y + obj.phase) * 0.8;
          obj.mesh.position.z = obj.basePos.z + Math.sin(time * obj.speed.z + obj.phase) * 0.5;
          
          obj.mesh.rotation.x += obj.rotSpeed.x;
          obj.mesh.rotation.y += obj.rotSpeed.y;

          let currentScale = obj.baseScale * fade;
          if (p < 0.25 && Math.random() < 0.03) {
            obj.mesh.position.x += (Math.random() - 0.5) * 0.7;
            obj.mesh.position.y += (Math.random() - 0.5) * 0.7;
            currentScale *= (0.75 + Math.random() * 0.5);
            obj.mesh.material.opacity = obj.baseOpacity * fade * (0.3 + Math.random() * 0.7);
          } else {
            obj.mesh.material.opacity = obj.baseOpacity * fade;
          }
          
          obj.mesh.scale.setScalar(currentScale);
        }
      });

      shockwaveRings.forEach((ring) => {
        const activeFactor = p < 0.20 ? 0.0 : p < 0.40 ? (p - 0.20) / 0.20 : 1.0;
        const life = (time * 1.2 + ring.phaseOffset) % 1.0;
        ring.mesh.scale.setScalar(0.1 + life * 10.0);
        ring.material.opacity = activeFactor * (1.0 - life) * 0.7;
        ring.mesh.visible = activeFactor > 0.01;
      });

      const trailRatio = p < 0.20 ? 0.0 : p < 0.32 ? (p - 0.20) / 0.12 : Math.max(0.0, 1.0 - (p - 0.32) / 0.08);
      trailMaterial.opacity = trailRatio * 0.65;
      trailSegments.visible = trailRatio > 0.01;

      // Morph particle positions (Multi-Stage coordinates update)
      for (let i = 0; i < N; i++) {
        const r = randomPositions[i];
        const c = corePositions[i];
        const t = targetPoints[i] || r;

        const driftX = Math.sin(time * 0.6 + i * 0.1) * 0.8;
        const driftY = Math.cos(time * 0.6 + i * 0.15) * 0.8;
        const driftZ = Math.sin(time * 0.4 + i * 0.2) * 0.6;

        let px = r.x, py = r.y, pz = r.z;

        if (p < 0.40) {
          const startProgress = 0.20 + (i % 100) * 0.0008;
          let localT = (p - startProgress) / 0.12;
          localT = Math.max(0, Math.min(1, localT));

          const easedT = localT < 0.5
            ? 4 * localT * localT * localT
            : 1 - Math.pow(-2 * localT + 2, 3) / 2;

          const dFactor = 1.0 - easedT * 0.4;
          px = r.x + (c.x - r.x) * easedT + driftX * dFactor;
          py = r.y + (c.y - r.y) * easedT + driftY * dFactor;
          pz = r.z + (c.z - r.z) * easedT + driftZ * dFactor;
        } else {
          const startProgress = 0.40 + (i % 100) * 0.002;
          const duration = 0.35;
          let localT = (p - startProgress) / duration;
          localT = Math.max(0, Math.min(1, localT));

          const easedT = localT < 0.5
            ? 4 * localT * localT * localT
            : 1 - Math.pow(-2 * localT + 2, 3) / 2;

          const dFactor = 0.36 * (1.0 - easedT);
          px = c.x + (t.x - c.x) * easedT + driftX * dFactor;
          py = c.y + (t.y - c.y) * easedT + driftY * dFactor;
          pz = c.z + (t.z - c.z) * easedT + driftZ * dFactor;
        }

        pointsPos[i * 3] = px;
        pointsPos[i * 3 + 1] = py;
        pointsPos[i * 3 + 2] = pz;

        currentPos.push({ x: px, y: py, z: pz });
      }

      if (trailSegments.visible) {
        const trailPos = trailGeometry.attributes.position.array;
        let ptr = 0;
        trailIndices.forEach((idx) => {
          const pt = currentPos[idx];
          if (pt) {
            trailPos[ptr++] = pt.x;
            trailPos[ptr++] = pt.y;
            trailPos[ptr++] = pt.z;
            trailPos[ptr++] = 0;
            trailPos[ptr++] = 0;
            trailPos[ptr++] = 0;
          }
        });
        trailGeometry.attributes.position.needsUpdate = true;
      }

      pointsGeometry.attributes.position.needsUpdate = true;

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

      if (p < 0.40) {
        linesMaterial.opacity = 0;
      } else {
        const lineFade = Math.min(1.0, (p - 0.40) / 0.35);
        linesMaterial.opacity = lineFade * 0.35;
        linesMaterial.color.setHex(0xA78BFA);
      }

      camera.position.x = Math.sin(time * 0.2) * 0.4;
      camera.position.y = Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ─── 9. RESIZE EVENT HANDLER ───
    const handleResize = () => {
      const width = canvasEl.clientWidth;
      const height = canvasEl.clientHeight;
      const aspect = width / height;

      if (aspect < 1.0) {
        camera.position.z = 24;
      } else {
        camera.position.z = 16;
      }

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // ─── 10. CLEANUP / DISPOSE ───
    return () => {
      document.body.classList.remove('about-page-active');
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      lenis.destroy();

      chaosObjects.forEach((obj) => {
        obj.geometry.dispose();
        obj.material.dispose();
        if (obj.material.map) obj.material.map.dispose();
      });

      shockwaveRings.forEach((ring) => {
        ring.mesh.geometry.dispose();
        ring.material.dispose();
      });

      trailGeometry.dispose();
      trailMaterial.dispose();
      
      scrollTimeline.kill();
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  const chaosLabels = [
    { text: 'Complexity', start: 0.02, end: 0.06, top: '22%', left: '16%', rx: '-15px', ry: '10px' },
    { text: 'Data Silos', start: 0.06, end: 0.10, top: '65%', left: '72%', rx: '20px', ry: '-10px' },
    { text: 'Manual Processes', start: 0.10, end: 0.14, top: '32%', left: '68%', rx: '-10px', ry: '20px' },
    { text: 'Security Risks', start: 0.14, end: 0.18, top: '70%', left: '20%', rx: '15px', ry: '15px' },
    { text: 'Disconnected Systems', start: 0.18, end: 0.22, top: '18%', left: '46%', rx: '0px', ry: '-20px' }
  ];

  const initOpacity = Math.max(0, 1 - scrollProgress * 3.5);

  return (
    <div className="about-page-wrapper">
      
      {/* Background Floating Orbs */}
      <div className="about-decor-circle" style={{ width: '400px', height: '400px', top: '15%', left: '5%' }}></div>
      <div className="about-decor-circle" style={{ width: '500px', height: '500px', top: '45%', right: '2%' }}></div>
      <div className="about-decor-circle" style={{ width: '450px', height: '450px', top: '75%', left: '10%' }}></div>

      {/* Custom Cursor */}
      <div className="about-custom-cursor" id="about-cursor"></div>
      <div className="about-custom-cursor-follower" id="about-cursor-follower"></div>

      {/* 3D SCROLL PARTICLE HERO TRACK */}
      <div className="about-hero-scroll-track" ref={trackRef}>
        <div className="about-hero-sticky">
          
          {/* WebGL Canvas */}
          <canvas 
            className="about-hero-canvas" 
            ref={canvasRef}
          ></canvas>

          {/* Canvas Backdrop Overlay (fades in and blurs to give text readability) */}
          <div 
            className="about-canvas-backdrop-overlay"
            style={{ 
              opacity: scrollProgress > 0.40 ? Math.min(0.90, (scrollProgress - 0.40) * 2.5) : 0,
              backdropFilter: `blur(${scrollProgress > 0.40 ? Math.min(12, (scrollProgress - 0.40) * 30) : 0}px)`,
              WebkitBackdropFilter: `blur(${scrollProgress > 0.40 ? Math.min(12, (scrollProgress - 0.40) * 30) : 0}px)`
            }}
          ></div>

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

          {/* Scene 1: Floating Digital Chaos Labels */}
          {chaosLabels.map((label, index) => {
            let op = 0;
            let trans = `translate(0, 0)`;
            if (scrollProgress >= label.start && scrollProgress <= label.end) {
              const mid = (label.start + label.end) / 2;
              const half = (label.end - label.start) / 2;
              const ratio = 1 - Math.abs(scrollProgress - mid) / half;
              op = ratio;
              trans = `translate(${ratio * parseFloat(label.rx)}px, ${ratio * parseFloat(label.ry)}px)`;
            }
            return (
              <div
                key={index}
                className="about-chaos-label"
                style={{
                  top: label.top,
                  left: label.left,
                  opacity: op,
                  transform: trans,
                  pointerEvents: 'none'
                }}
              >
                {label.text}
              </div>
            );
          })}

        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="about-section about-hero-section about-reveal-section">
        <div className="about-orb"></div>
        <div className="about-container">
          <div className="about-hero-content">
            <div className="about-hero-heading-wrapper">
              <h2>
                <span className="line-reveal"><span>Transforming Ideas</span></span>
                <span className="line-reveal"><span>Into Scalable</span></span>
                <span className="line-reveal"><span>Digital Solutions</span></span>
              </h2>
            </div>
            <p className="about-hero-desc">
              We design, engineer, and host premium bespoke systems that integrate siloed operations, lock down database compliance, and drive enterprise performance.
            </p>
            <div className="about-hero-buttons">
              <button 
                className="btn about-btn-primary"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                Get Started
              </button>
              <button 
                className="btn about-btn-secondary"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                Watch Demo
              </button>
            </div>

            <div className="about-hero-stats">
              <div className="about-hero-stat-card">
                <div className="about-hero-stat-num">50+</div>
                <div className="about-hero-stat-label">Projects Scaled</div>
              </div>
              <div className="about-hero-stat-card">
                <div className="about-hero-stat-num">95%</div>
                <div className="about-hero-stat-label">Satisfaction Rating</div>
              </div>
              <div className="about-hero-stat-card">
                <div className="about-hero-stat-num">24/7</div>
                <div className="about-hero-stat-label">Active Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Our Journey</span>
            <h2>Our Story</h2>
            <p>From identified bottlenecks to high-compliance visual clarity, follow our milestone steps.</p>
          </div>

          <div className="about-story-timeline-container">
            <div className="about-story-svg-track">
              <svg viewBox="0 0 4 1000" preserveAspectRatio="none">
                <path d="M 2,0 L 2,1000" className="bg-path" />
                <path d="M 2,0 L 2,1000" className="active-path" />
              </svg>
            </div>

            {storyTimeline.map((step, idx) => (
              <div className="about-story-item" key={step.tag}>
                <div className="about-story-dot"></div>
                <div className="about-story-card-wrapper">
                  <div 
                    className="about-glass-card about-story-card" 
                    onMouseMove={(e) => { handleSpotlight(e); handleTiltMove(e); }}
                    onMouseLeave={handleTiltLeave}
                  >
                    <div className="year">{step.year}</div>
                    {step.image && (
                      <img src={step.image} alt={step.title} className="about-story-card-img" />
                    )}
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Foundational Pillars</span>
            <h2>Core Values</h2>
            <p>The code principles that guide our technical pipeline sprints every single day.</p>
          </div>

          <div className="about-values-bento">
            {coreValues.map((val) => (
              <div 
                className={`about-value-card about-glass-card ${val.size} ${val.key}`} 
                key={val.key}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="about-value-icon-box">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Service Matrix</span>
            <h2>What We Do</h2>
            <p>Explore our engineering capabilities around intelligence systems and cloud database nodes.</p>
          </div>

          <div className="about-whatwedo-layout">
            <div className="about-service-wheel-container">
              <div className="about-wheel-center">
                <div className="about-wheel-center-title">{services[activeService].title}</div>
                <div className="about-wheel-center-desc">{services[activeService].centerDesc}</div>
              </div>

              {/* Node connection lines SVG */}
              <svg className="about-wheel-svg-wires" viewBox="0 0 500 500">
                {Object.keys(services).map((key, index) => {
                  const innerCoords = getWheelNodeInnerCoords(index, 90);
                  const outerCoords = getWheelNodeInnerCoords(index, 190);
                  return (
                    <line 
                      key={key}
                      x1={250 + innerCoords.x} 
                      y1={250 + innerCoords.y} 
                      x2={250 + outerCoords.x} 
                      y2={250 + outerCoords.y} 
                      className={activeService === key ? 'active' : ''}
                    />
                  );
                })}
              </svg>

              {/* Service node list */}
              {Object.keys(services).map((key, index) => {
                const coords = getWheelNodeCoords(index);
                return (
                  <div
                    key={key}
                    className={`about-wheel-node ${activeService === key ? 'active' : ''}`}
                    style={{
                      left: `calc(50% + ${coords.x}px - 32px)`,
                      top: `calc(50% + ${coords.y}px - 32px)`
                    }}
                    onMouseEnter={() => setActiveService(key)}
                  >
                    {key.toUpperCase()}
                  </div>
                );
              })}
            </div>

            {/* Mobile swipeable carousel */}
            <div className="about-services-carousel-mobile">
              {Object.keys(services).map((key) => (
                <div className="about-service-carousel-card about-glass-card" key={key}>
                  <div className="badge" style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--about-cyan)', border: 'none', marginBottom: '12px' }}>
                    {key.toUpperCase()}
                  </div>
                  <h3>{services[key].title}</h3>
                  <p>{services[key].desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Why Solutions Matter</span>
            <h2>Why Choose Us</h2>
            <p>Our commitment to security auditing, full IP ownership, and zero seat license costs.</p>
          </div>

          <div className="about-why-bento">
            {whyChooseUs.map((card, index) => (
              <div 
                className={`about-why-card about-glass-card ${card.isLarge ? 'large-feature' : ''}`}
                key={index}
                onMouseMove={(e) => { handleSpotlight(e); handleTiltMove(e); }}
                onMouseLeave={handleTiltLeave}
              >
                {card.bgImage && (
                  <div 
                    className="about-why-bg-image" 
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                  />
                )}
                <div className="about-why-card-content">
                  <div className="about-why-spotlight-layer"></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Sprint Pipeline</span>
            <h2>Our Process</h2>
            <p>From initial discovery blueprints to isolated cloud testing, transparency is built-in.</p>
          </div>

          <div className="about-process-horizontal-container">
            <div className="about-process-timeline-bar">
              <div className="about-process-timeline-bar-fill"></div>
            </div>
            {processSteps.map((step, index) => (
              <div 
                className={`about-process-step ${expandedProcessStep === index ? 'expanded' : ''}`}
                key={step.num}
                onMouseEnter={() => setExpandedProcessStep(index)}
                onMouseLeave={() => setExpandedProcessStep(null)}
              >
                <div className="about-process-step-node">
                  {step.num}
                </div>
                <div className="about-process-step-title">{step.title}</div>
                <div className="about-process-step-details">
                  <p>{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY EXPERTISE */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Our Stack</span>
            <h2>Technology Expertise</h2>
            <p>Click any logo toolcard to explore project use cases and compliance capabilities.</p>
          </div>

          <div className="about-tech-marquee-wrapper">
            <div className="about-tech-marquee">
              {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
                <div 
                  className="about-tech-logo-card about-glass-card" 
                  key={index}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Modal */}
        {selectedTech && (
          <div className="about-tech-modal-backdrop active" onClick={() => setSelectedTech(null)}>
            <div className="about-tech-modal" onClick={(e) => e.stopPropagation()}>
              <button className="about-tech-modal-close" onClick={() => setSelectedTech(null)}>✕</button>
              <h3>{selectedTech.name}</h3>
              <p>{selectedTech.desc}</p>
              <h4>Capabilities</h4>
              <ul style={{ paddingLeft: '16px' }}>
                {selectedTech.capabilities.map((cap, i) => (
                  <li key={i} style={{ fontSize: '13.5px', color: 'var(--about-text-secondary)', marginBottom: '6px', listStyleType: 'disc' }}>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* 8. INDUSTRIES SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Market Integration</span>
            <h2>Industries We Serve</h2>
            <p>Our custom schemas are built to resolve complex requirements across specific markets.</p>
          </div>

          <div className="about-industries-grid">
            {industriesList.map((ind, index) => (
              <div 
                className="about-industry-hex-wrapper" 
                key={ind.name}
                onClick={() => setFlippedHex(flippedHex === index ? null : index)}
              >
                <div className={`about-industry-hex ${flippedHex === index ? 'flipped' : ''}`}>
                  <div className="about-industry-hex-front">
                    <div className="about-industry-hex-front-icon">{ind.icon}</div>
                    <h3>{ind.name}</h3>
                  </div>
                  <div className="about-industry-hex-back">
                    <h3>{ind.name}</h3>
                    <p>{ind.solutions}</p>
                    {ind.slug && (
                      <Link 
                        href={`/industries/${ind.slug}`} 
                        className="about-industry-link-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SUCCESS METRICS */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Proven Performance</span>
            <h2>Success Metrics</h2>
            <p>Watch numbers align to quantify the measurable impact of our digital builds.</p>
          </div>

          <div className="about-metrics-grid">
            {[
              { value: 50, suffix: '+', label: 'Projects Scaled' },
              { value: 95, suffix: '%', label: 'Client Satisfaction' },
              { value: 100, suffix: '%', label: 'IP Transferred' },
              { value: 12, suffix: ' Days', label: 'Average Sprint' }
            ].map((metric, index) => (
              <div 
                className="about-metric-card about-glass-card" 
                key={index}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="about-metric-watermark">{metric.value}</div>
                <div 
                  className="about-metric-num" 
                  data-target={metric.value} 
                  data-suffix={metric.suffix}
                >
                  0
                </div>
                <div className="about-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Client Reviews</span>
            <h2>What Clients Say</h2>
            <p>Read logs and feedback from CTOs and Operational Directors we coordinate with.</p>
          </div>

          <div className="about-testimonials-marquee-wrapper">
            <div className="about-testimonials-marquee">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((test, index) => (
                <div className="about-testimonial-card about-glass-card" key={index}>
                  <p className="about-testimonial-text">&ldquo;{test.text}&rdquo;</p>
                  <div className="about-testimonial-author">
                    <div className="about-testimonial-avatar">{test.initial}</div>
                    <div>
                      <div className="about-testimonial-author-name">{test.author}</div>
                      <div className="about-testimonial-author-role">{test.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="about-section about-reveal-section">
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">Support Database</span>
            <h2>Frequently Asked Questions</h2>
            <p>Search lead query filters or expand accordion blocks to learn how we work.</p>
          </div>

          <div className="about-faq-container">
            <div className="about-faq-search-wrapper">
              <input 
                type="text" 
                placeholder="Search lead questions..." 
                className="about-faq-search-input"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
              />
            </div>

            <div className="about-faq-list">
              {filteredFaqs.map((faq, index) => (
                <div 
                  className={`about-faq-item about-glass-card ${expandedFaq === index ? 'active' : ''}`} 
                  key={index}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="about-faq-question-row">
                    <div className="about-faq-question-text">{faq.q}</div>
                    <div className="about-faq-icon">+</div>
                  </div>
                  <div className="about-faq-answer-box">
                    <p className="about-faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <div style={{ textAlign: 'center', color: 'var(--about-text-secondary)', padding: '24px' }}>
                  No FAQs match your search query.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="about-final-cta-section">
        <div className="about-cta-mesh-bg"></div>
        <div className="about-final-cta-container">
          <h2>
            {ctaTitle.split("").map((char, index) => (
              <span key={index} className="char-reveal" style={{ display: char === " " ? "inline" : "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p>Let&apos;s architect a custom database workflow, cloud staging setup, or automation engine tailored to your operational scale.</p>
          <div className="about-hero-buttons">
            <button 
              className="btn about-btn-primary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              Contact Our Engineers
            </button>
            <button 
              className="btn about-btn-secondary"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              Read Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
