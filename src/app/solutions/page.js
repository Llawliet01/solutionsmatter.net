import Link from 'next/link';
import { Bookmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '@/data/solutions';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Enterprise Technology Solutions',
  description: 'Solutions Matter builds custom technology solutions including Startup MVP development, Business Process Automation, AI Integrations, and custom CRM/ERP portals.'
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Operational Integrations</span>
            <h1>Custom Business Solutions</h1>
            <p>
              We engineer specialized technology systems that resolve complex business problems, streamline inventory supply chains, and modernize legacy IT architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-spacing solutions-grid-section">
        <div className="container">
          <div className="solutions-listing-grid">
            {solutions.map((sol, index) => (
              <div key={sol.slug} className="card solution-card-detailed">
                <div className="sol-row-num-badge">0{index + 1}</div>
                <h3>{sol.title}</h3>
                
                <div className="problem-statement-box">
                  <h4>Business Problem:</h4>
                  <p>{sol.problem}</p>
                </div>

                <div className="solution-overview-box">
                  <h4>Our Solution:</h4>
                  <p>{sol.overview}</p>
                </div>

                <div className="solution-benefits-list">
                  <h4>Benefits:</h4>
                  <ul className="sol-benefits-checklist">
                    {sol.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={15} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="solution-footer">
                  <div className="sol-services-badges">
                    {sol.relatedServices.map(ser => (
                      <span key={ser.slug} className="service-pill-mini">{ser.title}</span>
                    ))}
                  </div>
                  <Link href={`/solutions/${sol.slug}`} className="btn btn-secondary btn-sm-padding">
                    <span>View Solution Details</span>
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
