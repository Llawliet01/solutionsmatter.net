import Link from 'next/link';
import { 
  Code2, Laptop, Smartphone, Layout, Cpu, Cloud, BarChart2, Briefcase, Database, RefreshCw, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { services } from '@/data/services';
import CTA from '@/components/CTA';

// Helper to map service slug to an icon
const getServiceIcon = (slug) => {
  switch (slug) {
    case 'custom-software-development': return <Code2 size={32} />;
    case 'web-development': return <Laptop size={32} />;
    case 'mobile-app-development': return <Smartphone size={32} />;
    case 'ui-ux-design': return <Layout size={32} />;
    case 'ai-automation': return <Cpu size={32} />;
    case 'cloud-devops': return <Cloud size={32} />;
    case 'saas-development': return <BarChart2 size={32} />;
    case 'crm-development': return <Briefcase size={32} />;
    case 'erp-development': return <Database size={32} />;
    case 'support-maintenance': return <RefreshCw size={32} />;
    default: return <Code2 size={32} />;
  }
};

export const metadata = {
  title: 'Our Technology Services',
  description: 'Solutions Matter provides professional IT consulting and custom engineering services including Software Development, Web Design, Mobile Apps, AI automation, and Cloud DevOps.'
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge reveal reveal-fade-down">Specializations</span>
            <h1 style={{ fontSize: '4.8rem', marginBottom: '16px' }}>
              <span className="reveal-line-wrapper">
                <strong className="reveal reveal-line">Our Engineering Services</strong>
              </span>
            </h1>
            <p className="reveal reveal-fade-up delay-150">
              We design and construct premium custom software systems, responsive portals, and high-security cloud integrations tailored to optimize operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing services-grid-section">
        <div className="container">
          <div className="services-listing-grid">
            {services.map((service, idx) => (
              <div 
                key={service.slug} 
                className={`card service-card-detailed reveal reveal-fade-up ${
                  idx % 3 === 0 ? 'delay-100' : idx % 3 === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div className="service-header-row">
                  <div className="service-icon-wrapper">{getServiceIcon(service.slug)}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-overview-text">{service.overview}</p>
                
                <div className="service-benefits-summary">
                  <h4>Key Benefits:</h4>
                  <ul className="benefits-checklist">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-footer">
                  <div className="service-techs-row">
                    {service.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-badge-mini">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn btn-secondary btn-sm-padding">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
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
