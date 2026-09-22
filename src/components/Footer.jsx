import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

export default function Footer({ onOpenLegal, onSelectCategory }) {
  const currentYear = new Date().getFullYear();

  const handleTherapyClick = (e, categoryId) => {
    e.preventDefault();
    onSelectCategory(categoryId);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {/* Brand Column */}
        <div>
          <div className="brand" style={{ marginBottom: '12px' }}>
            <div className="brand__logo-symbol">
              <svg viewBox="0 0 36 36" fill="none" className="brand__svg">
                <path d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z" stroke="#3B82F6" strokeWidth="2.5" fill="#1E293B"/>
                <path d="M18 10V26" stroke="#FFFFFF" strokeWidth="2.75" strokeLinecap="round"/>
                <path d="M10 18H26" stroke="#FFFFFF" strokeWidth="2.75" strokeLinecap="round"/>
                <circle cx="18" cy="18" r="3" fill="#38BDF8"/>
              </svg>
            </div>
            <div className="brand__text">
              <span className="brand__name" style={{ color: '#FFFFFF' }}>WellBee</span>
              <span className="brand__suffix" style={{ color: '#60A5FA' }}>Pharmaceutical</span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '300px', marginBottom: '14px' }}>
            WellBee Pharmaceutical Private Limited develops research-backed formulations across GP, CP, Gynae, and Paediatrics. Headquartered in Maharashtra (Mumbai / Panvel).
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748B', lineHeight: 1.5 }}>
            CIN: U24239MH2024PTC490123<br />
            Registered in Maharashtra, India
          </div>
        </div>

        {/* Therapeutics */}
        <div>
          <h4 className="footer-heading">Therapeutic Verticals</h4>
          <ul className="footer-links">
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'gastro')}>Gastroenterology</a></li>
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'respiratory')}>Respiratory &amp; Pulmonology</a></li>
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'ortho')}>Pain &amp; Orthopaedics</a></li>
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'nutrition')}>Neuro-Nutrition &amp; Metabolic</a></li>
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'bone')}>Bone Health &amp; Calcium</a></li>
            <li><a href="#products" onClick={(e) => handleTherapyClick(e, 'paediatrics')}>Paediatrics &amp; Hydration</a></li>
          </ul>
        </div>

        {/* Corporate Navigation */}
        <div>
          <h4 className="footer-heading">Corporate Navigation</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About WellBee</a></li>
            <li><a href="#products">10 Core Formulations</a></li>
            <li><a href="#quality">Quality &amp; Standards</a></li>
            <li><a href="#careers">Career Openings</a></li>
            <li><a href="#contact">Trade &amp; Stockist Enquiries</a></li>
          </ul>
        </div>

        {/* Pharmacovigilance */}
        <div>
          <h4 className="footer-heading">Drug Safety &amp; Vigilance</h4>
          <p style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '12px' }}>
            To report an adverse reaction or product quality inquiry associated with any WellBee medicine, contact our vigilance unit immediately:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '10px 14px', borderRadius: '6px', color: '#60A5FA', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={14} />
              <a href="tel:+918796913727" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 87969 13727 | Trade &amp; Safety
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} />
              <a href="mailto:wellbeepharmaceuticals@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                wellbeepharmaceuticals@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Medical Disclaimer */}
      <div className="statutory-bar">
        <div className="container">
          <strong>STATUTORY MEDICAL DISCLAIMER:</strong> The information presented on this corporate portal is intended exclusively for licensed medical practitioners, registered pharmacists, and authorized pharmaceutical trade distributors. Formulations listed are Schedule H prescription medicines and must be dispensed strictly against a valid medical prescription from a registered practitioner.
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <div>&copy; {currentYear} WellBee Pharmaceutical Private Limited. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => onOpenLegal('privacy')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '12px', cursor: 'pointer' }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '12px', cursor: 'pointer' }}
            >
              Terms of Use
            </button>
            <button 
              onClick={() => onOpenLegal('cookie')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '12px', cursor: 'pointer' }}
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => onOpenLegal('disclaimer')}
              style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '12px', cursor: 'pointer' }}
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
