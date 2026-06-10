'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ServiceFaqs({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="service-faqs-accordion">
      {faqs.map((faq, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div key={idx} className={`faq-accordion-item ${isActive ? 'active' : ''}`}>
            <button 
              className="faq-accordion-header" 
              onClick={() => toggleAccordion(idx)}
              type="button"
            >
              <span>{faq.question}</span>
              <span className="faq-icon-wrapper">
                <ChevronDown size={18} style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </span>
            </button>
            <div className={`faq-accordion-content ${isActive ? 'open' : ''}`}>
              <div className="faq-accordion-inner-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
