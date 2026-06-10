import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, ArrowRight, Bookmark, AlertCircle, 
  HelpCircle, ExternalLink, Activity
} from 'lucide-react';
import { industries } from '@/data/industries';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export async function generateStaticParams() {
  return industries.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = industries.find(i => i.slug === slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found'
    };
  }

  return {
    title: `${industry.title} Industry | Sector Solutions`,
    description: industry.overview.substring(0, 155),
    alternates: {
      canonical: `/industries/${slug}`
    }
  };
}

export default async function IndustryDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Inject Industry Schema JSON-LD
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': `${industry.title} Solutions`,
    'description': industry.overview,
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
      <section className="industry-detail-hero">
        <div className="container">
          <span className="detail-badge">{industry.title} Sector</span>
          <h1>Custom Technology for {industry.title} Operations</h1>
          <p>{industry.overview}</p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-spacing industry-detail-body">
        <div className="container">
          <div className="detail-layout-grid">
            
            {/* Left Content Column */}
            <div className="left-content-area">
              
              {/* Common Challenges */}
              <div className="content-block challenges-block-card">
                <div className="block-title-row">
                  <AlertCircle size={24} className="challenge-alert-icon" />
                  <h2>Common Sector Challenges</h2>
                </div>
                <p className="block-intro-text">
                  Economic enterprises in the {industry.title} industry frequently face these operational bottlenecks:
                </p>
                <ul className="challenges-checklist">
                  {industry.challenges.map((chal, i) => (
                    <li key={i}>
                      <span className="challenge-bullet-number">0{i + 1}</span>
                      <p>{chal}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Solutions */}
              <div className="content-block">
                <h2>Recommended Custom Solutions</h2>
                <p className="block-intro-text">
                  Operational architectures engineered specifically to resolve data fragmentation and streamline workflow execution:
                </p>
                <div className="recommended-solutions-list">
                  {industry.recommendedSolutions.map((sol) => (
                    <div key={sol.slug} className="rec-sol-card">
                      <div className="rec-sol-text">
                        <h4>{sol.title}</h4>
                      </div>
                      <Link href={`/solutions/${sol.slug}`} className="btn btn-secondary btn-sm-padding">
                        <span>View Solution</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="right-sidebar-area">
              
              {/* Recommended Services */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Recommended Services</h3>
                <div className="relation-links-stack">
                  {industry.recommendedServices.map((service) => (
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

              {/* Technologies Used */}
              <div className="sidebar-card tech-sidebar-card">
                <h3>Sector Technologies</h3>
                <div className="tech-badge-container">
                  {industry.technologies.map((tech) => (
                    <span key={tech} className="tech-pill-large">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Industry Case Studies */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Industry Case Studies</h3>
                <div className="relation-links-stack">
                  {industry.caseStudies.map((cs) => (
                    <div key={cs.slug} className="relation-link-card mini-margin">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{cs.title}</h4>
                        <Link href={`/company/case-studies/${cs.slug}`} className="relation-action-link">
                          <span>Read Case Details</span>
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

          {/* Industry Flow redirection trail: Industry -> Case Study */}
          <PageFlow 
            nextType="Featured Case Study"
            nextTitle={industry.caseStudies[0].title}
            nextPath={`/company/case-studies/${industry.caseStudies[0].slug}`}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
