import { makeMetadata, makeBreadcrumbSchema } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'About Solutions Matter',
  description: 'Learn about Solutions Matter, our mission, values, process, and software delivery approach across web, AI, cloud, and enterprise systems.',
  path: '/company/about',
  keywords: ['about Solutions Matter', 'software company mission', 'custom development team'],
});

export default function AboutLayout({ children }) {
  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/company/about' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
