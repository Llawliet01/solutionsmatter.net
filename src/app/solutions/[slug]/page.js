import { notFound } from 'next/navigation';
import { solutions } from '@/data/solutions';
import StartupMvpSolution from '@/components/solutions/StartupMvpSolution';
import BusinessAutomationSolution from '@/components/solutions/BusinessAutomationSolution';
import AiSolutionsSolution from '@/components/solutions/AiSolutionsSolution';
import CrmErpSolution from '@/components/solutions/CrmErpSolution';
import DigitalTransformationSolution from '@/components/solutions/DigitalTransformationSolution';
import { makeBreadcrumbSchema, makeMetadata } from '@/lib/seo';

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

  return makeMetadata({
    title: `${solution.title} | Solutions Matter`,
    description: solution.overview.substring(0, 155),
    path: `/solutions/${slug}`,
    type: 'article',
    image: '/images/logo.webp',
    keywords: [solution.title, 'business solution', 'enterprise software'],
  });
}

export default async function SolutionDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: solution.title, path: `/solutions/${slug}` },
  ]);

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

  const renderSolutionContent = () => {
    switch (slug) {
      case 'startup-mvp':
        return <StartupMvpSolution solution={solution} />;
      case 'business-automation':
        return <BusinessAutomationSolution solution={solution} />;
      case 'ai-solutions':
        return <AiSolutionsSolution solution={solution} />;
      case 'crm-erp':
        return <CrmErpSolution solution={solution} />;
      case 'digital-transformation':
        return <DigitalTransformationSolution solution={solution} />;
      default:
        notFound();
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      {renderSolutionContent()}
    </>
  );
}
