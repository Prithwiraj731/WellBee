import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FlaskConical, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProducts } from '../../server/data/products.js';

// 4 Flagship formulations representing GP, CP, Gynae, and Paediatric verticals
const FLAGSHIP_CONFIG = [
  {
    id: 'wb-01',
    tabLabel: 'PantoBee-DSR',
    shortCat: 'Gastroenterology',
    shortGeneric: 'Pantoprazole 40 mg (EC) + Domperidone 30 mg (SR)',
    presentation: 'Capsule (Alu-Alu)',
    targetPrescriber: 'GP / CP / Gastro',
    keySpec: '≥ 85% Dissolution at 45m'
  },
  {
    id: 'wb-02',
    tabLabel: 'LevoBee-M',
    shortCat: 'Respiratory',
    shortGeneric: 'Levocetirizine 5 mg + Montelukast 10 mg',
    presentation: 'Tablet (Alu-Alu)',
    targetPrescriber: 'GP / CP / Chest',
    keySpec: '24h Dual Pathway Relief'
  },
  {
    id: 'wb-06',
    tabLabel: 'FeroBee-XT',
    shortCat: 'Gynaecology & Fe',
    shortGeneric: 'Ferrous Ascorbate + Folic Acid + Zinc',
    presentation: 'Alu-Alu Strip',
    targetPrescriber: 'Gyne / GP / Paed',
    keySpec: 'High Elemental Fe Uptake'
  },
  {
    id: 'wb-08',
    tabLabel: 'ParaBee Susp.',
    shortCat: 'Paediatrics',
    shortGeneric: 'Paracetamol Paediatric 250 mg / 5 mL',
    presentation: '60 mL Pet Bottle',
    targetPrescriber: 'Paed / GP',
    keySpec: 'Smooth Calibrated Relief'
  }
];

export default function Hero({ onSelectProduct }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [coreCount, setCoreCount] = useState(0);
  const [qaCount, setQaCount] = useState(0);

  // Combine product data with flagship config
  const flagships = FLAGSHIP_CONFIG.map((cfg) => {
    const matched = initialProducts.find((p) => p.id === cfg.id) || {};
    return { ...matched, ...cfg };
  });

  const current = flagships[activeIdx] || flagships[0];

  // Subtle count-up effect on mount
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCoreCount((prev) => (prev < 10 ? prev + 1 : 10));
    }, 65);

    const timer2 = setInterval(() => {
      setQaCount((prev) => (prev < 100 ? prev + 5 : 100));
    }, 40);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  // Subtle auto-advance every 6.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % flagships.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, flagships.length]);

  return (
    <section className="hero-section" id="home">
      {/* Background Decorative Ambient Glows */}
      <div className="hero-glow-blob hero-glow-blob--top" aria-hidden="true" />
      <div className="hero-glow-blob hero-glow-blob--bottom" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column: Authoritative, Clean Executive Messaging */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge">
            <span className="hero-badge__pulse">
              <span className="pulse-ring" />
              <span className="pulse-dot" />
            </span>
            <span>Maharashtra Enterprise • Mumbai &amp; Panvel Hub</span>
          </div>

          <h1 className="hero-title">
            Precision Molecules. <br />
            <span className="hero-title__highlight">Engineered for Clinical Trust.</span>
          </h1>

          <p className="hero-desc">
            cGMP-certified pharmaceutical formulations built for General Practice, Consulting Physicians, Gynaecology, and Paediatrics across Maharashtra.
          </p>

          <div className="hero-ctas">
            <a href="#products" className="btn btn--primary btn--lg hero-cta-btn">
              <span>Explore 10 Formulations</span>
              <ArrowRight size={16} className="cta-arrow" />
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              Partner / Trade Enquiry
            </a>
          </div>

          {/* Enhanced Professional Bento Metrics Bar */}
          <div className="hero-metrics-bar">
            <div className="metric-pod">
              <div className="metric-pod__icon icon-blue">
                <FlaskConical size={16} />
              </div>
              <div className="metric-pod__content">
                <div className="metric-pod__value">{coreCount}</div>
                <div className="metric-pod__label">Top Formulations (GP, CP, Gyne, Paed)</div>
              </div>
            </div>

            <div className="metric-pod-sep" />

            <div className="metric-pod">
              <div className="metric-pod__icon icon-indigo">
                <MapPin size={16} />
              </div>
              <div className="metric-pod__content">
                <div className="metric-pod__value">Mumbai / Panvel</div>
                <div className="metric-pod__label">Maharashtra Operations</div>
              </div>
            </div>

            <div className="metric-pod-sep" />

            <div className="metric-pod">
              <div className="metric-pod__icon icon-emerald">
                <ShieldCheck size={16} />
              </div>
              <div className="metric-pod__content">
                <div className="metric-pod__value">{qaCount}%</div>
                <div className="metric-pod__label">cGMP Batch Quality Assay</div>
              </div>
            </div>

            <div className="metric-pod-sep" />

            <div className="metric-pod">
              <div className="metric-pod__icon icon-amber">
                <Award size={16} />
              </div>
              <div className="metric-pod__content">
                <div className="metric-pod__value">WHO-GMP</div>
                <div className="metric-pod__label">Schedule M Compliance</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minimalist Living Flagship Deck */}
        <motion.div 
          className="hero-showcase-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Glass Deck Card */}
          <div className="pharma-glass-deck">
            {/* Interactive Flagship Tabs */}
            <div className="deck-tabs-header">
              <div className="deck-tabs-scroll" role="tablist">
                {flagships.map((prod, idx) => (
                  <button
                    key={prod.id}
                    role="tab"
                    aria-selected={activeIdx === idx}
                    className={`deck-tab-pill ${activeIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <span className="deck-tab-dot" />
                    <span className="deck-tab-title">{prod.tabLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live QA Status Indicator Bar */}
            <div className="deck-status-bar">
              <div className="status-live-badge">
                <span className="live-ping" />
                <span className="status-live-text">cGMP VALIDATED • IP / BP SPECIFICATION</span>
              </div>
              <span className="category-pill-tag">{current.shortCat}</span>
            </div>

            {/* Minimalist Animated Product Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="deck-body-minimal"
              >
                <div className="deck-product-headline">
                  <h3 className="deck-product-name">{current.brandName}</h3>
                  <p className="deck-product-generic">{current.shortGeneric}</p>
                </div>

                {/* 3 Sleek Quick-Spec Chips */}
                <div className="deck-chips-row">
                  <div className="spec-chip">
                    <span className="chip-bullet" />
                    <span>{current.targetPrescriber}</span>
                  </div>
                  <div className="spec-chip">
                    <span className="chip-bullet" />
                    <span>{current.presentation}</span>
                  </div>
                  <div className="spec-chip spec-chip--highlight">
                    <CheckCircle2 size={13} className="chip-icon-success" />
                    <span>{current.keySpec}</span>
                  </div>
                </div>

                {/* Minimalist Action Row */}
                <div className="deck-action-row">
                  <button 
                    type="button" 
                    className="btn-cool-deck"
                    onClick={() => onSelectProduct && onSelectProduct(current)}
                  >
                    <span>View Clinical Monograph</span>
                    <ChevronRight size={15} className="deck-btn-arrow" />
                  </button>
                  <span className="deck-micro-note">Ethical Prescription Only</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
