'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingBag, Smartphone, TrendingUp, Package, CheckCircle, ArrowRight, ChevronDown, Globe, RefreshCw, Star, BarChart2 } from 'lucide-react';
import CTA from '@/components/CTA';
import BackgroundRings from '@/components/BackgroundRings';

export default function RetailEcommerceIndustry({ industry }) {
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

  const [cartAlert, setCartAlert] = useState(null);
  const [activeTab, setActiveTab] = useState('traffic');
  const [checkoutStage, setCheckoutStage] = useState('cart'); // 'cart' | 'processing' | 'confirmed'
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Leather Boots', price: 180, qty: 1, img: '🥾' },
    { id: 2, name: 'Minimalist Backpack', price: 120, qty: 1, img: '🎒' },
  ]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setCheckoutStage('processing');
    setTimeout(() => {
      setCheckoutStage('confirmed');
    }, 2000);
  };

  const stockChannels = [
    { channel: 'Web Storefront', stock: 842, sold: 1250, status: 'ok' },
    { channel: 'Mobile App Node', stock: 12, sold: 480, status: 'critical' },
    { channel: 'Marketplace Sync', stock: 95, sold: 340, status: 'low' },
    { channel: 'POS Systems', stock: 120, sold: 180, status: 'ok' },
  ];


  const [liveMetrics, setLiveMetrics] = useState({
    conversions: 3.42,
    activeCarts: 182,
    orderVolume: 1420,
    checkouts: 12
  });

  const channels = [
    { icon: Globe, name: 'Web Storefront', desc: 'Next.js storefront scoring 98+ on Google Lighthouse speed benchmarks.', img: '/images/rt2_web_storefront.png' },
    { icon: Smartphone, name: 'Mobile App Node', desc: 'React Native architecture supporting push updates, offline cart, and instant biometric checkout.', img: '/images/rt2_mobile_app_node.png' },
    { icon: RefreshCw, name: 'Marketplace Sync', desc: 'Real-time sync adapters linking Shopify, Amazon, and eBay feeds to the central DB.', img: '/images/rt2_marketplace_sync.png' },
    { icon: Package, name: 'POS Systems', desc: 'In-store point-of-sale integration that syncs physical transactions to the central ledger.', img: '/images/rt2_pos_systems.png' },
  ];

  const funnelSteps = [
    { stage: 'Discovery', desc: 'SEO-optimized product pages - search shopping ads', rate: '100%' },
    { stage: 'Product View', desc: 'AR try-on, reviews, fast image delivery via CDN', rate: '68%' },
    { stage: 'Add to Cart', desc: 'One-tap add, persistent cart across devices', rate: '41%' },
    { stage: 'Checkout', desc: 'One-page checkout flow with digital wallet integration', rate: '28%' },
    { stage: 'Purchase', desc: 'Instant confirmation - automated email - loyalty points', rate: '18%' },
  ];

  const statsRef = useRef(null);

  const techCards = [
    {
      id: 0,
      title: 'Mobile Commerce App',
      desc: 'Cross-platform apps for iOS and Android featuring product catalogs, personalized recommendations, wish lists, one-tap secure checkout, and push notification campaigns.',
      badges: ['iOS', 'Android', 'Mobile SDK'],
      img: '/images/rt2_tech_mobile_app.png',
      icon: Smartphone
    },
    {
      id: 1,
      title: 'E-Commerce Storefront',
      desc: 'Modern web storefronts with server-side rendering, headless commerce integration, collection pages, and merchant shopping feed generation.',
      badges: ['Next.js', 'React', 'Tailwind'],
      img: '/images/rt2_tech_storefront.png',
      icon: Globe
    },
    {
      id: 2,
      title: 'Inventory Sync Engine',
      desc: 'Central SQL stock ledger syncing all channels in real-time via webhook receivers, preventing overselling across web, app, and in-store.',
      badges: ['SQL', 'Webhooks', 'Real-time'],
      img: '/images/rt2_tech_sync_engine.png',
      icon: Package
    },
    {
      id: 3,
      title: 'CRM & Loyalty Platform',
      desc: 'Customer purchase history, segmentation tags, loyalty point engines, and automated email/SMS re-engagement campaigns.',
      badges: ['CRM', 'Automation', 'Analytics'],
      img: '/images/rt2_tech_crm_loyalty.png',
      icon: BarChart2
    }
  ];

  const techOuterRef = useRef(null);
  const techTrackRef = useRef(null);

  const techN = techCards.length;
  const CARD_W = 420;
  const CARD_GAP = 28;
  const maxTranslate = (techN - 2) * (CARD_W + CARD_GAP) + 0.3 * CARD_W;

  useEffect(() => {
    const outer = techOuterRef.current;
    const track = techTrackRef.current;
    if (!outer || !track) return;

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollRange = outer.offsetHeight - window.innerHeight;
      if (scrollRange <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [maxTranslate]);

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
    <div className="rt2-theme" style={{ position: 'relative', overflow: 'clip', width: '100%' }}>
      <BackgroundRings count={5} colors={['#f43f5e', '#ec4899', '#f43f5e']} />
      {/* ═══ HERO ═══ */}
      <section className="rt2-hero">
        <div className="rt2-hero-grid" />
        <div className="rt2-coral-orb-1" />
        <div className="rt2-coral-orb-2" />

        <div className="container rt2-hero-inner">
          <div className="rt2-hero-left">
            <div className="rt2-eyebrow">
              <ShoppingBag size={14} />
              <span>Retail & E-Commerce</span>
            </div>
            <h1 className="rt2-hero-title">
              Commerce That<br />
              <span className="rt2-coral-text">Converts</span> at<br />
              Every Channel
            </h1>
            <p className="rt2-hero-sub">
              We build mobile-first commerce platforms, unified inventory systems, and personalization engines that turn browsers into buyers — across every touchpoint.
            </p>
            <div className="rt2-hero-actions">
              <Link href="/contact" className="rt2-btn-primary">
                Build Your Commerce Platform <ArrowRight size={16} />
              </Link>
              <Link href="/company/case-studies/e-commerce-mobile-transformation" className="rt2-btn-ghost">
                View Retail Case
              </Link>
            </div>
            <div className="rt2-social-proof">
              <div className="rt2-stars">
                <Star size={14} fill="#f43f5e" color="#f43f5e" />
                <Star size={14} fill="#f43f5e" color="#f43f5e" />
                <Star size={14} fill="#f43f5e" color="#f43f5e" />
                <Star size={14} fill="#f43f5e" color="#f43f5e" />
                <Star size={14} fill="#f43f5e" color="#f43f5e" />
              </div>
              <span>Trusted by retail brands across 12 markets</span>
            </div>
          </div>

          {/* Right: Mobile Commerce Mockup */}
          <div className="rt2-hero-right">
            <div className="rt2-phone-frame">
              <div className="rt2-phone-notch" />
              <div className="rt2-phone-screen">
                {/* App Header */}
                <div className="rt2-app-header">
                  <span className="rt2-app-logo">🛍 ShopNow</span>
                  <div className="rt2-cart-icon-wrap">
                    <ShoppingBag size={18} />
                    <span className="rt2-cart-count">{cartItems.length}</span>
                  </div>
                </div>

                {/* Cart or Checkout */}
                {checkoutStage === 'cart' && (
                  <div className="rt2-cart-view">
                    <div className="rt2-cart-title">Your Cart</div>
                    {cartItems.map(item => (
                      <div key={item.id} className="rt2-cart-item">
                        <span className="rt2-item-img">{item.img}</span>
                        <div className="rt2-item-details">
                          <span className="rt2-item-name">{item.name}</span>
                          <span className="rt2-item-price">${item.price} × {item.qty}</span>
                        </div>
                        <span className="rt2-item-total">${item.price * item.qty}</span>
                      </div>
                    ))}
                    <div className="rt2-cart-total">
                      <span>Total</span>
                      <span className="rt2-total-amt">${cartTotal}</span>
                    </div>
                    <button className="rt2-checkout-btn" onClick={handleCheckout}>
                      <span>Checkout Securely</span>
                    </button>
                    <div className="rt2-payment-icons">
                      <span>🍎 Pay</span>
                      <span>💳 Card</span>
                      <span>🅿️ Wallet</span>
                    </div>
                  </div>
                )}
                {checkoutStage === 'processing' && (
                  <div className="rt2-processing-view">
                    <div className="rt2-processing-spinner" />
                    <p>Processing payment…</p>
                    <span className="rt2-processing-sub">Secure encryption channel</span>
                  </div>
                )}
                {checkoutStage === 'confirmed' && (
                  <div className="rt2-confirmed-view">
                    <div className="rt2-confirmed-icon">✅</div>
                    <h4>Order Confirmed!</h4>
                    <p>Order #RT-29481</p>
                    <p className="rt2-confirmed-sub">Estimated delivery: 2-3 days</p>
                    <div className="rt2-loyalty-badge">🎁 +142 loyalty points earned</div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating notification */}
            <div className="rt2-notification-bubble">
              <RefreshCw size={12} className="rt2-notif-spin" />
              <span>Inventory synced across 4 channels</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHANNELS ═══ */}
      <section className="rt2-channels-section">
        <div className="container">
          <div className="rt2-section-label">Multi-Channel Commerce</div>
          <h2 className="rt2-section-title">One Platform,<br /><span className="rt2-coral-text">Every Touchpoint</span></h2>
          <div className="rt2-channels-grid">
            {channels.map((ch, i) => (
              <div
                key={i}
                className={`rt2-channel-card tilt-card-wrapper reveal-on-scroll delay-${(i % 4) * 100}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="rt2-channel-img-wrapper">
                  <img src={ch.img} alt={ch.name} className="rt2-channel-img" />
                  <div className="rt2-ch-icon-badge">
                    <ch.icon size={18} />
                  </div>
                </div>
                <div className="rt2-channel-card-content">
                  <h3>{ch.name}</h3>
                  <p>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LIVE INVENTORY SYNC ═══ */}
      <section className="rt2-inventory-section">
        <div className="rt2-inv-bg" />
        <div className="container rt2-inventory-inner">
          <div className="rt2-inv-left reveal-on-scroll">
            <div className="rt2-section-label">Inventory Intelligence</div>
            <h2 className="rt2-section-title">Real-Time Stock<br /><span className="rt2-coral-text">Across All Channels</span></h2>
            <p>Our inventory sync engine writes every sale — web, app, in-store, or marketplace — to a central relational ledger in under 200ms, eliminating overselling across all channels.</p>
            <div className="retail-metric-microgrid">
              <div className="retail-metric-microcard reveal-on-scroll">
                <div className="retail-metric-microcard-icon-wrap">
                  <RefreshCw size={20} />
                </div>
                <span className="retail-micro-num">&lt;200ms</span>
                <span className="retail-micro-lbl">Sync latency</span>
              </div>
              <div className="retail-metric-microcard reveal-on-scroll delay-100">
                <div className="retail-metric-microcard-icon-wrap">
                  <Globe size={20} />
                </div>
                <span className="retail-micro-num">4</span>
                <span className="retail-micro-lbl">Unified channels</span>
              </div>
              <div className="retail-metric-microcard reveal-on-scroll delay-200">
                <div className="retail-metric-microcard-icon-wrap">
                  <CheckCircle size={20} />
                </div>
                <span className="retail-micro-num">0</span>
                <span className="retail-micro-lbl">Oversells guaranteed</span>
              </div>
            </div>
          </div>
          <div className="rt2-inv-right reveal-on-scroll delay-100">
            <div className="rt2-sync-dashboard">
              <div className="rt2-sync-header">
                <span>SKU: PRD-4821 — Multi-Channel Stock View</span>
                <span className="rt2-sync-live"><span className="blink-dot" />Syncing</span>
              </div>
              {stockChannels.map((ch, i) => (
                <div key={i} className={`rt2-stock-row ${ch.status}`}>
                  <div className="rt2-stock-left">
                    <span className={`rt2-stock-dot ${ch.status}`} />
                    <span className="rt2-stock-channel">{ch.channel}</span>
                  </div>
                  <div className="rt2-stock-bar-wrap">
                    <div
                      className={`rt2-stock-bar ${ch.status}`}
                      style={{ width: `${(ch.stock / (ch.stock + ch.sold)) * 100}%` }}
                    />
                  </div>
                  <div className="rt2-stock-nums">
                    <span className="rt2-stock-qty">{ch.stock} in stock</span>
                    <span className={`rt2-stock-tag ${ch.status}`}>
                      {ch.status === 'critical' ? '🚨 CRITICAL' : ch.status === 'low' ? '⚠ LOW' : '✓ OK'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FUNNEL VISUALIZATION ═══ */}
      <section className="rt2-funnel-section">
        <div className="container">
          <div className="rt2-section-label">Conversion Optimization</div>
          <h2 className="rt2-section-title">The Customer Journey<br /><span className="rt2-coral-text">We Engineer</span></h2>
          <div className="rt2-funnel-track-premium" style={{ maxWidth: '1050px', margin: '48px auto 0' }}>
            {[...funnelSteps].reverse().map((step, i) => {
              const logicalStep = funnelSteps.length - i;
              return (
                <div key={i} className="rt2-funnel-step-premium reveal-on-scroll" style={{ width: `${55 + i * 11.25}%` }}>
                  <div className="rt2-funnel-left">
                    <span className="rt2-funnel-badge">{logicalStep}</span>
                    <div>
                      <div className="rt2-funnel-stage">{step.stage}</div>
                      <div className="rt2-funnel-desc">{step.desc}</div>
                    </div>
                  </div>
                  <div className="rt2-funnel-rate">{step.rate}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="rt2-stats-section" ref={statsRef}>
        <div className="rt2-stats-bg" />
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card reveal-on-scroll" style={{
              '--stat-glow-color': 'rgba(244, 63, 94, 0.3)',
              '--stat-shadow': 'rgba(244, 63, 94, 0.12)',
              '--icon-bg-glow': 'rgba(244, 63, 94, 0.08)',
              '--icon-border-glow': 'rgba(244, 63, 94, 0.2)',
              '--icon-color': '#f43f5e'
            }}>
              <div className="premium-stat-icon-wrap">
                <TrendingUp size={24} />
              </div>
              <span className="rt2-stat-num" style={{ fontSize: '28px' }}>3.8x</span>
              <span className="rt2-stat-label">Average Conversion Rate<br />Improvement on Rebuilt Storefronts</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-100" style={{
              '--stat-glow-color': 'rgba(244, 63, 94, 0.3)',
              '--stat-shadow': 'rgba(244, 63, 94, 0.12)',
              '--icon-bg-glow': 'rgba(244, 63, 94, 0.08)',
              '--icon-border-glow': 'rgba(244, 63, 94, 0.2)',
              '--icon-color': '#f43f5e'
            }}>
              <div className="premium-stat-icon-wrap">
                <ShoppingBag size={24} />
              </div>
              <span className="rt2-stat-num" style={{ fontSize: '28px' }}>-62%</span>
              <span className="rt2-stat-label">Checkout Abandonment<br />With 1-Page Checkout Flow</span>
            </div>

            <div className="premium-stat-card reveal-on-scroll delay-200" style={{
              '--stat-glow-color': 'rgba(244, 63, 94, 0.3)',
              '--stat-shadow': 'rgba(244, 63, 94, 0.12)',
              '--icon-bg-glow': 'rgba(244, 63, 94, 0.08)',
              '--icon-border-glow': 'rgba(244, 63, 94, 0.2)',
              '--icon-color': '#f43f5e'
            }}>
              <div className="premium-stat-icon-wrap">
                <RefreshCw size={24} />
              </div>
              <span className="rt2-stat-num" style={{ fontSize: '28px' }}>99.99%</span>
              <span className="rt2-stat-label">Inventory Sync Accuracy<br />Across All Active Channels</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS / COMMERCE TECHNOLOGY ═══ */}
      <div
        ref={techOuterRef}
        className="rt2-tech-hscroll-outer"
        style={{ height: `calc(100vh + ${maxTranslate}px)` }}
      >
        <div className="rt2-tech-hscroll-sticky">
          <div className="container">
            <h2 className="rt2-section-title" style={{ margin: 0 }}>What We Build for<br /><span className="rt2-coral-text">Modern Retail Brands</span></h2>
          </div>

          <div className="rt2-tech-hscroll-viewport">
            <div ref={techTrackRef} className="rt2-tech-hscroll-track">
              {techCards.map((card, idx) => {
                const stepNum = String(idx + 1).padStart(2, '0');
                const Icon = card.icon;
                return (
                  <div key={idx} className="rt2-tech-card">
                    <div className="rt2-tech-card-img-wrap">
                      <img src={card.img} alt={card.title} className="rt2-tech-card-img" />
                      <div className="rt2-tech-card-watermark">{stepNum}</div>
                    </div>
                    <div className="rt2-tech-card-body">
                      <div className="rt2-tech-card-header">
                        <div className="rt2-tech-card-icon">
                          <Icon size={20} />
                        </div>
                        <span className="rt2-tech-card-phase">PHASE {stepNum}</span>
                      </div>
                      <h4 className="rt2-tech-card-title">{card.title}</h4>
                      <p className="rt2-tech-card-desc">{card.desc}</p>
                      {card.badges && (
                        <div className="rt2-tech-card-badges">
                          {card.badges.map((badge, bIdx) => (
                            <span key={bIdx}>{badge}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="rt2-tech-card-accent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CASE STUDY ═══ */}
      <section className="rt2-case-section">
        <div className="container">
          <div className={`case-flip-container ${caseFlipped ? 'flipped' : ''}`}>
            <div className="case-card-inner">
              
              {/* Front of Card */}
              <div className="case-card-front">
                <div className="case-front-content" style={{
                  '--glow-color': 'rgba(244, 63, 94, 0.08)',
                  '--btn-hover-bg': '#f43f5e',
                  '--btn-shadow': 'rgba(244, 63, 94, 0.35)',
                  height: '100%',
                  minHeight: '480px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div className="case-front-bg-blur" />
                  <div className="case-front-card-inner">
                    <div className="rt2-case-eyebrow" style={{ marginBottom: '16px' }}>Case Study</div>
                    <h2 className="case-front-title">E-Commerce Mobile Transformation</h2>
                    <p className="case-front-summary">
                      A fashion retailer slashed mobile cart abandonment and unified stock management. Learn how we built a high-performance app to boost conversions by 3.8x.
                    </p>
                    <button className="case-flip-btn" onClick={() => setCaseFlipped(true)}>
                      Click to read in more detail <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="case-card-back">
                <div className="rt2-case-card" style={{ margin: 0, position: 'relative' }}>
                  <button className="case-flip-btn" style={{ position: 'absolute', right: '56px', top: '56px', padding: '6px 16px', fontSize: '12px', borderColor: 'rgba(244, 63, 94, 0.4)', zIndex: 10 }} onClick={() => setCaseFlipped(false)}>
                    Close Details
                  </button>
                  <div className="rt2-case-eyebrow">Case Study — Detailed Report</div>
                  <div className="rt2-case-inner">
                    <div className="rt2-case-content">
                      <h2>E-Commerce Mobile Transformation</h2>
                      <p><strong>Challenge:</strong> A fashion retailer&apos;s mobile website had a 78% checkout abandonment rate due to slow load times and a 7-step checkout process. Inventory was managed in separate spreadsheets across 3 channels.</p>
                      <p><strong>Solution:</strong> We built a cross-platform mobile app with one-page secure checkout, real-time inventory sync across all channels via webhook pipelines, and a loyalty point system to drive repeat purchases.</p>
                      <div className="rt2-case-results">
                        <div className="rt2-case-result"><span className="rt2-res-num" style={{ fontSize: '24px' }}>-62%</span><span className="rt2-res-lbl">Checkout Abandonment</span></div>
                        <div className="rt2-case-result"><span className="rt2-res-num" style={{ fontSize: '24px' }}>3.8x</span><span className="rt2-res-lbl">Mobile Conversion Rate</span></div>
                        <div className="rt2-case-result"><span className="rt2-res-num" style={{ fontSize: '24px' }}>0</span><span className="rt2-res-lbl">Oversell Incidents</span></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
                        <Link href="/company/case-studies/e-commerce-mobile-transformation" className="rt2-case-link">
                          Read Full Commerce Case <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="rt2-case-visual">
                      <div className="rt2-revenue-chart">
                        <div className="rt2-chart-header">Monthly Revenue (Post-Launch)</div>
                        <div className="rt2-chart-bars">
                          {[40, 55, 70, 82, 91, 100].map((h, i) => (
                            <div key={i} className="rt2-chart-bar-wrap">
                              <div className="rt2-chart-bar" style={{ height: `${h}%` }} />
                              <span className="rt2-chart-month">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
                            </div>
                          ))}
                        </div>
                        <div className="rt2-chart-label">3.8x revenue growth after launch</div>
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
      <section className="rt2-faq-section">
        <div className="container rt2-faq-inner">
          <div className="rt2-faq-left reveal-on-scroll">
            <div className="rt2-section-label">Common Questions</div>
            <h2 className="rt2-section-title">Commerce Platform<br /><span className="rt2-coral-text">Questions Answered</span></h2>
            <p>Our commerce engineers are available to review your storefront, inventory, and mobile app architecture.</p>
            <Link href="/contact" className="rt2-btn-ghost mt-6">Talk to a Commerce Engineer <ArrowRight size={14} /></Link>
          </div>
          <div className="rt2-faq-right reveal-on-scroll delay-100">
            {[
              { q: 'How do you prevent overselling across multiple sales channels?', a: 'We build a central inventory ledger in a relational database that receives webhook events from every channel (web store, online marketplaces, retail POS) and processes them sequentially with database-level locking. This ensures stock counts are always consistent, even under simultaneous high traffic.' },
              { q: 'Can you integrate with our existing storefront platform?', a: 'Yes. We use standard e-commerce platform APIs and Webhooks to sync product listings, inventory levels, and orders. Our custom applications sit as a backend layer that extends platform functionality while keeping your existing operations active.' },
              { q: 'What payment methods do you support in mobile checkout?', a: 'Our native mobile checkout implementations support secure card payments, mobile wallets, and popular alternative digital payment systems. All transactions are 3DS-authenticated and highly secure.' },
              { q: 'How do you handle peak traffic during sales events?', a: 'Our storefronts deploy on globally distributed Edge networks with CDN caching and auto-scaling API instances on cloud container environments. We conduct load tests simulating 10x normal traffic volumes before every major sales campaign.' },
            ].map((item, i) => (
              <div key={i} className={`premium-faq-item ${activeFaq === i ? 'open' : ''}`} style={{
                '--faq-accent': '#f43f5e',
                '--faq-shadow': 'rgba(244, 63, 94, 0.06)'
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
      <section className="rt2-cta-wrapper">
        <CTA variant="middle" />
      </section>
    </div>
  );
}