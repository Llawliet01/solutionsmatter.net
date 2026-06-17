import { services } from '@/data/services';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blog';

const SITE_URL = 'https://www.solutionsmatter.com';
const LAST_MODIFIED = new Date('2026-06-16T00:00:00Z');

export const dynamic = 'force-static';

export default function sitemap() {
  const entries = [
    { url: SITE_URL, priority: 1, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/solutions`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/industries`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/company/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/company/faq`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/company/careers`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/company/case-studies`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/cookies`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/insights/blog`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${SITE_URL}/insights/ai-insights`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/insights/technology-trends`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/insights/resources`, priority: 0.7, changeFrequency: 'weekly' },
  ];

  services.forEach((service) => {
    entries.push({
      url: `${SITE_URL}/services/${service.slug}`,
      priority: 0.85,
      changeFrequency: 'monthly',
      lastModified: LAST_MODIFIED,
      images: [service.image ? `${SITE_URL}${service.image}` : `${SITE_URL}/images/logo.webp`],
    });
  });

  solutions.forEach((solution) => {
    entries.push({
      url: `${SITE_URL}/solutions/${solution.slug}`,
      priority: 0.85,
      changeFrequency: 'monthly',
      lastModified: LAST_MODIFIED,
    });
  });

  industries.forEach((industry) => {
    entries.push({
      url: `${SITE_URL}/industries/${industry.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: LAST_MODIFIED,
    });
  });

  caseStudies.forEach((study) => {
    entries.push({
      url: `${SITE_URL}/company/case-studies/${study.slug}`,
      priority: 0.75,
      changeFrequency: 'monthly',
      lastModified: LAST_MODIFIED,
      images: [`${SITE_URL}${study.banner}`],
    });
  });

  blogPosts.forEach((post) => {
    entries.push({
      url: `${SITE_URL}/insights/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: 'weekly',
      lastModified: LAST_MODIFIED,
      images: [`${SITE_URL}${post.banner}`],
    });
  });

  return entries;
}