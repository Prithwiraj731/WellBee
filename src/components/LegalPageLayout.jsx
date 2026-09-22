import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function LegalPageLayout({
  title,
  subtitle,
  category,
  effectiveDate = 'January 2026',
  docId = 'WB-LEGAL-2026/V2',
  tocItems = [],
  children
}) {
  return (
    <div className="legal-page-root">
      {/* Legal Hero Banner */}
      <section className="legal-banner">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <ArrowLeft size={14} />
              <span>Corporate Portal</span>
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{title}</span>
          </nav>

          <motion.div 
            className="legal-banner-content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="legal-badge">
              <ShieldCheck size={14} className="text-primary" />
              <span>{category || 'Statutory Compliance & Legal Governance'}</span>
            </div>

            <h1 className="legal-title">{title}</h1>
            {subtitle && <p className="legal-subtitle">{subtitle}</p>}

            {/* Metadata Bar */}
            <div className="legal-meta-strip">
              <div className="meta-item">
                <span className="meta-label">Effective Date:</span>
                <span className="meta-value">{effectiveDate}</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">Jurisdiction:</span>
                <span className="meta-value">Maharashtra &amp; Panvel Hub, India</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">Document ID:</span>
                <span className="meta-value font-mono">{docId}</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">Regulatory Status:</span>
                <span className="meta-value text-success font-semibold">Active &amp; Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container legal-body-container">
        <div className="legal-layout-grid">
          {/* Left Sticky Sidebar (Table of Contents & Contact) */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-sticky">
              {tocItems.length > 0 && (
                <div className="legal-toc-card">
                  <h3 className="toc-title">
                    <FileText size={15} />
                    <span>Table of Contents</span>
                  </h3>
                  <ul className="toc-list">
                    {tocItems.map((item, idx) => (
                      <li key={idx}>
                        <a href={`#${item.id}`} className="toc-link">
                          <span className="toc-num">{idx + 1}.</span>
                          <span className="toc-label">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Regulatory Contact Card */}
              <div className="legal-contact-card">
                <h4 className="legal-contact-title">Compliance Desk</h4>
                <p className="legal-contact-desc">
                  For statutory inquiries, pharmacovigilance reports, or distributor verification:
                </p>
                <div className="legal-contact-items">
                  <div className="contact-row">
                    <MapPin size={14} className="contact-icon" />
                    <span>Panvel &amp; Mumbai Commercial Hub, Maharashtra</span>
                  </div>
                  <div className="contact-row">
                    <Phone size={14} className="contact-icon" />
                    <a href="tel:+918796913727">+91 87969 13727</a>
                  </div>
                  <div className="contact-row">
                    <Mail size={14} className="contact-icon" />
                    <a href="mailto:wellbeepharmaceuticals@gmail.com">wellbeepharmaceuticals@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Return to Home CTA */}
              <Link to="/" className="btn btn--outline btn--block legal-back-btn">
                <ArrowLeft size={15} />
                <span>Return to Home</span>
              </Link>
            </div>
          </aside>

          {/* Right Main Content Pane */}
          <main className="legal-content-pane">
            <div className="legal-article">
              {children}
            </div>

            {/* Bottom Footer Action */}
            <div className="legal-bottom-bar">
              <Link to="/" className="btn btn--primary btn--lg">
                <ArrowLeft size={16} />
                <span>Back to Corporate Portal</span>
              </Link>
              <a href="/#products" className="btn btn--outline btn--lg">
                <span>View 10 Formulations</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
