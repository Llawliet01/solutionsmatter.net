import { makeMetadata, makeBreadcrumbSchema } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Contact Solutions Matter',
  description: 'Contact Solutions Matter to discuss custom software, AI automation, SaaS, CRM, ERP, and digital transformation projects.',
  path: '/contact',
  keywords: ['contact software company', 'custom software consultation', 'AI automation contact'],
});

export default function ContactLayout({ children }) {
  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}