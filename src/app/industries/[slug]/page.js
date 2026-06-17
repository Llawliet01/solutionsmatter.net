import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industries } from '@/data/industries';
import HealthcareIndustry from '@/components/industries/HealthcareIndustry';
import FinanceBankingIndustry from '@/components/industries/FinanceBankingIndustry';
import SaasTechnologyIndustry from '@/components/industries/SaasTechnologyIndustry';
import ManufacturingIndustry from '@/components/industries/ManufacturingIndustry';
import RetailEcommerceIndustry from '@/components/industries/RetailEcommerceIndustry';
import { makeBreadcrumbSchema, makeMetadata } from '@/lib/seo';

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

  return makeMetadata({
    title: `${industry.title} Industry Solutions | Solutions Matter`,
    description: industry.overview.substring(0, 155),
    path: `/industries/${slug}`,
    type: 'article',
    image: '/images/logo.webp',
    keywords: [industry.title, 'industry software solutions', 'sector solutions'],
  });
}

export default async function IndustryDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: industry.title, path: `/industries/${slug}` },
  ]);

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

  const renderIndustryContent = () => {
    switch (slug) {
      case 'healthcare':
        return <HealthcareIndustry industry={industry} />;
      case 'finance':
        return <FinanceBankingIndustry industry={industry} />;
      case 'saas':
        return <SaasTechnologyIndustry industry={industry} />;
      case 'manufacturing':
        return <ManufacturingIndustry industry={industry} />;
      case 'retail':
        return <RetailEcommerceIndustry industry={industry} />;
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
      {renderIndustryContent()}
    </>
  );
}
