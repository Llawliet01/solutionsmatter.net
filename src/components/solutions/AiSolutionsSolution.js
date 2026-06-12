'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Bookmark, CheckCircle2, Cpu, Database, RefreshCw, 
  Sparkles, Terminal, ShieldAlert, Binary, Network, Settings, Building2, ChevronRight,
  Target
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export default function AiSolutionsSolution({ solution }) {
  const [inferenceStats, setInferenceStats] = useState({ tokenSec: 74.2, accuracy: 99.4, responseTime: '82ms' });

  useEffect(() => {
    const interval = setInterval(() => {
      setInferenceStats({
        tokenSec: (70 + Math.random() * 8).toFixed(1),
        accuracy: (99.2 + Math.random() * 0.3).toFixed(2),
        responseTime: `${Math.floor(75 + Math.random() * 12)}ms`
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-activated timeline
  const timelineRef = useRef(null);
  useEffect(() => {
    if (!timelineRef.current) return;
    const nodes = timelineRef.current.querySelectorAll('.tl-zigzag-node');
    const lineSegments = timelineRef.current.querySelectorAll('.tl-line-segment');
    if (!nodes.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.idx, 10);
          const card = timelineRef.current?.querySelector(`.tl-zigzag-card[data-idx="${idx}"]`);

          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (card) card.classList.add('active');
            for (let i = 0; i <= idx && i < lineSegments.length; i++) {
              lineSegments[i].classList.add('filled');
            }
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
      step: '01',
      name: 'Use Case Scoping',
      icon: Target,
      color: '#8b5cf6', // Violet
      tag: 'Week 1',
      desc: 'We identify business operations where machine learning and vector search deliver the highest ROI, establishing clear security boundaries and feasibility limits.',
      bullets: ['Identify high-ROI ML opportunities', 'Define metrics & success criteria', 'Data feasibility & pipeline audit', 'Compliance & security design']
    },
    {
      step: '02',
      name: 'Dataset Curation',
      icon: Database,
      color: '#ec4899', // Pink
      tag: 'Week 2',
      desc: 'We aggregate, clean, and securely structure your enterprise datasets. Next, we generate high-dimensional vector embeddings, building a secure context vault.',
      bullets: ['Secure data ingestion pipelines', 'Cleaning & deduplication', 'Partitioning & high-quality labeling', 'Vector embedding generation']
    },
    {
      step: '03',
      name: 'Model Training',
      icon: Cpu,
      color: '#38bdf8', // Sky Blue
      tag: 'Week 3–4',
      desc: 'We fine-tune open-weights models (like LLaMA-3) on your custom schemas. We run continuous validation loops to optimize response accuracy and rule out hallucination risks.',
      bullets: ['Fine-tuning open-weights LLMs', 'Hyperparameter & check optimization', 'Rigorous accuracy validation', 'Bias & edge-case screening']
    },
    {
      step: '04',
      name: 'API Implementation',
      icon: Terminal,
      color: '#f97316', // Orange
      tag: 'Week 5–6',
      desc: 'We deploy the models to auto-scaling GPU environments inside your cloud firewall, integrated with low-latency caches and real-time model telemetry.',
      bullets: ['Low-latency API deployment', 'Secure vector DB caching setup', 'Auto-scaling GPU orchestration', 'Real-time telemetry & alerts']
    }
  ];

  const handleMouseMove = (e) => {

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRotate = 8;

    const rotateX = ((centerY - y) / centerY) * maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;

    card.style.transition = 'transform 0.1s ease, border-color 0.3s ease';
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.borderColor = 'rgba(109, 40, 217, 0.65)';

    const overlay = card.querySelector('.bento-fill-overlay');
    if (overlay) overlay.style.transform = 'scaleX(1)';

    const title = card.querySelector('h3');
    if (title) title.style.color = '#ffffff';

    const desc = card.querySelector('p');
    if (desc) desc.style.color = 'rgba(255,255,255,0.7)';

    const icons = card.querySelectorAll('.bento-icon');
    icons.forEach(icon => icon.style.color = '#ffffff');

    const steps = card.querySelectorAll('.pipeline-step');
    steps.forEach(s => { s.style.background = 'rgba(255,255,255,0.12)'; s.style.color = '#fff'; s.style.borderColor = 'rgba(255,255,255,0.3)'; });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s ease, border-color 0.3s ease';
    card.style.transform = 'none';
    card.style.borderColor = '';

    const overlay = card.querySelector('.bento-fill-overlay');
    if (overlay) overlay.style.transform = 'scaleX(0)';

    const title = card.querySelector('h3');
    if (title) title.style.color = '';

    const desc = card.querySelector('p');
    if (desc) desc.style.color = '';

    const icons = card.querySelectorAll('.bento-icon');
    icons.forEach(icon => icon.style.color = '');

    const steps = card.querySelectorAll('.pipeline-step');
    steps.forEach(s => { s.style.background = ''; s.style.color = ''; s.style.borderColor = ''; });
  };

  return (
    <div className="solution-ai-solutions-theme">
      {/* 1. Cinematic Orbits Hero */}
      <section className="ai-hero-section">
        <div className="ai-orbit-circle-1" />
        <div className="ai-orbit-circle-2" />
        <div className="container ai-hero-grid">
          <div className="ai-hero-left reveal reveal-fade-up">
            <span className="ai-badge">
              <Cpu size={14} className="badge-icon-spin" /> Neural Integration Hub
            </span>
            <h1 className="ai-hero-title">{solution.heroTitle}</h1>
            <p className="ai-hero-subtitle">{solution.heroSubtitle}</p>
            
            <Link href="/contact" className="ai-btn-primary">
              <span>Deploy Custom AI Model</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="ai-hero-right reveal reveal-fade-up delay-200">
            {/* Custom AI Inference Sandbox Dashboard */}
            <div className="ai-dashboard-panel">
              <div className="ai-db-header">
                <div className="db-title-row">
                  <Network size={16} className="neural-icon" />
                  <h4>Inference Monitor</h4>
                </div>
                <span className="db-live-badge">ML Core V2</span>
              </div>
              <div className="ai-db-metrics">
                <div className="db-metric-item">
                  <span className="db-m-val">{inferenceStats.tokenSec} t/s</span>
                  <span className="db-m-lbl">Generation Speed</span>
                </div>
                <div className="db-metric-item">
                  <span className="db-m-val">{inferenceStats.accuracy}%</span>
                  <span className="db-m-lbl">Inference Accuracy</span>
                </div>
                <div className="db-metric-item">
                  <span className="db-m-val">{inferenceStats.responseTime}</span>
                  <span className="db-m-lbl">Token Latency</span>
                </div>
              </div>
              <div className="ai-db-console">
                <div className="console-line"><span className="ok">MODEL</span> Initializing LLaMA-3-8B fine-tuned weights...</div>
                <div className="console-line"><span className="ok">VECTOR</span> Loaded 482k secure schema vectors from cache.</div>
                <div className="console-line"><span className="info">INFER</span> User Query: &quot;Calculate inventory forecasts for Q3.&quot;</div>
                <div className="console-line"><span className="ok">RESULT</span> Forecast computed in 84ms with 99.45% accuracy.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain and Solution overview panel */}
      <section className="ai-overview-section">
        <div className="container">
          <div className="ai-overview-card">
            <div className="ai-overview-col left-col reveal reveal-fade-up">
              <span className="overview-tag">Legacy Challenge</span>
              <h2>Data Sits Static and Unused</h2>
              <p>{solution.problem}</p>
            </div>
            <div className="ai-overview-divider" />
            <div className="ai-overview-col right-col reveal reveal-fade-up delay-200">
              <span className="overview-tag">Modern Engineering</span>
              <h2>Intelligent Secure Pipelines</h2>
              <p>{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bento Features Matrix */}
      <section className="ai-features-section">
        <div className="container">
          <div className="ai-section-header reveal reveal-fade-up">
            <span className="badge-purple">Neural Features</span>
            <h2>Our AI Architecture Matrix</h2>
          </div>

          <div className="ai-bento-grid">
            {/* Bento Block 1: Custom Fine-tuning */}
            <div
              className="bento-card bento-wide reveal reveal-fade-up"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Binary className="bento-icon icon-violet" />
                <h3>Custom Model Fine-Tuning</h3>
                <p>We take open-weights LLMs and fine-tune them on your secure database tables, building a model that understands your business vocabulary.</p>
                <div className="bento-model-pipeline">
                  <div className="pipeline-step active">Pre-training</div>
                  <div className="pipeline-arrow">&rarr;</div>
                  <div className="pipeline-step active">Vector Injection</div>
                  <div className="pipeline-arrow">&rarr;</div>
                  <div className="pipeline-step">Safe Deployment</div>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Zero Leaks Guarantee */}
            <div
              className="bento-card bento-normal reveal reveal-fade-up delay-150"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <RefreshCw className="bento-icon icon-pink" />
                <h3>Zero Data Leakage</h3>
                <p>All training loops and model execution occur strictly within your cloud firewall. Your data never trains public models.</p>
              </div>
            </div>

            {/* Bento Block 3: Vector Database Caching */}
            <div
              className="bento-card bento-normal reveal reveal-fade-up"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Database className="bento-icon icon-cyan" />
                <h3>Vector DB Caching</h3>
                <p>Custom vector embedding layers cache user intents, ensuring 80% faster response times for repeating context questions.</p>
              </div>
            </div>

            {/* Bento Block 4: Multi-Agent Collaboration (Double width) */}
            <div
              className="bento-card bento-wide reveal reveal-fade-up delay-150"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Network className="bento-icon icon-orange" />
                <h3>Autonomous Agent Orchestration</h3>
                <p>Deploy specialized AI agents that collaborate. For example, a financial agent queries database ledgers, aggregates metrics, and hands the layout payload to an automated email sender agent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline Roadmap */}
      <section className="ai-roadmap-section">
        <div className="container">
          <div className="smvp-section-header reveal reveal-fade-up">
            <span className="badge-purple">Roadmap</span>
            <h2>Model Development Roadmap</h2>
            <p className="smvp-roadmap-subtitle">From custom fine-tuning to scalable low-latency API deployment.</p>
          </div>

          <div className="smvp-zigzag-timeline" ref={timelineRef}>
            {/* Vertical center line */}
            <div className="tl-center-line">
              <div className="tl-line-track">
                {roadmapSteps.slice(0, -1).map((_, i) => (
                  <div key={i} className="tl-line-segment" data-idx={i} />
                ))}
              </div>
            </div>

            {roadmapSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`tl-zigzag-row ${isLeft ? 'row-left' : 'row-right'}`}>
                  {/* Spacer on opposite side */}
                  <div className="tl-zigzag-spacer" />

                  {/* Center dot node */}
                  <div
                    className="tl-zigzag-node"
                    data-idx={idx}
                    style={{ '--node-color': step.color }}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div
                    className={`tl-zigzag-card ${isLeft ? 'card-left' : 'card-right'}`}
                    data-idx={idx}
                    style={{ '--card-color': step.color }}
                  >
                    <div className="tl-card-glow" />
                    <div className="tl-card-inner">
                      <div className="tl-card-top">
                        <span className="tl-card-tag" style={{ color: step.color, background: `${step.color}18` }}>
                          {step.tag}
                        </span>
                        <span className="tl-step-num" style={{ color: step.color }}>{step.step}</span>
                      </div>
                      <h3 className="tl-card-title">{step.name}</h3>
                      <p className="tl-card-desc">{step.desc}</p>
                      <ul className="tl-card-bullets">
                        {step.bullets.map((b, bi) => (
                          <li key={bi}>
                            <CheckCircle2 size={14} style={{ color: step.color }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Benefits & Outcomes */}
      <section className="ai-benefits-section">
        <div className="container ai-benefits-grid">
          <div className="ai-benefits-left reveal reveal-fade-up">
            <h2>The Neural Outcomes</h2>
            <p>Deploying private AI engines reduces task iteration times and uncovers critical insights:</p>
            
            <ul className="ai-benefits-list">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ai-benefits-right reveal reveal-fade-up delay-200">
            {/* Proven Implementations (Case Studies) */}
            <div className="ai-sidebar-card">
              <h3>Proven Implementations</h3>
              <div className="ai-sidebar-links">
                {solution.relatedCaseStudies.map((cs) => (
                  <div key={cs.slug} className="ai-sidebar-link-row">
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
      <section className="container ai-footer-flow reveal reveal-fade-up">
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
