import Link from 'next/link';
import { Globe, Mail } from 'lucide-react';
import { services } from '@/data/services';
import { solutions } from '@/data/solutions';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerServices = services.slice(0, 6);
  const footerSolutions = solutions;

  const quickLinks = [
    { name: 'About Us', path: '/company/about' },
    { name: 'Case Studies', path: '/company/case-studies' },
    { name: 'FAQs', path: '/company/faq' },
    { name: 'Careers', path: '/company/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Teckko Style Infinite Marquee above Footer */}
      <div className="marquee-container" style={{ borderTop: 'none', marginBottom: '0', marginTop: '0', paddingTop: '40px' }}>
        <div className="marquee-content">
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
          {/* Double content for seamless looping */}
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
          <div className="marquee-item">Contact us</div>
          <div className="marquee-item"><span>Get in touch</span></div>
        </div>
      </div>
      <footer className="site-footer">
      <div className="container footer-content-wrapper">
        <div className="footer-grid">
          {/* Branding Column */}
          <div className="footer-col branding-col">
            <Link href="/" className="footer-logo">
              <Globe className="footer-logo-icon" />
              <span className="footer-logo-text">Solutions <span>Matter</span></span>
            </Link>
            <p className="footer-tagline">
              Your premium technology partner engineering high-performance custom software, responsive web applications, and automated enterprise operations.
            </p>
            <div className="footer-contact-info">
              <a href="mailto:info@solutionsmatter.com" className="footer-email-link">
                <Mail size={16} />
                <span>info@solutionsmatter.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links-list">
              {footerServices.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
              <li><Link href="/services" className="see-all-link">See All Services &rarr;</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="footer-col">
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-links-list">
              {footerSolutions.map(sol => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`}>{sol.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with Policy Links and Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {currentYear} Solutions Matter. All rights reserved.
          </p>
          <div className="policy-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link href="/terms">Terms & Conditions</Link>
            <span className="divider">|</span>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
