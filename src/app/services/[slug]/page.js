import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, ChevronRight, CheckCircle2, Bookmark
} from 'lucide-react';
import { services } from '@/data/services';
import { faqs } from '@/data/faqs';
import ServiceFaqs from '@/components/ServiceFaqs';
import ServiceConsultationForm from '@/components/ServiceConsultationForm';
import ServiceHeroScroll from '@/components/ServiceHeroScroll';
import CTA from '@/components/CTA';

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

  // Filter FAQs or fall back to general service/process FAQs
  const serviceFaqs = faqs.filter(f => f.relatedService && f.relatedService.slug === slug);
  if (serviceFaqs.length === 0) {
    serviceFaqs.push(...faqs.filter(f => f.category === 'Services' || f.category === 'Process').slice(0, 4));
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
    <>
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
          <div className="detail-layout-grid">
            
            {/* Left Content Area */}
            <div className="left-content-area">
              
              {/* Main Mockup Image */}
              <div className="service-mockup-wrapper reveal reveal-image-grow">
                <Image 
                  src={getServiceMainImage(slug)}
                  alt={`${service.title} Mockup Showcase`}
                  width={1200}
                  height={800}
                  className="service-mockup-image"
                  priority
                />
              </div>

              {/* Service Overview */}
              <div className="reveal reveal-fade-right">
                <h2 className="specializations-section-title">Unlocking Growth: The {service.title}</h2>
                <p className="large-overview-paragraph" style={{ marginBottom: '24px' }}>
                  {service.overview}
                </p>
                <p className="large-overview-paragraph">
                  We leverage modular development components, high data segregation architectures, and edge deployment platforms to build enterprise software that scales natively with user traffic.
                </p>
              </div>

              {/* Specializations List */}
              <div className="reveal reveal-fade-right" style={{ marginTop: '20px' }}>
                <h3 className="specializations-section-title">Our Key {service.title} includes:</h3>
                <div className="specializations-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="specialization-item">
                      <div className="specialization-num-box">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="specialization-details">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Image with Overlay Box */}
              <div className="service-visual-card reveal reveal-image-grow">
                <Image 
                  src="/images/hero_consulting.webp"
                  alt={`${service.title} Team Engagement`}
                  width={1200}
                  height={800}
                  className="service-visual-image"
                />
                <div className="service-visual-overlay-badge">
                  <h3>10+</h3>
                  <p>Years Experience in Technical Operations</p>
                </div>
              </div>

              {/* Easy Working Process */}
              <div className="reveal reveal-fade-right">
                <h3 className="process-steps-section-title">Our Easy Working Process</h3>
                <p className="process-steps-intro-text">
                  How we coordinate code deliverables and verify requirements through our Agile workflow sprints:
                </p>
                <div className="process-steps-grid">
                  {service.process.slice(0, 3).map((p, idx) => (
                    <div key={idx} className="process-step-card">
                      <div className="process-step-header">
                        <span className="process-step-num-text">Step {p.step || String(idx + 1).padStart(2, '0')}</span>
                        <h4 className="process-step-title">{p.name}</h4>
                      </div>
                      <div className="process-step-checkmark">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="process-step-desc">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion Section */}
              <div className="reveal reveal-fade-right">
                <h3 className="faq-section-title">Frequently Asked Questions</h3>
                <p className="faq-section-intro-text">
                  Find answers to common questions about deployment setups, licensing overheads, and multi-tenant scaling support.
                </p>
                <ServiceFaqs faqs={serviceFaqs} />
              </div>

              {/* Bottom Redirection Navigation */}
              <div className="redirection-nav-row reveal reveal-fade-up">
                <Link href={`/services/${prevService.slug}`} className="redirection-column prev-column">
                  <div className="redirection-header-text">&lt; Previous</div>
                  <h3 className="redirection-service-title">{prevService.title}</h3>
                  <div className="redirection-image-wrapper">
                    <Image 
                      src={getServiceMainImage(prevService.slug)} 
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
                      src={getServiceMainImage(nextService.slug)} 
                      alt={nextService.title} 
                      width={600} 
                      height={400} 
                      className="redirection-image" 
                    />
                  </div>
                </Link>
              </div>

            </div>

            {/* Right Sidebar Area */}
            <div className="right-sidebar-area">
              
              {/* Popular Services Checklist */}
              <div className="sidebar-card reveal reveal-fade-left">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px', borderBottom: '2.5px solid var(--surface-light)', paddingBottom: '10px' }}>
                  Popular Services
                </h3>
                <div className="sidebar-services-list">
                  {services.map((s) => (
                    <Link 
                      key={s.slug} 
                      href={`/services/${s.slug}`} 
                      className={`sidebar-services-item-link ${s.slug === slug ? 'active' : ''}`}
                    >
                      <span>{s.title}</span>
                      <ChevronRight size={16} className="arrow-icon" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation Form Widget */}
              <div className="sidebar-card reveal reveal-fade-left delay-100">
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px', borderBottom: '2.5px solid var(--surface-light)', paddingBottom: '10px' }}>
                  Get Free Consultation ?
                </h3>
                <ServiceConsultationForm currentServiceSlug={slug} />
              </div>

              {/* CTA Promo Card */}
              <div className="sidebar-cta-promo-card reveal reveal-fade-left delay-200">
                <Image 
                  src="/images/hero_workspace.webp"
                  alt="Creative Design Inquiry background"
                  fill
                  className="sidebar-cta-bg-image"
                />
                <div className="sidebar-cta-overlay-content">
                  <h3>Looking For Creative {service.title} Lead?</h3>
                  <Link href="/contact" className="sidebar-cta-btn">
                    <span>Get Quote &gt;</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
