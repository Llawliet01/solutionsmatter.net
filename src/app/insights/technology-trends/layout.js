import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Technology Trends | Solutions Matter',
  description: 'Read the latest trends in serverless scaling, edge computing, core web vitals, and premium interface design.',
  path: '/insights/technology-trends',
  keywords: ['technology trends', 'serverless scaling', 'core web vitals'],
});

export default function TechnologyTrendsLayout({ children }) {
  return children;
}