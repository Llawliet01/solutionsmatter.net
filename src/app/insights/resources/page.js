import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Resources & Guides',
  description: 'Access guides regarding enterprise custom code bases, data ownership, multi-tenant databases, security compliance, and Stripe billing pipelines.'
};

export default function ResourcesPage() {
  const posts = blogPosts.filter(p => p.category === 'resources');

  return (
    <>
      <section className="category-hero">
        <div className="container">
          <div className="hero-content text-center">
            <Link href="/insights/blog" className="back-to-insights">
              <ArrowLeft size={14} />
              <span>Back to all insights</span>
            </Link>
            <span className="badge">Knowledge Category</span>
            <h1>Resources & Guides</h1>
            <p>
              Review technical articles, comparisons, and roadmaps to guide your custom software investments.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing blog-listing-section">
        <div className="container">
          <div className="grid-3">
            {posts.map((post) => (
              <div key={post.slug} className="card blog-list-card">
                <div className="blog-card-img-wrapper">
                  <Image
                    src={post.banner}
                    alt={post.title}
                    width={350}
                    height={200}
                    className="blog-card-fallback-img"
                  />
                </div>
                <div className="blog-card-content">
                  <span className="category-badge-pill-small">{post.category.replace('-', ' ')}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <Link href={`/insights/blog/${post.slug}`} className="blog-card-action-link">
                    <span>Read Guide</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA variant="bottom" />
    </>
  );
}
