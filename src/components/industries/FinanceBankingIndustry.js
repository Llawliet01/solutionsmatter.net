'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, TrendingUp, Lock, Server, CheckCircle, ArrowRight, ChevronDown, AlertTriangle, Database, Zap, BarChart2, Crosshair, Rocket } from 'lucide-react';
import CTA from '@/components/CTA';

export default function FinanceBankingIndustry({ industry }) {
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

  const nextTxIdRef = useRef(9843);
  const [transactions, setTransactions] = useState([
    { id: 'TX-9842', amount: 284500, from: 'Institu-Corp', to: 'PayNode Ltd', ms: 6, status: 'cleared' },
    { id: 'TX-9841', amount: 12800, from: 'Jane D.', to: 'Wire Transfer', ms: 4, status: 'cleared' },
    { id: 'TX-9840', amount: 980000, from: 'CapitalFund', to: 'LedgerVault', ms: 9, status: 'flagged' },
  ]);
  const [threatFeed, setThreatFeed] = useState([
    { type: 'BLOCKED', ip: '198.51.100.4', reason: 'Rate limit - 2400 req/min', time: '14:02:11' },
    { type: 'OK', ip: '10.0.0.12', reason: 'API write validated', time: '14:02:14' },
    { type: 'BLOCKED', ip: '203.0.113.7', reason: 'Geo-block: TOR exit node', time: '14:02:18' },
  ]);
  const statsRef = useRef(null);

  // Live transaction stream
  useEffect(() => {
    const names = ['Meridian Bank', 'Apex Capital', 'GlobalTrade Corp', 'SilverLake Fund', 'NovaPay Ltd'];
    const iv = setInterval(() => {
      const amt = Math.floor(1000 + Math.random() * 500000);
      const ms = Math.floor(3 + Math.random() * 12);
      const statuses = ['cleared', 'cleared', 'cleared', 'flagged'];
      const nextId = nextTxIdRef.current++;
      setTransactions(prev => [
        {
          id: 'TX-' + nextId,
          amount: amt,
          from: names[Math.floor(Math.random() * names.length)],
          to: names[Math.floor(Math.random() * names.length)],
          ms,
          status: statuses[Math.floor(Math.random() * statuses.length)],
        },
        prev[0],
        prev[1],
      ]);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  // Live threat feed
  useEffect(() => {
    const threats = [
      { type: 'BLOCKED', ip: '198.51.100.' + Math.floor(Math.random()*255), reason: 'Anomalous velocity: 8 transfers in 2s', time: '' },
      { type: 'OK', ip: '10.0.0.' + Math.floor(Math.random()*255), reason: 'Auth token validated via OAuth2', time: '' },
      { type: 'ALERT', ip: '45.33.32.' + Math.floor(Math.random()*255), reason: 'IP risk score: Elevated - monitoring', time: '' },
    ];
    const iv = setInterval(() => {
      const d = new Date();
      const t = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
      const pick = threats[Math.floor(Math.random() * threats.length)];
      setThreatFeed(prev => [{ ...pick, time: t }, prev[0], prev[1]]);
    }, 4000);
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
    <div className="fb2-theme">
      {/* ═══ HERO ═══ */}
      <section className="fb2-hero">
        <div className="fb2-hero-grid" />
        <div className="fb2-gold-orb-1" />
        <div className="fb2-gold-orb-2" />

        <div className="container fb2-hero-inner">
          {/* Left: Headlines + Stats */}
          <div className="fb2-hero-left">
            <div className="fb2-eyebrow">
              <Shield size={14} />
              <span>Finance & Banking Infrastructure</span>
            </div>
            <h1 className="fb2-hero-title">
              Fortress-Grade<br />
              <span className="fb2-gold-text">Digital Banking</span><br />
              Systems
            </h1>
            <p className="fb2-hero-sub">
              High-availability cloud infrastructure, encrypted ledger systems, and fraud-detection APIs built for institutions that cannot afford downtime.
            </p>
            <div className="fb2-hero-actions">
              <Link href="/contact" className="fb2-btn-primary">
                Deploy FinTech Infrastructure <ArrowRight size={16} />
              </Link>
              <Link href="/company/case-studies/secure-cloud-finance-migration" className="fb2-btn-ghost">
                View Migration Case
              </Link>
            </div>
            {/* Live metric pills */}
            <div className="fb2-live-metrics">
              <div className="fb2-metric-pill">
                <span className="fb2-metric-dot" />
                <span className="fb2-metric-val">99.99%</span>
                <span className="fb2-metric-lbl">Uptime</span>
              </div>
              <div className="fb2-metric-pill">
                <span className="fb2-metric-dot" />
                <span className="fb2-metric-val">&lt;10ms</span>
                <span className="fb2-metric-lbl">API Latency</span>
              </div>
              <div className="fb2-metric-pill">
                <span className="fb2-metric-dot" />
                <span className="fb2-metric-val">45ms</span>
                <span className="fb2-metric-lbl">Fraud Detection</span>
              </div>
            </div>
          </div>

          {/* Right: Live Transaction Ledger Terminal */}
          <div className="fb2-hero-right">
            <div className="fb2-terminal-card">
              <div className="fb2-terminal-header">
                <div className="fb2-term-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="fb2-term-title">SecureLedger — Live Transaction Feed</span>
                <span className="fb2-live-badge">● LIVE</span>
              </div>

              <div className="fb2-term-body">
                {/* Transaction stream */}
                <div className="fb2-tx-section">
                  <div className="fb2-tx-header-row">
                    <span>Transaction Stream</span>
                    <span className="fb2-ticker-spin">↻ Streaming</span>
                  </div>
                  {transactions.map((tx, i) => (
                    <div key={tx.id} className={`fb2-tx-row ${i === 0 ? 'new-entry' : ''} ${tx.status}`}>
                      <div className="fb2-tx-left">
                        <span className="fb2-tx-id">{tx.id}</span>
                        <span className="fb2-tx-parties">{tx.from} → {tx.to}</span>
                      </div>
                      <div className="fb2-tx-right">
                        <span className="fb2-tx-amount">${tx.amount.toLocaleString()}</span>
                        <div className="fb2-tx-tags">
                          <span className={`fb2-tx-status ${tx.status}`}>{tx.status.toUpperCase()}</span>
                          <span className="fb2-tx-speed">{tx.ms}ms</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Threat feed */}
                <div className="fb2-threat-section">
                  <div className="fb2-threat-header">WAF Security Feed</div>
                  {threatFeed.map((t, i) => (
                    <div key={i} className={`fb2-threat-row ${t.type.toLowerCase()}`}>
                      <span className={`fb2-threat-type ${t.type.toLowerCase()}`}>{t.type}</span>
                      <span className="fb2-threat-ip">{t.ip}</span>
                      <span className="fb2-threat-reason">{t.reason}</span>
                      <span className="fb2-threat-time">{t.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECURITY ARCHITECTURE SVG ═══ */}
      <section className="fb2-architecture-section">
        <div className="container">
          <div className="fb2-arch-header">
            <div className="fb2-section-label">Security Architecture</div>
            <h2 className="fb2-section-title">Every Layer<br /><span className="fb2-gold-text">Hardened</span></h2>
            <p>Our banking infrastructure deploys defense in depth — from edge firewall to encrypted database enclave.</p>
          </div>
          <div className="fb2-arch-diagram reveal-on-scroll">
            <div className="fb2-arch-layer client-layer">
              <div className="fb2-arch-layer-label">Client Tier</div>
              <div className="fb2-arch-nodes">
                <div className="fb2-arch-node premium-node">Mobile App</div>
                <div className="fb2-arch-node premium-node">Web Portal</div>
                <div className="fb2-arch-node premium-node">Partner API</div>
              </div>
            </div>
            <div className="fb2-arch-connector">
              <svg viewBox="0 0 100 30" className="fb2-arch-arrow-svg">
                <line x1="50" y1="0" x2="50" y2="30" stroke="#c9a227" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="45,25 55,25 50,30" fill="#c9a227" />
              </svg>
              <span className="fb2-conn-label">TLS 1.3 + mTLS</span>
            </div>
            <div className="fb2-arch-layer waf-layer">
              <div className="fb2-arch-layer-label">Security Perimeter</div>
              <div className="fb2-arch-nodes">
                <div className="fb2-arch-node accent premium-node">WAF Firewall</div>
                <div className="fb2-arch-node accent premium-node">Rate Limiter</div>
                <div className="fb2-arch-node accent premium-node">DDoS Shield</div>
              </div>
            </div>
            <div className="fb2-arch-connector">
              <svg viewBox="0 0 100 30" className="fb2-arch-arrow-svg">
                <line x1="50" y1="0" x2="50" y2="30" stroke="#c9a227" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="45,25 55,25 50,30" fill="#c9a227" />
              </svg>
              <span className="fb2-conn-label">OAuth 2.0 + JWT</span>
            </div>
            <div className="fb2-arch-layer api-layer">
              <div className="fb2-arch-layer-label">Application Tier</div>
              <div className="fb2-arch-nodes">
                <div className="fb2-arch-node premium-node">Secure Gateway</div>
                <div className="fb2-arch-node premium-node">Container Cluster</div>
                <div className="fb2-arch-node premium-node">In-Memory Cache</div>
              </div>
            </div>
            <div className="fb2-arch-connector">
              <svg viewBox="0 0 100 30" className="fb2-arch-arrow-svg">
                <line x1="50" y1="0" x2="50" y2="30" stroke="#c9a227" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="45,25 55,25 50,30" fill="#c9a227" />
              </svg>
              <span className="fb2-conn-label">KMS Encrypted</span>
            </div>
            <div className="fb2-arch-layer db-layer">
              <div className="fb2-arch-layer-label">Data Tier</div>
              <div className="fb2-arch-nodes">
                <div className="fb2-arch-node gold premium-node">SQL Primary</div>
                <div className="fb2-arch-node gold premium-node">Read Replica (0ms lag)</div>
                <div className="fb2-arch-node gold premium-node">Encrypted Backups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="fb2-stats-section" ref={statsRef}>
        <div className="fb2-stats-bg" />
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card reveal-on-scroll" style={{
              '--stat-glow-color': 'rgba(201, 162, 39, 0.3)',
              '--stat-shadow': 'rgba(201, 162, 39, 0.12)',
              '--icon-bg-glow': 'rgba(201, 162, 39, 0.08)',
              '--icon-border-glow': 'rgba(201, 162, 39, 0.2)',
              '--icon-color': '#c9a227'
            }}>
              <div className="premium-stat-icon-wrap">
                <Server size={24} />
              </div>
              <span className="fb2-stat-num" style={{ fontSize: '28px' }}>99.99%</span>
              <span className="fb2-stat-label">Verified Platform Uptime<br />via Multi-Region Cloud Deployment</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-100" style={{
              '--stat-glow-color': 'rgba(201, 162, 39, 0.3)',
              '--stat-shadow': 'rgba(201, 162, 39, 0.12)',
              '--icon-bg-glow': 'rgba(201, 162, 39, 0.08)',
              '--icon-border-glow': 'rgba(201, 162, 39, 0.2)',
              '--icon-color': '#c9a227'
            }}>
              <div className="premium-stat-icon-wrap">
                <TrendingUp size={24} />
              </div>
              <span className="fb2-stat-num" style={{ fontSize: '28px' }}>-45%</span>
              <span className="fb2-stat-label">Infrastructure Cost Reduction<br />vs Legacy On-Premise Setup</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-200" style={{
              '--stat-glow-color': 'rgba(201, 162, 39, 0.3)',
              '--stat-shadow': 'rgba(201, 162, 39, 0.12)',
              '--icon-bg-glow': 'rgba(201, 162, 39, 0.08)',
              '--icon-border-glow': 'rgba(201, 162, 39, 0.2)',
              '--icon-color': '#c9a227'
            }}>
              <div className="premium-stat-icon-wrap">
                <Zap size={24} />
              </div>
              <span className="fb2-stat-num" style={{ fontSize: '28px' }}>&lt;8ms</span>
              <span className="fb2-stat-label">API Latency Under Peak<br />Transaction Load</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS GRID ═══ */}
      <section className="fb2-solutions-section">
        <div className="container">
          <div className="fb2-section-label">Solution Portfolio</div>
          <h2 className="fb2-section-title">What We Build for<br /><span className="fb2-gold-text">Financial Institutions</span></h2>
          <div className="fb2-solutions-grid">
            <div className="fb2-sol-card large tilt-card-wrapper reveal-on-scroll" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="fb2-sol-icon"><Database size={24} /></div>
              <h3>Automated Ledger Platform</h3>
              <p>A central transaction ledger capable of validating millions of concurrent balance operations across multiple institutional branches with zero double-spending risk.</p>
              <div className="fb2-sol-telemetry">
                <span>12 Pipelines</span>
                <span>0.00% Packet Loss</span>
                <span>7ms Latency</span>
              </div>
            </div>
            <div className="fb2-sol-card tilt-card-wrapper reveal-on-scroll delay-100" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="fb2-sol-icon"><Shield size={22} /></div>
              <h3>Secure Cloud Migration</h3>
              <p>Migration of legacy mainframe transaction nodes into Docker environments provisioned via Terraform, with zero data loss protocols.</p>
            </div>
            <div className="fb2-sol-card tilt-card-wrapper reveal-on-scroll delay-200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="fb2-sol-icon"><AlertTriangle size={22} /></div>
              <h3>Fraud Detection Engine</h3>
              <p>ML models trained on transaction velocity patterns to flag anomalous transfers instantly and block high-risk IP clusters in real time.</p>
            </div>
            <div className="fb2-sol-card tilt-card-wrapper reveal-on-scroll delay-300" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="fb2-sol-icon"><Server size={22} /></div>
              <h3>Open Banking API Gateway</h3>
              <p>Secure Open API gateway enabling third-party integrations with rate limiting, OAuth2 scopes, and immutable access logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LATENCY COMPARATOR (REDESIGNED PERFORMANCE BENCHMARK) ═══ */}
      <section className="fb2-comparator-section">
        <div className="container fb2-comparator-inner">
          <div className="fb2-comp-left reveal-on-scroll">
            <div className="fb2-section-label">Performance Benchmark</div>
            <h2 className="fb2-section-title">Legacy vs<br /><span className="fb2-gold-text">Cloud Infrastructure</span></h2>
            <p className="fb2-section-sub" style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginTop: '12px' }}>
              Side-by-side latency and cost comparison between on-premise legacy systems and our cloud-native container deployment.
            </p>
            
            <div className="hc2-outcomes-indicators-list">
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap gold">
                  <BarChart2 size={20} />
                </div>
                <span className="hc2-indicator-label">Latency Optimized</span>
              </div>
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap purple">
                  <TrendingUp size={20} />
                </div>
                <span className="hc2-indicator-label">Cost Reduced</span>
              </div>
              <div className="hc2-outcome-indicator-item">
                <div className="hc2-indicator-icon-wrap blue">
                  <Shield size={20} />
                </div>
                <span className="hc2-indicator-label">High Availability</span>
              </div>
            </div>
          </div>
          
          <div className="fb2-comp-right reveal-on-scroll delay-100">
            <div className="hc2-kpi-dashboard">
              
              {/* Card 1: API Response Time */}
              <div className="hc2-kpi-card gold-theme">
                <div className="hc2-kpi-card-left">
                  <div className="hc2-kpi-icon-wrap">
                    <Zap size={24} className="hc2-kpi-icon" />
                    <div className="hc2-kpi-icon-glow" />
                  </div>
                </div>
                
                <div className="hc2-kpi-card-center">
                  <div className="hc2-kpi-header-row">
                    <h3 className="hc2-kpi-title">API Response Time</h3>
                    <span className="hc2-kpi-badge">
                      <TrendingUp size={12} className="inline mr-1" />
                      -94.3% Latency
                    </span>
                  </div>
                  
                  <div className="hc2-kpi-bars">
                    {/* Before Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">BEFORE</span>
                        <span className="hc2-kpi-bar-value red-text">140ms</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill red" style={{ width: '100%' }} />
                      </div>
                    </div>
                    
                    {/* After Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">AFTER</span>
                        <span className="hc2-kpi-bar-value gold-text">8ms</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill gold" style={{ width: '6%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hc2-kpi-card-right">
                  <div className="hc2-kpi-dial-container">
                    <svg className="hc2-kpi-dial-svg" width="80" height="80" viewBox="0 0 80 80">
                      <circle className="hc2-kpi-dial-bg" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="rgba(255,255,255,0.06)" />
                      <circle className="hc2-kpi-dial-fill gold" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="#c9a227" strokeDasharray="201.06" strokeDashoffset="11.46" strokeLinecap="round" transform="rotate(-90 40 40)" />
                      <text x="40" y="37" textAnchor="middle" fill="#f0faf4" fontSize="13" fontWeight="800">94.3%</text>
                      <text x="40" y="51" textAnchor="middle" fill="#c9a227" fontSize="9" fontWeight="700" letterSpacing="0.05em">FASTER</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 2: Monthly Infrastructure Cost */}
              <div className="hc2-kpi-card blue-theme">
                <div className="hc2-kpi-card-left">
                  <div className="hc2-kpi-icon-wrap">
                    <Server size={24} className="hc2-kpi-icon" />
                    <div className="hc2-kpi-icon-glow" />
                  </div>
                </div>
                
                <div className="hc2-kpi-card-center">
                  <div className="hc2-kpi-header-row">
                    <h3 className="hc2-kpi-title">Monthly Infrastructure Cost</h3>
                    <span className="hc2-kpi-badge">
                      <TrendingUp size={12} className="inline mr-1" />
                      -45.0% Savings
                    </span>
                  </div>
                  
                  <div className="hc2-kpi-bars">
                    {/* Before Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">BEFORE</span>
                        <span className="hc2-kpi-bar-value red-text">$48,000 / mo</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill red" style={{ width: '100%' }} />
                      </div>
                    </div>
                    
                    {/* After Bar */}
                    <div className="hc2-kpi-bar-row">
                      <div className="hc2-kpi-bar-meta">
                        <span className="hc2-kpi-bar-label">AFTER</span>
                        <span className="hc2-kpi-bar-value blue-text">$26,400 / mo</span>
                      </div>
                      <div className="hc2-kpi-bar-track">
                        <div className="hc2-kpi-bar-fill blue" style={{ width: '55%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hc2-kpi-card-right">
                  <div className="hc2-kpi-dial-container">
                    <svg className="hc2-kpi-dial-svg" width="80" height="80" viewBox="0 0 80 80">
                      <circle className="hc2-kpi-dial-bg" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="rgba(255,255,255,0.06)" />
                      <circle className="hc2-kpi-dial-fill blue" cx="40" cy="40" r="32" strokeWidth="5" fill="none" stroke="#06b6d4" strokeDasharray="201.06" strokeDashoffset="110.58" strokeLinecap="round" transform="rotate(-90 40 40)" />
                      <text x="40" y="37" textAnchor="middle" fill="#f0faf4" fontSize="13" fontWeight="800">45.0%</text>
                      <text x="40" y="51" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="700" letterSpacing="0.05em">SAVED</text>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY ═══ */}
      <section className="fb2-case-section">
        <div className="container">
          <div className={`case-flip-container ${caseFlipped ? 'flipped' : ''}`}>
            <div className="case-card-inner">
              
              {/* Front of Card */}
              <div className="case-card-front">
                <div className="case-front-content" style={{
                  '--glow-color': 'rgba(201, 162, 39, 0.08)',
                  '--btn-hover-bg': '#c9a227',
                  '--btn-shadow': 'rgba(201, 162, 39, 0.35)',
                  height: '100%',
                  minHeight: '480px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div className="case-front-bg-blur" />
                  <div className="case-front-card-inner">
                    <div className="fb2-case-eyebrow" style={{ marginBottom: '16px' }}>Case Study</div>
                    <h2 className="case-front-title">Secure Cloud Finance Migration</h2>
                    <p className="case-front-summary">
                      A regional banking institution transitioned to modern high-availability architecture. Discover how we containerized core ledger microservices to slash cost by 45% and ensure 99.99% uptime.
                    </p>
                    <button className="case-flip-btn" onClick={() => setCaseFlipped(true)}>
                      Click to read in more detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="case-card-back">
                <div className="fb2-case-card" style={{ margin: 0, position: 'relative' }}>
                  <button className="case-flip-btn" style={{ position: 'absolute', right: '56px', top: '56px', padding: '6px 16px', fontSize: '12px', borderColor: 'rgba(201, 162, 39, 0.4)', zIndex: 10 }} onClick={() => setCaseFlipped(false)}>
                    Close Details
                  </button>
                  <div className="fb2-case-eyebrow">Case Study — Detailed Report</div>
                  <div className="fb2-case-inner">
                    <div className="fb2-case-content">
                      <h2>Secure Cloud Finance Migration</h2>
                      <p><strong>Challenge:</strong> A regional banking client ran core transaction processing on aging on-premise hardware, limiting API feature rollouts and exposing ledger data to security risks.</p>
                      <p><strong>Solution:</strong> We containerized the full transaction stack into containerized microservices and deployed a multi-AZ orchestration cluster provisioned via infrastructure-as-code scripts, with encrypted relational read replicas.</p>
                      <div className="fb2-case-results">
                        <div className="fb2-case-result"><span className="fb2-res-num" style={{ fontSize: '24px' }}>99.99%</span><span className="fb2-res-lbl">Verified Uptime</span></div>
                        <div className="fb2-case-result"><span className="fb2-res-num" style={{ fontSize: '24px' }}>-45%</span><span className="fb2-res-lbl">Infrastructure Cost</span></div>
                        <div className="fb2-case-result"><span className="fb2-res-num" style={{ fontSize: '24px' }}>&lt;8ms</span><span className="fb2-res-lbl">Avg API Latency</span></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                        <Link href="/company/case-studies/secure-cloud-finance-migration" className="fb2-case-link">
                          Read Full Migration Case <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="fb2-case-visual">
                      <div className="fb2-arch-mini">
                        <div className="fb2-mini-node top">Container Cluster</div>
                        <div className="fb2-mini-conn">↓ Orchestration Scripts</div>
                        <div className="fb2-mini-node mid">Relational DB</div>
                        <div className="fb2-mini-conn">↓ Real-Time Replica Sync</div>
                        <div className="fb2-mini-node bot">Read Replica</div>
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
      <section className="fb2-faq-section">
        <div className="container fb2-faq-inner">
          <div className="fb2-faq-left reveal-on-scroll">
            <div className="fb2-section-label">Common Questions</div>
            <h2 className="fb2-section-title">FinTech<br /><span className="fb2-gold-text">Questions Answered</span></h2>
            <p>Our infrastructure architects are available to review banking regulatory requirements and latency benchmarks.</p>
            <Link href="/contact" className="fb2-btn-ghost mt-6">Talk to an Architect <ArrowRight size={14} /></Link>
          </div>
          <div className="fb2-faq-right reveal-on-scroll delay-100">
            {[
              { q: 'What API latency do your systems maintain under peak transaction load?', a: 'Using in-memory connection caching and container load balancers, our transaction APIs average under 10ms for standard database write requests, even under millions of concurrent operations.' },
              { q: 'How is disaster recovery configured for critical ledger systems?', a: 'We declare read replica database nodes in separate cloud availability zones. Transactions replicate continuously with automatic DNS failover routes, ensuring RTO under 5 minutes with zero data loss.' },
              { q: 'Can you integrate with our existing global messaging and ledger infrastructure?', a: 'Yes. We build secure middleware layers that translate standard financial message formats into internal REST API calls, maintaining full audit trail compatibility.' },
              { q: 'How do you secure payment and cardholder data?', a: 'Our infrastructure configurations include network segmentation, tokenization of cardholder data, quarterly automated vulnerability scans, and immutable access log systems that satisfy payment card security requirements.' },
            ].map((item, i) => (
              <div key={i} className={`premium-faq-item ${activeFaq === i ? 'open' : ''}`} style={{
                '--faq-accent': '#c9a227',
                '--faq-shadow': 'rgba(201, 162, 39, 0.06)'
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
      <section className="fb2-cta-wrapper">
        <CTA variant="middle" />
      </section>
    </div>
  );
}
