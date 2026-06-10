import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, ArrowRight, Bookmark, ShieldAlert, Award, 
  HelpCircle, ExternalLink, Settings, ShieldCheck
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

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

  return {
    title: `${cs.title} | Case Study`,
    description: cs.challenge.substring(0, 155),
    alternates: {
      canonical: `/company/case-studies/${slug}`
    }
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cs = caseStudies.find(c => c.slug === slug);

  if (!cs) {
    notFound();
  }

  // Inject Project Case Study Schema JSON-LD
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': cs.title,
    'description': cs.challenge,
    'publisher': {
      '@type': 'Organization',
      'name': 'Solutions Matter'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Section */}
      <section className="case-detail-hero">
        <div className="container">
          <span className="detail-badge">{cs.industry} Case Study</span>
          <h1>{cs.title}</h1>
          <p className="cs-hero-subtitle">Detailed challenge audit, technology selections, and operational outcomes.</p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-spacing case-detail-body">
        <div className="container">
          <div className="detail-layout-grid">
            
            {/* Left Content Area */}
            <div className="left-content-area">
              
              {/* Challenge Section */}
              <div className="content-block challenge-block-border">
                <div className="block-title-row">
                  <ShieldAlert size={24} className="challenge-icon-decor" />
                  <h2>The Challenge</h2>
                </div>
                <p className="large-overview-paragraph">{cs.challenge}</p>
              </div>

              {/* Solution Section */}
              <div className="content-block">
                <h2>Our Engineered Solution</h2>
                <p className="large-overview-paragraph">{cs.solution}</p>
              </div>

              {/* Implementation Roadmap */}
              <div className="content-block process-block">
                <h2>Project Implementation & Execution</h2>
                <p className="block-intro-text">
                  The step-by-step roadmap our engineering team followed to design, code, and deploy this project:
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

            {/* Right Sidebar Area */}
            <div className="right-sidebar-area">
              
              {/* Outcomes Section */}
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
                <h3>Technologies</h3>
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
                    <div key={service.slug} className="relation-link-card mini-margin">
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
                    <div key={sol.slug} className="relation-link-card mini-margin">
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

          {/* Case Study Flow redirection trail: Case Study -> Related Service */}
          <PageFlow 
            nextType="Related Engineering Service"
            nextTitle={cs.relatedServices[0].title}
            nextPath={`/services/${cs.relatedServices[0].slug}`}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
