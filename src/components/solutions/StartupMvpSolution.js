'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Rocket, Zap, CheckCircle2, Bookmark, ArrowRight, ChevronRight, 
  Sparkles, Clock, TrendingUp, Gauge, Terminal, Laptop, Settings, Building2,
  Target, PenTool, Code2, BarChart3
} from 'lucide-react';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export default function StartupMvpSolution({ solution }) {
  const [activeTab, setActiveTab] = useState('analytics');
  const [metrics, setMetrics] = useState({ users: 128, load: '142ms', errors: '0.01%' });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        users: Math.floor(120 + Math.random() * 20),
        load: `${Math.floor(130 + Math.random() * 25)}ms`,
        errors: `${(0.005 + Math.random() * 0.01).toFixed(3)}%`
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-activated timeline
  const timelineRef = useRef(null);
  useEffect(() => {
    const nodes = document.querySelectorAll('.tl-zigzag-node');
    const lineSegments = document.querySelectorAll('.tl-line-segment');
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.idx, 10);
          const card = document.querySelector(`.tl-zigzag-card[data-idx="${idx}"]`);

          if (entry.isIntersecting) {
            // Activate node + card
            entry.target.classList.add('active');
            if (card) card.classList.add('active');
            // Fill line segments up to this index
            for (let i = 0; i <= idx && i < lineSegments.length; i++) {
              lineSegments[i].classList.add('filled');
            }
          } else {
            // Deactivate node + card
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
      name: 'Scope Definition',
      icon: Target,
      color: '#8b5cf6',
      tag: 'Week 1',
      desc: 'We begin with a focused discovery sprint where our product strategists map your market, competitors, and target persona. We extract the single core value proposition that users will pay for — everything else is deprioritized.',
      bullets: ['Feature prioritization matrix', 'User persona mapping', 'Technical feasibility review', 'Investor pitch alignment']
    },
    {
      step: '02',
      name: 'Interactive Wireframing',
      icon: PenTool,
      color: '#ec4899',
      tag: 'Week 2',
      desc: 'Clickable prototypes are built in Figma with real user flows — sign-up, core action, and key result. We run rapid feedback loops with your team before a single line of code is written, saving weeks of rework.',
      bullets: ['High-fidelity Figma screens', 'User journey mapping', 'Onboarding flow design', 'Prototype testing sessions']
    },
    {
      step: '03',
      name: 'Rapid Engineering',
      icon: Code2,
      color: '#38bdf8',
      tag: 'Week 3–5',
      desc: 'Our engineers implement the approved designs using a modern, scale-ready stack (Next.js, Node.js, PostgreSQL). Core integrations — Stripe payments, Auth0, SendGrid email — are included from day one.',
      bullets: ['Modular Next.js frontend', 'Node.js REST API backend', 'Stripe + Auth0 integration', 'CI/CD pipeline setup']
    },
    {
      step: '04',
      name: 'Launch & Telemetry',
      icon: BarChart3,
      color: '#f97316',
      tag: 'Week 6',
      desc: 'We deploy to Vercel/AWS with full observability — error tracking via Sentry, user analytics via Mixpanel, and API health monitors. You go live with total visibility into your product from day one.',
      bullets: ['Vercel/AWS deployment', 'Sentry error tracking', 'Mixpanel analytics', 'Real-time uptime monitoring']
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
    card.style.borderColor = 'rgba(139, 92, 246, 0.65)';

    // Trigger left-to-right fill overlay
    const overlay = card.querySelector('.bento-fill-overlay');
    if (overlay) {
      overlay.style.transform = 'scaleX(1)';
    }

    const title = card.querySelector('h3');
    if (title) title.style.color = '#ffffff';

    const desc = card.querySelector('p');
    if (desc) desc.style.color = 'rgba(255, 255, 255, 0.7)';

    const sprintLabels = card.querySelectorAll('.sprint-node .node-lbl');
    sprintLabels.forEach(lbl => lbl.style.color = '#ffffff');

    const featureItems = card.querySelectorAll('.bFeature-item');
    featureItems.forEach(item => item.style.color = '#ffffff');

    const icons = card.querySelectorAll('.bento-icon');
    icons.forEach(icon => icon.style.color = '#ffffff');
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.4s ease, border-color 0.3s ease';
    card.style.transform = 'none';
    card.style.borderColor = '';

    // Retract fill overlay
    const overlay = card.querySelector('.bento-fill-overlay');
    if (overlay) {
      overlay.style.transform = 'scaleX(0)';
    }

    const title = card.querySelector('h3');
    if (title) title.style.color = '';

    const desc = card.querySelector('p');
    if (desc) desc.style.color = '';

    const sprintLabels = card.querySelectorAll('.sprint-node .node-lbl');
    sprintLabels.forEach(lbl => lbl.style.color = '');

    const featureItems = card.querySelectorAll('.bFeature-item');
    featureItems.forEach(item => item.style.color = '');

    const icons = card.querySelectorAll('.bento-icon');
    icons.forEach(icon => icon.style.color = '');
  };

  return (
    <div className="solution-startup-mvp-theme">
      {/* 1. Bespoke Tech Hero */}
      <section className="smvp-hero-section">
        <div className="smvp-grid-overlay" />
        <div className="container smvp-hero-grid">
          <div className="smvp-hero-left reveal reveal-fade-up">
            <span className="smvp-badge">
              <Sparkles size={14} className="badge-icon-spin" /> Launch Launchpad
            </span>
            <h1 className="smvp-hero-title">{solution.heroTitle}</h1>
            <p className="smvp-hero-subtitle">{solution.heroSubtitle}</p>
            <div className="smvp-hero-ctas">
              <Link href="/contact" className="smvp-btn-primary">
                <span>Start Your MVP Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="smvp-hero-right reveal reveal-fade-up delay-200">
            {/* Live Interactive MVP Sandbox Mockup */}
            <div className="smvp-sandbox-card">
              <div className="smvp-sandbox-header">
                <div className="smvp-window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="smvp-window-address">https://api.yourstartup.io/v1</div>
              </div>
              <div className="smvp-sandbox-tabs">
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`sandbox-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                >
                  <Gauge size={14} /> Analytics
                </button>
                <button 
                  onClick={() => setActiveTab('console')}
                  className={`sandbox-tab-btn ${activeTab === 'console' ? 'active' : ''}`}
                >
                  <Terminal size={14} /> Log Feed
                </button>
              </div>
              <div className="smvp-sandbox-body">
                {activeTab === 'analytics' ? (
                  <div className="sandbox-analytics-view">
                    <div className="metric-box">
                      <span className="metric-lbl">Active Users</span>
                      <span className="metric-val">{metrics.users}</span>
                      <span className="metric-trend"><TrendingUp size={12} /> Live telemetry</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-lbl">API Latency</span>
                      <span className="metric-val">{metrics.load}</span>
                      <span className="metric-trend green">Excellent</span>
                    </div>
                    <div className="metric-box">
                      <span className="metric-lbl">Error Rate</span>
                      <span className="metric-val">{metrics.errors}</span>
                      <span className="metric-trend green">Healthy</span>
                    </div>
                  </div>
                ) : (
                  <div className="sandbox-console-view">
                    <div className="console-line"><span className="time">[11:25:02]</span> <span className="info">INFO</span> Database connection initialized.</div>
                    <div className="console-line"><span className="time">[11:25:04]</span> <span className="ok">OK</span> Stripe API webhook configured successfully.</div>
                    <div className="console-line"><span className="time">[11:25:08]</span> <span className="warn">WARN</span> Query latency spike (195ms).</div>
                    <div className="console-line"><span className="time">[11:25:09]</span> <span className="info">INFO</span> Session validated for user_92817.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Overview Journey */}
      <section className="smvp-journey-section">
        <div className="container">
          <div className="smvp-journey-box">
            <div className="smvp-journey-col text-left reveal reveal-fade-up">
              <span className="col-tag">The Pain Point</span>
              <h2>Startups Build Too Much, Too Slow</h2>
              <p>{solution.problem}</p>
            </div>
            <div className="smvp-journey-divider" />
            <div className="smvp-journey-col text-right reveal reveal-fade-up delay-200">
              <span className="col-tag">Our Answer</span>
              <h2>Engineered for Validation</h2>
              <p>{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Bento Grid */}
      <section className="smvp-features-section">
        <div className="container">
          <div className="smvp-section-header reveal reveal-fade-up">
            <span className="badge-purple">Capabilities</span>
            <h2>Our Bento Innovation Matrix</h2>
          </div>

          <div className="smvp-bento-grid">
            {/* Bento Block 1: 6-Week Launch Schedule (Double width) */}
            <div 
              className="bento-card bento-wide reveal reveal-fade-up"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Clock className="bento-icon icon-purple" />
                <h3>6-Week Prototype Framework</h3>
                <p>We work in modular sprints to deploy working iterations. Here is how we compress 6 months of work into weeks:</p>
                <div className="bento-sprint-bar">
                  <div className="sprint-node active">
                    <span className="node-num">W1-2</span>
                    <span className="node-lbl">MVP Scope</span>
                  </div>
                  <div className="sprint-node active">
                    <span className="node-num">W3-4</span>
                    <span className="node-lbl">Core Design</span>
                  </div>
                  <div className="sprint-node">
                    <span className="node-num">W5-6</span>
                    <span className="node-lbl">Integrations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Block 2: Latency & Speed (Normal) */}
            <div 
              className="bento-card bento-normal text-center reveal reveal-fade-up delay-150"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content flex-center">
                <Gauge className="bento-icon icon-cyan" />
                <span className="bento-huge-stat">-65%</span>
                <h3>Dev Time Reduced</h3>
                <p>Using boilerplate blocks and lightweight cloud setups.</p>
              </div>
            </div>

            {/* Bento Block 3: Codebase Specs (Normal) */}
            <div 
              className="bento-card bento-normal reveal reveal-fade-up"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Laptop className="bento-icon icon-pink" />
                <h3>Scale-Ready code</h3>
                <p>No messy throwaway code. We write fully structured modular scripts, preparing you for Series A.</p>
              </div>
            </div>

            {/* Bento Block 4: Feature Checklist (Double width) */}
            <div 
              className="bento-card bento-wide reveal reveal-fade-up delay-150"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-fill-overlay" />
              <div className="bento-content">
                <Rocket className="bento-icon icon-orange" />
                <h3>Essential Out-of-the-Box Integrations</h3>
                <p>Skip building basic services. We deploy pre-integrated core features immediately:</p>
                <div className="bento-features-row">
                  <div className="bFeature-item"><CheckCircle2 size={14} /> Stripe Payments</div>
                  <div className="bFeature-item"><CheckCircle2 size={14} /> SendGrid Email</div>
                  <div className="bFeature-item"><CheckCircle2 size={14} /> Auth0 & OAuth</div>
                  <div className="bFeature-item"><CheckCircle2 size={14} /> Vercel hosting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Roadmap Section */}
      <section className="smvp-roadmap-section">
        <div className="container">
          <div className="smvp-section-header reveal reveal-fade-up">
            <span className="badge-purple">Roadmap</span>
            <h2>Implementation Steps</h2>
            <p className="smvp-roadmap-subtitle">From concept to live product in six focused weeks.</p>
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
      <section className="smvp-benefits-section">
        <div className="container smvp-benefits-grid">
          <div className="smvp-benefits-left reveal reveal-fade-up">
            <h2>The Value We Unlock</h2>
            <p>Deploying an MVP is about learning from the market with minimal resource burn. Here is what you achieve:</p>
            
            <ul className="smvp-benefits-list">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="smvp-benefits-right reveal reveal-fade-up delay-200">
            {/* Proven Implementations (Case Studies) */}
            <div className="smvp-sidebar-card">
              <h3>Proven Implementations</h3>
              <div className="smvp-sidebar-links">
                {solution.relatedCaseStudies.map((cs) => (
                  <div key={cs.slug} className="smvp-sidebar-link-row">
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

      {/* 7. Footer Navigation redirects */}
      <section className="container smvp-footer-flow reveal reveal-fade-up">
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
