'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Briefcase, Award, CheckCircle2, ChevronRight, FileText, Send,
  Code2, Microscope, Users, MessageSquare, Zap, TrendingUp,
  Heart, Home, Coins, MapPin, ArrowRight, Cpu, Database, ShieldCheck, Sparkles
} from 'lucide-react';

import CTA from '@/components/CTA';
// Culture cards details
const cultureItems = [
  {
    icon: Code2,
    title: 'Ship with autonomy',
    desc: 'Engineers own their work end-to-end — from design decisions to deployment. No approval chains, no bottlenecks.',
    colorClass: 'ic-blue'
  },
  {
    icon: Microscope,
    title: 'Curiosity first',
    desc: 'We spend time understanding problems before jumping to solutions. Rigorous thinking over fast guessing.',
    colorClass: 'ic-teal'
  },
  {
    icon: Users,
    title: 'Small, focused teams',
    desc: "Two-pizza teams. Big surface area per engineer. You'll leave a mark you can actually see.",
    colorClass: 'ic-purple'
  },
  {
    icon: MessageSquare,
    title: 'Open by default',
    desc: 'Context flows freely. No siloed decisions. Every engineer knows why, not just what.',
    colorClass: 'ic-amber'
  },
  {
    icon: Zap,
    title: 'Fast iteration',
    desc: 'We ship weekly. Real users, real feedback, real impact. No six-month release cycles here.',
    colorClass: 'ic-coral'
  },
  {
    icon: TrendingUp,
    title: 'Grow deliberately',
    desc: 'A dedicated engineering growth budget, internal tech talks, and mentorship built into how we operate.',
    colorClass: 'ic-green'
  }
];

// Benefits details (Only keeping Health & wellness, Flexible work, and Equity & compensation)
const benefitsItems = [
  {
    icon: Heart,
    title: 'Health & wellness',
    desc: 'Comprehensive medical, dental, and vision for you and your family. Monthly wellness stipend included.',
    colorClass: 'ic-blue'
  },
  {
    icon: Home,
    title: 'Flexible work',
    desc: 'Remote-first culture with optional offices in 4 cities. Work your best hours, wherever you are.',
    colorClass: 'ic-teal'
  },
  {
    icon: Coins,
    title: 'Equity & compensation',
    desc: 'Competitive salary with meaningful equity. We want you to share in what we build together.',
    colorClass: 'ic-amber'
  }
];

// Positions details (All Remote, location label as 'Remote')
const positions = [
  {
    title: 'Senior Backend Engineer — Platform',
    type: 'remote',
    dept: 'Engineering',
    exp: '5+ years',
    loc: 'India (Remote)',
    isNew: true,
    icon: Cpu,
    colorClass: 'ic-blue',
    desc: 'Architect and construct premium custom SaaS applications, REST APIs, and database configurations. Experience with Next.js, Node.js and PostgreSQL required.'
  },
  {
    title: 'Staff Frontend Engineer — Design Systems',
    type: 'remote',
    dept: 'Design',
    exp: '7+ years',
    loc: 'India (Remote)',
    isNew: false,
    icon: Sparkles,
    colorClass: 'ic-teal',
    desc: 'Craft intuitive layout systems, reusable UI components, and Figma-to-code design system protocols. Expert knowledge of React, CSS Modules, and canvas layouts.'
  },
  {
    title: 'ML Engineer — Inference Optimization',
    type: 'remote',
    dept: 'Engineering',
    exp: '4+ years',
    loc: 'India (Remote)',
    isNew: true,
    icon: Cpu,
    colorClass: 'ic-purple',
    desc: 'Deploy and optimize machine learning models for low-latency production inference. Work with OpenAI APIs, Google Vertex AI, and custom transformer pipelines.'
  },
  {
    title: 'Principal Systems Architect — Custom CRM/ERP',
    type: 'remote',
    dept: 'Solutions',
    exp: '8+ years',
    loc: 'India (Remote)',
    isNew: false,
    icon: Database,
    colorClass: 'ic-amber',
    desc: 'Lead the design of complex enterprise software systems, data schemas, and legacy application migration strategies for international corporate clients.'
  },
  {
    title: 'Security & Infrastructure Engineer — Platform',
    type: 'remote',
    dept: 'DevOps',
    exp: '5+ years',
    loc: 'India (Remote)',
    isNew: true,
    icon: ShieldCheck,
    colorClass: 'ic-coral',
    desc: 'Manage DevOps deployment automation, Terraform IaC configurations, AWS cloud infrastructure security monitoring, and server scaling policies.'
  }
];

export default function CareersPage() {
  // 3D Card Hover Tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12; // maximum rotation around X axis (tilt up/down)
    const angleY = (x - xc) / 12; // maximum rotation around Y axis (tilt left/right)
    
    card.style.setProperty('--rx', `${angleX}deg`);
    card.style.setProperty('--ry', `${angleY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="careers-page-wrapper">
      {/* HERO SECTION */}
      <section className="careers-hero-sec">
        <div className="careers-hero-bg-glow"></div>
        <div className="container">
          <div className="careers-hero-split">
            
            <div className="careers-hero-left">
              <div className="careers-hero-badge">
                <Code2 size={13} />
                <span>We&apos;re hiring engineers</span>
              </div>
              
              <h1 className="careers-hero-headline">
                Build things that<br/><em>actually matter</em>
              </h1>
              
              <p className="careers-hero-sub">
                Join an engineering team that ships fast, thinks deeply, and creates custom technical products used by corporate teams every day.
              </p>

              <div className="careers-hero-stats">
                <div className="careers-stat-box">
                  <div className="careers-stat-num">50+</div>
                  <div className="careers-stat-label">Engineers</div>
                </div>
                <div className="careers-stat-divider"></div>
                <div className="careers-stat-box">
                  <div className="careers-stat-num">5</div>
                  <div className="careers-stat-label">Open roles</div>
                </div>
              </div>
            </div>

            <div className="careers-hero-right">
              <div className="careers-hero-image-frame">
                <Image
                  src="/images/careers_hero.webp"
                  alt="Modern Software Development Workspace"
                  fill
                  className="careers-hero-real-img"
                  sizes="(max-width: 900px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="careers-section" id="culture-section-anchor">
        <div className="container">
          <div className="careers-section-header">
            <span className="careers-section-tag">Our engineering culture</span>
            <h2 className="careers-section-title">How we work</h2>
          </div>

          <div className="careers-culture-grid">
            {cultureItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="careers-culture-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`careers-culture-icon ${item.colorClass}`}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="careers-culture-title">{item.title}</h3>
                  <p className="careers-culture-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="careers-section is-white-bg" id="benefits-section-anchor">
        <div className="container">
          <div className="careers-section-header">
            <span className="careers-section-tag">Team benefits</span>
            <h2 className="careers-section-title">We take care of people</h2>
          </div>

          <div className="careers-benefits-layout">
            <div className="careers-benefits-left">
              <div className="careers-benefits-image-frame">
                <Image
                  src="/images/careers_benefits.webp"
                  alt="Engineering Team Collaboration"
                  fill
                  className="careers-benefits-real-img"
                  sizes="(max-width: 900px) 100vw, 600px"
                />
              </div>
            </div>

            <div className="careers-benefits-list">
              {benefitsItems.map((benefit, idx) => {
                const IconComp = benefit.icon;
                return (
                  <div key={idx} className="careers-benefit-row">
                    <div className={`careers-benefit-dot ${benefit.colorClass}`}>
                      <IconComp size={18} />
                    </div>
                    <div className="careers-benefit-content">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <section className="careers-section" id="positions-section-anchor">
        <div className="container">
          
          <div className="careers-jobs-header">
            <div>
              <span className="careers-section-tag">Open engineering positions</span>
              <h2 className="careers-section-title" style={{ marginBottom: 0 }}>5 active roles</h2>
            </div>
          </div>

          <div className="careers-jobs-list">
            {positions.map((pos, idx) => {
              const IconComp = pos.icon;
              return (
                <div key={idx} className="careers-job-card">
                  <div className="careers-job-left">
                    <div className={`careers-job-dept-icon ${pos.colorClass}`}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h3 className="careers-job-title">
                        {pos.title}
                        {pos.isNew && <span className="careers-new-badge">New</span>}
                      </h3>
                      <div className="careers-job-meta">
                        <span className="careers-job-tag is-remote">
                          REMOTE
                        </span>
                        <span className="careers-job-loc">
                          <MapPin size={12} />
                          <span>{pos.loc}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="careers-job-right">
                    <span className="careers-job-exp">{pos.exp}</span>
                    <Link href="/contact" className="careers-apply-action-btn">
                      <span>Apply</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOTTOM GENERAL CTA */}
      <section className="careers-section is-white-bg" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="careers-section-title" style={{ marginBottom: '12px' }}>Don&apos;t see the right role?</h2>
          <p className="careers-hero-sub" style={{ margin: '0 auto 32px auto' }}>We&apos;re always looking for exceptional engineering talent. Send us your portfolio and let&apos;s start a conversation.</p>
          <Link 
            href="/contact" 
            className="careers-apply-action-btn" 
            style={{ 
              display: 'inline-flex', 
              padding: '14px 32px', 
              fontSize: '14px',
              margin: '0 auto' 
            }}
          >
            <span>Get in touch</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <CTA variant="bottom" />
    </div>
  );
}
