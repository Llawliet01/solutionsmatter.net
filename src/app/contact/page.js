'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

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
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          companyName: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || 'Something went wrong during form submission. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to connect to the server API. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
              <p>
                Our engineering office operates remote-first across global zones. For partnerships, software consults, or support inquiries, contact our main routing address.
              </p>
              
              <div className="card email-info-card">
                <div className="info-icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-details">
                  <h3>General Email Address</h3>
                  <p>General inquiries and consulting bookings:</p>
                  <a href="mailto:info@solutionsmatter.com" className="contact-link-email">
                    info@solutionsmatter.com
                  </a>
                </div>
              </div>

              <div className="card info-notes-card">
                <h3>Proposal Submission Notes</h3>
                <p>
                  All software blueprints are drafted under mutual non-disclosure agreements (NDAs) to protect your company&apos;s intellectual property assets.
                </p>
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
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`form-input ${errors.subject ? 'input-error' : ''}`}
                        placeholder="e.g. Custom Software Development"
                      />
                      {errors.subject && <span className="error-text">{errors.subject}</span>}
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
    </>
  );
}
