import Link from 'next/link';
import { ArrowRight, HelpCircle, FileText, Calendar } from 'lucide-react';

export default function CTA({ variant = 'bottom' }) {
  if (variant === 'top') {
    return (
      <Link href="/contact" className="cta-link cta-top">
        <Calendar size={15} />
        <span>Schedule Consultation</span>
        <ArrowRight size={14} className="cta-arrow" />
      </Link>
    );
  }

  if (variant === 'middle') {
    return (
      <div className="cta-middle-box">
        <div className="cta-middle-content">
          <h3>Ready to scale your business operations?</h3>
          <p>Let&apos;s co-engineer software designed to automate workflows and drive conversions.</p>
        </div>
        <Link href="/contact" className="cta-link cta-middle-btn">
          <HelpCircle size={18} />
          <span>Discuss Your Project</span>
          <ArrowRight size={16} className="cta-arrow" />
        </Link>
      </div>
    );
  }

  // default 'bottom'
  return (
    <section className="cta-bottom-section">
      <div className="container">
        <div className="cta-bottom-card">
          <div className="cta-badge">Partner With Us</div>
          <h2>Accelerate Your Technology Growth</h2>
          <p>
            Get in touch with our engineering team to draft custom software designs, review cloud infrastructure performance, or design product MVPs.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="cta-link cta-bottom-btn">
              <FileText size={18} />
              <span>Request Proposal</span>
              <ArrowRight size={16} className="cta-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
