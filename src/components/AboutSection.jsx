import React from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div 
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Rooted in Science, Built for Patient Health</h2>
          <p className="section-desc">
            Founded on the principle that healthcare practitioners and patients deserve uncompromised formulation consistency, transparent ethics, and dependable pharmaceutical supply.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="about-card__icon-box">
              <Compass size={22} />
            </div>
            <h3 className="about-card__title">Our Vision</h3>
            <p className="about-card__text">
              To emerge as a trusted corporate pharmaceutical partner recognized for clinical dependability, uncompromised product quality, and progressive patient outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="about-card__icon-box">
              <Target size={22} />
            </div>
            <h3 className="about-card__title">Our Mission</h3>
            <p className="about-card__text">
              To bridge essential clinical needs by engineering bioequivalent, accessible drug formulations adhering strictly to pharmacopeial benchmarks and ethical distribution.
            </p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className="about-card__icon-box">
              <Award size={22} />
            </div>
            <h3 className="about-card__title">Corporate Values</h3>
            <p className="about-card__text">
              <strong>Quality First:</strong> Non-negotiable raw material assay standards.<br />
              <strong>Integrity:</strong> Evidence-grounded medical documentation.<br />
              <strong>Reliability:</strong> Uninterrupted supply continuity for distributors.
            </p>
          </motion.div>
        </div>

        {/* Compact Stakeholder Value Matrix */}
        <motion.div 
          className="stakeholder-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="stakeholder-box">
            <h4>For Physicians &amp; Specialists</h4>
            <p>Predictable therapeutic bioavailability and complete scientific monographs to support evidence-based patient prescribing.</p>
          </div>
          <div className="stakeholder-box">
            <h4>For Distributors &amp; Stockists</h4>
            <p>Guaranteed batch continuity, tamper-evident packaging, prompt fulfillment, and transparent commercial policies.</p>
          </div>
          <div className="stakeholder-box">
            <h4>For Manufacturing Partners</h4>
            <p>Adherence to Schedule M &amp; cGMP norms, clear technical dossiers, and long-term institutional scalability.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
