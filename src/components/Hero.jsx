import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Clock,
  FlaskConical, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Play,
  Activity,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProducts } from '../../server/data/products.js';

// 4 Flagship formulations representing GP, CP, Gynae, and Paediatric verticals
const FLAGSHIP_CONFIG = [
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
    id: 'wb-01',
    tabLabel: 'PantoBee-DSR',
    shortCat: 'Gastroenterology',
    shortGeneric: 'Pantoprazole 40 mg (EC) + Domperidone 30 mg (SR)',
    presentation: 'Capsule (Alu-Alu)',
    targetPrescriber: 'GP / CP / Gastro',
    keySpec: '≥ 85% Dissolution at 45m'
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
  const [showOverviewModal, setShowOverviewModal] = useState(false);

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
    }, 60);

    const timer2 = setInterval(() => {
      setQaCount((prev) => (prev < 100 ? prev + 5 : 100));
    }, 35);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  // Auto-advance every 7 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % flagships.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, flagships.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + flagships.length) % flagships.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % flagships.length);
  };

  return (
    <section className="hero-section" id="home">
      {/* Top Right Brand Watermark Tag (Matches Mockup) */}
      <div className="hero-brand-watermark" aria-hidden="true">
        <span>WELLBEE</span>
        <span>PHARMACEUTICAL</span>
      </div>

      <div className="container hero-container">
        {/* Main 2-Column Hero Grid */}
        <div className="hero-grid">
          {/* Left Column: Typography, Badge, and CTAs */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Maharashtra Enterprise Location Pill */}
            <div className="hero-badge">
              <MapPin size={13} className="hero-badge-pin" />
              <span>Maharashtra Enterprise • Mumbai &amp; Panvel Hub</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Precision Molecules.<br />
              <span className="hero-title__highlight">Healthier</span><br />
              Tomorrows.
            </h1>

            {/* Subtitle */}
            <p className="hero-desc">
              cGMP-certified pharmaceutical formulations built for General Practice, Consulting Physicians, Gynaecology, and Paediatrics across Maharashtra.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a href="#products" className="btn btn--primary hero-cta-btn">
                <span>Explore 10 Formulations</span>
                <ArrowRight size={16} className="cta-arrow" />
              </a>
              <button 
                type="button" 
                className="btn btn--glass hero-watch-btn"
                onClick={() => setShowOverviewModal(true)}
              >
                <span className="hero-play-icon-circle">
                  <Play size={12} fill="#1A56DB" color="#1A56DB" style={{ marginLeft: '1px' }} />
                </span>
                <span>Watch Overview</span>
              </button>
            </div>
          </motion.div>

          {/* Subtle Science / Care / Community Badge (Matches Mockup) */}
          <div className="hero-center-badge" aria-hidden="true">
            <span className="badge-plus">+</span>
            <span className="badge-word">SCIENCE</span>
            <span className="badge-word">CARE</span>
            <span className="badge-word">COMMUNITY</span>
            <span className="badge-dash" />
          </div>

          {/* Right Column: Modern Glass Deck Showcase */}
          <motion.div 
            className="hero-showcase-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pharma-glass-deck">
              {/* Tabs Bar */}
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

              {/* Card Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="deck-body-minimal"
                >
                  {/* Category & Status Bar */}
                  <div className="deck-meta-row">
                    <span className="deck-label-small">FEATURED FORMULATION</span>
                    <span className="category-pill-tag">
                      <Activity size={12} className="tag-icon" />
                      {current.shortCat}
                    </span>
                  </div>

                  {/* Product Headline */}
                  <div className="deck-product-headline">
                    <h3 className="deck-product-name">{current.brandName}</h3>
                    <p className="deck-product-generic">{current.shortGeneric}</p>
                  </div>

                  {/* 3 Spec Chips */}
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
                      <Clock size={13} className="chip-icon-success" />
                      <span>{current.keySpec}</span>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="deck-action-row">
                    <button 
                      type="button" 
                      className="btn-cool-deck"
                      onClick={() => onSelectProduct && onSelectProduct(current)}
                    >
                      <span>View Clinical Monograph</span>
                      <ArrowRight size={15} className="deck-btn-arrow" />
                    </button>
                    <div className="deck-action-divider" />
                    <span className="deck-micro-note">Ethical Prescription Only</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hero-bottom-metrics">
          <div className="hero-metric-item">
            <div className="hero-metric-icon">
              <FlaskConical size={20} />
            </div>
            <div className="hero-metric-text">
              <div className="hero-metric-title">{coreCount} Formulations</div>
              <div className="hero-metric-desc">General Practice, Gynae &amp; Paediatrics</div>
            </div>
          </div>

          <div className="hero-metric-divider" />

          <div className="hero-metric-item">
            <div className="hero-metric-icon">
              <ShieldCheck size={20} />
            </div>
            <div className="hero-metric-text">
              <div className="hero-metric-title">{qaCount}% cGMP Tested</div>
              <div className="hero-metric-desc">Certified Batch Quality Assay</div>
            </div>
          </div>

          <div className="hero-metric-divider" />

          <div className="hero-metric-item">
            <div className="hero-metric-icon">
              <MapPin size={20} />
            </div>
            <div className="hero-metric-text">
              <div className="hero-metric-title">Panvel &amp; Mumbai</div>
              <div className="hero-metric-desc">Maharashtra Regional Operations Hub</div>
            </div>
          </div>

          <div className="hero-metric-divider" />

          <div className="hero-metric-item">
            <div className="hero-metric-icon">
              <FileText size={20} />
            </div>
            <div className="hero-metric-text">
              <div className="hero-metric-title">WHO–GMP Validated</div>
              <div className="hero-metric-desc">Schedule M Regulatory Compliance</div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Brand Statement Row */}
        <div className="hero-bottom-nav">
          <div className="hero-brand-statement">
            <span className="statement-dash" />
            <span>PHARMACEUTICAL EXCELLENCE FOR A HEALTHIER MAHARASHTRA</span>
          </div>

          <div className="hero-slider-controls">
            <div className="hero-slide-pagination">
              {flagships.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`slide-num-btn ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to formulation 0${i + 1}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

            <div className="hero-nav-arrows">
              <button 
                type="button" 
                className="hero-arrow-btn hero-arrow-btn--prev" 
                onClick={handlePrev}
                aria-label="Previous Formulation"
              >
                <ArrowLeft size={15} />
              </button>
              <button 
                type="button" 
                className="hero-arrow-btn hero-arrow-btn--next" 
                onClick={handleNext}
                aria-label="Next Formulation"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Clinical & Corporate Overview Modal */}
      <AnimatePresence>
        {showOverviewModal && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <motion.div 
              className="modal-backdrop" 
              onClick={() => setShowOverviewModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="modal-content hero-overview-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22 }}
            >
              <div className="overview-modal-header">
                <div>
                  <div className="overview-modal-badge">
                    <Sparkles size={13} />
                    <span>Executive Briefing</span>
                  </div>
                  <h3 className="overview-modal-title">WellBee Pharmaceutical Overview</h3>
                  <p className="overview-modal-subtitle">
                    Research-driven formulation architecture based in Maharashtra (Mumbai / Panvel) adhering strictly to cGMP &amp; Schedule M.
                  </p>
                </div>
                <button 
                  className="modal-close-btn"
                  onClick={() => setShowOverviewModal(false)}
                  aria-label="Close Overview Modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overview-modal-body">
                <div className="overview-grid">
                  <div className="overview-pill-card">
                    <div className="overview-card-icon">
                      <FlaskConical size={18} />
                    </div>
                    <h4>10 Core Prescriptions</h4>
                    <p>Standardized formulations across GP, Consulting Physicians, Gynaecology, and Paediatrics with high bioavailability.</p>
                  </div>

                  <div className="overview-pill-card">
                    <div className="overview-card-icon">
                      <ShieldCheck size={18} />
                    </div>
                    <h4>cGMP &amp; Schedule M</h4>
                    <p>100% batch assay verification, moisture-barrier Alu-Alu packaging, and controlled dissolution testing.</p>
                  </div>

                  <div className="overview-pill-card">
                    <div className="overview-card-icon">
                      <MapPin size={18} />
                    </div>
                    <h4>Maharashtra Hubs</h4>
                    <p>Centralized distribution and stockist logistics operating out of Mumbai and Panvel for reliable clinical supply.</p>
                  </div>

                  <div className="overview-pill-card">
                    <div className="overview-card-icon">
                      <FileText size={18} />
                    </div>
                    <h4>Monograph Integrity</h4>
                    <p>Comprehensive scientific dossiers, bioequivalence data, and ethical doctor-prescribing documentation.</p>
                  </div>
                </div>

                <div className="overview-modal-footer">
                  <a 
                    href="#products" 
                    className="btn btn--primary" 
                    onClick={() => setShowOverviewModal(false)}
                  >
                    Explore All 10 Formulations
                  </a>
                  <a 
                    href="#contact" 
                    className="btn btn--outline" 
                    onClick={() => setShowOverviewModal(false)}
                  >
                    Trade &amp; Stockist Enquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
