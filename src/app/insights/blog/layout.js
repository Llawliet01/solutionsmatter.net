import { makeMetadata, makeBreadcrumbSchema } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Insights Blog | Solutions Matter',
  description: 'Explore software development insights, AI articles, technical trends, and implementation guides from Solutions Matter.',
  path: '/insights/blog',
  keywords: ['software blog', 'AI insights', 'development articles', 'technical guides'],
});

export default function BlogLayout({ children }) {
  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights/blog' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}