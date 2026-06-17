export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/scratch/', '/tmp/', '/admin/'],
      },
    ],
    sitemap: 'https://www.solutionsmatter.com/sitemap.xml',
  };
}