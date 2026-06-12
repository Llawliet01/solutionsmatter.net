'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, BookOpen, Layers } from 'lucide-react';
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

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'ai-insights', name: 'AI Insights' },
    { id: 'technology-trends', name: 'Tech Trends' },
    { id: 'resources', name: 'Resources' }
  ];

  return (
    <>
      {/* Blog Hero Section */}
      <BlogHero3D posts={blogPosts} />

      {/* Filter and Listing Section */}
      <section className="section-spacing blog-listing-section">
        <div className="container">
          
          {/* Search and Category Filter Bar */}
          <div className="filters-bar">
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeTab === cat.id ? 'active-tab' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="search-box-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </div>

          {/* Featured Article Section (Only displayed when no active search or specific tab, or default view) */}
          {activeTab === 'all' && searchQuery === '' && featuredPost && (
            <div className="featured-article-container">
              <h2 className="section-subheader-title">Featured Article</h2>
              <div className="card featured-card">
                <div className="featured-img-area">
                  <div className="featured-img-wrapper">
                    <Image
                      src={featuredPost.banner}
                      alt={featuredPost.title}
                      width={500}
                      height={350}
                      className="featured-fallback-img"
                    />
                  </div>
                </div>
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
              <div className="grid-3">
                {latestPosts.map((post) => (
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
            )}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
