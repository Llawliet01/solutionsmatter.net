'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Terminal, Zap, Database, Globe, CheckCircle, ArrowRight, ChevronDown, Code2, Settings, Cpu } from 'lucide-react';
import CTA from '@/components/CTA';

const TYPEWRITER_LINES = [
  { text: '$ npx create-saas-app --tenant-isolation rls --billing core', delay: 0 },
  { text: '✓ SQL DB RLS policies initialized', delay: 400, color: 'green' },
  { text: '✓ Webhook listeners configured', delay: 800, color: 'green' },
  { text: '✓ Multi-tenant SSO connected', delay: 1200, color: 'green' },
  { text: '→ Deploying to 12 Edge Regions…', delay: 1600, color: 'blue' },
  { text: '✓ Deploy complete — 847ms cold start → 0ms warm', delay: 2000, color: 'green' },
  { text: '$ Performance score: 98', delay: 2400 },
];

export default function SaasTechnologyIndustry({ industry }) {
  const [activeFaq, setActiveFaq] = useState(null);
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

  const [typedLines, setTypedLines] = useState([]);
  const [activeTier, setActiveTier] = useState(1);
  const [consoleLogs, setConsoleLogs] = useState([
    { t: '11:42:01', type: 'INFO', msg: 'Tenant [tenant_982] session created via SSO' },
    { t: '11:42:05', type: 'OK', msg: 'Core billing invoice.payment_succeeded webhook processed' },
    { t: '11:42:09', type: 'WARN', msg: 'DB pool utilization high - auto-scaling triggered' },
  ]);
  const statsRef = useRef(null);

  // Typewriter animation
  useEffect(() => {
    let timeouts = [];
    TYPEWRITER_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setTypedLines(prev => [...prev, line]);
      }, line.delay + i * 50);
      timeouts.push(t);
    });
    // Loop
    const loopTimeout = setTimeout(() => {
      setTypedLines([]);
      timeouts.forEach(t => clearTimeout(t));
    }, 6000);
    timeouts.push(loopTimeout);
    return () => timeouts.forEach(t => clearTimeout(t));
  }, [typedLines.length === 0 ? 0 : undefined]);

  // Live console logs
  useEffect(() => {
    const logPool = [
      { type: 'INFO', msg: 'User login via Identity SSO - tenant_482' },
      { type: 'OK', msg: 'In-memory cache hit: tenant_982_dashboard_data' },
      { type: 'OK', msg: 'Billing subscription upgraded: plan_pro - plan_enterprise' },
      { type: 'WARN', msg: 'Feature flag rollout: 12% of users on new_billing_ui' },
      { type: 'INFO', msg: 'Background job: invoice_generate completed in 142ms' },
    ];
    const iv = setInterval(() => {
      const d = new Date();
      const t = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
      const pick = logPool[Math.floor(Math.random() * logPool.length)];
      setConsoleLogs(prev => [{ ...pick, t }, prev[0], prev[1]]);
    }, 3500);
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

  return (
    <div className="st2-theme">
      {/* ═══ HERO ═══ */}
      <section className="st2-hero">
        <div className="st2-hero-grid-bg" />
        <div className="st2-purple-orb" />
        <div className="st2-indigo-orb" />

        <div className="container st2-hero-inner">
          <div className="st2-hero-left">
            <div className="st2-eyebrow">
              <Terminal size={14} />
              <span>SaaS & Technology</span>
            </div>
            <h1 className="st2-hero-title">
              Multi-Tenant<br />
              <span className="st2-purple-text">SaaS Engineering</span><br />
              at Scale
            </h1>
            <p className="st2-hero-sub">
              We build production-grade SaaS architectures with tenant isolation, automated subscription billing, and modern frontends that score in the highest tier on performance speed benchmarks.
            </p>
            <div className="st2-hero-actions">
              <Link href="/contact" className="st2-btn-primary">
                Develop Your SaaS App <ArrowRight size={16} />
              </Link>
              <Link href="/company/case-studies/saas-analytics-platform" className="st2-btn-ghost">
                View SaaS Case
              </Link>
            </div>
            <div className="st2-tech-row">
              {['SQL Row-Level Security', 'SSO Middleware', 'Billing Webhooks', 'Edge Caching'].map(t => (
                <span key={t} className="st2-tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: Terminal + Console */}
          <div className="st2-hero-right">
            <div className="st2-terminal-card">
              <div className="st2-term-header">
                <div className="st2-term-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="st2-term-title">saas-deploy — zsh</span>
              </div>

              {/* Typewriter shell */}
              <div className="st2-shell-body">
                {typedLines.map((line, i) => (
                  <div key={i} className={`st2-shell-line ${line.color || 'default'}`}>
                    {line.text}
                  </div>
                ))}
                <div className="st2-cursor">_</div>
              </div>

              {/* Live log stream */}
              <div className="st2-log-section">
                <div className="st2-log-header">
                  <span>Runtime Console</span>
                  <span className="st2-live-pill">● Live</span>
                </div>
                {consoleLogs.map((log, i) => (
                  <div key={i} className="st2-log-row">
                    <span className="st2-log-time">[{log.t}]</span>
                    <span className={`st2-log-type ${log.type.toLowerCase()}`}>{log.type}</span>
                    <span className="st2-log-msg">{log.msg}</span>
                  </div>
                ))}
              </div>

              {/* PageSpeed meter */}
              <div className="st2-perf-row">
                <div className="st2-perf-meter">
                  <div className="st2-perf-circle">98</div>
                  <span className="st2-perf-lbl">Performance</span>
                </div>
                <div className="st2-perf-stats">
                  <div className="st2-perf-stat"><span>LCP</span><strong className="green-txt">0.8s</strong></div>
                  <div className="st2-perf-stat"><span>FID</span><strong className="green-txt">12ms</strong></div>
                  <div className="st2-perf-stat"><span>CLS</span><strong className="green-txt">0.01</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE DIAGRAM ═══ */}
      <section className="st2-arch-section">
        <div className="container">
          <div className="st2-section-label">Platform Architecture</div>
          <h2 className="st2-section-title">How a Production SaaS<br /><span className="st2-purple-text">System Is Structured</span></h2>
          <div className="st2-arch-diagram">
            <div className="st2-arch-row">
              <div className="st2-arch-block front premium-node tilt-card-wrapper reveal-on-scroll" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Code2 size={18} />
                <span>Web Frontend</span>
                <p>SSR + Edge caching</p>
              </div>
              <div className="st2-arch-block front premium-node tilt-card-wrapper reveal-on-scroll delay-100" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Globe size={18} />
                <span>Identity SSO</span>
                <p>Multi-tenant JWT</p>
              </div>
            </div>
            <div className="st2-arch-arrows">
              <div className="st2-arch-arrow-line" />
            </div>
            <div className="st2-arch-row">
              <div className="st2-arch-block mid premium-node tilt-card-wrapper reveal-on-scroll delay-200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Settings size={18} />
                <span>API Server Node</span>
                <p>Rate limited & versioned</p>
              </div>
              <div className="st2-arch-block mid premium-node tilt-card-wrapper reveal-on-scroll delay-300" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Zap size={18} />
                <span>Billing Webhooks</span>
                <p>Event queue workers</p>
              </div>
            </div>
            <div className="st2-arch-arrows">
              <div className="st2-arch-arrow-line" />
            </div>
            <div className="st2-arch-row">
              <div className="st2-arch-block back accent premium-node tilt-card-wrapper reveal-on-scroll delay-400" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Database size={18} />
                <span>Database Engine (RLS)</span>
                <p>Isolated tenant rows</p>
              </div>
              <div className="st2-arch-block back premium-node tilt-card-wrapper reveal-on-scroll delay-500" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Cpu size={18} />
                <span>In-Memory Cache</span>
                <p>Instant query hits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="st2-stats-section" ref={statsRef}>
        <div className="st2-stats-bg" />
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card reveal-on-scroll" style={{
              '--stat-glow-color': 'rgba(139, 92, 246, 0.3)',
              '--stat-shadow': 'rgba(139, 92, 246, 0.12)',
              '--icon-bg-glow': 'rgba(139, 92, 246, 0.08)',
              '--icon-border-glow': 'rgba(139, 92, 246, 0.2)',
              '--icon-color': '#8b5cf6'
            }}>
              <div className="premium-stat-icon-wrap">
                <Zap size={24} />
              </div>
              <span className="st2-stat-num" style={{ fontSize: '28px' }}>98/100</span>
              <span className="st2-stat-label">Performance Speed Score<br />on Delivered SaaS Platforms</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-100" style={{
              '--stat-glow-color': 'rgba(139, 92, 246, 0.3)',
              '--stat-shadow': 'rgba(139, 92, 246, 0.12)',
              '--icon-bg-glow': 'rgba(139, 92, 246, 0.08)',
              '--icon-border-glow': 'rgba(139, 92, 246, 0.2)',
              '--icon-color': '#8b5cf6'
            }}>
              <div className="premium-stat-icon-wrap">
                <Globe size={24} />
              </div>
              <span className="st2-stat-num" style={{ fontSize: '28px' }}>-80%</span>
              <span className="st2-stat-label">User Sign-Up Flow<br />Dropout Reduction</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-200" style={{
              '--stat-glow-color': 'rgba(139, 92, 246, 0.3)',
              '--stat-shadow': 'rgba(139, 92, 246, 0.12)',
              '--icon-bg-glow': 'rgba(139, 92, 246, 0.08)',
              '--icon-border-glow': 'rgba(139, 92, 246, 0.2)',
              '--icon-color': '#8b5cf6'
            }}>
              <div className="premium-stat-icon-wrap">
                <Database size={24} />
              </div>
              <span className="st2-stat-num" style={{ fontSize: '28px' }}>50,000+</span>
              <span className="st2-stat-label">Concurrent Tenants<br />Supported via RLS Architecture</span>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ CASE STUDY ═══ */}
      <section className="st2-case-section">
        <div className="container">
          <div className={`case-flip-container ${caseFlipped ? 'flipped' : ''}`}>
            <div className="case-card-inner">
              
              {/* Front of Card */}
              <div className="case-card-front">
                <div className="case-front-content" style={{
                  '--glow-color': 'rgba(139, 92, 246, 0.08)',
                  '--btn-hover-bg': '#8b5cf6',
                  '--btn-shadow': 'rgba(139, 92, 246, 0.35)',
                  height: '100%',
                  minHeight: '480px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div className="case-front-bg-blur" />
                  <div className="case-front-card-inner">
                    <div className="st2-case-eyebrow" style={{ marginBottom: '16px' }}>Case Study</div>
                    <h2 className="case-front-title">SaaS Analytics Platform</h2>
                    <p className="case-front-summary">
                      An analytics SaaS provider secured their platform and increased onboarding rates. Learn how we used database row-level isolation and server-side edge caching to score 98/100 in speed and drop user sign-up dropouts by 80%.
                    </p>
                    <button className="case-flip-btn" onClick={() => setCaseFlipped(true)}>
                      Click to read in more detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="case-card-back">
                <div className="st2-case-card" style={{ margin: 0 }}>
                  <div className="st2-case-eyebrow">Case Study — Detailed Report</div>
                  <div className="st2-case-inner">
                    <div className="st2-case-content">
                      <h2>SaaS Analytics Platform</h2>
                      <p><strong>Challenge:</strong> An analytics SaaS provider experienced onboarding dropouts due to slow dashboard load times and lacked proper workspace isolation between enterprise clients on a shared database.</p>
                      <p><strong>Solution:</strong> We rebuilt the frontend using modern server rendering with in-memory query caching, and implemented database row-level security policies to enforce strict tenant isolation without separate databases.</p>
                      <div className="st2-case-results">
                        <div className="st2-case-result"><span className="st2-res-num" style={{ fontSize: '24px' }}>98/100</span><span className="st2-res-lbl">Performance Score</span></div>
                        <div className="st2-case-result"><span className="st2-res-num" style={{ fontSize: '24px' }}>-80%</span><span className="st2-res-lbl">Sign-up Dropouts</span></div>
                        <div className="st2-case-result"><span className="st2-res-num" style={{ fontSize: '24px' }}>0</span><span className="st2-res-lbl">Data Isolation Incidents</span></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                        <Link href="/company/case-studies/saas-analytics-platform" className="st2-case-link">
                          Read Full Case <ArrowRight size={14} />
                        </Link>
                        <button className="case-flip-btn" style={{ padding: '6px 16px', fontSize: '12px', borderColor: 'rgba(139, 92, 246, 0.4)' }} onClick={() => setCaseFlipped(false)}>
                          Close Details
                        </button>
                      </div>
                    </div>
                    <div className="st2-case-code">
                      <div className="st2-code-block">
                        <div className="st2-code-header">rls_policy.sql</div>
                        <pre className="st2-code-body">{`CREATE POLICY tenant_isolation
  ON documents
  USING (tenant_id = current_setting(
    'app.current_tenant'
  )::uuid);

-- Zero data leaks between tenants
-- Enforced at database engine level`}</pre>
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
      <section className="st2-faq-section">
        <div className="container st2-faq-inner">
          <div className="st2-faq-left reveal-on-scroll">
            <div className="st2-section-label">Common Questions</div>
            <h2 className="st2-section-title">SaaS Engineering<br /><span className="st2-purple-text">Questions Answered</span></h2>
            <p>Our SaaS product engineers are available to review your multi-tenancy and billing architecture requirements.</p>
            <Link href="/contact" className="st2-btn-ghost mt-6">Talk to an Engineer <ArrowRight size={14} /></Link>
          </div>
          <div className="st2-faq-right reveal-on-scroll delay-100">
            {[
              { q: 'How do you ensure complete data isolation between tenant accounts?', a: 'We write database row-level security migration files that enforce tenant_id matching on every query, using JWT-derived context variables set at session initialization. This guarantees isolation at the database engine level — not just in application code.' },
              { q: 'What is your strategy for achieving sub-second frontend load times?', a: 'We use server-side page pre-rendering, edge CDN caching for static assets, in-memory caching for frequently queried data sets, and bundle splitting via dynamic imports to minimize initial JavaScript payload size.' },
              { q: 'How do you handle subscription billing edge cases?', a: 'We implement a webhook receiver backed by background job queues to process billing events asynchronously. Each event type (upgrade, downgrade, failed payment) triggers specific database state mutations and sends transactional emails without impacting request latency.' },
              { q: 'Can you build feature flag systems for phased rollouts?', a: 'Yes. We deploy a custom feature flag service backed by in-memory stores that supports percentage-based rollouts, tenant-specific overrides, and real-time toggles via admin dashboard without any deployment required.' },
            ].map((item, i) => (
              <div key={i} className={`premium-faq-item ${activeFaq === i ? 'open' : ''}`} style={{
                '--faq-accent': '#8b5cf6',
                '--faq-shadow': 'rgba(139, 92, 246, 0.06)'
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
      <section className="st2-cta-wrapper">
        <CTA variant="middle" />
      </section>
    </div>
  );
}
