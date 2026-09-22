import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [coreCount, setCoreCount] = useState(0);
  const [verticalCount, setVerticalCount] = useState(0);

  // Subtle count up on mount (executes once, not constantly)
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCoreCount((prev) => (prev < 10 ? prev + 1 : 10));
    }, 60);

    const timer2 = setInterval(() => {
      setVerticalCount((prev) => (prev < 6 ? prev + 1 : 6));
    }, 100);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        {/* Left Column: Minimalist Value Proposition */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge">
            <span className="hero-badge__dot" />
            <span>Maharashtra Enterprise • Mumbai / Panvel Hub</span>
          </div>

          <h1 className="hero-title">
            Engineering Precision Formulations. <br />
            <span className="hero-title__highlight">Building Healthier Futures.</span>
          </h1>

          <p className="hero-desc">
            Headquartered in Maharashtra with operational and commercial hubs in Mumbai and Panvel, WellBee Pharmaceutical Private Limited develops research-backed, cGMP-validated pharmaceutical formulations across GP, CP, Gynae, and Paediatric therapeutic sectors.
          </p>

          <div className="hero-ctas">
            <a href="#products" className="btn btn--primary btn--lg">
              Explore 10 Formulations
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              Partner / Trade Enquiry
            </a>
          </div>

          {/* Metric Strip */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-number">{coreCount}</span>
              <span className="metric-label">Top Formulations (GP, CP, Gyne, Paed)</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">Mumbai / Panvel</span>
              <span className="metric-label">Maharashtra Corporate Hub</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">100%</span>
              <span className="metric-label">Validated QA / QC Protocols</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">cGMP</span>
              <span className="metric-label">Schedule M Compliant Facilities</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clinical Specification Showcase */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pharma-card-preview">
            <div className="pharma-card-preview__header">
              <div>
                <span className="status-chip">PHARMACOPEIAL SPECIFICATION</span>
                <div className="batch-no">BATCH RELEASE MONITOR • IP / BP STANDARDS</div>
              </div>
              <ShieldAlert size={20} color="#1A56DB" />
            </div>

            <div className="pharma-card-preview__body">
              <div className="lead-formulation">
                <span className="lead-formulation__cat">GASTROENTEROLOGY VERTICAL</span>
                <h3 className="lead-formulation__name">Pantoprazole + Domperidone SR</h3>
                <p className="lead-formulation__spec">
                  Pantoprazole Sodium IP 40 mg (Enteric Coated) + Domperidone IP 30 mg (Sustained Release)
                </p>
              </div>

              <div className="spec-matrix">
                <div className="spec-row">
                  <span className="spec-name">Dosage Presentation:</span>
                  <span className="spec-val">Hard Gelatin Capsule (Alu-Alu)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Dissolution Profile:</span>
                  <span className="spec-val text-success">≥ 85% at 45 min (Target Met)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Stability Testing:</span>
                  <span className="spec-val">ICH Zone IVb Real-Time &amp; Accelerated</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Indications:</span>
                  <span className="spec-val">GERD, Reflux Oesophagitis, Dyspepsia</span>
                </div>
              </div>

              <div className="clinical-checkpoints">
                <div className="checkpoint">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>High Bioequivalence Fidelity</span>
                </div>
                <div className="checkpoint">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Validated Impurity Profile &amp; Assay Testing</span>
                </div>
                <div className="checkpoint">
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Tamper-Proof Blister Barrier Sealing</span>
                </div>
              </div>
            </div>

            <div className="pharma-card-preview__footer">
              <span style={{ color: '#64748B' }}>Prescription Formulations for Ethical Healthcare Only</span>
              <a href="#products" style={{ color: '#1A56DB', fontWeight: 700, textDecoration: 'none' }}>
                Full Catalogue &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
