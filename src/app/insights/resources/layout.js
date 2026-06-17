import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Resources & Guides | Solutions Matter',
  description: 'Access technical guides on enterprise codebases, data ownership, multi-tenant databases, security compliance, and billing pipelines.',
  path: '/insights/resources',
  keywords: ['technical resources', 'software guides', 'enterprise development articles'],
});

export default function ResourcesLayout({ children }) {
  return children;
}