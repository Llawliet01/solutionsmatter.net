import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, ChevronRight, CheckCircle2, Bookmark, Zap,
  Lightbulb, Building2
} from 'lucide-react';
import { services } from '@/data/services';
import { faqs } from '@/data/faqs';
import ServiceFaqs from '@/components/ServiceFaqs';
import ServiceHeroScroll from '@/components/ServiceHeroScroll';
import CTA from '@/components/CTA';
import ProcessHorizontalScroll from '@/components/ProcessHorizontalScroll';
import BackgroundRings from '@/components/BackgroundRings';

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: `${service.title} | Technical Services`,
    description: service.overview.substring(0, 155),
    alternates: {
      canonical: `/services/${slug}`
    }
  };
}

// Map service slug to a relevant main image
const getServiceMainImage = (slug) => {
  switch (slug) {
    case 'custom-software-development': return '/images/blog_serverless_scale.webp';
    case 'web-development': return '/images/blog_cloud_native.webp';
    case 'mobile-app-development': return '/images/blog_uiux_conversions.webp';
    case 'ui-ux-design': return '/images/blog_uiux_conversions.webp';
    case 'ai-automation': return '/images/blog_ai_enterprise.webp';
    case 'cloud-devops': return '/images/blog_cloud_native.webp';
    case 'saas-development': return '/images/blog_serverless_scale.webp';
    case 'crm-development': return '/images/blog_custom_crmerp.webp';
    case 'erp-development': return '/images/blog_custom_crmerp.webp';
    default: return '/images/hero_workspace.webp';
  }
};

// Map service slug to a custom generated background hero image
const getServiceHeroImage = (slug) => {
  switch (slug) {
    case 'custom-software-development': return '/images/hero_code_dark.png';
    case 'web-development': return '/images/hero_web_dev.png';
    case 'mobile-app-development': return '/images/hero_mobile_dev.png';
    case 'ui-ux-design': return '/images/hero_ui_ux.png';
    case 'ai-automation': return '/images/hero_ai_automation.png';
    case 'cloud-devops': return '/images/hero_cloud_devops.png';
    case 'saas-development': return '/images/hero_saas_dev.png';
    case 'crm-development': return '/images/hero_crm_dev.png';
    case 'erp-development': return '/images/hero_erp_dev.png';
    case 'support-maintenance': return '/images/hero_support_maintenance.png';
    default: return '/images/hero_code_dark.png';
  }
};

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find previous and next services for bottom redirection
  const serviceIndex = services.findIndex(s => s.slug === slug);
  const prevService = services[serviceIndex - 1] || services[services.length - 1];
  const nextService = services[serviceIndex + 1] || services[0];

  // Filter FAQs — always top up to 6 from general pool
  const serviceFaqs = faqs.filter(f => f.relatedService && f.relatedService.slug === slug);
  if (serviceFaqs.length < 6) {
    const usedQ = new Set(serviceFaqs.map(f => f.question));
    const extra = faqs.filter(f => !usedQ.has(f.question));
    serviceFaqs.push(...extra.slice(0, 6 - serviceFaqs.length));
  }

  // Schema JSON-LD
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.overview,
    'provider': {
      '@type': 'Organization',
      'name': 'Solutions Matter',
      'url': 'https://www.solutionsmatter.com'
    },
    'areaServed': 'Worldwide'
  };

  return (
    <div style={{ position: 'relative', overflow: 'clip', width: '100%' }}>
      <BackgroundRings count={12} />
      <ServiceHeroScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Section */}
      <section className="service-detail-hero">
        {/* Dynamic Background Image Wrapper (hidden in baseline layout) */}
        <div className="hero-bg-wrapper">
          <Image 
            src={getServiceHeroImage(slug)}
            alt={`${service.title} Hero Background`}
            fill
            priority
            className="hero-bg-img-el"
          />
          <div className="hero-bg-overlay" />
        </div>

        {/* Animated text overlay — fades in as image finishes growing */}
        <div className="hero-text-reveal">
          <h2 className="hero-reveal-title">{service.heroTitle || service.title}</h2>
          <p className="hero-reveal-subtext">{service.heroSubtitle || service.overview.substring(0, 130) + '…'}</p>
        </div>

        <div className="container">
          {/* Centered Service Heading */}
          <h1 className="service-hero-title">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section-spacing service-detail-body">
        <div className="container">
          
          {/* Upper Split Layout: Sidebar + Overview */}
          <div className="overview-split-layout">
            
            {/* Left Sidebar Area (Major Services list only) */}
            <div className="sidebar-card major-services-card reveal reveal-fade-left">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px', borderBottom: '2.5px solid var(--surface-light)', paddingBottom: '10px' }}>
                  Major Services
                </h3>
                <div className="sidebar-services-list">
                  {services.map((s) => (
                    <Link 
                      key={s.slug} 
                      href={`/services/${s.slug}`} 
                      className={`sidebar-services-item-link ${s.slug === slug ? 'active' : ''}`}
                    >
                      <span>{s.title}</span>
                      {s.slug === slug && <ChevronRight size={16} className="arrow-icon" />}
                    </Link>
                  ))}
                </div>
              </div>

            {/* Right Content Area: Overview */}
            <div className="service-overview-right">
              <div className="reveal reveal-fade-right">
                <h2 className="specializations-section-title">Unlocking Growth: The {service.title}</h2>
                <p className="large-overview-paragraph" style={{ marginBottom: '24px' }}>
                  {service.overview}
                </p>
                <p className="large-overview-paragraph" style={{ marginBottom: '24px' }}>
                  {service.overviewP2}
                </p>
                <p className="large-overview-paragraph">
                  {service.overviewP3}
                </p>
              </div>
            </div>

          </div>

          {/* Capabilities Section (What We Offer) */}
          <div className="full-width-content-sections">
            <div className="reveal reveal-fade-right capabilities-section-grid">
              <div className="capabilities-text-area">
                <span className="capabilities-tag">Capabilities</span>
                <h3 className="capabilities-title">What We Offer</h3>
                <p className="capabilities-desc">
                  {service.capabilitiesDesc}
                </p>
                <Link href="/contact" className="capabilities-btn">
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="capabilities-cards-grid">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="capability-card">
                    <div className="capability-icon-box">
                      <Zap size={18} />
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>{/* END .container */}

        {/* Easy Working Process — Full-viewport horizontal scroll (outside container) */}
        <ProcessHorizontalScroll steps={service.process} />

        <div className="container after-hscroll-container">
          <div className="full-width-content-sections">

            {/* FAQ Accordion Section */}
            <div className="reveal reveal-fade-right" style={{ marginBottom: '50px' }}>
              <h3 className="faq-section-title" style={{ marginTop: '0px' }}>Frequently Asked Questions</h3>
              <p className="faq-section-intro-text">
                {service.faqIntro}
              </p>
              <ServiceFaqs faqs={serviceFaqs} />
            </div>

            {/* Related Resources: Solutions + Industries */}
            {(service.relatedSolutions?.length > 0 || service.relatedIndustries?.length > 0) && (
              <div style={{ marginBottom: '60px' }} className="reveal reveal-fade-up">
                <h3 className="faq-section-title" style={{ marginBottom: '8px' }}>Related Resources</h3>
                <p className="faq-section-intro-text" style={{ marginBottom: '32px' }}>
                  Explore the solutions and industries most relevant to this service.
                </p>

                <div className="related-resources-grid">
                  {/* Left Column: Solutions */}
                  {service.relatedSolutions?.length > 0 && (
                    <div className="related-resource-single-card">
                      <Image 
                        src="/images/resource_solutions_bg.png" 
                        alt="" 
                        fill
                        className="rr-sc-bg-image"
                      />
                      <div className="rr-sc-blur-overlay" />
                      <div className="rr-sc-content">
                        <div className="rr-sc-header">
                          <div className="rr-sc-icon rr-icon-solution-color">
                            <Lightbulb size={22} />
                          </div>
                          <h3>Solutions</h3>
                        </div>
                        <div className="rr-sc-links-list">
                          {service.relatedSolutions.map((sol) => (
                            <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="rr-sc-link-item">
                              <span className="rr-sc-link-text">{sol.title}</span>
                              <ChevronRight size={16} className="rr-sc-link-arrow" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Column: Industries */}
                  {service.relatedIndustries?.length > 0 && (
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
                          {service.relatedIndustries.map((ind) => (
                            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="rr-sc-link-item">
                              <span className="rr-sc-link-text">{ind.title}</span>
                              <ChevronRight size={16} className="rr-sc-link-arrow" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Redirection Navigation */}
            <div className="redirection-nav-row reveal reveal-fade-up">
              <Link href={`/services/${prevService.slug}`} className="redirection-column prev-column">
                <div className="redirection-header-text">&lt; Previous</div>
                <h3 className="redirection-service-title">{prevService.title}</h3>
                <div className="redirection-image-wrapper">
                  <Image 
                    src={getServiceHeroImage(prevService.slug)} 
                    alt={prevService.title} 
                    width={600} 
                    height={400} 
                    className="redirection-image" 
                  />
                </div>
              </Link>

              <Link href={`/services/${nextService.slug}`} className="redirection-column next-column">
                <div className="redirection-header-text">Next &gt;</div>
                <h3 className="redirection-service-title">{nextService.title}</h3>
                <div className="redirection-image-wrapper">
                  <Image 
                    src={getServiceHeroImage(nextService.slug)} 
                    alt={nextService.title} 
                    width={600} 
                    height={400} 
                    className="redirection-image" 
                  />
                </div>
              </Link>
            </div>

          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </div>
  );
}
