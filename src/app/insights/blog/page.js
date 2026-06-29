'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, BookOpen, Layers, Eye, Heart, Mail, Share2, ArrowDown } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import CTA from '@/components/CTA';
import BlogHero3D from '@/components/BlogHero3D';

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Toggle theme-red-white class on body for red and white styling context
  useEffect(() => {
    document.body.classList.add('theme-red-white');
    return () => {
      document.body.classList.remove('theme-red-white');
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || post.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const featuredPost = blogPosts[0]; // Set first blog as featured
  const latestPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug || activeTab !== 'all' || searchQuery !== '');



  return (
    <>
      {/* Blog Hero Section */}
      <BlogHero3D posts={blogPosts} />

      {/* Filter and Listing Section */}
      <section className="section-spacing blog-listing-section">
        <div className="container">

          {/* Featured Article Section (Only displayed when no active search or specific tab, or default view) */}
          {activeTab === 'all' && searchQuery === '' && featuredPost && (
            <div className="featured-article-container">
              <h2 className="section-subheader-title">Featured Article</h2>
              <div className="card featured-card">

                {/* Overlapping Floating Image Block */}
                <div className="featured-img-area">
                  <div className="featured-img-wrapper">
                    <Image
                      src={featuredPost.banner}
                      alt={featuredPost.title}
                      width={400}
                      height={400}
                      className="featured-fallback-img"
                    />
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="featured-details-area">
                  <span className="category-badge-pill">{featuredPost.category.replace('-', ' ')}</span>
                  <h3>{featuredPost.title}</h3>
                  <p>{featuredPost.summary}</p>
                  <Link href={`/insights/blog/${featuredPost.slug}`} className="btn btn-primary">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* Latest Articles list */}
          <div className="latest-articles-container">
            <h2 className="section-subheader-title">
              {searchQuery !== '' || activeTab !== 'all' ? 'Filtered Insights' : 'Latest Articles'}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="no-results-box">
                <Layers size={40} className="no-res-icon" />
                <p>No insights found matching your search query or category filters.</p>
              </div>
            ) : (
              <div className="grid-2">
                {latestPosts.map((post) => (
                  <div key={post.slug} className="card blog-list-card">

                    {/* Left Column containing floating image and date display */}
                    <div className="blog-card-left-column">
                      <div className="blog-card-img-wrapper">
                        <Image
                          src={post.banner}
                          alt={post.title}
                          width={350}
                          height={200}
                          className="blog-card-fallback-img"
                        />
                      </div>

                    </div>

                    {/* Right Column containing content details */}
                    <div className="blog-card-content">
                      <div className="blog-card-top-row">
                        <span className="category-badge-pill-small">{post.category.replace('-', ' ')}</span>


                      </div>

                      <h3>{post.title}</h3>
                      <hr className="blog-card-divider" />
                      <p>{post.summary}</p>

                      {/* Social icons row and floating action click arrow */}
                      <div className="blog-card-footer">

                        <Link href={`/insights/blog/${post.slug}`} className="blog-card-arrow-action-btn">
                          <ArrowDown size={20} className="arrow-down-icon" />
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
