'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  HelpCircle, ChevronDown, ArrowRight, Search, 
  Cpu, Layers, GitBranch, Code2, Headset,
  BookOpen, Terminal, Sparkles, AlertCircle, ShieldCheck
} from 'lucide-react';
import { faqs, faqCategories } from '@/data/faqs';
import CTA from '@/components/CTA';

// Icon mapper for categories
const categoryIcons = {
  all: BookOpen,
  Services: Cpu,
  Solutions: Sparkles,
  Process: GitBranch,
  Development: Code2,
  Support: Headset
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Focus search input on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getCategoryCount = (cat) => {
    if (cat === 'all') return faqs.length;
    return faqs.filter(faq => faq.category === cat).length;
  };

  // Filter FAQs based on active category tab & search query
  const filteredFaqs = faqs.filter((faq) => {
    const matchTab = activeTab === 'all' || faq.category === activeTab;
    const matchSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchTab && matchSearch;
  });

  return (
    <div className="faq-page-wrapper">
      {/* FAQ Hero Section with animated drift blobs */}
      <section className="faq-page-hero">
        <div className="faq-blob faq-blob-1"></div>
        <div className="faq-blob faq-blob-2"></div>
        
        <div className="container">
          <div className="faq-badge-wrap">
            <span className="faq-badge">
              <span className="faq-badge-dot"></span>
              Help Center
            </span>
          </div>
          <h1 className="faq-title-h1">Got <span>questions?</span></h1>
          <p className="faq-subtitle-p">Everything you need to know about our custom engineering pipelines, architecture choices, and support contracts.</p>
        </div>
      </section>

      {/* Search Bar Wrap with live filter */}
      <div className="faq-search-wrap">
        <div className="container">
          <div className="faq-search-box">
            <Search className="search-box-icon" size={18} />
            <input 
              type="text" 
              ref={searchInputRef}
              placeholder="Search questions, technologies or topics..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveFaq(null); // Close active accordion during search
              }}
            />
            <kbd className="faq-search-kbd">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* Main FAQ Content Grid */}
      <section className="faq-content-section">
        <div className="container">
          <div className="faq-layout-grid">
            
            {/* Sidebar Sticky Categories Column */}
            <aside className="faq-sidebar">
              <button 
                className={`faq-cat-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => { setActiveTab('all'); setActiveFaq(null); }}
              >
                <span className="cat-icon-box">
                  <BookOpen size={15} />
                </span>
                <span className="cat-text-label">All topics</span>
                <span className="cat-item-count">{getCategoryCount('all')}</span>
              </button>

              {faqCategories.map((cat) => {
                const IconComponent = categoryIcons[cat] || HelpCircle;
                return (
                  <button
                    key={cat}
                    className={`faq-cat-btn ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => { setActiveTab(cat); setActiveFaq(null); }}
                  >
                    <span className="cat-icon-box">
                      <IconComponent size={15} />
                    </span>
                    <span className="cat-text-label">{cat}</span>
                    <span className="cat-item-count">{getCategoryCount(cat)}</span>
                  </button>
                );
              })}
            </aside>

            {/* Accordion FAQ List Column */}
            <div className="faq-list-col">
              <div className="faq-list">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  const numStr = String(index + 1).padStart(2, '0');

                  return (
                    <div 
                      key={index} 
                      className={`faq-interactive-item ${isOpen ? 'open' : ''}`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {/* Accordion Header */}
                      <button 
                        className="faq-interactive-q" 
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <div className="faq-item-num">{numStr}</div>
                        <span className="faq-question-label-text">{faq.question}</span>
                        <div className="faq-item-chevron">
                          <ChevronDown size={14} className="chevron-arrow-svg" />
                        </div>
                      </button>

                      {/* Collapsible Answer Body */}
                      <div className="faq-item-answer-wrap">
                        <div className="faq-item-answer-inner">
                          <p className="faq-answer-main-paragraph">{faq.answer}</p>
                          
                          {/* Render Dynamic Extra Visual Panels based on faq.extra */}
                          {faq.extra === 'services' && (
                            <div className="faq-visual-row">
                              <div className="faq-visual-card"><Cpu size={18} /><span>Enterprise Apps</span></div>
                              <div className="faq-visual-card"><GitBranch size={18} /><span>Integrations</span></div>
                              <div className="faq-visual-card"><Layers size={18} /><span>Database Systems</span></div>
                              <div className="faq-visual-card"><Sparkles size={18} /><span>Modernization</span></div>
                            </div>
                          )}

                          {faq.extra === 'mobile' && (
                            <div className="faq-chips-stack">
                              <span className="faq-accent-chip"><Code2 size={12} />iOS (Swift)</span>
                              <span className="faq-accent-chip"><Terminal size={12} />Android (Kotlin)</span>
                              <span className="faq-accent-chip"><Cpu size={12} />React Native</span>
                            </div>
                          )}

                          {faq.extra === 'mvp-steps' && (
                            <div className="faq-chips-stack is-pipeline">
                              <span className="faq-accent-chip"><Layers size={12} />1. Prototype</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Code2 size={12} />2. Sprint Build</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Sparkles size={12} />3. Go Live</span>
                            </div>
                          )}

                          {faq.extra === 'automation' && (
                            <div className="faq-chips-stack is-pipeline">
                              <span className="faq-accent-chip"><GitBranch size={12} />1. Audit Workflows</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Cpu size={12} />2. Design Pipeline</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Sparkles size={12} />3. Auto Sync</span>
                            </div>
                          )}

                          {faq.extra === 'process-steps' && (
                            <div className="faq-chips-stack is-pipeline">
                              <span className="faq-accent-chip"><Layers size={12} />Sprint Planning</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Code2 size={12} />Design System</span>
                              <ArrowRight size={12} className="pipeline-chevron" />
                              <span className="faq-accent-chip"><Cpu size={12} />Beta Deploy</span>
                            </div>
                          )}

                          {faq.extra === 'tech-stack' && (
                            <div className="faq-chips-stack">
                              <span className="faq-accent-chip"><Code2 size={12} />Next.js</span>
                              <span className="faq-accent-chip"><Terminal size={12} />Node.js</span>
                              <span className="faq-accent-chip"><Layers size={12} />PostgreSQL</span>
                              <span className="faq-accent-chip"><Cpu size={12} />AWS & Vercel</span>
                            </div>
                          )}

                          {faq.extra === 'support' && (
                            <div className="faq-visual-row">
                              <div className="faq-visual-card"><AlertCircle size={18} /><span>SLA Monitoring</span></div>
                              <div className="faq-visual-card"><ShieldCheck size={18} /><span>Security Patches</span></div>
                              <div className="faq-visual-card"><Layers size={18} /><span>Database Backups</span></div>
                              <div className="faq-visual-card"><Cpu size={18} /><span>Bug Fixes</span></div>
                            </div>
                          )}

                          {faq.extra === 'communication' && (
                            <div className="faq-chips-stack">
                              <span className="faq-accent-chip">Weekly Sprints</span>
                              <span className="faq-accent-chip">Slack Channels</span>
                              <span className="faq-accent-chip">Jira Boards</span>
                              <span className="faq-accent-chip">Daily Async</span>
                            </div>
                          )}

                          {faq.extra === 'ai' && (
                            <div className="faq-chips-stack">
                              <span className="faq-accent-chip"><Sparkles size={12} />OpenAI API</span>
                              <span className="faq-accent-chip"><Cpu size={12} />Vertex AI</span>
                              <span className="faq-accent-chip"><Layers size={12} />AWS SageMaker</span>
                              <span className="faq-accent-chip"><Terminal size={12} />LLM Pipelines</span>
                            </div>
                          )}

                          {faq.extra === 'ecommerce' && (
                            <div className="faq-visual-row">
                              <div className="faq-visual-card"><span>Stripe Gateway</span></div>
                              <div className="faq-visual-card"><span>Multi-vendor</span></div>
                              <div className="faq-visual-card"><span>Real-time Sync</span></div>
                              <div className="faq-visual-card"><span>Admin Dashboard</span></div>
                            </div>
                          )}

                          {faq.extra === 'security' && (
                            <div className="faq-chips-stack">
                              <span className="faq-accent-chip"><ShieldCheck size={12} />OWASP Top 10</span>
                              <span className="faq-accent-chip"><Layers size={12} />AES Encryption</span>
                              <span className="faq-accent-chip"><Cpu size={12} />OAuth2 Tokens</span>
                            </div>
                          )}

                          {faq.extra === 'cloud' && (
                            <div className="faq-visual-row">
                              <div className="faq-visual-card"><span>AWS Cloud</span></div>
                              <div className="faq-visual-card"><span>Google Cloud</span></div>
                              <div className="faq-visual-card"><span>Azure</span></div>
                              <div className="faq-visual-card"><span>Vercel Deploy</span></div>
                            </div>
                          )}

                          {/* Dynamic Related Services Tag Links */}
                          {faq.tags && (
                            <div className="faq-item-tags-row">
                              {faq.tags.map((tag) => (
                                <span key={tag} className="faq-tag-pill">#{tag}</span>
                              ))}
                            </div>
                          )}

                          {/* Action Redirection Links */}
                          {faq.relatedService && (
                            <div className="faq-action-link-bar">
                              <span className="faq-action-hint">Learn more about this capability:</span>
                              <Link href={`/services/${faq.relatedService.slug}`} className="faq-action-href">
                                <span>{faq.relatedService.title} Details</span>
                                <ArrowRight size={13} />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* No Results Placeholder State */}
              {filteredFaqs.length === 0 && (
                <div className="faq-no-results-state">
                  <div className="faq-no-results-icon">
                    <HelpCircle size={40} />
                  </div>
                  <h3>No matching FAQs found</h3>
                  <p>Try searching for keywords like "nextjs", "mvp", "security" or pick another topic from the sidebar.</p>
                </div>
              )}
            </div>

          </div>

          {/* Inline CTA block */}
          <div className="faq-cta-bar">
            <div className="faq-cta-box">
              <div className="faq-cta-icon-circle">
                <Headset size={20} />
              </div>
              <div className="faq-cta-text-content">
                <h4>Still have questions?</h4>
                <p>Get in touch with our engineering team directly. We respond within 2 hours.</p>
              </div>
              <Link href="/contact" className="faq-cta-btn">
                <span>Contact us</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing component */}
      <CTA variant="bottom" />
    </div>
  );
}
