import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Bookmark, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import CTA from '@/components/CTA';
import PageFlow from '@/components/PageFlow';
import ThemeBodyToggle from '@/components/ThemeBodyToggle';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: `${post.title} | Technical Blog`,
    description: post.summary.substring(0, 155),
    alternates: {
      canonical: `/insights/blog/${slug}`
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find 2 related articles (excluding current post)
  const relatedArticles = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.category === 'ai-insights'))
    .slice(0, 2);

  // Inject Article Schema JSON-LD (No publish date or author, standard article properties)
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.summary,
    'image': `https://www.solutionsmatter.com${post.banner}`,
    'publisher': {
      '@type': 'Organization',
      'name': 'Solutions Matter',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.solutionsmatter.com/images/logo.webp'
      }
    }
  };

  return (
    <>
      <ThemeBodyToggle />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Detail Layout */}
      <section className="blog-detail-section">
        <div className="container">
          
          {/* Back Button */}
          <div className="back-btn-wrapper">
            <Link href="/insights/blog" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="blog-detail-grid">
            
            {/* Main Article Content */}
            <article className="blog-article-content card">
              <span className="category-badge">{post.category.replace('-', ' ')}</span>
              <h1>{post.title}</h1>

              <div className="article-meta-bar">
                <div className="meta-item">
                  <span className="meta-label">Author</span>
                  <span className="meta-value">Solutions Matter Tech Team</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-label">Published</span>
                  <span className="meta-value">June 2026</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-label">Read Time</span>
                  <span className="meta-value">
                    {Math.ceil((post.content ? post.content.split(/\s+/).length : 150) / 180)} min read
                  </span>
                </div>
              </div>
              
              <div className="article-banner-image">
                <Image
                  src={post.banner}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="article-img-fallback"
                  priority
                />
              </div>

              {/* Rich text body content */}
              <div 
                className="article-html-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Middle CTA */}
              <CTA variant="middle" />
            </article>

            {/* Sidebar Column */}
            <div className="blog-sidebar-area">
              
              {/* Related Services */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Related Services</h3>
                <div className="relation-links-stack">
                  {post.relatedServices.map((service) => (
                    <div key={service.slug} className="relation-link-card mini-margin">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{service.title}</h4>
                        <Link href={`/services/${service.slug}`} className="relation-action-link">
                          <span>View Service</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Solutions */}
              <div className="sidebar-card relation-sidebar-card">
                <h3>Related Solutions</h3>
                <div className="relation-links-stack">
                  {post.relatedSolutions.map((sol) => (
                    <div key={sol.slug} className="relation-link-card mini-margin">
                      <Bookmark size={16} className="relation-icon" />
                      <div>
                        <h4>{sol.title}</h4>
                        <Link href={`/solutions/${sol.slug}`} className="relation-action-link">
                          <span>View Solution</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles Section */}
              <div className="sidebar-card related-posts-sidebar-card">
                <h3>Related Articles</h3>
                <div className="related-articles-stack">
                  {relatedArticles.map((rel) => (
                    <Link key={rel.slug} href={`/insights/blog/${rel.slug}`} className="related-article-link-card">
                      <div className="rel-article-img-box">
                        <Image
                          src={rel.banner}
                          alt={rel.title}
                          width={90}
                          height={60}
                          className="rel-side-fallback-img"
                        />
                      </div>
                      <div className="rel-article-text-box">
                        <h4>{rel.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Blog flow redirect trail: Blog -> Related Service */}
          <PageFlow 
            nextType="Recommended Service"
            nextTitle={post.relatedServices[0].title}
            nextPath={`/services/${post.relatedServices[0].slug}`}
          />

        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
