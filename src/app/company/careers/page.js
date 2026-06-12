'use client';

import { useState } from 'react';
import { Compass, Briefcase, Award, CheckCircle2, ChevronRight, FileText, Send } from 'lucide-react';
import CTA from '@/components/CTA';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: 'Full-Stack Software Engineer',
    portfolio: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.portfolio.trim()) {
      newErrors.portfolio = 'Portfolio or GitHub profile link is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      position: 'Full-Stack Software Engineer',
      portfolio: '',
      message: ''
    });
  };

  const benefits = [
    '100% Fully Remote Work & Flexible Schedules',
    'Competitive Salaries with Periodic Performance Updates',
    'Hardware Budget for the Latest Mac/Linux Setup',
    'Annual Educational Allowance for Professional Development',
    'Comprehensive Health & Wellness Support Programs'
  ];

  const positions = [
    {
      title: 'Full-Stack Software Engineer (React / Node)',
      type: 'Full-Time / Remote',
      dept: 'Engineering',
      desc: 'Architect and construct premium custom SaaS applications, REST APIs, and database configurations. Experience with Next.js and PostgreSQL required.'
    },
    {
      title: 'Senior Cloud & DevOps Infrastructure Engineer',
      type: 'Full-Time / Remote',
      dept: 'Infrastructure',
      desc: 'Deploy and maintain containerized applications (Docker, Kubernetes) on AWS using Terraform IaC scripts. Focus on server security VPC configurations.'
    },
    {
      title: 'UI/UX Interface Designer',
      type: 'Full-Time / Remote',
      dept: 'Design',
      desc: 'Craft intuitive layouts, clickable wireframe prototypes, and reusable component design systems. Experience in Figma and CSS Modules required.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Careers</span>
            <h1>Join Our Engineering Team</h1>
            <p>
              We are looking for self-motivated software developers, cloud engineers, and designers committed to building secure custom architectures and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="section-spacing culture-section">
        <div className="container">
          <div className="careers-split-grid">
            <div className="culture-text-area">
              <h2>Our Engineering Culture</h2>
              <p>
                At Solutions Matter, we maintain a flat organizational setup focused on engineering metrics, clean documentation, and code performance. We use Agile processes to guide our project sprints.
              </p>
              <p>
                Our team operates asynchronously and values structural data privacy, data ownership, and clean coding standards above all else. We build custom applications that solve real corporate problems.
              </p>
            </div>
            
            <div className="card benefits-card">
              <h3>Team Benefits</h3>
              <ul className="careers-benefits-list">
                {benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="benefit-check" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Listing */}
      <section className="section-spacing positions-section">
        <div className="container">
          <div className="heading-group">
            <span className="badge">Open Openings</span>
            <h2>Open Engineering Positions</h2>
            <p>Review the details of our active job openings. Apply below to initiate our screening process.</p>
          </div>
          
          <div className="positions-stack">
            {positions.map((pos, idx) => (
              <div key={idx} className="card position-card">
                <div className="pos-header">
                  <div>
                    <span className="pos-dept">{pos.dept} Department</span>
                    <h3>{pos.title}</h3>
                  </div>
                  <span className="pos-type">{pos.type}</span>
                </div>
                <p className="pos-desc">{pos.desc}</p>
                <div className="pos-requirements-hint">
                  <ChevronRight size={14} />
                  <span>Requires 4+ years of professional development experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-spacing application-form-section">
        <div className="container">
          <div className="card form-card-container">
            <div className="form-header-area text-center">
              <span className="badge">Application</span>
              <h2>Submit Your Application</h2>
              <p>Complete the form below. Our engineering managers will review your profile and respond within 3 business days.</p>
            </div>

            {formSubmitted ? (
              <div className="submission-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Application Submitted Successfully</h3>
                <p>
                  Thank you for applying. We have received your submission details and code links. Our tech leads will review your portfolio and reach out to you via email.
                </p>
                <button className="btn btn-secondary" onClick={() => setFormSubmitted(false)}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="careers-apply-form">
                <div className="form-row-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
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
                </div>

                <div className="form-row-grid">
                  <div className="form-group">
                    <label htmlFor="position">Position Applied For</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="form-input select-input"
                    >
                      {positions.map((p, i) => (
                        <option key={i} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio or GitHub URL</label>
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className={`form-input ${errors.portfolio ? 'input-error' : ''}`}
                      placeholder="e.g. github.com/username"
                    />
                    {errors.portfolio && <span className="error-text">{errors.portfolio}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message & Summary</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input textarea-input"
                    placeholder="Briefly describe your experience and availability..."
                  ></textarea>
                </div>

                <div className="form-submit-actions">
                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={16} />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
