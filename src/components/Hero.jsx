import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  ChevronRight, 
  Activity,
  Zap,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProducts } from '../../server/data/products.js';

// 4 Flagship formulations representing GP, CP, Gynae, and Paediatric verticals
const FLAGSHIP_CONFIG = [
  {
    id: 'wb-01',
    tabLabel: 'PantoBee-DSR',
    shortCat: 'Gastro / GP',
    keySpec: '≥ 85% Dissolution at 45 min',
    efficacyLabel: 'Rapid Acid Neutralization & Prokinetic Action',
    accentColor: '#1A56DB'
  },
  {
    id: 'wb-02',
    tabLabel: 'LevoBee-M',
    shortCat: 'Respiratory / CP',
    keySpec: '24h Dual H1 & CysLT1 Antagonism',
    efficacyLabel: 'Comprehensive Allergic & Bronchial Relief',
    accentColor: '#0284C7'
  },
  {
    id: 'wb-06',
    tabLabel: 'FeroBee-XT',
    shortCat: 'Gynae / Haematinic',
    keySpec: 'High Elemental Iron Bioavailability',
    efficacyLabel: 'Zero Tooth Staining & Mild GI Profile',
    accentColor: '#7C3AED'
  },
  {
    id: 'wb-08',
    tabLabel: 'ParaBee Susp.',
    shortCat: 'Paediatric / GP',
    keySpec: 'Calibrated Weight-Based Antipyresis',
    efficacyLabel: 'Smooth Fever Control in Palatable Base',
    accentColor: '#059669'
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

          {/* Minimalist Trust Metric Strip */}
          <div className="hero-metrics-bar">
            <div className="metric-cell">
              <div className="metric-cell__value">{coreCount}</div>
              <div className="metric-cell__label">Top Formulations (GP, CP, Gyne, Paed)</div>
            </div>
            <div className="metric-cell-sep" />
            <div className="metric-cell">
              <div className="metric-cell__value">Mumbai / Panvel</div>
              <div className="metric-cell__label">Maharashtra Operations</div>
            </div>
            <div className="metric-cell-sep" />
            <div className="metric-cell">
              <div className="metric-cell__value">{qaCount}%</div>
              <div className="metric-cell__label">cGMP Batch Quality Assay</div>
            </div>
            <div className="metric-cell-sep" />
            <div className="metric-cell">
              <div className="metric-cell__value">WHO-GMP</div>
              <div className="metric-cell__label">Schedule M Compliance</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Living Flagship Deck */}
        <motion.div 
          className="hero-showcase-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Floating 3D Pills */}
          <motion.div 
            className="floating-glass-pill pill--top"
            animate={{ y: [-3, 4, -3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={13} className="text-brand-blue" />
            <span>Schedule M Validated</span>
          </motion.div>

          <motion.div 
            className="floating-glass-pill pill--bottom"
            animate={{ y: [4, -3, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck size={13} className="text-emerald-600" />
            <span>100% Alu-Alu Barrier</span>
          </motion.div>

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
                <span className="status-live-text">BATCH QA VERIFIED • IP / BP MONOGRAPH</span>
              </div>
              <span className="category-pill-tag">{current.shortCat}</span>
            </div>

            {/* Animated Active Product Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="deck-body"
              >
                <div className="deck-product-hero">
                  <div className="deck-audience-chip">
                    <Building2 size={12} />
                    <span>Prescriber Target: {current.targetAudience}</span>
                  </div>
                  <h3 className="deck-product-name">{current.brandName}</h3>
                  <p className="deck-product-composition">{current.composition}</p>
                </div>

                {/* 4 Clinical Specification Micro-Cards */}
                <div className="deck-specs-grid">
                  <div className="deck-spec-card">
                    <span className="spec-card-title">Dosage Presentation</span>
                    <span className="spec-card-value">{current.dosageForm}</span>
                  </div>
                  <div className="deck-spec-card">
                    <span className="spec-card-title">Efficacy Benchmark</span>
                    <span className="spec-card-value spec-card-value--highlight">{current.keySpec}</span>
                  </div>
                  <div className="deck-spec-card">
                    <span className="spec-card-title">Packaging Format</span>
                    <span className="spec-card-value">{current.packType}</span>
                  </div>
                  <div className="deck-spec-card">
                    <span className="spec-card-title">Clinical Indication</span>
                    <span className="spec-card-value">{current.indications ? current.indications[0] : 'Prescription Therapeutic'}</span>
                  </div>
                </div>

                {/* Quality Validation Checkpoints */}
                <div className="deck-checkpoints">
                  <div className="deck-check-item">
                    <CheckCircle2 size={15} className="check-icon-success" />
                    <span>Validated Assay Bioequivalence &amp; Accelerated Stability Passed</span>
                  </div>
                  <div className="deck-check-item">
                    <CheckCircle2 size={15} className="check-icon-success" />
                    <span>High-Barrier Moisture &amp; Light Tamper-Evident Packaging</span>
                  </div>
                </div>

                {/* Deck Footer Action */}
                <div className="deck-footer">
                  <span className="deck-legal-tag">Ethical Prescription Only</span>
                  <button 
                    type="button" 
                    className="deck-action-btn"
                    onClick={() => onSelectProduct && onSelectProduct(current)}
                  >
                    <span>View Monograph</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
