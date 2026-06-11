'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Bookmark, CheckCircle2, Cloud, ShieldAlert, Cpu, 
  Terminal, ShieldCheck, RefreshCw, BarChart2, Settings, Building2, ChevronRight,
  Database, Check, AlertTriangle, Activity
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export default function DigitalTransformationSolution({ solution }) {
  const [activeStage, setActiveStage] = useState(0);

  const migrationStages = [
    { 
      name: 'Audit & Analysis', 
      desc: 'Analyzing legacy database structures, database languages, and code vulnerabilities to plan the parallel cloud mapping.',
      badge: 'Diagnostic Phase',
      color: '#38bdf8', // Sky Blue
      bullets: ['Legacy SQL schema parsing', 'Performance bottleneck audits', 'Access lock and load tests', 'Dependency mapping logs']
    },
    { 
      name: 'Database Translation', 
      desc: 'Migrating legacy SQL schemas to highly scalable, indexed cloud database tables with zero record loss.',
      badge: 'Schema Mapping',
      color: '#ec4899', // Pink
      bullets: ['Relational schema indexing', 'Type-safety constraint audits', 'Stored procedure replication', 'Data compression loops']
    },
    { 
      name: 'Parallel Execution', 
      desc: 'Running the old system alongside the modernized cloud cluster to validate operational parity.',
      badge: 'Dual Verification',
      color: '#f59e0b', // Amber
      bullets: ['Double-write sync engine', 'Query output verification', 'Concurrency stress validation', 'Edge-case fallback tests']
    },
    { 
      name: 'Zero-Downtime Rollout', 
      desc: 'Phased DNS traffic rerouting, completely switching user traffic to the modern system with zero service delay.',
      badge: 'DNS Switchover',
      color: '#10b981', // Teal
      bullets: ['Phased DNS routing', 'Session migration validation', 'Telemetry dashboard activation', 'Legacy system decommissioning']
    }
  ];

  return (
    <div className="solution-digital-transformation-theme">
      {/* 1. Secure Migration Hero */}
      <section className="dt-hero-section">
        <div className="container dt-hero-grid">
          <div className="dt-hero-left reveal reveal-fade-up">
            <span className="dt-badge">
              <Cloud size={14} className="badge-icon-spin" /> Modernization Lifecycle
            </span>
            <h1 className="dt-hero-title">{solution.heroTitle}</h1>
            <p className="dt-hero-subtitle">{solution.heroSubtitle}</p>
            
            <Link href="/contact" className="dt-btn-primary">
              <span>Schedule System Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="dt-hero-right reveal reveal-fade-up delay-200">
            {/* Interactive Parallel Migration Database Schema Visualizer */}
            <div className="dt-dashboard-sandbox">
              <div className="dt-db-header">
                <h4>System Architecture Migration</h4>
                <span className="dt-live-indicator"><RefreshCw size={10} className="badge-icon-spin" /> Migration engine online</span>
              </div>
              <div className="dt-db-migration-grid">
                {/* Legacy Node */}
                <div className="dt-migration-node status-red">
                  <span className="node-lbl">Legacy Database</span>
                  <div className="node-details">
                    <span>COBOL / Old SQL</span>
                    <span>140ms queries</span>
                  </div>
                </div>

                <div className="dt-migration-path">
                  <div className="path-dot animate" />
                </div>

                {/* Cloud Node */}
                <div className="dt-migration-node status-green">
                  <span className="node-lbl">Modernized Cloud</span>
                  <div className="node-details">
                    <span>Containerized PG</span>
                    <span>12ms queries</span>
                  </div>
                </div>
              </div>
              <div className="dt-db-telemetry">
                <div className="telemetry-line"><span className="ok">OK</span> Mapping database table: users_primary...</div>
                <div className="telemetry-line"><span className="ok">OK</span> Mapping database table: transactions_ledger...</div>
                <div className="telemetry-line"><span className="info">MIGRATE</span> Row translations completed: 4,821,950 / 4,821,950 [100%]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Legacy vs Modern Overview Card */}
      <section className="dt-overview-section">
        <div className="container">
          <div className="dt-overview-card">
            <div className="dt-overview-col left-col reveal reveal-fade-up">
              <span className="overview-tag">Legacy Challenge</span>
              <h2>Slower Cycles, High Maintenance</h2>
              <p>{solution.problem}</p>
            </div>
            <div className="dt-overview-divider" />
            <div className="dt-overview-col right-col reveal reveal-fade-up delay-200">
              <span className="overview-tag">Modern System</span>
              <h2>Infinite Scalability, Peak Security</h2>
              <p>{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Stage Slider */}
      <section className="dt-stages-section">
        <div className="container">
          <div className="dt-section-header text-center reveal reveal-fade-up">
            <span className="badge-blue">Lifecycle</span>
            <h2>Our Zero-Downtime Migration Steps</h2>
            <p>Our four-phased migration framework guarantees that your daily enterprise operations are never disrupted:</p>
          </div>

          <div className="dt-stages-layout">
            <div className="dt-stages-selectors reveal reveal-fade-up">
              {migrationStages.map((stage, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`stage-selector-btn ${activeStage === idx ? 'active' : ''}`}
                  style={{ '--stage-color': stage.color }}
                >
                  <div className="stage-btn-glow" />
                  <span className="stage-num">0{idx + 1}</span>
                  <span className="stage-name">{stage.name}</span>
                </button>
              ))}
            </div>

            <div className="dt-stages-content-card reveal reveal-fade-up delay-200">
              <div className="dt-card-details-side">
                <span className="content-stage-lbl" style={{ color: migrationStages[activeStage].color }}>
                  {migrationStages[activeStage].badge}
                </span>
                <h3>{migrationStages[activeStage].name}</h3>
                <p>{migrationStages[activeStage].desc}</p>
                <ul className="dt-stage-bullets">
                  {migrationStages[activeStage].bullets.map((bullet, bi) => (
                    <li key={bi}>
                      <CheckCircle2 size={16} className="dt-bullet-check" style={{ color: migrationStages[activeStage].color }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dt-card-visual-side">
                {/* Stage 1 Visual - Scanner */}
                {activeStage === 0 && (
                  <div className="dt-stage-visual dt-visual-audit">
                    <div className="visual-header">
                      <span className="visual-title"><Terminal size={12} /> Legacy Scanner</span>
                      <span className="visual-status red-glow">AUDITING</span>
                    </div>
                    <div className="visual-body font-mono">
                      <div className="scanner-line scanning"><span className="symbol">&gt;</span> Parsing query schemas...</div>
                      <div className="scanner-line"><span className="symbol">&gt;</span> users_table.sql: <span className="warning">Flagged legacy type (VARCHAR)</span></div>
                      <div className="scanner-line"><span className="symbol">&gt;</span> payments.sql: <span className="warning">No relational indices found</span></div>
                      <div className="scanner-line"><span className="symbol">&gt;</span> logs.db: <span className="ok">Clean schema structure</span></div>
                      <div className="scanner-progress-bar">
                        <div className="progress-bar-fill fill-audit" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage 2 Visual - Translation */}
                {activeStage === 1 && (
                  <div className="dt-stage-visual dt-visual-translation">
                    <div className="visual-header">
                      <span className="visual-title"><Database size={12} /> Translation Pipeline</span>
                      <span className="visual-status purple-glow">TRANSLATING</span>
                    </div>
                    <div className="visual-body">
                      <div className="translation-grid">
                        <div className="translation-col legacy">
                          <h5>Legacy SQL</h5>
                          <pre className="font-mono">
{`CREATE TABLE users (
  id INT,
  name VARCHAR(50),
  created VARCHAR(30)
);`}
                          </pre>
                        </div>
                        <div className="translation-arrow">
                          <ArrowRight size={16} className="translation-arrow-icon" />
                        </div>
                        <div className="translation-col cloud">
                          <h5>Cloud Postgres</h5>
                          <pre className="font-mono">
{`CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  created TIMESTAMPTZ
);`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage 3 Visual - Parallel Sync */}
                {activeStage === 2 && (
                  <div className="dt-stage-visual dt-visual-parallel">
                    <div className="visual-header">
                      <span className="visual-title"><Cpu size={12} /> Dual Parity Sync</span>
                      <span className="visual-status yellow-glow">COMPARING</span>
                    </div>
                    <div className="visual-body font-mono">
                      <div className="parallel-channels">
                        <div className="parallel-channel">
                          <span className="channel-lbl">Legacy Write Pipeline</span>
                          <div className="channel-bar-wrapper">
                            <div className="channel-bar bar-legacy" />
                            <span className="channel-metric">142ms latency</span>
                          </div>
                        </div>
                        <div className="parallel-channel">
                          <span className="channel-lbl">Cloud Sync Pipeline</span>
                          <div className="channel-bar-wrapper">
                            <div className="channel-bar bar-cloud" />
                            <span className="channel-metric text-green">8ms latency</span>
                          </div>
                        </div>
                      </div>
                      <div className="parity-badge">
                        <CheckCircle2 size={12} className="text-green" /> Parity Check: 100% Match
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage 4 Visual - DNS Switchover */}
                {activeStage === 3 && (
                  <div className="dt-stage-visual dt-visual-rollout">
                    <div className="visual-header">
                      <span className="visual-title"><Cloud size={12} /> DNS Router</span>
                      <span className="visual-status green-glow">ROLLOUT COMPLETE</span>
                    </div>
                    <div className="visual-body">
                      <div className="router-diagram">
                        <div className="router-node main-dns">
                          <span className="node-icon"><RefreshCw size={14} className="badge-icon-spin" /></span>
                          <span className="node-lbl">DNS Gateway</span>
                        </div>
                        <div className="router-paths">
                          <div className="router-path path-to-legacy">
                            <span className="path-text">Legacy Cluster (0%)</span>
                            <div className="path-line red-line" />
                          </div>
                          <div className="router-path path-to-cloud">
                            <span className="path-text">Cloud Cluster (100%)</span>
                            <div className="path-line green-line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits & Outcomes */}
      <section className="dt-benefits-section">
        <div className="container dt-benefits-grid">
          <div className="dt-benefits-left reveal reveal-fade-up">
            <h2>Modernization Outcomes</h2>
            <p>Deploying modernized cloud architectures removes security loop leaks and allows rapid code deployments:</p>
            
            <ul className="dt-benefits-list">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dt-benefits-right reveal reveal-fade-up delay-200">
            {/* Proven Implementations (Case Studies) */}
            <div className="dt-sidebar-card">
              <h3>Proven Implementations</h3>
              <div className="dt-sidebar-links">
                {solution.relatedCaseStudies.map((cs) => (
                  <div key={cs.slug} className="dt-sidebar-link-row">
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
                src="/images/resource_services_bg.png" 
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
                src="/images/resource_industries_bg.png" 
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

      {/* 6. Footer Flow redirection */}
      <section className="container dt-footer-flow reveal reveal-fade-up">
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
