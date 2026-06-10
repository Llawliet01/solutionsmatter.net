import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, Cpu, ArrowRight, Settings, Code, ShieldCheck, 
  HelpCircle, ExternalLink, Bookmark
} from 'lucide-react';
import { services } from '@/data/services';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

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

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Inject Service Schema JSON-LD
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="container">
          <span className="detail-badge reveal reveal-fade-down">Service Specialization</span>
          <h1 style={{ fontSize: '4.4rem', marginBottom: '16px', maxWidth: '800px' }}>
            <span className="reveal-line-wrapper">
              <strong className="reveal reveal-line">{service.heroTitle}</strong>
            </span>
          </h1>
          <p className="reveal reveal-fade-up delay-150">{service.heroSubtitle}</p>
        </div>
      </section>

      {/* Main content sections */}
      <section className="section-spacing service-detail-body">
        <div className="container">
          <div className="detail-layout-grid">
            
            {/* Left Content Area */}
            <div className="left-content-area">
              
              {/* Service Overview */}
              <div className="content-block reveal reveal-fade-right">
                <h2>Service Overview</h2>
                <p className="large-overview-paragraph">{service.overview}</p>
              </div>

              {/* Key Features */}
              <div className="content-block features-block reveal reveal-fade-right delay-100">
                <h2>Core Key Features</h2>
                <div className="features-grid">
                  {service.features.map((feature, i) => (
                    <div key={i} className="feature-item-card">
                      <div className="feature-marker">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="feature-details">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="content-block process-block reveal reveal-fade-right delay-200">
                <h2>Our Development Process</h2>
                <p className="block-intro-text">
                  How we coordinate code deliverables and verify requirements through our Agile workflow sprints:
                </p>
                <div className="process-flow-line">
                  {service.process.map((p, i) => (
                    <div key={i} className="process-flow-row">
                      <div className="process-flow-num">{p.step}</div>
                      <div className="process-flow-text">
                        <h4>{p.name}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Area */}
            <div className="right-sidebar-area">
              
              {/* Benefits Box */}
              <div className="sidebar-card benefits-sidebar-card reveal reveal-fade-left">
                <h3>Key Benefits</h3>
                <ul className="sidebar-checklist">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="checklist-check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Box */}
              <div className="sidebar-card tech-sidebar-card reveal reveal-fade-left delay-100">
                <h3>Technologies Used</h3>
                <div className="tech-badge-container">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="tech-pill-large">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Related Solutions */}
              <div className="sidebar-card relation-sidebar-card reveal reveal-fade-left delay-200">
                <h3>Related Solution</h3>
                <div className="relation-link-card">
                  <Bookmark size={20} className="relation-icon" />
                  <div>
                    <h4>{service.relatedSolution.title}</h4>
                    <Link href={`/solutions/${service.relatedSolution.slug}`} className="relation-action-link">
                      <span>View Solution</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Industries */}
              <div className="sidebar-card relation-sidebar-card reveal reveal-fade-left delay-300">
                <h3>Target Industry</h3>
                <div className="relation-link-card">
                  <Bookmark size={20} className="relation-icon" />
                  <div>
                    <h4>{service.relatedIndustry.title}</h4>
                    <Link href={`/industries/${service.relatedIndustry.slug}`} className="relation-action-link">
                      <span>View Industry Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Case Studies */}
              <div className="sidebar-card relation-sidebar-card reveal reveal-fade-left delay-400">
                <h3>Featured Case Study</h3>
                <div className="relation-link-card">
                  <Bookmark size={20} className="relation-icon" />
                  <div>
                    <h4>{service.relatedCaseStudy.title}</h4>
                    <Link href={`/company/case-studies/${service.relatedCaseStudy.slug}`} className="relation-action-link">
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />

          {/* Service Flow redirection trail: Service -> Related Solution */}
          <PageFlow 
            nextType="Business Solution"
            nextTitle={service.relatedSolution.title}
            nextPath={`/solutions/${service.relatedSolution.slug}`}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
