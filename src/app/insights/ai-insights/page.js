import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'AI Insights',
  description: 'Read the latest analyses on generative AI, neural networks, machine learning integrations, and document vector search automation.'
};

export default function AiInsightsPage() {
  const posts = blogPosts.filter(p => p.category === 'ai-insights');

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
            <h1>AI Insights</h1>
            <p>
              Analyses regarding machine learning pipelines, Large Language Model configurations, and structural vector databases.
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
                    <span>Read Article</span>
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
