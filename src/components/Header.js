'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Mail, Globe, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeaderVisible = isVisible || mobileMenuOpen;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: 'Services',
      path: '/services',
      dropdown: services.map(s => ({ name: s.title, path: `/services/${s.slug}` }))
    },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: solutions.map(s => ({ name: s.title, path: `/solutions/${s.slug}` }))
    },
    {
      name: 'Industries',
      path: '/industries',
      dropdown: industries.map(i => ({ name: i.title, path: `/industries/${i.slug}` }))
    },
    {
      name: 'Insights',
      path: '/insights/blog',
      dropdown: [
        { name: 'Blog Listing', path: '/insights/blog' },
        { name: 'AI Insights', path: '/insights/ai-insights' },
        { name: 'Technology Trends', path: '/insights/technology-trends' },
        { name: 'Resources', path: '/insights/resources' }
      ]
    },
    {
      name: 'Company',
      path: '/company/case-studies',
      dropdown: [
        { name: 'Case Studies', path: '/company/case-studies' },
        { name: 'FAQ', path: '/company/faq' },
        { name: 'Careers', path: '/company/careers' }
      ]
    },
    { name: 'About Us', path: '/company/about' }
  ];

  return (
    <header className={`site-header ${!isHeaderVisible ? 'header-hidden' : ''}`}>
      <div className="header-container-fluid">
        <div className="logo-wrapper">
          <Link href="/" className="logo-area" onClick={closeAll}>
            <Globe className="logo-icon" />
            <span className="logo-text">Solutions <span>Matter</span></span>
          </Link>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item-wrapper ${item.dropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === item.path || (item.dropdown && item.dropdown.some(d => pathname === d.path)) ? 'active' : ''}`}
                  onClick={closeAll}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="chevron-icon" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`dropdown-link ${pathname === subItem.path ? 'active-sub' : ''}`}
                          onClick={closeAll}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="consultation-btn">
            <span>Get A Quote &gt;</span>
          </Link>
          <button className="header-toggle-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <div className="mobile-nav-link-row">
                  <Link
                    href={item.path}
                    className="mobile-nav-link"
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      className="mobile-dropdown-toggle"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <ChevronDown className={`chevron-icon ${activeDropdown === item.name ? 'rotated' : ''}`} />
                    </button>
                  )}
                </div>

                {item.dropdown && activeDropdown === item.name && (
                  <ul className="mobile-sub-list">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="mobile-sub-link"
                          onClick={closeAll}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a href="mailto:info@solutionsmatter.com" className="mobile-email-link">
              <Mail size={16} />
              <span>info@solutionsmatter.com</span>
            </a>
            <Link href="/contact" className="mobile-consultation-btn" onClick={closeAll}>
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
