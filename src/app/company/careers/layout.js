import { makeMetadata, makeBreadcrumbSchema } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Careers at Solutions Matter',
  description: 'Explore careers at Solutions Matter across engineering, design, ML, systems architecture, and DevOps roles.',
  path: '/company/careers',
  keywords: ['software careers', 'remote engineering jobs', 'next.js careers'],
});

export default function CareersLayout({ children }) {
  const breadcrumbSchema = makeBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/company/careers' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}