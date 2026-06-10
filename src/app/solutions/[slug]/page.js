import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, ArrowRight, Bookmark, ShieldAlert, CheckSquare, 
  HelpCircle, ExternalLink, Library
} from 'lucide-react';
import { solutions } from '@/data/solutions';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';

export async function generateStaticParams() {
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutions.find(s => s.slug === slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found'
    };
  }

  return {
    title: `${solution.title} | Operations Solutions`,
    description: solution.overview.substring(0, 155),
    alternates: {
      canonical: `/solutions/${slug}`
    }
  };
}

export default async function SolutionDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    notFound();
  }

  // Inject Solution Schema JSON-LD
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': solution.title,
    'description': solution.overview,
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
      <section className="solution-detail-hero">
        <div className="container">
          <span className="detail-badge">Custom Solution</span>
          <h1>{solution.heroTitle}</h1>
          <p>{solution.heroSubtitle}</p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-spacing solution-detail-body">
        <div className="container">
          <div className="detail-layout-grid">
            
            {/* Left Content Column */}
            <div className="left-content-area">
              
              {/* Business Problem */}
              <div className="content-block problem-card-block">
                <div className="block-title-row">
                  <ShieldAlert size={24} className="problem-alert-icon" />
                  <h2>The Business Problem</h2>
                </div>
                <p className="large-overview-paragraph problem-text">{solution.problem}</p>
              </div>

              {/* Solution Overview */}
              <div className="content-block">
                <h2>Our Custom Solution</h2>
                <p className="large-overview-paragraph">{solution.overview}</p>
              </div>

              {/* Implementation Process */}
              <div className="content-block process-block">
                <h2>Implementation Roadmap</h2>
                <p className="block-intro-text">
                  Our structured process pipeline for deploying integrations with zero service interruption:
                </p>
                <div className="process-flow-line">
                  {solution.process.map((p, i) => (
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

            {/* Right Sidebar Column */}
            <div className="right-sidebar-area">
              
              {/* Benefits Sidebar */}
              <div className="sidebar-card benefits-sidebar-card">
                <h3>Solution Benefits</h3>
                <ul className="sidebar-checklist">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="checklist-check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Recommended Services</h3>
                <div className="relation-links-stack">
                  {solution.relatedServices.map((service) => (
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

              {/* Recommended Industries */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Target Industries</h3>
                <div className="relation-links-stack">
                  {solution.relatedIndustries.map((ind) => (
                    <div key={ind.slug} className="relation-link-card mini-margin">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{ind.title} Industry</h4>
                        <Link href={`/industries/${ind.slug}`} className="relation-action-link">
                          <span>View Sector Details</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Proven Implementations</h3>
                <div className="relation-links-stack">
                  {solution.relatedCaseStudies.map((cs) => (
                    <div key={cs.slug} className="relation-link-card mini-margin">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{cs.title}</h4>
                        <Link href={`/company/case-studies/${cs.slug}`} className="relation-action-link">
                          <span>Read Case Study</span>
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

          {/* Solution Flow redirection trail: Solution -> Target Industry */}
          <PageFlow 
            nextType="Target Industry"
            nextTitle={`${solution.relatedIndustries[0].title} Industry`}
            nextPath={`/industries/${solution.relatedIndustries[0].slug}`}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
