import React from 'react';
import { ShieldCheck, CheckCircle2, Factory, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QualityManufacturing() {
  return (
    <section className="section quality-manu-section" id="quality">
      <div className="container">
        <motion.div 
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Validated Quality &amp; Manufacturing Standards</h2>
          <p className="section-desc">
            Standard operating procedures enforce auditable checkpoints across raw material assay, automated in-process parameters, and controlled stability testing.
          </p>
        </motion.div>

        <div className="quality-manu-grid">
          {/* Quality Philosophy Card */}
          <motion.div 
            className="qm-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="qm-card__head">
              <div className="about-card__icon-box" style={{ margin: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <h3 className="qm-card__title">Quality Assurance &amp; Compliance</h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-slate-600)', lineHeight: 1.5 }}>
              Strict adherence to ethical pharmaceutical protocols. We do not publish unverified claims, maintaining full transparency across release dossiers.
            </p>

            <ul className="qm-list">
              <li className="qm-list-item">
                <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Active Ingredient (API) Verification</strong>
                  <span>100% chromatographic assay testing of raw materials for purity and microbial limits prior to dispensing.</span>
                </div>
              </li>
              <li className="qm-list-item">
                <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>In-Process Quality Controls (IPQC)</strong>
                  <span>Continuous monitoring of tablet hardness, friability, disintegration times, and capsule fill weight limits.</span>
                </div>
              </li>
              <li className="qm-list-item">
                <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>ICH Zone IVb Stability Testing</strong>
                  <span>Real-time and accelerated stability chambers (30°C / 75% RH) ensure shelf-life integrity under tropical climatic zones.</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Manufacturing & Third-Party Capabilities */}
          <motion.div 
            className="qm-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="qm-card__head">
              <div className="about-card__icon-box" style={{ margin: 0 }}>
                <Factory size={22} />
              </div>
              <h3 className="qm-card__title">Manufacturing &amp; Supply Chain</h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-slate-600)', lineHeight: 1.5 }}>
              Collaborating with certified Schedule M &amp; cGMP manufacturing units to guarantee high-volume batch consistency and prompt logistics.
            </p>

            <ul className="qm-list">
              <li className="qm-list-item">
                <PackageCheck size={16} color="#1A56DB" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Oral Solid Dosages (Tablets &amp; Capsules)</strong>
                  <span>High-speed compression and encapsulation with moisture-barrier Alu-Alu and blister packaging.</span>
                </div>
              </li>
              <li className="qm-list-item">
                <PackageCheck size={16} color="#1A56DB" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Oral Liquids &amp; Calibrated Suspensions</strong>
                  <span>Automated sterile filling suites equipped with child-resistant closures and precision dosing pipettes.</span>
                </div>
              </li>
              <li className="qm-list-item">
                <PackageCheck size={16} color="#1A56DB" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Controlled Storage &amp; Rapid Dispatch</strong>
                  <span>Temperature-monitored warehousing (below 25°C) guaranteeing prompt nationwide replenishment.</span>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid var(--color-slate-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-slate-600)' }}>Third-Party / Contract Manufacturing Inquiries:</span>
              <a href="#contact" className="btn btn--outline btn--sm">
                Discuss Manufacturing Terms
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
