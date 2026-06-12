import Link from 'next/link';
import { ArrowRight, Bookmark, AlertOctagon } from 'lucide-react';
import { industries } from '@/data/industries';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Target Industries',
  description: 'Solutions Matter engineers specialized software architectures, high-compliance cloud infrastructure, and data platforms for Healthcare, Finance & Banking, Retail & E-Commerce, Manufacturing, and SaaS & Technology.'
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Sector Focus</span>
            <h1>Industries We Serve</h1>
            <p>
              We design software, secure database layers, and deployment container networks built to satisfy industry-specific compliance rules.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing industries-grid-section">
        <div className="container">
          <div className="industries-listing-grid">
            {industries.map((ind) => (
              <div key={ind.slug} className="card industry-card-detailed">
                <h3>{ind.title} Industry</h3>
                <p className="industry-overview-text">{ind.overview}</p>
                
                <div className="industry-challenges-box">
                  <h4>Common Sector Challenges:</h4>
                  <ul className="challenges-bullet-list">
                    {ind.challenges.slice(0, 3).map((chal, idx) => (
                      <li key={idx}>
                        <AlertOctagon size={14} className="alert-icon" />
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="industry-footer">
                  <div className="industry-tech-badges">
                    {ind.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-badge-mini">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/industries/${ind.slug}`} className="btn btn-secondary btn-sm-padding">
                    <span>View Case Studies</span>
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
