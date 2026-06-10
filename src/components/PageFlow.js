import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function PageFlow({ nextType, nextTitle, nextPath }) {
  if (!nextPath) return null;

  return (
    <div className="page-flow-container">
      <div className="page-flow-card">
        <div className="page-flow-meta">
          <Compass size={16} className="compass-icon" />
          <span>Recommended Exploration Pathway</span>
        </div>
        <div className="page-flow-body">
          <div className="page-flow-text">
            <span className="flow-step-label">Next Step: {nextType}</span>
            <h3>{nextTitle}</h3>
          </div>
          <Link href={nextPath} className="page-flow-btn">
            <span>Continue Flow</span>
            <ArrowRight size={18} className="flow-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
