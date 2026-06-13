'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesList({ caseStudies }) {
  const listRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = listRef.current.querySelectorAll('.case-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // If already within or above the viewport on mount, trigger display instantly
      if (rect.top < window.innerHeight) {
        card.classList.add('in');
      } else {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [caseStudies]);

  // Formatted titles mapping using bold em typography
  const formattedTitles = {
    'ai-driven-patient-diagnostics': <>Diagnostics, redesigned for <em>clinical accuracy</em></>,
    'secure-cloud-finance-migration': <>Cloud Migration, engineered for <em>bank security</em></>,
    'saas-analytics-platform': <>SaaS Analytics, optimized for <em>onboarding speed</em></>,
    'manufacturing-erp-modernization': <>Custom ERP, unified for <em>warehouse operations</em></>,
    'e-commerce-mobile-transformation': <>Mobile D2C, built for <em>brand conversions</em></>
  };

  return (
    <section ref={listRef} className="case-studies-list-section">
      {caseStudies.map((cs, index) => {
        const formattedTitle = formattedTitles[cs.slug] || <em>{cs.title}</em>;
        return (
          <article key={cs.slug} className="case-card reveal">
            
            {/* Visual Panel */}
            <div className="card-visual">
              <div className="card-visual-inner">
                <div className="visual-placeholder">
                  {cs.banner && (
                    <div className="visual-image-wrapper">
                      <Image
                        src={cs.banner}
                        alt={cs.title}
                        fill
                        className="visual-real-image"
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="card-stripe"></div>
              <div className="card-num-bg">{index + 1}</div>
            </div>

            {/* Content Panel */}
            <div className="card-content">
              <div className="card-top">
                <div className="card-meta">
                  <span className="card-tag">{cs.tag}</span>
                  <span className="card-year">{cs.year}</span>
                </div>
                <h2 className="card-title">{formattedTitle}</h2>
                <p className="card-desc">{cs.challenge}</p>
              </div>

              <div>
                <div className="card-divider"></div>
                <div className="card-bottom">
                  
                  {/* Stats Block */}
                  <div className="card-stats">
                    {cs.stats && cs.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="stat">
                        <span className="stat-num">{stat.num}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read Case Study Button */}
                  <Link href={`/company/case-studies/${cs.slug}`} className="card-cta">
                    <span>Read case study</span>
                    <ArrowRight size={14} className="cta-arrow-icon" />
                  </Link>

                </div>
              </div>
            </div>

          </article>
        );
      })}
    </section>
  );
}
