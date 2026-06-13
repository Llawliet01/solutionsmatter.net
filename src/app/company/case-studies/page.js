import { caseStudies } from '@/data/caseStudies';
import CaseStudiesList from '@/components/CaseStudiesList';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Case Studies | Solutions Matter',
  description: 'Read detailed software implementation stories and case studies covering cloud migration, custom ERP frameworks, AI diagnostics and startup MVP architectures.'
};

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page-wrapper">
      {/* Page Header */}
      <header className="page-header case-studies-header-block">
        <div className="header-left">
          <div className="header-eyebrow">Case Studies</div>
          <h1 className="page-title">Work that<br/><em>speaks for itself.</em></h1>
        </div>
        <div className="header-right">
          <p>Five projects. Real outcomes. Each one started with a hard engineering problem and ended with software people actually use.</p>
        </div>
      </header>

      {/* Case Studies Card List wrapper */}
      <CaseStudiesList caseStudies={caseStudies} />

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </div>
  );
}
