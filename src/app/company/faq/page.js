'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { faqs, faqCategories } from '@/data/faqs';
import CTA from '@/components/CTA';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) => activeTab === 'all' || faq.category === activeTab
  );

  return (
    <>
      {/* FAQ Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Support & FAQ</span>
            <h1>Frequently Asked Questions</h1>
            <p>
              Find detailed explanations regarding our custom software engineering pipelines, multi-tenant databases, security setups, and continuous DevOps monitoring systems.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="section-spacing faq-list-section">
        <div className="container">
          
          {/* Category Tabs */}
          <div className="faq-categories-tabs">
            <button
              className={`faq-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveTab('all'); setActiveFaq(null); }}
            >
              All Categories
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat}
                className={`faq-tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => { setActiveTab(cat); setActiveFaq(null); }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collapsible Accordion Grid */}
          <div className="faq-accordion-wrapper">
            {filteredFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(index)}>
                    <div className="faq-question-content">
                      <span className="faq-category-label">{faq.category}</span>
                      <h3>{faq.question}</h3>
                    </div>
                    <ChevronDown size={20} className={`faq-arrow-icon ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                      
                      {/* FAQ Flow: FAQ -> Related Service */}
                      {faq.relatedService && (
                        <div className="faq-redirection-hint">
                          <span className="hint-label">Learn more about this capability: </span>
                          <Link href={`/services/${faq.relatedService.slug}`} className="hint-link">
                            <span>{faq.relatedService.title} Details</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
