'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function ServiceConsultationForm({ currentServiceSlug }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceSlug: currentServiceSlug || '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormSubmitted(true);
      setFormData({ name: '', email: '', serviceSlug: currentServiceSlug || '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sidebar-consultation-form-wrapper">
      {formSubmitted ? (
        <div className="sidebar-submission-success" style={{ textAlign: 'center', padding: '10px 0' }}>
          <CheckCircle2 size={36} style={{ color: 'var(--primary)', margin: '0 auto 12px' }} />
          <h4 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Request Received</h4>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
            An engineering partner will review your inquiry and schedule a consultation shortly.
          </p>
          <button className="btn btn-secondary btn-sm-padding" onClick={() => setFormSubmitted(false)} style={{ marginTop: '16px', fontSize: '1.2rem', padding: '6px 12px' }}>
            Book Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="sidebar-consultation-form">
          <div className="sidebar-form-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className="sidebar-form-input" 
              placeholder="Full Name"
              required
            />
          </div>
          
          <div className="sidebar-form-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              className="sidebar-form-input" 
              placeholder="Email Address"
              required
            />
          </div>

          <div className="sidebar-form-group select-group">
            <select 
              name="serviceSlug" 
              value={formData.serviceSlug} 
              onChange={handleInputChange} 
              className="sidebar-form-select"
              required
            >
              <option value="" disabled>Choose Service</option>
              {services.map(s => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
            </select>
          </div>

          <div className="sidebar-form-group">
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              className="sidebar-form-textarea" 
              rows="4"
              placeholder="Your Message..."
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="sidebar-form-btn">
            <span>{isSubmitting ? 'Submitting...' : 'Free Consultation >'}</span>
          </button>
        </form>
      )}
    </div>
  );
}
