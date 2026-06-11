'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Bookmark, CheckCircle2, Layout, Database, 
  TrendingUp, Layers, Code, UserCheck, ShieldCheck, Clipboard, Settings, Building2, ChevronRight
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export default function CrmErpSolution({ solution }) {
  const [activeTab, setActiveTab] = useState('crm');

  const crmFeatures = [
    { name: 'Lead Pipeline', desc: 'Track sales leads from landing capture to final contract signature.' },
    { name: 'Client Profiles', desc: 'Centralized record containing contact histories, contract logs, and emails.' },
    { name: 'Automated Reminders', desc: 'Automatically ping sales representatives about follow-ups and lost quotes.' }
  ];

  const erpFeatures = [
    { name: 'Inventory Registry', desc: 'Monitor supply warehouses in real time with auto-reorder triggers.' },
    { name: 'Financial Ledger', desc: 'Fully consolidated double-entry ledger synced to payment webhooks.' },
    { name: 'Shipping Logs', desc: 'Track shipments, logistics carrier coordinates, and delivery stamps.' }
  ];

  return (
    <div className="solution-crm-erp-theme">
      {/* 1. Enterprise Dashboard Hero */}
      <section className="ce-hero-section">
        <div className="container ce-hero-grid">
          <div className="ce-hero-left reveal reveal-fade-up">
            <span className="ce-badge">
              <Layers size={14} className="badge-icon-spin" /> Operations Consolidation
            </span>
            <h1 className="ce-hero-title">{solution.heroTitle}</h1>
            <p className="ce-hero-subtitle">{solution.heroSubtitle}</p>
            
            <Link href="/contact" className="ce-btn-primary">
              <span>Request Operations Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="ce-hero-right reveal reveal-fade-up delay-200">
            {/* Live Interactive CRM/ERP Tabbed Dashboard Mockup */}
            <div className="ce-dashboard-sandbox">
              <div className="ce-db-header">
                <div className="ce-db-title">
                  <Layout size={16} className="ce-icon-gold" />
                  <h4>Operations Portal</h4>
                </div>
                <div className="ce-db-tabs">
                  <button 
                    onClick={() => setActiveTab('crm')}
                    className={`ce-db-tab-btn ${activeTab === 'crm' ? 'active' : ''}`}
                  >
                    Sales pipeline
                  </button>
                  <button 
                    onClick={() => setActiveTab('erp')}
                    className={`ce-db-tab-btn ${activeTab === 'erp' ? 'active' : ''}`}
                  >
                    Supply Chain
                  </button>
                </div>
              </div>

              <div className="ce-db-body">
                {activeTab === 'crm' ? (
                  <div className="ce-db-crm-view">
                    <div className="pipeline-column">
                      <span className="col-header">Leads (4)</span>
                      <div className="pipeline-card"><h4>Acme Corp Integration</h4><span>$45,000</span></div>
                      <div className="pipeline-card"><h4>Nexus Licensing</h4><span>$18,000</span></div>
                    </div>
                    <div className="pipeline-column">
                      <span className="col-header">In Proposal (2)</span>
                      <div className="pipeline-card status-orange"><h4>Global Transport</h4><span>$125,000</span></div>
                    </div>
                    <div className="pipeline-column">
                      <span className="col-header">Won (8)</span>
                      <div className="pipeline-card status-green"><h4>Apex Labs MVP</h4><span>$35,000</span></div>
                    </div>
                  </div>
                ) : (
                  <div className="ce-db-erp-view">
                    <div className="inventory-row">
                      <span className="item-name">Processor Cluster A</span>
                      <span className="item-qty">482 units</span>
                      <span className="item-status healthy">Healthy Stock</span>
                    </div>
                    <div className="inventory-row">
                      <span className="item-name">Fiber Optics Node</span>
                      <span className="item-qty">12 units</span>
                      <span className="item-status reorder">Auto Reorder</span>
                    </div>
                    <div className="inventory-row">
                      <span className="item-name">LED Circuit Boards</span>
                      <span className="item-qty">1,240 units</span>
                      <span className="item-status healthy">Healthy Stock</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Problem & Solution Journey */}
      <section className="ce-journey-section">
        <div className="container">
          <div className="ce-journey-card">
            <div className="ce-journey-col text-left reveal reveal-fade-up">
              <span className="col-tag">The Friction</span>
              <h2>Disconnected Platforms, Siloed Data</h2>
              <p>{solution.problem}</p>
            </div>
            <div className="ce-journey-divider" />
            <div className="ce-journey-col text-right reveal reveal-fade-up delay-200">
              <span className="col-tag">Our Solution</span>
              <h2>Consolidated Control Node</h2>
              <p>{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Module Showcase */}
      <section className="ce-modules-section">
        <div className="container">
          <div className="ce-section-header text-center reveal reveal-fade-up">
            <span className="badge-gold">Capabilities</span>
            <h2>Custom CRM vs ERP Integration Modules</h2>
            <p>Our platforms are designed as modular systems. Deploy only what you need, expand as you grow:</p>
          </div>

          <div className="ce-modules-grid">
            {/* CRM Column */}
            <div className="ce-module-card border-gold reveal reveal-fade-up">
              <div className="card-top">
                <UserCheck size={28} className="icon-gold" />
                <h3>Customer Management (CRM)</h3>
              </div>
              <p className="card-intro">Front-of-house operations tracking sales pipelines, customer interactions, and lead cycles:</p>
              <div className="card-features-list">
                {crmFeatures.map((feat, idx) => (
                  <div key={idx} className="card-feature-item">
                    <h4>{feat.name}</h4>
                    <p>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ERP Column */}
            <div className="ce-module-card border-blue reveal reveal-fade-up delay-200">
              <div className="card-top">
                <Clipboard size={28} className="icon-blue" />
                <h3>Resource Planning (ERP)</h3>
              </div>
              <p className="card-intro">Back-of-house logistics managing product pipelines, inventory ledgers, and shipping tracking:</p>
              <div className="card-features-list">
                {erpFeatures.map((feat, idx) => (
                  <div key={idx} className="card-feature-item">
                    <h4>{feat.name}</h4>
                    <p>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Roadmap */}
      <section className="ce-roadmap-section">
        <div className="container">
          <div className="ce-section-header text-center reveal reveal-fade-up">
            <span className="badge-gold">Roadmap</span>
            <h2>Implementation Process</h2>
          </div>

          <div className="ce-timeline-row">
            {solution.process.map((step, idx) => (
              <div key={idx} className={`ce-timeline-card reveal reveal-fade-up delay-${(idx + 1) * 100}`}>
                <div className="tl-card-header">
                  <span className="tl-number">{step.step}</span>
                  <h4>{step.name}</h4>
                </div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits & Outcomes */}
      <section className="ce-benefits-section">
        <div className="container ce-benefits-grid">
          <div className="ce-benefits-left reveal reveal-fade-up">
            <h2>The Enterprise Outcomes</h2>
            <p>Consolidating your business databases removes manual copy-pasting and boosts decision speed:</p>
            
            <ul className="ce-benefits-list">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ce-benefits-right reveal reveal-fade-up delay-200">
            {/* Proven Implementations (Case Studies) */}
            <div className="ce-sidebar-card">
              <h3>Proven Implementations</h3>
              <div className="ce-sidebar-links">
                {solution.relatedCaseStudies.map((cs) => (
                  <div key={cs.slug} className="ce-sidebar-link-row">
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

      {/* 6. Related Resources Section (Recommended Services & Target Industries) */}
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

      {/* 7. Footer Flow redirection */}
      <section className="container ce-footer-flow reveal reveal-fade-up">
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
