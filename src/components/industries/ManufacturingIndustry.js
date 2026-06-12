'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Settings, BarChart3, Cpu, Database, CheckCircle, ArrowRight, ChevronDown, Zap, AlertTriangle, TrendingUp, Check, X } from 'lucide-react';
import CTA from '@/components/CTA';

export default function ManufacturingIndustry({ industry }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [caseFlipped, setCaseFlipped] = useState(false);

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

  const workflowTrackRef = useRef(null);

  const [telemetry, setTelemetry] = useState({
    lineA: { temp: 22.4, speed: 88, status: 'nominal' },
    lineB: { temp: 24.1, speed: 78, status: 'nominal' },
    lineC: { temp: 48.9, speed: 0, status: 'offline' },
  });

  const [inventory, setInventory] = useState([
    { sku: 'COIL-402', name: 'Steel Coils (0.8mm)', qty: 45, threshold: 10, status: 'ok' },
    { sku: 'BOLT-M12', name: 'M12 Fasteners', qty: 8820, threshold: 2000, status: 'ok' },
    { sku: 'FILM-PA-1', name: 'Packaging Film', qty: 310, threshold: 400, status: 'low' },
  ]);
  const statsRef = useRef(null);

  // Live telemetry simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setTelemetry(prev => ({
        lineA: {
          ...prev.lineA,
          temp: Number((prev.lineA.temp + (Math.random() > 0.5 ? 0.3 : -0.3)).toFixed(1)),
          speed: Math.max(80, Math.min(95, prev.lineA.speed + (Math.random() > 0.5 ? 1 : -1))),
        },
        lineB: {
          ...prev.lineB,
          temp: Number((prev.lineB.temp + (Math.random() > 0.5 ? 0.2 : -0.2)).toFixed(1)),
          speed: Math.max(70, Math.min(85, prev.lineB.speed + (Math.random() > 0.5 ? 1 : -1))),
        },
        lineC: prev.lineC,
      }));
    }, 2800);
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

  const workflowSteps = [
    { id: 0, title: 'Process Audit', desc: 'We map your assembly lines, warehouse inventory intake rules, vendor contract cycles, and identify automation opportunities.' },
    { id: 1, title: 'Database Architecture', desc: 'Design relational database schemas tying SKUs, vendors, purchase orders, and warehouse locations into a normalized data model.' },
    { id: 2, title: 'ERP Portal Development', desc: 'Build the central web ERP application with role-based dashboards for procurement managers, warehouse supervisors, and plant managers.' },
    { id: 3, title: 'IoT Telemetry Integration', desc: 'Connect machine sensor APIs to WebSocket pipelines, pushing real-time temperature, PSI, and speed readings to the ERP monitor.' },
    { id: 4, title: 'Auto-Procurement Rules', desc: 'Configure SQL triggers and background job workers to auto-generate vendor POs the moment inventory drops below safety thresholds.' },
  ];

  return (
    <div className="mf2-theme">
      {/* ═══ HERO ═══ */}
      <section className="mf2-hero">
        <div className="mf2-hero-grid" />
        <div className="mf2-amber-orb-1" />
        <div className="mf2-amber-orb-2" />

        <div className="container mf2-hero-inner">
          <div className="mf2-hero-left">
            <div className="mf2-eyebrow">
              <Settings size={14} className="mf2-spin-icon" />
              <span>Manufacturing & Industry 4.0</span>
            </div>
            <h1 className="mf2-hero-title">
              Smart Factory<br />
              <span className="mf2-amber-text">Operations &</span><br />
              ERP Systems
            </h1>
            <p className="mf2-hero-sub">
              We design centralized ERP portals, real-time machinery telemetry dashboards, and automated procurement systems that transform industrial operations.
            </p>
            <div className="mf2-hero-actions">
              <Link href="/contact" className="mf2-btn-primary">
                Build Your ERP System <ArrowRight size={16} />
              </Link>
              <Link href="/company/case-studies/manufacturing-erp-modernization" className="mf2-btn-ghost">
                View ERP Case
              </Link>
            </div>
          </div>

          {/* Right: Factory Floor Dashboard */}
          <div className="mf2-hero-right">
            <div className="mf2-factory-card">
              <div className="mf2-factory-header">
                <div className="mf2-fac-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="mf2-fac-title">FactoryOS — Floor Monitor</span>
                <span className="mf2-live-badge">● LIVE</span>
              </div>

              {/* Assembly Lines */}
              <div className="mf2-lines-section">
                <div className="mf2-lines-label">Assembly Line Telemetry</div>
                {Object.entries(telemetry).map(([lineKey, data]) => (
                  <div key={lineKey} className={`mf2-line-row ${data.status === 'ALERT' ? 'alert' : ''}`}>
                    <div className="mf2-line-id">
                      <span className={`mf2-line-dot ${data.status === 'ALERT' ? 'alert' : 'ok'}`} />
                      <span>{lineKey.replace('line', 'Line ').toUpperCase()}</span>
                    </div>
                    <div className="mf2-line-metrics">
                      <span className="mf2-metric-item">🌡️ {data.temp}°C</span>
                      <span className="mf2-metric-item">⚙️ {data.pressure} bar</span>
                      <span className="mf2-metric-item">⚡ {data.speed}%</span>
                    </div>
                    <span className={`mf2-line-status ${data.status === 'ALERT' ? 'alert' : 'ok'}`}>{data.status}</span>
                  </div>
                ))}
                {telemetry.lineC.status === 'ALERT' && (
                  <div className="mf2-alert-banner">
                    <AlertTriangle size={14} />
                    <span>Line C: High temperature detected. Maintenance alert dispatched.</span>
                  </div>
                )}
              </div>

              {/* Inventory */}
              <div className="mf2-inventory-section">
                <div className="mf2-inv-label">Auto-Procurement Thresholds</div>
                {inventory.map(item => (
                  <div key={item.sku} className="mf2-inv-row">
                    <div className="mf2-inv-info">
                      <span className="mf2-inv-sku">{item.sku}</span>
                      <span className="mf2-inv-name">{item.name}</span>
                    </div>
                    <div className="mf2-inv-bar-wrapper">
                      <div
                        className={`mf2-inv-bar ${item.status}`}
                        style={{ width: `${Math.min(100, (item.qty / (item.threshold * 2)) * 100)}%` }}
                      />
                    </div>
                    <span className={`mf2-inv-status-tag ${item.status}`}>
                      {item.status === 'reorder' ? '⚠ REORDER' : item.status === 'low' ? '↓ LOW' : '✓ OK'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER SPLIT ═══ */}
      <section className="mf2-compare-section">
        <div className="container">
          <div className="mf2-section-label">The Transformation</div>
          <h2 className="mf2-section-title">Before ERP vs<br /><span className="mf2-amber-text">After ERP</span></h2>
          <div className="mf2-compare-grid">
            <div className="mf2-compare-side premium before reveal-on-scroll">
              <div className="mf2-compare-badge before">Before</div>
              <h3>Legacy Operations</h3>
              <ul className="mf2-compare-list-premium">
                <li><X className="compare-list-icon red" size={16} /> <span>Spreadsheets across 3 warehouses with manual reconciliation</span></li>
                <li><X className="compare-list-icon red" size={16} /> <span>Procurement triggered by phone calls and email chains</span></li>
                <li><X className="compare-list-icon red" size={16} /> <span>No real-time machinery monitoring — failures discovered hours later</span></li>
                <li><X className="compare-list-icon red" size={16} /> <span>Scheduling done via paper rosters causing shift conflicts</span></li>
                <li><X className="compare-list-icon red" size={16} /> <span>Vendor billing reconciled manually at month end</span></li>
              </ul>
            </div>
            <div className="mf2-compare-divider">
              <ArrowRight size={24} className="mf2-compare-arrow" />
            </div>
            <div className="mf2-compare-side premium after reveal-on-scroll delay-100">
              <div className="mf2-compare-badge after">After ERP</div>
              <h3>Smart Factory Operations</h3>
              <ul className="mf2-compare-list-premium after-list">
                <li><Check className="compare-list-icon green" size={16} /> <span>Unified SQL registry with live barcode scanner sync across all sites</span></li>
                <li><Check className="compare-list-icon green" size={16} /> <span>Auto-procurement triggers POs when stock crosses safety threshold</span></li>
                <li><Check className="compare-list-icon green" size={16} /> <span>WebSocket telemetry from all machines with instant alert dispatch</span></li>
                <li><Check className="compare-list-icon green" size={16} /> <span>Digital shift calendar with role-based visibility and conflict detection</span></li>
                <li><Check className="compare-list-icon green" size={16} /> <span>Vendor bills auto-matched to POs and approved with e-signature</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOW STEPS ═══ */}
      <div
        ref={workflowOuterRef}
        className="mf2-workflow-outer"
        style={{ height: `calc(100vh + ${maxTranslate}px)` }}
      >
        <div className="mf2-workflow-sticky">
          <div className="container" style={{ marginBottom: '20px' }}>
            <div className="mf2-section-label">Implementation Process</div>
            <h2 className="mf2-section-title" style={{ margin: 0 }}>How We Modernize<br /><span className="mf2-amber-text">Your Factory Floor</span></h2>
          </div>

          <div className="mf2-workflow-viewport">
            <div ref={workflowTrackRef} className="mf2-workflow-track">
              {workflowSteps.map((step, idx) => {
                const STEP_ICONS = [Settings, Database, BarChart3, Cpu, Zap];
                const Icon = STEP_ICONS[idx % STEP_ICONS.length];
                const stepNum = String(idx + 1).padStart(2, '0');

                return (
                  <div key={idx} className={`mf2-workflow-card reveal-on-scroll delay-${(idx % 4) * 100}`}>
                    <div className="mf2-wcard-top">
                      <div className="mf2-wcard-icon">
                        <Icon size={22} />
                      </div>
                      <span className="mf2-wcard-watermark">{stepNum}</span>
                    </div>

                    <span className="mf2-wcard-phase">PHASE {stepNum}</span>
                    <h4 className="mf2-wcard-title">{step.title}</h4>
                    <p className="mf2-wcard-desc">{step.desc}</p>
                    <div className="mf2-wcard-accent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="mf2-stats-section" ref={statsRef}>
        <div className="mf2-stats-bg" />
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card reveal-on-scroll" style={{
              '--stat-glow-color': 'rgba(245, 158, 11, 0.3)',
              '--stat-shadow': 'rgba(245, 158, 11, 0.12)',
              '--icon-bg-glow': 'rgba(245, 158, 11, 0.08)',
              '--icon-border-glow': 'rgba(245, 158, 11, 0.2)',
              '--icon-color': '#f59e0b'
            }}>
              <div className="premium-stat-icon-wrap">
                <Database size={24} />
              </div>
              <span className="mf2-stat-num" style={{ fontSize: '28px' }}>99.9%</span>
              <span className="mf2-stat-label">Inventory Accuracy<br />Across All Warehouse Sites</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-100" style={{
              '--stat-glow-color': 'rgba(245, 158, 11, 0.3)',
              '--stat-shadow': 'rgba(245, 158, 11, 0.12)',
              '--icon-bg-glow': 'rgba(245, 158, 11, 0.08)',
              '--icon-border-glow': 'rgba(245, 158, 11, 0.2)',
              '--icon-color': '#f59e0b'
            }}>
              <div className="premium-stat-icon-wrap">
                <Zap size={24} />
              </div>
              <span className="mf2-stat-num" style={{ fontSize: '28px' }}>-30%</span>
              <span className="mf2-stat-label">Procurement Re-order<br />Turnaround Time</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-200" style={{
              '--stat-glow-color': 'rgba(245, 158, 11, 0.3)',
              '--stat-shadow': 'rgba(245, 158, 11, 0.12)',
              '--icon-bg-glow': 'rgba(245, 158, 11, 0.08)',
              '--icon-border-glow': 'rgba(245, 158, 11, 0.2)',
              '--icon-color': '#f59e0b'
            }}>
              <div className="premium-stat-icon-wrap">
                <Settings size={24} />
              </div>
              <span className="mf2-stat-num" style={{ fontSize: '28px' }}>0</span>
              <span className="mf2-stat-label">Unplanned Machine<br />Downtime Incidents</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS ═══ */}
      <section className="mf2-solutions-section">
        <div className="container">
          <div className="mf2-section-label">Core Solutions</div>
          <h2 className="mf2-section-title">What We Build for<br /><span className="mf2-amber-text">Manufacturing Enterprises</span></h2>
          <div className="mf2-solutions-grid">
            <div className="mf2-sol-card large tilt-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="mf2-sol-icon"><Database size={26} /></div>
              <h3>Central ERP Portal</h3>
              <p>A unified web application coordinating inventory registries, vendor purchase orders, workforce scheduling, and financial reporting — accessible from any device at any site.</p>
              <div className="mf2-sol-stats">
                <span>Multi-site sync</span>
                <span>Role-based access</span>
                <span>Offline cache</span>
              </div>
            </div>
            <div className="mf2-sol-card tilt-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="mf2-sol-icon"><Cpu size={22} /></div>
              <h3>Telemetry Monitor</h3>
              <p>WebSocket streams logging machinery temperature, PSI, and belt speeds — triggering Amber alerts before equipment failure occurs.</p>
            </div>
            <div className="mf2-sol-card tilt-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="mf2-sol-icon"><TrendingUp size={22} /></div>
              <h3>Auto-Procurement</h3>
              <p>SQL database triggers and background workers auto-generate vendor POs the moment SKU quantities cross configured safety buffer levels.</p>
            </div>
            <div className="mf2-sol-card tilt-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="mf2-sol-icon"><BarChart3 size={22} /></div>
              <h3>Production Analytics</h3>
              <p>Daily and weekly output reports with defect rate tracking, shift efficiency scores, and supplier delivery performance dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY ═══ */}
      <section className="mf2-case-section">
        <div className="container">
          <div className={`case-flip-container ${caseFlipped ? 'flipped' : ''}`}>
            <div className="case-card-inner">
              
              {/* Front of Card */}
              <div className="case-card-front">
                <div className="case-front-content" style={{
                  '--glow-color': 'rgba(245, 158, 11, 0.08)',
                  '--btn-hover-bg': '#f59e0b',
                  '--btn-shadow': 'rgba(245, 158, 11, 0.35)',
                  height: '100%',
                  minHeight: '480px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div className="case-front-bg-blur" />
                  <div className="case-front-card-inner">
                    <div className="mf2-case-eyebrow" style={{ marginBottom: '16px' }}>Case Study</div>
                    <h2 className="case-front-title">Manufacturing ERP Modernization</h2>
                    <p className="case-front-summary">
                      A multi-site industrial manufacturer synchronized 3 warehouses and automated procurement. Learn how we achieved 99.9% inventory accuracy and cut re-order turnaround by 30%.
                    </p>
                    <button className="case-flip-btn" onClick={() => setCaseFlipped(true)}>
                      Click to read in more detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="case-card-back">
                <div className="mf2-case-card" style={{ margin: 0 }}>
                  <div className="mf2-case-eyebrow">Case Study — Detailed Report</div>
                  <div className="mf2-case-inner">
                    <div className="mf2-case-content">
                      <h2>Manufacturing ERP Modernization</h2>
                      <p><strong>Challenge:</strong> A multi-site industrial manufacturer tracked inventory using Excel sheets across 3 warehouses. Discrepancies caused stockouts and delayed production lines for days at a time.</p>
                      <p><strong>Solution:</strong> We built a centralized web-based ERP system with relational database models, barcode scanner API integrations, and automated procurement trigger scripts.</p>
                      <div className="mf2-case-results">
                        <div className="mf2-case-result"><span className="mf2-case-result-num" style={{ fontSize: '24px' }}>99.9%</span><span className="mf2-res-lbl">Inventory Accuracy</span></div>
                        <div className="mf2-case-result"><span className="mf2-case-result-num" style={{ fontSize: '24px' }}>-30%</span><span className="mf2-res-lbl">Procurement Time</span></div>
                        <div className="mf2-case-result"><span className="mf2-case-result-num" style={{ fontSize: '24px' }}>3 Sites</span><span className="mf2-res-lbl">Fully Synced</span></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                        <Link href="/company/case-studies/manufacturing-erp-modernization" className="mf2-case-link">
                          Read Full ERP Case <ArrowRight size={14} />
                        </Link>
                        <button className="case-flip-btn" style={{ padding: '6px 16px', fontSize: '12px', borderColor: 'rgba(245, 158, 11, 0.4)' }} onClick={() => setCaseFlipped(false)}>
                          Close Details
                        </button>
                      </div>
                    </div>
                    <div className="mf2-case-visual">
                      <div className="mf2-erp-mini">
                        <div className="mf2-mini-header">ERP Dashboard</div>
                        <div className="mf2-mini-row"><span>Total SKUs Tracked</span><strong>12,450</strong></div>
                        <div className="mf2-mini-row"><span>Active Vendors</span><strong>84</strong></div>
                        <div className="mf2-mini-row"><span>Open POs</span><strong>14</strong></div>
                        <div className="mf2-mini-row alert"><span>Auto-Reorder Triggers</span><strong className="amber">Active</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mf2-faq-section">
        <div className="container mf2-faq-inner">
          <div className="mf2-faq-left reveal-on-scroll">
            <div className="mf2-section-label">Common Questions</div>
            <h2 className="mf2-section-title">Manufacturing ERP<br /><span className="mf2-amber-text">Questions Answered</span></h2>
            <p>Our industrial ERP engineers are available to review your warehouse and production system architecture requirements.</p>
            <Link href="/contact" className="mf2-btn-ghost mt-6">Talk to an Engineer <ArrowRight size={14} /></Link>
          </div>
          <div className="mf2-faq-right reveal-on-scroll delay-100">
            {[
              { q: 'How do you connect machine sensors to the web dashboard?', a: 'We deploy WebSockets server nodes on factory LAN networks, consuming sensor telemetry from PLCs and IoT modules. Readings are broadcast in real-time to the React dashboard via a real-time pub/sub relay, with configurable alert thresholds.' },
              { q: 'Can the ERP handle offline scanning when network is down?', a: 'Yes. Barcode scanner integrations use a local offline database cache on warehouse terminals. When WAN connectivity resumes, a background sync worker reconciles all offline transaction logs with the primary relational database.' },
              { q: 'How does the auto-procurement system avoid duplicate orders?', a: 'Each reorder trigger writes a pending PO record to the database before dispatching. A unique constraint on (sku_id, vendor_id, status=pending) prevents duplicate orders from firing simultaneously even under concurrent trigger conditions.' },
              { q: 'Can we integrate with our existing accounting software?', a: 'Yes. We build REST API connectors and CSV export pipelines compatible with enterprise accounting software and financial management platforms. PO approvals and vendor payment records can sync bidirectionally on a configurable schedule.' },
            ].map((item, i) => (
              <div key={i} className={`premium-faq-item ${activeFaq === i ? 'open' : ''}`} style={{
                '--faq-accent': '#f59e0b',
                '--faq-shadow': 'rgba(245, 158, 11, 0.06)'
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

      {/* ═══ CTA ═══ */}
      <section className="mf2-cta-wrapper">
        <CTA variant="middle" />
      </section>
    </div>
  );
}
