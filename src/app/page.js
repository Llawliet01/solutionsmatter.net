'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, Laptop, Smartphone, Layout, Cpu, Cloud, BarChart2, Briefcase, Database, RefreshCw, 
  ArrowRight, ShieldCheck, Zap, Layers, DollarSign, Star, HelpCircle, CheckCircle2, ChevronDown, Plus, Send,
  User, Mail, Globe
} from 'lucide-react';
import { services } from '@/data/services';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';
import { faqs } from '@/data/faqs';
import { blogPosts } from '@/data/blog';
import CTA from '@/components/CTA';

// Helper to map service slug to an icon
const getServiceIcon = (slug) => {
  switch (slug) {
    case 'custom-software-development': return <Code2 size={24} />;
    case 'web-development': return <Laptop size={24} />;
    case 'mobile-app-development': return <Smartphone size={24} />;
    case 'ui-ux-design': return <Layout size={24} />;
    case 'ai-automation': return <Cpu size={24} />;
    case 'cloud-devops': return <Cloud size={24} />;
    case 'saas-development': return <BarChart2 size={24} />;
    case 'crm-development': return <Briefcase size={24} />;
    case 'erp-development': return <Database size={24} />;
    case 'support-maintenance': return <RefreshCw size={24} />;
    default: return <Code2 size={24} />;
  }
};

// Map services to images in public folder
const getServiceImage = (slug) => {
  switch (slug) {
    case 'custom-software-development': return '/images/blog_serverless_scale.webp';
    case 'web-development': return '/images/blog_cloud_native.webp';
    case 'mobile-app-development': return '/images/blog_uiux_conversions.webp';
    case 'ui-ux-design': return '/images/blog_uiux_conversions.webp';
    case 'ai-automation': return '/images/blog_ai_enterprise.webp';
    case 'cloud-devops': return '/images/blog_cloud_native.webp';
    case 'saas-development': return '/images/blog_serverless_scale.webp';
    default: return '/images/blog_custom_crmerp.webp';
  }
};

const AnimatedCounter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 1;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    if (start === end) {
      setTimeout(() => setCount(end), 0);
      return;
    }

    const stepTime = Math.max(Math.floor(duration / (end - start)), 15);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const BackgroundRings = () => {
  return (
    <div className="bg-rings-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Ring 1 - Hero Section (Sky Blue) */}
      <div className="mask mask-1" style={{ position: 'absolute', top: '150px', right: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#38BDF8" strokeWidth="35" strokeDasharray="10 15" />
        </svg>
      </div>

      {/* Ring 2 - Hero Split Section (Violet Blue) */}
      <div className="mask mask-2" style={{ position: 'absolute', top: '750px', left: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#5E3BEE" strokeWidth="45" />
        </svg>
      </div>

      {/* Ring 3 - About Section (Mint Green) */}
      <div className="mask mask-3" style={{ position: 'absolute', top: '1350px', right: '-300px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#10B981" strokeWidth="30" strokeDasharray="180 40" />
        </svg>
      </div>

      {/* Ring 4 - Achievements Section (Sky Blue) */}
      <div className="mask mask-4" style={{ position: 'absolute', top: '1950px', left: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#38BDF8" strokeWidth="40" strokeDasharray="5 20" />
        </svg>
      </div>

      {/* Ring 5 - Growth Section (Violet Blue) */}
      <div className="mask mask-5" style={{ position: 'absolute', top: '2550px', right: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#5E3BEE" strokeWidth="35" />
        </svg>
      </div>

      {/* Ring 6 - Popular Services Section (Mint Green) */}
      <div className="mask mask-6" style={{ position: 'absolute', top: '3150px', left: '-300px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#10B981" strokeWidth="30" strokeDasharray="100 20 10 20" />
        </svg>
      </div>

      {/* Ring 7 - Blue CTA Bar (Sky Blue) */}
      <div className="mask mask-7" style={{ position: 'absolute', top: '3750px', right: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#38BDF8" strokeWidth="40" strokeDasharray="40 25" />
        </svg>
      </div>

      {/* Ring 8 - Recent Case Studies (Violet Blue) */}
      <div className="mask mask-8" style={{ position: 'absolute', top: '4350px', left: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#5E3BEE" strokeWidth="45" />
        </svg>
      </div>

      {/* Ring 9 - Testimonials Section (Mint Green) */}
      <div className="mask mask-9" style={{ position: 'absolute', top: '4950px', right: '-300px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#10B981" strokeWidth="35" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Ring 10 - Proposal Left Card (Sky Blue) */}
      <div className="mask mask-10" style={{ position: 'absolute', top: '5550px', left: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#38BDF8" strokeWidth="40" strokeDasharray="30 15 10 15" />
        </svg>
      </div>

      {/* Ring 11 - Proposal Right Form (Violet Blue) */}
      <div className="mask mask-11" style={{ position: 'absolute', top: '6150px', right: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#5E3BEE" strokeWidth="45" />
        </svg>
      </div>

      {/* Ring 12 - Latest Blog Section (Mint Green) */}
      <div className="mask mask-12" style={{ position: 'absolute', top: '6750px', left: '-300px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#10B981" strokeWidth="30" strokeDasharray="150 30" />
        </svg>
      </div>

      {/* Ring 13 - Footer Marquee Section (Sky Blue) */}
      <div className="mask mask-13" style={{ position: 'absolute', top: '7350px', right: '-375px' }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="#38BDF8" strokeWidth="35" strokeDasharray="20 10 5 10" />
        </svg>
      </div>
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeGrowthIndex, setActiveGrowthIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 100;
      if (scrollPercent >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  // Contact state inside bottom page proposal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleGrowth = (index) => {
    setActiveGrowthIndex(activeGrowthIndex === index ? null : index);
  };

  const nextCaseStudy = () => {
    setActiveCaseIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const getCaseStudyImage = (slug) => {
    switch (slug) {
      case 'ai-driven-patient-diagnostics': return '/images/blog_ai_enterprise.webp';
      case 'secure-cloud-finance-migration': return '/images/blog_cloud_native.webp';
      case 'saas-analytics-platform': return '/images/blog_serverless_scale.webp';
      case 'manufacturing-erp-modernization': return '/images/blog_custom_crmerp.webp';
      case 'e-commerce-mobile-transformation': return '/images/blog_uiux_conversions.webp';
      default: return '/images/blog_serverless_scale.webp';
    }
  };

  const featuredBlogPosts = blogPosts ? blogPosts.slice(0, 2) : [];

  // Clients reviews (strictly name and text)
  const testimonials = [
    {
      name: 'James Reynolds',
      review: 'Solutions Matter built our custom database framework on schedule. The system handles concurrent ledger data with zero latency. Their team maintains rigorous security audits.'
    },
    {
      name: 'Sarah Jenkins',
      review: 'The Startup MVP development package helped us launch our SaaS platform in 6 weeks. The row-level data isolation works flawlessly, and Stripe recurring billing was simple to deploy.'
    },
    {
      name: 'Arthur Pendelton',
      review: 'Migrating our legacy inventory dashboards to containerized AWS services reduced our maintenance overhead substantially. Their DevOps engineering is top-tier.'
    },
    {
      name: 'Eleanor Vance',
      review: 'Their enterprise integration expertise allowed us to sync our multi-tenant cloud storage hubs seamlessly. The custom security layers are solid, and the delivery was ahead of schedule.'
    }
  ];

  const growthItems = [
    {
      title: 'Learn Our Company Mission',
      desc: 'Our mission is to revolutionize the digital landscape delivering innovative software solutions to empower businesses to achieve their full potential.',
      benefits: ['Premier Tech Innovations', 'Nexus Tech Systems'],
      img: '/images/blog_ai_enterprise.webp'
    },
    {
      title: 'Our Company Vision',
      desc: 'To establish global leadership in secure custom development platforms, helping enterprises retain absolute data sovereignty and infrastructure privacy.',
      benefits: ['Decentralized Databases', 'Zero License Overheads'],
      img: '/images/blog_cloud_native.webp'
    },
    {
      title: 'Our Philosophy',
      desc: 'We place code reliability, rigorous quality assurance checks, and performant architectures at the absolute center of our project loops.',
      benefits: ['Agile Iteration Cycles', 'Strict Security Compliance'],
      img: '/images/blog_serverless_scale.webp'
    },
    {
      title: 'Our Strategy',
      desc: 'Leveraging modern serverless, containerization, and data isolation strategies to build applications that stay fast as user queries expand.',
      benefits: ['CI/CD Container Pipelines', '24/7 Server Monitoring'],
      img: '/images/blog_custom_crmerp.webp'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', position: '', message: '' });
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <BackgroundRings />
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container-single">
          <h1 className="hero-title">
            <span className="reveal-line-wrapper" style={{ display: 'block' }}>
              <span className="reveal-word-wrapper" style={{ marginRight: '0.22em' }}>
                <span className="reveal reveal-word" style={{ transitionDelay: '0ms' }}>NextGen</span>
              </span>
              <span className="reveal-word-wrapper">
                <span className="reveal reveal-word" style={{ transitionDelay: '100ms' }}>Software</span>
              </span>
            </span>
            <span className="reveal-line-wrapper" style={{ display: 'block', marginTop: '8px' }}>
              <span className="reveal-word-wrapper">
                <span className="reveal reveal-word" style={{ transitionDelay: '200ms' }}>Innovators</span>
              </span>
            </span>
            <span className="reveal-line-wrapper" style={{ display: 'block', marginTop: '8px' }}>
              <span className="reveal-word-wrapper" style={{ marginRight: '0.22em' }}>
                <span className="reveal reveal-word" style={{ transitionDelay: '300ms' }}>and</span>
              </span>
              <span className="highlight-box" style={{ display: 'inline-flex', gap: '0.22em', padding: '2px 8px' }}>
                <span className="reveal-word-wrapper">
                  <span className="reveal reveal-word" style={{ transitionDelay: '400ms' }}>DIGITAL</span>
                </span>
                <span className="reveal-word-wrapper">
                  <span className="reveal reveal-word" style={{ transitionDelay: '500ms' }}>SOFT</span>
                </span>
              </span>
              <span className="thin-text" style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '0.22em' }}>
                <span className="reveal-word-wrapper">
                  <span className="reveal reveal-word" style={{ transitionDelay: '600ms' }}>Solutions</span>
                </span>
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* 1b. Hero Split Content Section */}
      <section className="hero-split-section">
        <div className="hero-split-grid">
          <div className="hero-split-left reveal reveal-fade-right">
            <p className="hero-split-paragraph">
              We specialize in custom software development and digital transformation, building responsive web applications, mobile platforms, and high-performance databases tailored to your business operations.
            </p>
            
            <div className="hero-split-counters">
              <div className="hero-split-counter-item">
                <span className="hero-split-counter-num">
                  <AnimatedCounter target="5" suffix="k+" />
                </span>
                <span className="hero-split-counter-lbl">Happy Clients</span>
              </div>
              <div className="hero-split-counter-item">
                <span className="hero-split-counter-num">
                  <AnimatedCounter target="9" suffix="+" />
                </span>
                <span className="hero-split-counter-lbl">Years Experience</span>
              </div>
            </div>

            <Link href="/services" className="hero-split-btn">
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="hero-split-right">
            <div className="hero-split-image-wrapper reveal reveal-image-grow">
              <Image 
                src="/images/hero_workspace.webp" 
                alt="Solutions Matter custom software workspace showing responsive application codes"
                width={880}
                height={603}
                priority
                className="hero-img-fallback"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teckko Style Infinite Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">Custom Software</div>
          <div className="marquee-item"><span>Web Applications</span></div>
          <div className="marquee-item">Mobile Development</div>
          <div className="marquee-item"><span>AI & Automation</span></div>
          <div className="marquee-item">Cloud DevOps</div>
          <div className="marquee-item"><span>CRM & ERP Systems</span></div>
          {/* Double content for seamless looping */}
          <div className="marquee-item">Custom Software</div>
          <div className="marquee-item"><span>Web Applications</span></div>
          <div className="marquee-item">Mobile Development</div>
          <div className="marquee-item"><span>AI & Automation</span></div>
          <div className="marquee-item">Cloud DevOps</div>
          <div className="marquee-item"><span>CRM & ERP Systems</span></div>
        </div>
      </div>

      {/* 2. About Section with rotating text */}
      <section className="section-spacing home-about-section">
        <div className="container about-inner-split">
          <div className="about-left-badge reveal reveal-fade-left">
            <div className="wg-curve-text">
              <div className="icon">
                <ArrowRight size={24} style={{ transform: 'rotate(-45deg)' }} />
              </div>
              <div className="text-rotate">
                <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="circlePath" d="M 120, 120 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                  </defs>
                  <text>
                    <textPath href="#circlePath" startOffset="0">
                      - DIGITAL - SOFTWARE - SOLUTIONS - AGENCY&nbsp;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="about-right-content reveal reveal-fade-right">
            <span className="about-subtitle-text">We Are Solutions Matter Company</span>
            <h2 className="about-main-title">
              <span className="reveal-line-wrapper">
                <strong className="reveal reveal-line">Innovate Soft Solutions to</strong>
              </span>
              <span className="reveal-line-wrapper">
                <span className="light-weight reveal reveal-line delay-150">Grow Tech Business</span>
              </span>
            </h2>
            
            <div className="about-indented-content">
              <p>
                With a portfolio of successful projects spanning various industries our team has consistently demonstrated the ability to transform ideas into high-performing, user-friendly applications.
              </p>
              <Link href="/company/about" className="about-link-indented">
                <span>Learn More Us</span> &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Achievements Section */}
      <section className="section-spacing why-choose-section">
        <div className="achievement-layout">
          <div className="achievement-left-column">
            <div className="achievement-image-wrapper reveal reveal-image-grow" style={{ position: 'relative' }}>
              <Image 
                src="/images/hero_consulting.webp" 
                alt="Solutions Matter consultants auditing database architectures"
                width={800}
                height={548}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                className="why-img-fallback"
              />
              
              {/* Center-left overlay badge */}
              <div className="achievement-badge-overlay">
                <Globe className="achievement-badge-icon" />
                <span className="achievement-badge-text">Solutions <span>Matter</span></span>
              </div>
              
              {/* Bottom-left overlay metrics card */}
              <div className="achievement-metrics-overlay">
                <div className="achievement-metrics-title">36k+ Trusted Global Clients</div>
                <hr className="achievement-metrics-divider" />
                <div className="achievement-avatar-stack">
                  <div className="achievement-avatar-item">
                    <Image src="/images/avatar1.png" alt="Client Avatar 1" width={32} height={32} />
                  </div>
                  <div className="achievement-avatar-item">
                    <Image src="/images/avatar2.png" alt="Client Avatar 2" width={32} height={32} />
                  </div>
                  <div className="achievement-avatar-item">
                    <Image src="/images/avatar3.png" alt="Client Avatar 3" width={32} height={32} />
                  </div>
                  <div className="achievement-avatar-plus">+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="achievement-right-column reveal reveal-fade-left">
            <span className="badge">Explore Our Achievement</span>
            <h2 style={{ fontSize: '3.6rem', marginTop: '8px', marginBottom: '32px' }}>
              <span className="reveal-line-wrapper">
                <strong className="reveal reveal-line">Premier Tech Innovations</strong>
              </span>
              <span className="reveal-line-wrapper">
                <span className="light-weight reveal reveal-line delay-150" style={{ fontWeight: '400', display: 'block' }}>Solutions Matter Agency</span>
              </span>
            </h2>
            <div className="counter-grid-boxes">
              <div className="counter-box-card style-bg-primary">
                <div className="counter-box-icon">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="counter-box-num">36k+</h3>
                <p style={{ fontSize: '1.4rem', margin: 0 }}>Trusted Global Clients</p>
              </div>
              <div className="counter-box-card style-bg-white">
                <div className="counter-box-icon">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="counter-box-num">850+</h3>
                <p style={{ fontSize: '1.4rem', margin: 0 }}>Best Project Complete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Growth & Development Section (Accordions) */}
      <section className="section-spacing tech-stack-section">
        <div className="growth-section-grid">
          <div className="growth-left reveal reveal-fade-right">
            <span className="badge">Grow & Development</span>
            <h2 style={{ fontSize: '3.6rem', marginTop: '8px', marginBottom: '32px' }}>
              <span className="reveal-line-wrapper">
                <strong className="reveal reveal-line">Modern Technology and</strong>
              </span>
              <span className="reveal-line-wrapper">
                <span className="light-weight reveal reveal-line delay-150" style={{ fontWeight: '400', display: 'block' }}>Advancement Incentives</span>
              </span>
            </h2>
            
            <div className="growth-accordions">
              {growthItems.map((item, idx) => {
                const isActive = activeGrowthIndex === idx;
                return (
                  <div key={idx} className="growth-acc-item">
                    <button 
                      className={`growth-acc-trigger ${isActive ? 'active' : ''}`}
                      onClick={() => toggleGrowth(idx)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown size={18} style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                    </button>
                    {isActive && (
                      <div className="growth-acc-content">
                        <div className="growth-acc-img-wrapper">
                          <Image 
                            src={item.img} 
                            alt={item.title} 
                            width={120} 
                            height={120} 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                        <div className="growth-acc-text">
                          <p>{item.desc}</p>
                          <div className="growth-acc-checklist">
                            {item.benefits.map((b, i) => (
                              <div key={i} className="growth-check-item">
                                <CheckCircle2 size={14} />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
 
          <div className={`growth-right ${activeGrowthIndex !== null ? 'grow-active' : ''}`}>
            <div className="growth-vertical-image-wrapper reveal reveal-image-grow">
              <Image 
                src="/images/hero_workspace.webp" 
                alt="High-performance custom database engineering solutions"
                width={720}
                height={640}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="section-spacing home-services-section">
        {/* Infinite Marquee 2 */}
        <div className="marquee-container" style={{ background: 'transparent', borderTop: 'none', marginBottom: '60px' }}>
          <div className="marquee-content">
            <div className="marquee-item">Explore <span>Popular</span> Services</div>
            <div className="marquee-item">Explore <span>Popular</span> Services</div>
            <div className="marquee-item">Explore <span>Popular</span> Services</div>
            <div className="marquee-item">Explore <span>Popular</span> Services</div>
          </div>
        </div>

        <div className="container">
          <div className="heading-group reveal reveal-fade-up">
            <span className="badge">Our Popular Services</span>
            <h2>
              <strong>We Run All kinds Of IT Services</strong>
              <span className="light-weight" style={{ display: 'block', marginTop: '8px' }}>that vow Your Success</span>
            </h2>
          </div>
          
          <div className="grid-3">
            {services.slice(0, 3).map((service, index) => (
              <div key={service.slug} className={`card service-card reveal reveal-fade-up ${index === 1 ? 'delay-150' : index === 2 ? 'delay-300' : ''}`}>
                <div className="service-icon-box">{getServiceIcon(service.slug)}</div>
                <h3>{service.title}</h3>
                <p>{service.overview.substring(0, 110)}...</p>
                
                <div className="service-card-bottom-img">
                  <Image 
                    src={getServiceImage(service.slug)}
                    alt={service.title}
                    width={300}
                    height={180}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <div className="service-card-footer" style={{ marginTop: '24px' }}>
                  <Link href={`/services/${service.slug}`} className="btn-plus-readmore">
                    <span className="plus-icon">+</span>
                    <span className="readmore-text">Read More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Discuss & Start IT Consultations (Blue CTA Bar) */}
      <section className="blue-cta-bar">
        <div className="container blue-cta-inner">
          <h3>Discuss & Start <span>IT Consultations</span></h3>
          <Link href="/contact" className="btn blue-cta-btn">
            <span>Let&apos;s Talk</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 8. Portfolio (Case Studies) Section */}
      <section className="section-spacing home-case-studies-section">
        <div className="container">
          <div className="heading-group">
            <span className="badge">Explore Our Recent Case Studies</span>
            <h2>Our Latest Software Projects</h2>
          </div>
          
          <div className="case-studies-carousel-wrapper reveal reveal-fade-up">
            <button className="carousel-nav-btn prev" onClick={prevCaseStudy}>&larr;</button>
            
            <div className="case-studies-carousel-viewport">
              <div 
                className="case-studies-carousel-track"
                style={{ 
                  transform: `translateX(-${activeCaseIndex * (100 / caseStudies.length)}%)`,
                  display: 'flex',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: `${caseStudies.length * 100}%`
                }}
              >
                {caseStudies.map((cs) => (
                  <div 
                    key={cs.slug} 
                    className="case-study-carousel-slide"
                    style={{ width: `${100 / caseStudies.length}%`, flexShrink: 0, padding: '0 12px' }}
                  >
                    <div className="case-study-carousel-card">
                      <div className="case-study-card-left">
                        <span className="case-study-card-industry">{cs.industry}</span>
                        <h3 className="case-study-card-title">{cs.title}</h3>
                        <p className="case-study-card-challenge">{cs.challenge.substring(0, 160)}...</p>
                        
                        <Link href={`/company/case-studies/${cs.slug}`} className="btn-plus-readmore" style={{ marginTop: 'auto' }}>
                          <span className="plus-icon">+</span>
                          <span className="readmore-text">Read More</span>
                        </Link>
                      </div>
                      
                      <div className="case-study-card-right">
                        <Image 
                          src={getCaseStudyImage(cs.slug)} 
                          alt={cs.title} 
                          width={600}
                          height={450}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-nav-btn next" onClick={nextCaseStudy}>&rarr;</button>
          </div>

          <div className="case-studies-carousel-dots">
            {caseStudies.map((_, idx) => (
              <button 
                key={idx}
                className={`carousel-dot ${activeCaseIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveCaseIndex(idx)}
                aria-label={`Go to case study slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Reviews (Testimonials) Section */}
      <section className="section-spacing testimonials-section">
        <div className="container reviews-section-layout">
          <div className="reviews-left reveal reveal-fade-right">
            <span className="badge">Clients Feedback</span>
            <h2 style={{ fontSize: '3.6rem', marginTop: '8px', marginBottom: '32px' }}>
              <strong>1250+ People Say </strong>
              <span className="light-weight" style={{ fontWeight: '400' }}>About Us</span>
            </h2>
            
            <div className="testimonial-card-borderless" style={{ minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="testimonial-quote-icon" style={{ color: 'var(--primary)', marginBottom: '16px', opacity: 0.8 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="testimonial-review" style={{ fontSize: '1.8rem', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'normal', fontWeight: '700' }}>
                {testimonials[activeTestimonialIndex].review}
              </p>
              <h4 className="testimonial-client-name" style={{ fontSize: '1.9rem', fontWeight: '700', margin: 0 }}>
                {testimonials[activeTestimonialIndex].name}
              </h4>
              <span className="testimonial-client-role" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                Graphics Designer
              </span>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  className={`testimonial-dot ${activeTestimonialIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveTestimonialIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="reviews-right reveal reveal-fade-left">
            <div className="faces-grid">
              <div className="face-card">
                <Image src="/images/blog_uiux_conversions.webp" alt="Client Review" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="face-card">
                <Image src="/images/blog_ai_enterprise.webp" alt="Client Review" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="face-card">
                <Image src="/images/blog_custom_crmerp.webp" alt="Client Review" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="face-card">
                <Image src="/images/blog_cloud_native.webp" alt="Client Review" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Let's Work Card and Form Split */}
      <section className="proposal-section">
        <div className="container proposal-split-grid">
          <div className="proposal-left-card reveal reveal-fade-right">
            <div className="proposal-left-card-img-wrapper">
              <Image 
                src="/images/hero_consulting.webp" 
                alt="Work Inquiry" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
              />
            </div>
            <div className="proposal-left-card-content">
              <span className="proposal-badge-white">Work Inquiry</span>
              <h2>Let&apos;s Work For your <br /> Next Projects ?</h2>
              <div style={{ marginTop: 'auto' }}>
                <Link href="/contact" className="proposal-btn-white">
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="proposal-form-card reveal reveal-fade-left">
            {formSubmitted ? (
              <div className="submission-success-box" style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={40} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
                <h4>Request Received Successfully</h4>
                <p>We will assign an engineering lead to contact you via email shortly.</p>
                <button className="btn btn-secondary" onClick={() => setFormSubmitted(false)} style={{ marginTop: '16px' }}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--main-dark)', marginBottom: '8px' }}>
                    Need Help For Project!
                  </h3>
                  <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', margin: 0 }}>
                    We are ready to help your next projects, let&apos;s work together
                  </p>
                </div>
                
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="proposal-form-input" 
                        placeholder="Name"
                        required
                      />
                      <User 
                        size={18} 
                        style={{ 
                          position: 'absolute', 
                          right: '16px', 
                          top: '50%', 
                          transform: 'translateY(-50%)', 
                          color: '#5E6E82',
                          pointerEvents: 'none' 
                        }} 
                      />
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="proposal-form-input" 
                        placeholder="Email"
                        required
                      />
                      <Mail 
                        size={18} 
                        style={{ 
                          position: 'absolute', 
                          right: '16px', 
                          top: '50%', 
                          transform: 'translateY(-50%)', 
                          color: '#5E6E82',
                          pointerEvents: 'none' 
                        }} 
                      />
                    </div>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <select 
                      id="position" 
                      name="position" 
                      value={formData.position} 
                      onChange={handleInputChange} 
                      className="proposal-form-select"
                      required
                    >
                      <option value="" disabled>Choose Services</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Web & SaaS Platforms">Web & SaaS Platforms</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Cloud Migration & DevOps">Cloud Migration & DevOps</option>
                    </select>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        position: 'absolute', 
                        right: '16px', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        color: '#5E6E82', 
                        pointerEvents: 'none' 
                      }} 
                    />
                  </div>

                  <div>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="proposal-form-textarea" 
                      rows="4"
                      placeholder="Message"
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                    <button type="submit" className="proposal-form-btn">
                      <span>Send Message Us</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 11. Read Our Latest News & Blog */}
      {featuredBlogPosts.length > 0 && (
        <section className="section-spacing home-blog-section">
          <div className="container">
            <div className="heading-group">
              <span className="badge">Read Our Latest News & Blog</span>
              <h2>
                <strong>Latest</strong>{' '}
                <span className="light-weight" style={{ fontWeight: '400', display: 'block', marginTop: '8px' }}>
                  Tech Insights & Trends
                </span>
              </h2>
            </div>
          </div>
            
          <div className="grid-2 blog-grid-container">
            {featuredBlogPosts.map((post, index) => (
              <div key={post.slug} className={`blog-vertical-card reveal reveal-fade-up ${index === 1 ? 'delay-200' : ''}`}>
                <div className="blog-vertical-card-content">
                  <div className="blog-vertical-card-meta">
                    <span>05 June 2025</span>
                  </div>
                  
                  <h3 className="blog-vertical-card-title">{post.title}</h3>
                  <p className="blog-vertical-card-summary">{post.summary}</p>
                  
                  <Link href={`/insights/blog/${post.slug}`} className="blog-vertical-btn">
                    <span className="plus-icon">+</span>
                    <span className="btn-text">Read More</span>
                  </Link>
                </div>

                <div className="blog-vertical-card-img-wrapper">
                  <Image 
                    src={post.banner || post.image || '/images/blog_ai_enterprise.webp'} 
                    alt={post.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="blog-zoom-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
