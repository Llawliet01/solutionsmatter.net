import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'AI Insights | Solutions Matter',
  description: 'Read the latest analyses on generative AI, machine learning, neural networks, and vector search automation.',
  path: '/insights/ai-insights',
  keywords: ['AI insights', 'machine learning articles', 'vector search'],
});

export default function AiInsightsLayout({ children }) {
  return children;
}