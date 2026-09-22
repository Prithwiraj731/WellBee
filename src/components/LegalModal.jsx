import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const legalContent = {
  privacy: {
    title: 'Corporate Privacy Policy',
    body: (
      <>
        <p><strong>Effective Date:</strong> January 2026</p>
        <p>WellBee Pharmaceutical Private Limited respects data confidentiality. Information gathered via trade and career enquiries is utilized strictly to evaluate distributor qualifications, process candidate applications, and fulfill statutory drug documentation obligations.</p>
        <p>We do not commercialize or disseminate trade data to third parties. Technical and organizational security safeguards are maintained across all internal servers.</p>
      </>
    )
  },
  terms: {
    title: 'Terms of Website Use',
    body: (
      <>
        <p><strong>Last Updated:</strong> January 2026</p>
        <p>This web portal is designed exclusively for registered medical practitioners, licensed wholesale chemists, and institutional trade partners. Content provided does not constitute an offer to sell prescription drugs directly to consumers.</p>
        <p>All trademarks, formulation brand names, and visual identity assets are proprietary to WellBee Pharmaceutical Private Limited. Unauthorized reproduction is prohibited.</p>
      </>
    )
  },
  cookie: {
    title: 'Cookie Policy',
    body: (
      <>
        <p>We utilize essential functional cookies strictly to maintain secure session integrity, ensure navigational responsiveness, and analyze Core Web Vitals telemetry.</p>
        <p>No intrusive third-party advertising or cross-site tracking scripts are deployed on this corporate domain.</p>
      </>
    )
  },
  disclaimer: {
    title: 'Statutory Medical & Pharmacovigilance Disclaimer',
    body: (
      <>
        <p><strong>Statutory Schedule H Warning:</strong> The pharmaceutical formulations listed are prescription drugs to be dispensed strictly against the written prescription of a Registered Medical Practitioner (RMP).</p>
        <p>Information on this website does not constitute self-medication recommendations. Patients must seek guidance from qualified healthcare specialists.</p>
        <p><strong>Adverse Event Reporting:</strong> Suspected adverse drug reactions should be reported immediately to our Drug Safety Unit at <strong>wellbeepharmaceuticals@gmail.com</strong> or via our hotline 1800-400-WELL.</p>
      </>
    )
  }
};

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type || !legalContent[type]) return null;
  const doc = legalContent[type];

  return (
    <AnimatePresence>
      <div className="modal-overlay" role="dialog" aria-modal="true">
        <motion.div 
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div 
          className="modal-content"
          style={{ maxWidth: '580px' }}
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-header">
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
              {doc.title}
            </h3>
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          <div className="modal-body" style={{ fontSize: '13.5px', color: 'var(--color-slate-600)', lineHeight: 1.6 }}>
            {doc.body}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
