import React, { useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, onClose, onInquire }) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

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
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="modal-header">
            <div>
              <span className="tag-category">{product.categoryLabel}</span>
              <span className="status-chip">Prescription (Rx)</span>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '21px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
                {product.brandName}
              </h2>
              <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-brand-primary)', background: 'var(--color-brand-light)', padding: '6px 10px', borderRadius: '4px', borderLeft: '3px solid var(--color-brand-primary)' }}>
                {product.composition}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: 'var(--color-slate-50)', padding: '12px', borderRadius: '6px', border: '1px solid var(--color-slate-200)' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-slate-500)', fontWeight: 600 }}>DOSAGE FORM</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-slate-900)' }}>{product.dosageForm}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-slate-500)', fontWeight: 600 }}>STRENGTH</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-slate-900)' }}>{product.strength}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-slate-500)', fontWeight: 600 }}>PACK PRESENTATION</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-slate-900)' }}>{product.packType}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--color-slate-500)', fontWeight: 600 }}>TARGET SPECIALTY</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-slate-900)' }}>{product.specialty}</div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '4px' }}>
                Clinical Description &amp; Mechanism:
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-slate-600)', lineHeight: 1.5 }}>
                {product.description}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '4px' }}>
                Approved Clinical Indications:
              </h4>
              <ul style={{ paddingLeft: '18px', fontSize: '12.5px', color: 'var(--color-slate-700)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {product.indications.map((ind, i) => (
                  <li key={i}>{ind}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '10px', background: '#FFFBEB', border: '1px solid #FCD34D', padding: '10px 12px', borderRadius: '6px', fontSize: '11.5px', color: '#92400E' }}>
              <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                <strong>Prescription Warning:</strong> To be dispensed against a valid prescription of a Registered Medical Practitioner only. Store below 25°C protected from light and moisture.
              </span>
            </div>
          </div>

          <div className="modal-footer">
            <button 
              className="btn btn--outline btn--sm"
              onClick={() => {
                onClose();
                onInquire(product);
              }}
            >
              Inquire for Territory Supply
            </button>
            <button 
              className="btn btn--primary btn--sm"
              onClick={() => alert(`Product dossier request generated for ${product.brandName}. In production, this delivers verified healthcare professional documentation.`)}
            >
              Download Monograph
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
