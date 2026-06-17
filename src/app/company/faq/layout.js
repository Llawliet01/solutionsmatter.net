import { makeMetadata, makeBreadcrumbSchema } from '@/lib/seo';
import { faqs } from '@/data/faqs';

export const metadata = makeMetadata({
  title: 'FAQ | Solutions Matter',
  description: 'Find answers about Solutions Matter services, process, security, maintenance, AI integrations, and delivery timelines.',
  path: '/company/faq',
  keywords: ['software FAQ', 'development questions', 'AI integration FAQ'],
});

export default function FaqLayout({ children }) {
  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/company/faq' },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 10).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}