'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Bookmark, CheckCircle2, RefreshCw, Sparkles, Shield,
  Database, Zap, Play, Check, AlertTriangle, Settings, Building2, ChevronRight,
  Clipboard, Layout, Code
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';
import BackgroundRings from '@/components/BackgroundRings';

export default function BusinessAutomationSolution({ solution }) {
  const [activeComparison, setActiveComparison] = useState(0);

  // Scroll-activated winding road timeline
  const roadTimelineRef = useRef(null);
  useEffect(() => {
    if (!roadTimelineRef.current) return;
    const nodes = roadTimelineRef.current.querySelectorAll('.road-node-pin');
    const cards = roadTimelineRef.current.querySelectorAll('.road-card-container');
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.idx, 10);
          const card = roadTimelineRef.current?.querySelector(`.road-card-container[data-idx="${idx}"]`);
          
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (card) card.classList.add('active');
          } else {
            entry.target.classList.remove('active');
            if (card) card.classList.remove('active');
          }
        });
      },
      { threshold: 0.35 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const roadmapSteps = [
    {
      step: '1',
      name: 'Workflow Mapping',
      color: '#ec4899', // Pink
      desc: 'We audit your manual systems to document repetitive copy-paste tasks, log dependencies, and outline initial workflow logic.',
      bullets: ['Operational workflow auditing', 'Data flow mapping', 'Access control hierarchy design', 'Tool consolidation audit']
    },
    {
      step: '2',
      name: 'Pipeline Architecture',
      color: '#f59e0b', // Amber/Orange
      desc: 'We layout schema mappings, design data validation rules, configure trigger routes, and map failsafe telemetry consoles.',
      bullets: ['Unified database schema layout', 'Interactive UI role wireframes', 'Role-Based Access Control (RBAC)', 'Legacy system migration plan']
    },
    {
      step: '3',
      name: 'Integration Coding',
      color: '#8b5cf6', // Purple
      desc: 'Our engineers build robust APIs and trigger webhooks to connect your CRM, accounting tools, warehouses, and ledgers in real time.',
      bullets: ['Modular database engineering', 'Inventory & ledger sync', 'Custom API development', 'Payment webhooks integration']
    },
    {
      step: '4',
      name: 'Monitoring Setup',
      color: '#10b981', // Teal/Green
      desc: 'We launch automated sync pipelines with built-in telemetry alerts, automated weekly reporting tools, and database backups.',
      bullets: ['Zero-downtime database migration', 'Phased module deployment', 'Staff training & onboarding', 'System telemetry & backups']
    }
  ];

  const beforeAfterData = [
    {
      label: 'Data Entry',
      summary: 'How information flows between systems.',
      before: 'Manual copying between sheets and platforms',
      after: 'Immediate automatic API synchronization',
      legacyDetails: 'Employees copy data by hand from shop orders or emails into legacy databases, taking hours and introducing typos.',
      automatedDetails: 'Secure API webhooks trigger the instant transfer and synchronization of data across systems in milliseconds.'
    },
    {
      label: 'Turnaround Time',
      summary: 'The speed of executing operational tasks.',
      before: '24-48 hours average process cycle',
      after: 'Under 10 seconds execution loops',
      legacyDetails: 'Requests wait in email queues. Approvals are processed manually during business hours, stalling workflows.',
      automatedDetails: 'Automated event triggers activate background tasks immediately, executing processes 24/7 in real time.'
    },
    {
      label: 'Error Rates',
      summary: 'The frequency and cost of human errors.',
      before: 'Average 4-8% clerical typos',
      after: 'Zero programmatic logic errors',
      legacyDetails: 'Misspelled emails, wrong billing totals, and duplicate accounts require manual correction and drain customer trust.',
      automatedDetails: 'Strict database schema validation rules and automated tests ensure data integrity is 100% correct.'
    },
    {
      label: 'Process Audit',
      summary: 'The visibility and traceability of records.',
      before: 'Scattered email trails, untraceable steps',
      after: 'Centralized telemetry audit logs',
      legacyDetails: 'No central log. Finding out why an invoice was not sent requires searching several staff email inbox folders.',
      automatedDetails: 'Every sync, check, and API call is logged in a centralized dashboard with automatic alerts for failures.'
    }
  ];

  return (
    <div className="solution-business-automation-theme" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <BackgroundRings count={12} colors={['#ec4899', '#f59e0b', '#8b5cf6']} />
      {/* 1. Split-Screen Hero */}
      <section className="bpa-hero-section">
        <div className="container bpa-hero-grid">
          <div className="bpa-hero-left reveal reveal-fade-up">
            <span className="bpa-badge">
              <RefreshCw size={14} className="badge-icon-spin" /> Workflow Optimization
            </span>
            <h1 className="bpa-hero-title">{solution.heroTitle}</h1>
            <p className="bpa-hero-subtitle">{solution.heroSubtitle}</p>
            
            {/* Live Statistics Counters */}
            <div className="bpa-hero-stats">
              <div className="bpa-stat-box">
                <span className="bpa-stat-num">85%</span>
                <span className="bpa-stat-lbl">Fewer Typos</span>
              </div>
              <div className="bpa-stat-box">
                <span className="bpa-stat-num">14 hrs</span>
                <span className="bpa-stat-lbl">Saved / Week</span>
              </div>
            </div>

            <Link href="/contact" className="bpa-btn-primary">
              <span>Automate Your Process</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bpa-hero-right reveal reveal-fade-up delay-200">
            {/* Interactive Data Sync Animation Display */}
            <div className="bpa-sync-dashboard">
              <div className="bpa-db-header">
                <h4>Pipeline Data Sync</h4>
                <span className="bpa-db-status"><Zap size={10} /> Live sync engine</span>
              </div>
              <div className="bpa-sync-nodes">
                <div className="sync-node active">
                  <span className="node-icon"><Database size={16} /></span>
                  <span className="node-name">CRM Database</span>
                </div>
                <div className="sync-connector">
                  <div className="connector-dot animate" />
                </div>
                <div className="sync-node active">
                  <span className="node-icon"><RefreshCw size={16} /></span>
                  <span className="node-name">Sync Engine</span>
                </div>
                <div className="sync-connector">
                  <div className="connector-dot animate delay-100" />
                </div>
                <div className="sync-node active">
                  <span className="node-icon"><Shield size={16} /></span>
                  <span className="node-name">ERP Ledger</span>
                </div>
              </div>
              <div className="bpa-sync-telemetry">
                <div className="t-row"><span className="status green">OK</span> Customer contact payload validated.</div>
                <div className="t-row"><span className="status green">OK</span> Invoice ledger reference updated.</div>
                <div className="t-row"><span className="status blue">SYNC</span> Pushing ERP data stack...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Before vs After Transformation Dashboard */}
      <section className="bpa-transformation-section">
        <div className="container">
          <div className="bpa-section-header text-center reveal reveal-fade-up">
            <span className="badge-blue">Transformation</span>
            <h2>Before vs. After Optimization</h2>
            <p>Here is what happens when you transition from legacy processes to modern automated flows:</p>
          </div>

          <div className="bpa-comparison-dashboard reveal reveal-fade-up delay-150">
            {/* Left side tab selectors */}
            <div className="bpa-tabs-container">
              {beforeAfterData.map((row, idx) => (
                <button
                  key={idx}
                  className={`bpa-tab-selector ${activeComparison === idx ? 'active' : ''}`}
                  onClick={() => setActiveComparison(idx)}
                >
                  <div className="tab-indicator" />
                  <div className="tab-content">
                    <span className="tab-label">{row.label}</span>
                    <span className="tab-summary">{row.summary}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side sandbox panel */}
            <div className="bpa-sandbox-panel">
              {/* Legacy card */}
              <div className="sandbox-half legacy-side">
                <div className="sandbox-header">
                  <span className="sandbox-badge bad">
                    <AlertTriangle size={12} /> Legacy Workflow
                  </span>
                  <span className="cell-indicator-text">{beforeAfterData[activeComparison].before}</span>
                </div>
                <div className="sandbox-body">
                  <p className="sandbox-desc">{beforeAfterData[activeComparison].legacyDetails}</p>
                  
                  {/* Custom Graphic based on index */}
                  {activeComparison === 0 && (
                    <div className="sandbox-visual manual-visual">
                      <div className="window-header">
                        <span className="window-dot red" />
                        <span className="window-dot yellow" />
                        <span className="window-dot green" />
                        <span className="window-title">excel_export_v2.xlsx</span>
                      </div>
                      <div className="sheet-rows">
                        <div className="sheet-row header"><span>ID</span><span>Client Name</span><span>Amount</span></div>
                        <div className="sheet-row error"><span>042</span><span>Acme Co.</span><span>$45,000 (Typo!)</span></div>
                        <div className="sheet-row"><span>043</span><span>Nxs Inc</span><span>$18,200</span></div>
                        <div className="sheet-row"><span>044</span><span>Globex</span><span>$112,000</span></div>
                      </div>
                      <div className="warning-stamp"><AlertTriangle size={12} /> 4.2% Typos Detected</div>
                    </div>
                  )}

                  {activeComparison === 1 && (
                    <div className="sandbox-visual delay-visual">
                      <div className="delay-timeline">
                        <div className="t-node bad">
                          <span className="node-dot" />
                          <div className="node-text">
                            <h4>Day 1: Form Submitted</h4>
                            <p>Stuck in staff email inbox</p>
                          </div>
                        </div>
                        <div className="t-node bad">
                          <span className="node-dot" />
                          <div className="node-text">
                            <h4>Day 2: Manual Review</h4>
                            <p>Waiting for manager signature</p>
                          </div>
                        </div>
                        <div className="t-node bad">
                          <span className="node-dot" />
                          <div className="node-text">
                            <h4>Day 3: Processed</h4>
                            <p>Time elapsed: 48h+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeComparison === 2 && (
                    <div className="sandbox-visual error-gauge-visual">
                      <div className="gauge-outer">
                        <div className="gauge-circle bad">
                          <span className="gauge-val">8.4%</span>
                          <span className="gauge-lbl">Error Rate</span>
                        </div>
                        <div className="gauge-details">
                          <div className="g-item"><span className="bullet" /> Lost Invoices</div>
                          <div className="g-item"><span className="bullet" /> Clerical Typos</div>
                          <div className="g-item"><span className="bullet" /> Over-Billing</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeComparison === 3 && (
                    <div className="sandbox-visual emails-visual">
                      <div className="email-stack">
                        <div className="email-card">
                          <div className="email-header">
                            <span>From: finance@solutions.net</span>
                            <span>Subject: Invoice Nexus?</span>
                          </div>
                          <div className="email-body">
                            Did anyone manually register the Nexus billing contract in the sheet?
                          </div>
                        </div>
                        <div className="email-card">
                          <div className="email-header">
                            <span>From: sales@solutions.net</span>
                            <span>Subject: RE: Invoice Nexus?</span>
                          </div>
                          <div className="email-body">
                            Checking. I thought John did it. John, did you copy-paste the contract details?
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* VS Divider */}
              <div className="sandbox-vs-divider">
                <span>VS</span>
              </div>

              {/* Automated card */}
              <div className="sandbox-half automated-side">
                <div className="sandbox-header">
                  <span className="sandbox-badge good">
                    <Sparkles size={12} /> Automated Pipeline
                  </span>
                  <span className="cell-indicator-text">{beforeAfterData[activeComparison].after}</span>
                </div>
                <div className="sandbox-body">
                  <p className="sandbox-desc">{beforeAfterData[activeComparison].automatedDetails}</p>

                  {/* Custom Graphic based on index */}
                  {activeComparison === 0 && (
                    <div className="sandbox-visual code-visual">
                      <div className="window-header">
                        <span className="method-post">POST</span>
                        <span className="endpoint">/v1/sync</span>
                        <span className="latency-indicator">12ms</span>
                      </div>
                      <pre className="code-block">
{`{
  "event": "customer.created",
  "status": "synchronized",
  "schema": "ERP_Ledger_v3",
  "data": {
    "id": "cust_842",
    "company": "Acme Co.",
    "amount": 45000.00,
    "verified": true
  }
}`}
                      </pre>
                    </div>
                  )}

                  {activeComparison === 1 && (
                    <div className="sandbox-visual instant-visual">
                      <div className="instant-timeline">
                        <div className="timeline-node active">
                          <span className="node-icon"><Zap size={14} /></span>
                          <span className="node-lbl">Event Received</span>
                        </div>
                        <div className="timeline-line">
                          <div className="line-progress-flow" />
                        </div>
                        <div className="timeline-node active">
                          <span className="node-icon"><Check size={14} /></span>
                          <span className="node-lbl">API Sync Done</span>
                        </div>
                      </div>
                      <div className="latency-overlay">
                        <span className="latency-lbl">Total Turnaround</span>
                        <span className="latency-time">0.08 Seconds</span>
                      </div>
                    </div>
                  )}

                  {activeComparison === 2 && (
                    <div className="sandbox-visual error-gauge-visual">
                      <div className="gauge-outer">
                        <div className="gauge-circle good">
                          <span className="gauge-val">0.00%</span>
                          <span className="gauge-lbl">Error Rate</span>
                        </div>
                        <div className="gauge-details">
                          <div className="g-item"><span className="bullet good" /> Schema Check</div>
                          <div className="g-item"><span className="bullet good" /> Automated Alert</div>
                          <div className="g-item"><span className="bullet good" /> 100% Data Integrity</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeComparison === 3 && (
                    <div className="sandbox-visual telemetry-visual">
                      <div className="window-header">
                        <span className="console-title"><Database size={10} /> Live Telemetry Console</span>
                        <span className="console-status">CONNECTED</span>
                      </div>
                      <div className="telemetry-lines">
                        <div className="telemetry-line"><span className="tag green">OK</span> [14:02:11] Webhook signature verified successfully.</div>
                        <div className="telemetry-line"><span className="tag green">OK</span> [14:02:11] Parsed customer &quot;cust_842&quot; from payload.</div>
                        <div className="telemetry-line"><span className="tag blue">SYNC</span> [14:02:12] Propagated model ledger to Postgres cluster.</div>
                        <div className="telemetry-line"><span className="tag green">OK</span> [14:02:12] Audit log written with hash: 9a8f7c5e2d</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Winding Road Process Roadmap Section */}
      <section className="bpa-road-section">
        <div className="container">
          {/* Top Header Card */}
          <div className="bpa-road-header reveal reveal-fade-up">
            <h2>TIMELINE</h2>
            <p className="road-subtitle">How to achieve the best automation</p>
          </div>

          <div className="bpa-road-timeline" ref={roadTimelineRef}>
            {/* The SVG Winding Road Track (Absolute Positioned in Center) */}
            <div className="road-svg-container">
              <svg viewBox="0 0 100 1580" preserveAspectRatio="none" className="road-svg">
                {/* Background Shadow Stroke for depth */}
                <path 
                  d="M 50,-100 L 50,40 Q 82,200 50,360 Q 18,520 50,680 Q 82,840 50,1000 Q 12,1240 50,1480" 
                  fill="none" 
                  stroke="rgba(25, 39, 43, 0.08)" 
                  strokeWidth="18" 
                  strokeLinecap="round"
                />
                {/* Main black road */}
                <path 
                  d="M 50,-100 L 50,40 Q 82,200 50,360 Q 18,520 50,680 Q 82,840 50,1000 Q 12,1240 50,1480" 
                  fill="none" 
                  stroke="#0f172a" 
                  strokeWidth="14" 
                  strokeLinecap="round"
                />
                {/* Center dashed line */}
                <path 
                  d="M 50,-100 L 50,40 Q 82,200 50,360 Q 18,520 50,680 Q 82,840 50,1000 Q 12,1240 50,1480" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="1.2" 
                  strokeDasharray="4 4" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Alternating Winding Roadmap Rows */}
            {roadmapSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0; // Alternating layout
              return (
                <div key={idx} className={`road-row ${isLeft ? 'row-left' : 'row-right'}`}>
                  {/* Left Column: holds Card if isLeft is true */}
                  <div className="road-col-left">
                    {isLeft && (
                      <div className="road-card-container" data-idx={idx} style={{ '--accent-color': step.color }}>
                        <div className="road-card-glow" />
                        <div className="road-card-inner">
                          <h3 className="road-card-title">{step.name}</h3>
                          <p className="road-card-desc">{step.desc}</p>
                          <ul className="road-card-bullets">
                            {step.bullets.map((bullet, bi) => (
                              <li key={bi}>
                                <Check size={12} style={{ color: step.color }} />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Column: holds Pin positioned relative to road curves */}
                  <div className="road-col-center">
                    <div 
                      className={`road-node-pin ${isLeft ? 'pin-right' : 'pin-left'}`} 
                      data-idx={idx}
                      style={{ '--pin-color': step.color }}
                    >
                      {/* Teardrop SVG Pin pointing left (for right-side pin) or right (for left-side pin) */}
                      <svg 
                        viewBox="0 0 24 24" 
                        className={`pin-svg ${isLeft ? 'point-left' : 'point-right'}`}
                      >
                        <path 
                          fill="currentColor" 
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
                        />
                      </svg>
                      {/* Non-rotated step number */}
                      <span className="pin-number">{step.step}</span>
                    </div>
                  </div>

                  {/* Right Column: holds Card if isLeft is false */}
                  <div className="road-col-right">
                    {!isLeft && (
                      <div className="road-card-container" data-idx={idx} style={{ '--accent-color': step.color }}>
                        <div className="road-card-glow" />
                        <div className="road-card-inner">
                          <h3 className="road-card-title">{step.name}</h3>
                          <p className="road-card-desc">{step.desc}</p>
                          <ul className="road-card-bullets">
                            {step.bullets.map((bullet, bi) => (
                              <li key={bi}>
                                <Check size={12} style={{ color: step.color }} />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Benefits & Outcomes */}
      <section className="bpa-benefits-section">
        <div className="container bpa-benefits-grid">
          <div className="bpa-benefits-left reveal reveal-fade-up">
            <h2>Workflow Outcomes</h2>
            <p>Eliminate human administrative errors and streamline standard document/data flows:</p>
            
            <ul className="bpa-benefits-list">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bpa-benefits-right reveal reveal-fade-up delay-200">
            {/* Proven Implementations (Case Studies) */}
            <div className="bpa-sidebar-card">
              <h3>Proven Implementations</h3>
              <div className="bpa-sidebar-links">
                {solution.relatedCaseStudies.map((cs) => (
                  <div key={cs.slug} className="bpa-sidebar-link-row">
                    <Bookmark size={14} className="sidebar-icon" />
                    <div>
                      <h4>{cs.title}</h4>
                      <Link href={`/company/case-studies/${cs.slug}`} className="sidebar-action">
                        <span>Read Case Study</span> <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Resources Section (Recommended Services & Target Industries) */}
      <section className="solution-related-resources-section reveal reveal-fade-up" style={{ padding: '60px 0' }}>
        <div className="container">
          <h3 className="faq-section-title" style={{ marginBottom: '8px' }}>Related Resources</h3>
          <p className="faq-section-intro-text" style={{ marginBottom: '32px' }}>
            Explore the services and industries most relevant to this solution.
          </p>
          
          <div className="related-resources-grid">
            {/* Recommended Services Column */}
            <div className="related-resource-single-card">
              <Image 
                src="/images/resource_services_bg.webp" 
                alt="" 
                fill
                className="rr-sc-bg-image"
              />
              <div className="rr-sc-blur-overlay" />
              <div className="rr-sc-content">
                <div className="rr-sc-header">
                  <div className="rr-sc-icon rr-icon-solution-color">
                    <Settings size={22} />
                  </div>
                  <h3>Services</h3>
                </div>
                <div className="rr-sc-links-list">
                  {solution.relatedServices.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="rr-sc-link-item">
                      <span className="rr-sc-link-text">{service.title}</span>
                      <ChevronRight size={16} className="rr-sc-link-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Industries Column */}
            <div className="related-resource-single-card">
              <Image 
                src="/images/resource_industries_bg.webp" 
                alt="" 
                fill
                className="rr-sc-bg-image"
              />
              <div className="rr-sc-blur-overlay" />
              <div className="rr-sc-content">
                <div className="rr-sc-header">
                  <div className="rr-sc-icon rr-icon-industry-color">
                    <Building2 size={22} />
                  </div>
                  <h3>Industries</h3>
                </div>
                <div className="rr-sc-links-list">
                  {solution.relatedIndustries.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="rr-sc-link-item">
                      <span className="rr-sc-link-text">{ind.title} Sector</span>
                      <ChevronRight size={16} className="rr-sc-link-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer redirection trail */}
      <section className="container bpa-footer-flow reveal reveal-fade-up">
        <CTA variant="middle" />
        
        <PageFlow 
          nextType="Target Industry"
          nextTitle={`${solution.relatedIndustries[0].title} Industry`}
          nextPath={`/industries/${solution.relatedIndustries[0].slug}`}
        />
      </section>
    </div>
  );
}
