'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, Activity, Shield, CheckCircle, ArrowRight, ChevronDown, Zap, Lock, Users, TrendingUp, BarChart2, Crosshair, Rocket, Monitor } from 'lucide-react';
import CTA from '@/components/CTA';
import BackgroundRings from '@/components/BackgroundRings';

const scenarios = [
  {
    badge: 'Diagnostics AI',
    title: 'Radiology Scan Pre-Screening',
    scenario: 'Radiologist teams experiencing extreme case queue overload, delaying critical patient diagnostic triage and clinical decision turnaround times across multi-site networks.',
    result: 'Custom automated DICOM pre-screening pipeline flags critical anomalies instantly upon scan upload, automatically escalating urgent priority reviews to available specialists.',
    details: 'Integrates secure edge-to-cloud DICOM nodes, real-time alert dispatch webhooks, and multi-class neural network inference engines with 94.2% classification accuracy.',
    metric: '12s flagging latency',
    image: '/images/hc_radiology_ai.png',
  },
  {
    badge: 'Patient Intake',
    title: 'Digital Booking Portal',
    scenario: 'High call volume from manual appointment booking overwhelming front desk staff, causing human entry errors, dropped phone lines, and extended wait queues during peak morning hours.',
    result: 'Modern patient scheduling portal featuring automated calendar updates, real-time sync with internal practitioner rosters, and instant insurance eligibility validation.',
    details: 'Includes direct FHIR-compliant record linkages, secure patient portal authentication, dynamic waitlist queue optimization, and automated reminder broadcasts via SMS.',
    metric: '-45% Intake Load',
    image: '/images/hc_booking_portal.png',
  },
  {
    badge: 'Remote Care',
    title: 'IoT Telemetry Monitoring',
    scenario: 'High-risk post-surgical patients requiring continuous physiological telemetry at home, without the administrative cost or clinical risk of extended inpatient hospital stays.',
    result: 'Real-time bidirectional WebSocket pipelines syncing wearable device readings directly to clinical dashboard interfaces used by remote care coordinators.',
    details: 'Features end-to-end encrypted vital sign pipelines, secure WebSocket client-server streaming nodes, and automated threshold alerts with instant clinician dispatch.',
    metric: '150ms sync delay',
    image: '/images/hc_remote_telemetry.png',
  }
];

export default function HealthcareIndustry({ industry }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [vitals, setVitals] = useState({ hr: 72, spo2: 98, bp: '120/80', temp: 36.6 });
  const [scanQueue, setScanQueue] = useState([
    { id: 'SCN-4821', patient: 'J. Chen', type: 'Brain MRI', priority: 'URGENT', risk: 94 },
    { id: 'SCN-4822', patient: 'M. Torres', type: 'Chest X-Ray', priority: 'NORMAL', risk: 18 },
    { id: 'SCN-4823', patient: 'R. Patel', type: 'Spine CT', priority: 'REVIEW', risk: 62 },
  ]);
  const statsRef = useRef(null);
  const ecgRef = useRef(null);
  const [activeScenario, setActiveScenario] = useState(0);
  const [caseFlipped, setCaseFlipped] = useState(false);

  // Scenario carousel auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % scenarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeScenario]);

  // Live vitals simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setVitals(prev => ({
        hr: Math.max(65, Math.min(88, prev.hr + (Math.random() > 0.5 ? 1 : -1))),
        spo2: Math.max(96, Math.min(100, prev.spo2 + (Math.random() > 0.6 ? 1 : -1))),
        bp: prev.bp,
        temp: Number((Math.max(36.1, Math.min(37.2, prev.temp + (Math.random() > 0.5 ? 0.1 : -0.1)))).toFixed(1)),
      }));
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const features = [
    {
      title: 'Clinical-Grade Security Engine',
      desc: 'Row-level encrypted databases partitioned by clinical environment, with automated audit trail generation to pass all security and privacy audit criteria.',
      detail: 'Every database interaction is logged to an immutable ledger, allowing forensic reconstruction of any data access event.',
      tech: ['CloudHSM', 'AES-256', 'IAM Roles', 'Audit Ledger'],
      visual: 'compliance',
    },
    {
      title: 'HL7 / FHIR Integration Layer',
      desc: 'Translation middleware converting legacy HL7 data streams from diagnostic machinery into modern FHIR JSON endpoints in milliseconds.',
      detail: 'Our adaptor nodes support multiple diagnostic device types, auto-routing scan results directly to the patient queue dashboard.',
      tech: ['FHIR R4 API', 'Node.js', 'JSON Schema', 'Kafka'],
      visual: 'fhir',
    },
    {
      title: 'Remote Care & IoT Telemetry',
      desc: 'Bidirectional WebSocket pipelines syncing wearable device readings in real-time to patient portals used by remote care coordinators.',
      detail: 'Supports highly scalable concurrent IoT connections via real-time pub/sub, with automatic alert escalation on threshold breach.',
      tech: ['WebRTC', 'WebSockets', 'Pub/Sub Nodes', 'Communications API'],
      visual: 'iot',
    },
  ];

  const challenges = [
    { icon: Lock, title: 'Patient Data Breach Risk', desc: 'Legacy EHR databases running unencrypted on-premise servers expose sensitive health records to ransomware and data theft.' },
    { icon: Activity, title: 'Fragmented Diagnostic Workflows', desc: 'Radiology scans, lab results, and physician notes stored in isolated silos prevent coordinated patient care decisions.' },
    { icon: Users, title: 'Intake & Queue Bottlenecks', desc: 'Manual check-in processes and paper-based appointment systems create avoidable wait times that diminish patient satisfaction scores.' },
    { icon: TrendingUp, title: 'Legacy Infrastructure Costs', desc: 'Aging clinical servers require expensive maintenance contracts while delivering inferior uptime compared to modern cloud deployments.' },
  ];

  return (
    <div className="hc2-theme" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <BackgroundRings count={12} colors={['#10b981', '#06b6d4', '#10b981']} />
      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="hc2-hero">
        <div className="hc2-hero-grid-bg" />
        <div className="hc2-hero-emerald-orb" />
        <div className="hc2-hero-teal-orb" />

        <div className="container hc2-hero-inner">
          <div className="hc2-hero-content">
            <div className="hc2-eyebrow">
              <span className="hc2-pulse-dot" />
              <span>Healthcare Technology</span>
            </div>
            <h1 className="hc2-hero-title">
              Clinical-Grade<br />
              <span className="hc2-gradient-text">Digital Health</span><br />
              Infrastructure
            </h1>
            <p className="hc2-hero-sub">
              We engineer secure, clinical-grade digital health platforms that automate patient workflows, connect diagnostic pipelines, and protect medical records at scale.
            </p>
            <div className="hc2-hero-actions">
              <Link href="/contact" className="hc2-btn-primary">
                <span>Scope Your Health-Tech System</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/company/case-studies/ai-driven-patient-diagnostics" className="hc2-btn-ghost">
                View Case Study
              </Link>
            </div>
            <div className="hc2-trust-badges">
              <span className="hc2-trust-item"><CheckCircle size={13} /> Secure Patient Data</span>
              <span className="hc2-trust-item"><CheckCircle size={13} /> HL7 / FHIR Ready</span>
            </div>
          </div>

          <div className="hc2-hero-visual">
            {/* Patient Health Dashboard Mockup */}
            <div className="hc2-dashboard-card">
              <div className="hc2-dash-header">
                <div className="hc2-dash-title-row">
                  <div className="hc2-dash-dot-group">
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <span className="hc2-dash-label">ClinicalOS — Patient Monitor</span>
                  <span className="hc2-live-chip"><span className="blink-dot" />LIVE</span>
                </div>
              </div>

              {/* ECG Waveform */}
              <div className="hc2-ecg-container">
                <div className="hc2-ecg-label">ECG — Heart Rate</div>
                <svg className="hc2-ecg-svg" viewBox="0 0 320 60" preserveAspectRatio="none">
                  <polyline
                    className="hc2-ecg-line"
                    points="0,30 30,30 40,30 50,10 60,50 70,5 80,30 110,30 120,30 130,10 140,50 150,5 160,30 190,30 200,30 210,10 220,50 230,5 240,30 270,30 280,30 290,10 300,50 310,5 320,30"
                  />
                </svg>
                <span className="hc2-ecg-bpm">{vitals.hr} bpm</span>
              </div>

              {/* Vitals Row */}
              <div className="hc2-vitals-grid">
                <div className="hc2-vital-card">
                  <span className="hc2-vital-label">SpO₂</span>
                  <span className="hc2-vital-value green">{vitals.spo2}%</span>
                </div>
                <div className="hc2-vital-card">
                  <span className="hc2-vital-label">Blood Pressure</span>
                  <span className="hc2-vital-value teal">{vitals.bp}</span>
                </div>
                <div className="hc2-vital-card">
                  <span className="hc2-vital-label">Body Temp</span>
                  <span className="hc2-vital-value white">{vitals.temp}°C</span>
                </div>
              </div>

              {/* AI Scan Queue */}
              <div className="hc2-scan-queue">
                <div className="hc2-queue-header">
                  <span>AI Pre-Screening Queue</span>
                  <span className="hc2-sync-pill">Syncing…</span>
                </div>
                {scanQueue.map(scan => (
                  <div key={scan.id} className="hc2-scan-row">
                    <div className="hc2-scan-info">
                      <span className="hc2-scan-id">{scan.id}</span>
                      <span className="hc2-scan-type">{scan.type} — {scan.patient}</span>
                    </div>
                    <div className="hc2-scan-meta">
                      <span className={`hc2-priority-chip ${scan.priority.toLowerCase()}`}>{scan.priority}</span>
                      <span className="hc2-risk-pct">{scan.risk}% risk</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: CHALLENGES ═══ */}
      <section className="hc2-challenges-section">
        <div className="container">
          <div className="hc2-section-label">Industry Friction Points</div>
          <h2 className="hc2-section-title">The Unsolved Problems in<br /><span className="hc2-gradient-text">Modern Healthcare IT</span></h2>
          <p className="hc2-section-sub">Four structural obstacles that prevent healthcare organizations from delivering seamless digital patient care.</p>
          <div className="hc2-challenges-grid">
            {challenges.map((c, i) => (
              <div
                key={i}
                className={`hc2-challenge-card tilt-card-wrapper reveal-on-scroll delay-${(i % 4) * 100}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hc2-challenge-icon"><c.icon size={22} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: FEATURES (Interactive Left Panel) ═══ */}
      <section className="hc2-features-section">
        <div className="hc2-features-bg-accent" />
        <div className="container hc2-features-grid">
          <div className="hc2-features-nav reveal-on-scroll">
            <div className="hc2-section-label">Core Capabilities</div>
            <h2 className="hc2-section-title">How We Solve<br /><span className="hc2-gradient-text">Health-Tech Complexity</span></h2>
            <div className="hc2-feature-tabs">
              {features.map((f, i) => (
                <button
                  key={i}
                  className={`hc2-feature-tab ${activeFeature === i ? 'active' : ''}`}
                  onClick={() => setActiveFeature(i)}
                >
                  <span className="hc2-tab-num">0{i + 1}</span>
                  <span className="hc2-tab-title">{f.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hc2-feature-detail reveal-on-scroll delay-100">
            <div className="hc2-feature-card-panel">
              <h3>{features[activeFeature].title}</h3>
              <p className="hc2-feature-desc">{features[activeFeature].desc}</p>
              <p className="hc2-feature-detail-txt">{features[activeFeature].detail}</p>
              <div className="hc2-tech-stack">
                {features[activeFeature].tech.map(t => (
                  <span key={t} className="hc2-tech-pill">{t}</span>
                ))}
              </div>

              {/* Feature visual diagram */}
              {features[activeFeature].visual === 'compliance' && (
                <div className="hc2-diagram-box">
                  <div className="hc2-diagram-flow">
                    <div className="hc2-diag-node main">Clinical DB</div>
                    <div className="hc2-diag-arrow">🔒 AES-256</div>
                    <div className="hc2-diag-node">Secure Enclave</div>
                    <div className="hc2-diag-arrow">Audit Log →</div>
                    <div className="hc2-diag-node accent">CloudWatch</div>
                  </div>
                </div>
              )}
              {features[activeFeature].visual === 'fhir' && (
                <div className="hc2-diagram-box">
                  <div className="hc2-diagram-flow">
                    <div className="hc2-diag-node main">HL7 Device</div>
                    <div className="hc2-diag-arrow">Transform →</div>
                    <div className="hc2-diag-node">FHIR Adapter</div>
                    <div className="hc2-diag-arrow">JSON API →</div>
                    <div className="hc2-diag-node accent">EHR Platform</div>
                  </div>
                </div>
              )}
              {features[activeFeature].visual === 'iot' && (
                <div className="hc2-diagram-box">
                  <div className="hc2-diagram-flow">
                    <div className="hc2-diag-node main">IoT Wearable</div>
                    <div className="hc2-diag-arrow">WebSocket ↔</div>
                    <div className="hc2-diag-node">Pub/Sub Message Bus</div>
                    <div className="hc2-diag-arrow">Push →</div>
                    <div className="hc2-diag-node accent">Patient Portal</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: PROCESS PIPELINE ═══ */}
      <section className="hc2-pipeline-section">
        <div className="container">
          <div className="hc2-section-label">Digital Transformation Path</div>
          <h2 className="hc2-section-title">From Legacy Systems to<br /><span className="hc2-gradient-text">Connected Clinic</span></h2>
          <div className="hc2-pipeline-track">
            {[
              { step: '01', phase: 'Architecture Audit', desc: 'We map your existing EHR databases, API connection points, and regulatory gap analysis.' },
              { step: '02', phase: 'Secure Foundation', desc: 'Deploy encrypted database schemas, IAM access roles, and CloudHSM key management infrastructure.' },
              { step: '03', phase: 'FHIR Integration', desc: 'Build HL7-to-FHIR adapters connecting all diagnostic machinery into centralized data pipelines.' },
              { step: '04', phase: 'Patient Portal Launch', desc: 'Ship the clinician dashboard and patient-facing portal with AI pre-screening and telemetry monitoring.' },
            ].map((s, i) => (
              <div key={i} className={`hc2-pipeline-step reveal-on-scroll delay-${(i % 4) * 100}`}>
                <div className="hc2-step-num">{s.step}</div>
                <div className="hc2-step-line" />
                <h4>{s.phase}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: STATS ═══ */}
      <section className="hc2-stats-section" ref={statsRef}>
        <div className="hc2-stats-bg" />
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card reveal-on-scroll" style={{
              '--stat-glow-color': 'rgba(16, 185, 129, 0.3)',
              '--stat-shadow': 'rgba(16, 185, 129, 0.12)',
              '--icon-bg-glow': 'rgba(16, 185, 129, 0.08)',
              '--icon-border-glow': 'rgba(16, 185, 129, 0.2)',
              '--icon-color': '#10b981'
            }}>
              <div className="premium-stat-icon-wrap">
                <Activity size={24} />
              </div>
              <span className="hc2-stat-num" style={{ fontSize: '28px' }}>94.2%</span>
              <span className="hc2-stat-label">AI Classification Accuracy<br />on Diagnostic Pre-Screening</span>
            </div>
            
            <div className="premium-stat-card reveal-on-scroll delay-100" style={{
              '--stat-glow-color': 'rgba(16, 185, 129, 0.3)',
              '--stat-shadow': 'rgba(16, 185, 129, 0.12)',
              '--icon-bg-glow': 'rgba(16, 185, 129, 0.08)',
              '--icon-border-glow': 'rgba(16, 185, 129, 0.2)',
              '--icon-color': '#10b981'
            }}>
              <div className="premium-stat-icon-wrap">
                <Zap size={24} />
              </div>
              <span className="hc2-stat-num" style={{ fontSize: '28px' }}>-60%</span>
              <span className="hc2-stat-label">Reduction in Diagnostics<br />Queue Processing Time</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-200" style={{
              '--stat-glow-color': 'rgba(16, 185, 129, 0.3)',
              '--stat-shadow': 'rgba(16, 185, 129, 0.12)',
              '--icon-bg-glow': 'rgba(16, 185, 129, 0.08)',
              '--icon-border-glow': 'rgba(16, 185, 129, 0.2)',
              '--icon-color': '#10b981'
            }}>
              <div className="premium-stat-icon-wrap">
                <Shield size={24} />
              </div>
              <span className="hc2-stat-num" style={{ fontSize: '28px' }}>99.9%</span>
              <span className="hc2-stat-label">Platform Uptime SLA<br />on Cloud-Hosted EHR Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: USE CASES ═══ */}
      <section className="hc2-usecases-section">
        <div className="container">
          <div className="hc2-section-label">Real-World Scenarios</div>
          <h2 className="hc2-section-title">Where We Deliver<br /><span className="hc2-gradient-text">Measurable Outcomes</span></h2>
          
          <div className="hc2-carousel-container reveal-on-scroll">
            <div className="hc2-carousel-viewport">
              <div className="hc2-carousel-track" style={{ transform: `translateX(-${activeScenario * 100}%)` }}>
                {scenarios.map((sc, i) => (
                  <div key={i} className={`hc2-carousel-slide ${activeScenario === i ? 'active' : ''}`}>
                    <div className="hc2-slide-grid">
                      <div className="hc2-slide-content">
                        <div className="hc2-uc-badge">{sc.badge}</div>
                        <h3>{sc.title}</h3>
                        <p className="hc2-uc-scenario"><strong>Scenario:</strong> {sc.scenario}</p>
                        <p className="hc2-uc-result"><strong>Result:</strong> {sc.result}</p>
                        {sc.details && <p className="hc2-uc-details"><strong>Technical Scope:</strong> {sc.details}</p>}
                        {sc.metric && <div className="hc2-uc-metric" style={{ marginTop: '16px' }}>{sc.metric}</div>}
                      </div>
                      <div className="hc2-slide-image-container">
                        <img src={sc.image} alt={sc.title} className="hc2-slide-img" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hc2-carousel-dots">
              {scenarios.map((_, i) => (
                <button
                  key={i}
                  className={`hc2-carousel-dot ${activeScenario === i ? 'active' : ''}`}
                  onClick={() => setActiveScenario(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: OUTCOME COMPARISON ═══ */}
      <section className="hc2-outcomes-section">
        <div className="container hc2-outcomes-inner">
          <div className="hc2-outcomes-left reveal-on-scroll">
            <div className="hc2-section-label">Measurable Impact</div>
            <h2 className="hc2-section-title">Before & After<br /><span className="hc2-gradient-text">Transformation</span></h2>
            <p className="hc2-section-sub">Real results. Measurable impact. Transformation that drives growth.</p>
            
            <div className="hc2-outcomes-indicators-list">
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap green">
                  <BarChart2 size={20} />
                </div>
                <span className="hc2-indicator-label">Data Driven</span>
              </div>
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap purple">
                  <Crosshair size={20} />
                </div>
                <span className="hc2-indicator-label">Measurable</span>
              </div>
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap blue">
                  <Rocket size={20} />
                </div>
                <span className="hc2-indicator-label">Business Focused</span>
              </div>
            </div>
          </div>
          
          <div className="hc2-outcomes-right reveal-on-scroll delay-100">
            <div className="hc2-kpi-dashboard">
              
              {/* Card 1: Radiologist Review Wait Time */}
              <div className="hc2-kpi-card green-theme">
                <div className="hc2-kpi-card-left">
                  <div className="hc2-kpi-icon-wrap">
                    <Monitor size={24} className="hc2-kpi-icon" />
                    <div className="hc2-kpi-icon-glow" />
                  </div>
                </div>
                
                <div className="hc2-kpi-card-center">
                  <div className="hc2-kpi-header-row">
                    <h3 className="hc2-kpi-title">Radiologist Review Wait Time</h3>
                    <span className="hc2-kpi-badge">
                      <TrendingUp size={12} className="inline mr-1" />
                      -95.2% Duration
                    </span>
                  </div>
                  
                  <div className="hc2-kpi-bars">
                    {/* Before Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">BEFORE</span>
                        <span className="hc2-kpi-bar-value red-text">4.2 Hours</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill red" style={{ width: '100%' }} />
                      </div>
                    </div>
                    
                    {/* After Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">AFTER</span>
                        <span className="hc2-kpi-bar-value green-text">12 Minutes</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill green" style={{ width: '5%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hc2-kpi-card-right">
                  <div className="hc2-kpi-dial-container">
                    <svg className="hc2-kpi-dial-svg" width="80" height="80" viewBox="0 0 80 80">
                      <circle className="hc2-kpi-dial-bg" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="rgba(255,255,255,0.06)" />
                      <circle className="hc2-kpi-dial-fill green" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="#10b981" strokeDasharray="201.06" strokeDashoffset="9.65" strokeLinecap="round" transform="rotate(-90 40 40)" />
                      <text x="40" y="37" textAnchor="middle" fill="#f0faf4" fontSize="13" fontWeight="800">95.2%</text>
                      <text x="40" y="51" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="700" letterSpacing="0.05em">FASTER</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2: Patient Intake Desk Latency */}
              <div className="hc2-kpi-card purple-theme">
                <div className="hc2-kpi-card-left">
                  <div className="hc2-kpi-icon-wrap">
                    <Users size={24} className="hc2-kpi-icon" />
                    <div className="hc2-kpi-icon-glow" />
                  </div>
                </div>
                
                <div className="hc2-kpi-card-center">
                  <div className="hc2-kpi-header-row">
                    <h3 className="hc2-kpi-title">Patient Intake Desk Latency</h3>
                    <span className="hc2-kpi-badge">
                      <TrendingUp size={12} className="inline mr-1" />
                      -85.7% Wait Time
                    </span>
                  </div>
                  
                  <div className="hc2-kpi-bars">
                    {/* Before Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">BEFORE</span>
                        <span className="hc2-kpi-bar-value red-text">28 Minutes</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill red" style={{ width: '100%' }} />
                      </div>
                    </div>
                    
                    {/* After Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">AFTER</span>
                        <span className="hc2-kpi-bar-value purple-text">4 Minutes</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill purple" style={{ width: '14%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hc2-kpi-card-right">
                  <div className="hc2-kpi-dial-container">
                    <svg className="hc2-kpi-dial-svg" width="80" height="80" viewBox="0 0 80 80">
                      <circle className="hc2-kpi-dial-bg" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="rgba(255,255,255,0.06)" />
                      <circle className="hc2-kpi-dial-fill purple" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="#8b5cf6" strokeDasharray="201.06" strokeDashoffset="28.75" strokeLinecap="round" transform="rotate(-90 40 40)" />
                      <text x="40" y="37" textAnchor="middle" fill="#f0faf4" fontSize="13" fontWeight="800">85.7%</text>
                      <text x="40" y="51" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="700" letterSpacing="0.05em">FASTER</text>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: CASE STUDY ═══ */}
      <section className="hc2-case-section">
        <div className="container">
          <div className={`case-flip-container ${caseFlipped ? 'flipped' : ''}`}>
            <div className="case-card-inner">
              
              {/* Front of Card */}
              <div className="case-card-front">
                <div className="case-front-content" style={{
                  '--glow-color': 'rgba(16, 185, 129, 0.08)',
                  '--btn-hover-bg': '#10b981',
                  '--btn-shadow': 'rgba(16, 185, 129, 0.35)',
                  height: '100%',
                  minHeight: '480px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div className="case-front-bg-blur" />
                  <div className="case-front-card-inner">
                    <div className="hc2-case-eyebrow" style={{ marginBottom: '16px' }}>Case Study</div>
                    <h2 className="case-front-title">AI-Driven Patient Diagnostics</h2>
                    <p className="case-front-summary">
                      A multi-site medical diagnostics provider accelerated radiologist workflows. Learn how we engineered a custom clinical-grade AI pipeline to prioritize scans, reducing wait time by 95.2% with 94.2% accuracy.
                    </p>
                    <button className="case-flip-btn" onClick={() => setCaseFlipped(true)}>
                      Click to read in more detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="case-card-back">
                <div className="hc2-case-card" style={{ margin: 0, position: 'relative' }}>
                  <button className="case-flip-btn" style={{ position: 'absolute', right: '56px', top: '56px', padding: '6px 16px', fontSize: '12px', borderColor: 'rgba(16, 185, 129, 0.4)', zIndex: 10 }} onClick={() => setCaseFlipped(false)}>
                    Close Details
                  </button>
                  <div className="hc2-case-eyebrow">Case Study — Detailed Report</div>
                  <div className="hc2-case-inner">
                    <div className="hc2-case-content">
                      <h2>AI-Driven Patient Diagnostics</h2>
                      <p className="hc2-case-challenge"><strong>Challenge:</strong> A multi-site medical diagnostics provider struggled with manual image analysis workflows causing prolonged average review queues for radiologists.</p>
                      <p className="hc2-case-solution"><strong>Solution:</strong> We engineered a custom AI inference pipeline using deep learning models and high-performance API endpoints, classifying anomalies in incoming DICOM scans and routing priority cases directly to available radiologists.</p>
                      <div className="hc2-case-results">
                        <div className="hc2-case-result-item">
                          <span className="hc2-case-result-num" style={{ fontSize: '24px' }}>94.2%</span>
                          <span className="hc2-case-result-lbl">Classification accuracy on screened anomaly classes</span>
                        </div>
                        <div className="hc2-case-result-item">
                          <span className="hc2-case-result-num" style={{ fontSize: '24px' }}>-60%</span>
                          <span className="hc2-case-result-lbl">Reduction in diagnostics processing queue time</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                        <Link href="/company/case-studies/ai-driven-patient-diagnostics" className="hc2-case-link">
                          Read Full Case Study <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="hc2-case-visual-panel">
                      <div className="hc2-case-scan-mockup">
                        <div className="hc2-scan-header">DICOM Analyzer — v3.1</div>
                        <div className="hc2-scan-body">
                          <div className="hc2-scan-region">
                            <div className="hc2-scan-placeholder">
                              <Activity size={48} className="hc2-scan-icon" />
                            </div>
                            <div className="hc2-scan-overlay-badge urgent">ANOMALY DETECTED</div>
                          </div>
                          <div className="hc2-scan-analysis">
                            <div className="hc2-scan-info">
                              <span className="hc2-scan-id">Scan ID: MRI-04821</span>
                            </div>
                            <div className="hc2-analysis-row"><span>Model Confidence</span><span className="green-txt">94.2%</span></div>
                            <div className="hc2-analysis-row"><span>Queue Action</span><span className="urgent-txt">PRIORITY ROUTE</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <section className="hc2-faq-section">
        <div className="container hc2-faq-inner">
          <div className="hc2-faq-left reveal-on-scroll">
            <div className="hc2-section-label">Common Questions</div>
            <h2 className="hc2-section-title">Healthcare IT<br /><span className="hc2-gradient-text">Questions Answered</span></h2>
            <p>Our security engineers are available to review your specific data security and architecture requirements.</p>
            <Link href="/contact" className="hc2-btn-ghost mt-6">Talk to an Engineer <ArrowRight size={14} /></Link>
          </div>
          <div className="hc2-faq-right reveal-on-scroll delay-100">
            {[
              { q: 'How do you handle data privacy and security for patient databases?', a: 'We implement row-level AES-256 encrypted database partitions, restrict access via IAM role assignments, and generate automated immutable audit trails that map every data access event to a specific user session for full security audit traceability.' },
              { q: 'Can you integrate with our existing legacy EHR system?', a: 'Yes. We build FHIR R4 adapter layers that read HL7 2.x streams from legacy clinical databases and expose them as modern REST API endpoints. This allows new patient portal UIs to pull historical records without disrupting existing workflows.' },
              { q: 'What is your uptime guarantee for clinical platforms?', a: 'Our cloud-deployed healthcare platforms maintain 99.9% uptime SLA via multi-AZ cloud deployment configurations with automatic failover. RTO is kept under 15 minutes for critical care systems.' },
              { q: 'How do you secure remote patient monitoring data?', a: 'All telemetry streams from IoT wearable devices are transmitted over encrypted WebSocket channels, validated against device certificates, and stored in encrypted time-series databases with configurable retention policies.' },
            ].map((item, i) => (
              <div key={i} className={`premium-faq-item ${activeFaq === i ? 'open' : ''}`} style={{
                '--faq-accent': '#10b981',
                '--faq-shadow': 'rgba(16, 185, 129, 0.06)'
              }}>
                <button className="premium-faq-question-btn" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="premium-faq-icon-arrow" />
                </button>
                {activeFaq === i && (
                  <div className="premium-faq-answer-block">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: CTA ═══ */}
      <section className="hc2-cta-wrapper">
        <CTA variant="middle" />
      </section>
    </div>
  );
}
