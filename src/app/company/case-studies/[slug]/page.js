import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, Bookmark, ShieldAlert, Award, 
  ShieldCheck, Calendar, Activity
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';
import { makeBreadcrumbSchema, makeMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cs = caseStudies.find(c => c.slug === slug);
  
  if (!cs) {
    return {
      title: 'Case Study Not Found'
    };
  }

  return makeMetadata({
    title: `${cs.title} Case Study | Solutions Matter`,
    description: cs.challenge.substring(0, 155),
    path: `/company/case-studies/${slug}`,
    type: 'article',
    image: cs.banner,
    keywords: [cs.title, 'case study', 'software implementation'],
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const csIdx = caseStudies.findIndex(c => c.slug === slug);
  const cs = caseStudies[csIdx];

  if (!cs) {
    notFound();
  }

  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/company/case-studies' },
    { name: cs.title, path: `/company/case-studies/${slug}` },
  ]);

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': cs.title,
    'description': cs.challenge,
    'image': cs.banner,
    'publisher': {
      '@type': 'Organization',
      'name': 'Solutions Matter',
      'logo': 'https://www.solutionsmatter.com/images/logo.webp'
    }
  };

  return (
    <div className={`case-study-detail-wrapper cs-accent-theme-${csIdx + 1}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Case Detail Hero Section */}
      <section className="case-detail-hero">
        <div className="container">
          
          <div className="hero-top-meta">
            <span className="detail-badge">{cs.industry} Case Study</span>
          </div>

          <h1 className="detail-page-title">{cs.title}</h1>
          <p className="detail-page-subtitle">Detailed engineering breakdown, architectural blueprints, and production outcome metrics validation.</p>

          {/* Huge Floating Hero Image Panel */}
          {cs.banner && (
            <div className="detail-hero-visual-panel">
              <div className="detail-hero-image-wrapper">
                <Image
                  src={cs.banner}
                  alt={cs.title}
                  fill
                  className="detail-hero-real-image"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Main Content Body */}
      <section className="case-detail-body-section">
        <div className="container">
          <div className="detail-layout-grid">
            
            {/* Left Content Column (Very Long) */}
            <div className="left-content-area">
              
              {/* Challenge Summary */}
              <div className="content-block challenge-block-border">
                <div className="block-title-row">
                  <ShieldAlert size={22} className="block-decor-icon" />
                  <h2>The Challenge</h2>
                </div>
                <p className="large-overview-paragraph">{cs.challenge}</p>
              </div>

              {/* Solution Summary */}
              <div className="content-block solution-block-border">
                <div className="block-title-row">
                  <Activity size={22} className="block-decor-icon" />
                  <h2>The Solution</h2>
                </div>
                <p className="large-overview-paragraph">{cs.solution}</p>
              </div>

              {/* Detailed Technical Report */}
              {cs.detailedContent && (
                <div 
                  className="content-block detailed-report-content"
                  dangerouslySetInnerHTML={{ __html: cs.detailedContent }}
                />
              )}

              {/* Implementation Bullets */}
              <div className="content-block process-block">
                <h2>Project Execution Roadmap</h2>
                <p className="block-intro-text">
                  A checklist of the operational steps completed by our core engineering team:
                </p>
                <div className="implementation-bullets-stack">
                  {cs.implementation.map((stepText, idx) => (
                    <div key={idx} className="implementation-step-row">
                      <div className="step-badge-circle">{idx + 1}</div>
                      <p>{stepText}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="right-sidebar-area">
              
              {/* Outcomes Card */}
              <div className="sidebar-card outcomes-sidebar-card">
                <div className="outcomes-header-row">
                  <Award size={20} className="outcome-icon-decor" />
                  <h3>Project Outcomes</h3>
                </div>
                <ul className="outcomes-metrics-list">
                  {cs.outcome.map((out, idx) => (
                    <li key={idx}>
                      <ShieldCheck size={18} className="metric-check-icon" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="sidebar-card tech-sidebar-card">
                <h3>Engineered Stack</h3>
                <div className="tech-badge-container">
                  {cs.technologies.map((tech) => (
                    <span key={tech} className="tech-pill-large">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Related Services</h3>
                <div className="relation-links-stack">
                  {cs.relatedServices.map((service) => (
                    <div key={service.slug} className="relation-link-card">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{service.title}</h4>
                        <Link href={`/services/${service.slug}`} className="relation-action-link">
                          <span>View Service Details</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Solutions */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Related Solutions</h3>
                <div className="relation-links-stack">
                  {cs.relatedSolutions.map((sol) => (
                    <div key={sol.slug} className="relation-link-card">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{sol.title}</h4>
                        <Link href={`/solutions/${sol.slug}`} className="relation-action-link">
                          <span>View Solution Details</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />

          {/* Redirection Trail */}
          <PageFlow 
            nextType="Related Engineering Service"
            nextTitle={cs.relatedServices[0].title}
            nextPath={`/services/${cs.relatedServices[0].slug}`}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </div>
  );
}
