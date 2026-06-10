import Link from 'next/link';
import { ArrowRight, Bookmark, CheckSquare } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Case Studies',
  description: 'Read detailed software implementation stories and case studies covering cloud migration, custom ERP frameworks, AI diagnostics and startup MVP architectures.'
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Implementations</span>
            <h1>Technical Case Studies</h1>
            <p>
              Review the detailed problems, our engineered solutions, and real-world database metrics achieved through our custom software deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Listing */}
      <section className="section-spacing case-studies-grid-section">
        <div className="container">
          <div className="grid-3">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="card case-study-card-detailed">
                <div className="cs-card-header">
                  <span className="cs-industry-badge">{cs.industry} Sector</span>
                  <h3>{cs.title}</h3>
                </div>
                
                <div className="cs-summary-block">
                  <h4>The Challenge:</h4>
                  <p>{cs.challenge.substring(0, 150)}...</p>
                </div>

                <div className="cs-outcomes-block">
                  <h4>Key Outcomes:</h4>
                  <ul className="cs-outcomes-list">
                    {cs.outcome.slice(0, 2).map((out, oIdx) => (
                      <li key={oIdx}>
                        <CheckSquare size={14} className="outcome-check-icon" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cs-card-footer">
                  <div className="cs-techs-container">
                    {cs.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-badge-mini">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/company/case-studies/${cs.slug}`} className="btn btn-secondary btn-sm-padding">
                    <span>View Full Case</span>
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
