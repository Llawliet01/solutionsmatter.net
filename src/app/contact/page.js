'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldAlert, Phone, MapPin, Lock, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const categories = [
    'AI & Automation',
    'Web & SaaS',
    'Mobile App Dev',
    'Custom CRM & ERP',
    'Cloud DevOps',
    'General Query'
  ];

  const selectCategory = (category) => {
    setFormData(prev => ({ ...prev, subject: category }));
    if (errors.subject) {
      setErrors(prev => ({ ...prev, subject: null }));
    }
  };

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToastNotification = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => {
        if (prev.message === message) {
          return { ...prev, show: false };
        }
        return prev;
      });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToastNotification('Please correct the errors in the form.', 'error');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const subject = encodeURIComponent(`[Website Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:info@solutionsmatter.com?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    showToastNotification('Your message is ready to send from your email client.', 'success');
    setFormData({
      name: '',
      email: '',
      companyName: '',
      subject: '',
      message: ''
    });

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`contact-toast ${toast.type}`}>
          <div className="contact-toast-content">
            {toast.type === 'success' ? <CheckCircle2 size={18} /> : <ShieldAlert size={18} />}
            <span>{toast.message}</span>
          </div>
          <button className="contact-toast-close" onClick={() => setToast({ show: false, message: '', type: 'success' })}>✕</button>
        </div>
      )}

      {/* Background Floating Orbs */}
      <div className="contact-bg-orb orb-purple"></div>
      <div className="contact-bg-orb orb-teal"></div>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Get in Touch</span>
            <h1>Contact Our Team</h1>
            <p>
              Have a custom software plan or want to automate manual workflows? Reach out to us. We will review your requirements and provide a detailed software design proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Area */}
      <section className="section-spacing contact-body-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Info Cards Column */}
            <div className="contact-info-column">
              <h2>Contact Channels</h2>
              <p className="section-intro">
                Our engineering office operates remote-first across global zones. For partnerships, software consults, or support inquiries, contact our main routing address.
              </p>
              
              <div className="contact-channels-list">
                <div className="contact-channel-card">
                  <div className="icon-box">
                    <Mail size={22} />
                  </div>
                  <div className="info-details">
                    <h3>General Email Address</h3>
                    <p>General inquiries and consulting bookings:</p>
                    <a href="mailto:info@solutionsmatter.com">
                      info@solutionsmatter.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bento Trust Grid */}
              <div className="contact-trust-card">
                <div>
                  <h3>Client Trust Guarantee</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>We coordinate securely to protect corporate IP and code blueprints.</p>
                </div>
                
                <div className="contact-trust-grid">
                  <div className="trust-badge-item">
                    <Lock size={20} />
                    <span className="trust-badge-title">NDA Guarantee</span>
                    <span className="trust-badge-desc">100% Protected</span>
                  </div>
                  <div className="trust-badge-item">
                    <Clock size={20} />
                    <span className="trust-badge-title">Fast Callback</span>
                    <span className="trust-badge-desc">&lt; 24h Turnaround</span>
                  </div>
                  <div className="trust-badge-item">
                    <ShieldCheck size={20} />
                    <span className="trust-badge-title">IP Assignment</span>
                    <span className="trust-badge-desc">Full Ownership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-column">
              <div className="card form-container-card">
                <h3>Send Us A Message</h3>
                <p className="form-intro-desc">Fill in the fields below. We will assign a tech lead to schedule a callback.</p>
                
                {submitError && (
                  <div className="form-submit-error-box">
                    <ShieldAlert size={18} />
                    <span>{submitError}</span>
                  </div>
                )}

                {formSubmitted ? (
                  <div className="submission-success-box">
                    <CheckCircle2 size={48} className="success-icon" />
                    <h3>Message Sent Successfully</h3>
                    <p>
                      Thank you for contacting Solutions Matter. We have received your project details and email address. An engineering partner will review your inquiry and schedule a consultation shortly.
                    </p>
                    <button className="btn btn-secondary" onClick={() => setFormSubmitted(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-project-form">
                    
                    {/* Interactive Project Category pills */}
                    <div className="contact-category-wrapper">
                      <span className="contact-category-label">What can we help you build?</span>
                      <div className="contact-category-pills">
                        {categories.map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            className={`contact-category-pill ${formData.subject === cat ? 'active' : ''}`}
                            onClick={() => selectCategory(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      {errors.subject && <span className="error-text">{errors.subject}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="e.g. John Doe"
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-row-grid">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-input ${errors.email ? 'input-error' : ''}`}
                          placeholder="e.g. john@example.com"
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`form-input ${errors.companyName ? 'input-error' : ''}`}
                          placeholder="e.g. Acme Corp"
                        />
                        {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Requirements / Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`form-input textarea-input ${errors.message ? 'input-error' : ''}`}
                        placeholder="Please describe your software timeline and targets..."
                      ></textarea>
                      {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

                    <div className="form-submit-actions">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary submit-btn"
                      >
                        <Send size={16} />
                        <span>{isSubmitting ? 'Sending Request...' : 'Send Request'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
