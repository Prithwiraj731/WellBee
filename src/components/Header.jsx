import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ShieldCheck, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Therapeutic Areas', href: '#therapeutic-areas' },
    { label: 'Products', href: '#products' },
    { label: 'Quality & Standards', href: '#quality' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    setMobileOpen(false);
    if (isHome) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on a legal page, navigate back to home with the hash
      e.preventDefault();
      navigate('/' + href);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar__inner">
          <div className="top-bar__left">
            <span className="top-bar__item">
              <ShieldCheck size={14} className="text-success" />
              Maharashtra Enterprise (Mumbai / Panvel Hub)
            </span>
            <a href="tel:+918796913727" className="top-bar__item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Phone size={14} />
              Trade Desk: +91 87969 13727
            </a>
          </div>
          <div className="top-bar__right">
            <a href="mailto:wellbeepharmaceuticals@gmail.com" className="top-bar__item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Mail size={14} />
              wellbeepharmaceuticals@gmail.com
            </a>
            <Link 
              to="/medical-disclaimer" 
              className="top-bar__link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', textDecoration: 'none' }}
            >
              Pharmacovigilance Notice
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="brand" aria-label="WellBee Pharmaceutical Home">
            <div className="brand__logo-symbol">
              <svg viewBox="0 0 36 36" fill="none" className="brand__svg">
                <path d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z" stroke="#1A56DB" strokeWidth="2.5" fill="#EFF6FF"/>
                <path d="M18 10V26" stroke="#0F172A" strokeWidth="2.75" strokeLinecap="round"/>
                <path d="M10 18H26" stroke="#0F172A" strokeWidth="2.75" strokeLinecap="round"/>
                <circle cx="18" cy="18" r="3" fill="#0284C7"/>
              </svg>
            </div>
            <div className="brand__text">
              <span className="brand__name">WellBee</span>
              <span className="brand__suffix">Pharmaceutical</span>
            </div>
          </Link>

          <nav className="nav-menu" aria-label="Desktop Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={isHome ? link.href : `/${link.href}`} 
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a 
              href={isHome ? '#contact' : '/#contact'} 
              className="btn btn--outline btn--sm hide-mobile"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <UserCheck size={14} />
              Distributor Enquiry
            </a>
            <button 
              className="menu-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="mobile-drawer">
            <motion.div 
              className="mobile-drawer__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div 
              className="mobile-drawer__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="mobile-drawer__header">
                <div className="brand__text">
                  <span className="brand__name">WellBee</span>
                  <span className="brand__suffix">Pharmaceutical</span>
                </div>
                <button 
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mobile-drawer__nav">
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={isHome ? link.href : `/${link.href}`} 
                    className="mobile-drawer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mobile-drawer__footer">
                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>
                  Maharashtra Corporate Hub (Mumbai / Panvel)
                </p>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '12px' }}>
                  <a href="tel:+918796913727" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Trade Desk: +91 87969 13727
                  </a>
                </p>
                <a 
                  href={isHome ? '#contact' : '/#contact'} 
                  className="btn btn--primary btn--block"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Submit Trade Enquiry
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
