'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Bookmark, CheckCircle2, RefreshCw, Sparkles, Shield,
  Database, Zap, Play, Check, AlertTriangle, Settings, Building2, ChevronRight
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export default function BusinessAutomationSolution({ solution }) {
  const [activeStep, setActiveStep] = useState(0);

  const beforeAfterData = [
    {
      label: 'Data Entry',
      before: 'Manual copying between sheets and platforms',
      after: 'Immediate automatic API synchronization',
      isBad: true
    },
    {
      label: 'Turnaround Time',
      before: '24-48 hours average process cycle',
      after: 'Under 10 seconds execution loops',
      isBad: true
    },
    {
      label: 'Error Rates',
      before: 'Average 4-8% clerical typos',
      after: 'Zero programmatic logic errors',
      isBad: true
    },
    {
      label: 'Process Audit',
      before: 'Scattered email trails, untraceable steps',
      after: 'Centralized telemetry audit logs',
      isBad: true
    }
  ];

  return (
    <div className="solution-business-automation-theme">
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

      {/* 2. Before vs After Transformation Table */}
      <section className="bpa-transformation-section">
        <div className="container">
          <div className="bpa-section-header text-center reveal reveal-fade-up">
            <span className="badge-blue">Transformation</span>
            <h2>Before vs. After Optimization</h2>
            <p>Here is what happens when you transition from legacy processes to modern automated flows:</p>
          </div>

          <div className="bpa-table-panel reveal reveal-fade-up delay-150">
            <div className="bpa-table-grid header-row">
              <div>Category</div>
              <div>Legacy Workflow</div>
              <div>Automated Pipeline</div>
            </div>

            {beforeAfterData.map((row, i) => (
              <div key={i} className="bpa-table-grid body-row">
                <div className="category-cell">{row.label}</div>
                <div className="before-cell">
                  <AlertTriangle size={14} className="cell-icon-red" />
                  <span>{row.before}</span>
                </div>
                <div className="after-cell">
                  <Check size={14} className="cell-icon-green" />
                  <span>{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Implementation roadmap (interactive step trigger) */}
      <section className="bpa-roadmap-section">
        <div className="container bpa-roadmap-grid">
          <div className="bpa-roadmap-left reveal reveal-fade-up">
            <span className="badge-blue">Roadmap</span>
            <h2>Our Integration Plan</h2>
            <p>Our methodology ensures we deploy automated integrations without disturbing active workflow loops:</p>
            
            <div className="bpa-roadmap-selectors">
              {solution.process.map((step, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`roadmap-selector-btn ${activeStep === idx ? 'active' : ''}`}
                >
                  <span className="step-num">{step.step}</span>
                  <span className="step-title">{step.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bpa-roadmap-right reveal reveal-fade-up delay-200">
            <div className="bpa-roadmap-detail-card">
              <span className="detail-step-lbl">Phase {solution.process[activeStep].step}</span>
              <h3>{solution.process[activeStep].name}</h3>
              <p>{solution.process[activeStep].desc}</p>
            </div>
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
