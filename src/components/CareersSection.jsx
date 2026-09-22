import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const jobOpenings = [
  {
    id: 'job-1',
    title: 'Medical Representative (MR)',
    division: 'GP, CP, Gynae & Paediatric Divisions',
    location: 'Mumbai & Panvel, Maharashtra',
    summary: 'Engage consulting physicians and paediatricians to communicate scientific formulation advantages and support ethical prescriptions.',
    experience: '1–3 Years in Pharma Sales'
  },
  {
    id: 'job-2',
    title: 'Quality Assurance Executive',
    division: 'Regulatory & Compliance',
    location: 'Corporate Quality Hub, Mumbai / Panvel',
    summary: 'Maintain batch release documentation, review CoA records, and ensure vendor facilities comply with Schedule M & cGMP norms.',
    experience: '2–4 Years in cGMP QA'
  },
  {
    id: 'job-3',
    title: 'Supply Chain & Stockist Lead',
    division: 'Logistics Operations',
    location: 'Maharashtra Central Distribution, Panvel',
    summary: 'Coordinate temperature-controlled dispatch, inventory replenishment for stockists, and ERP fulfillment workflows.',
    experience: '3–5 Years in Pharma Logistics'
  }
];

export default function CareersSection({ onApply }) {
  return (
    <section className="section" id="careers" style={{ backgroundColor: 'var(--color-slate-50)', borderBottom: '1px solid var(--color-slate-200)' }}>
      <div className="container">
        <motion.div 
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Career Opportunities</h2>
          <p className="section-desc">
            Build your career with a healthcare enterprise committed to clinical quality, transparent communication, and professional growth.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {jobOpenings.map((job, index) => (
            <motion.div 
              key={job.id}
              className="about-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span className="tag-category">{job.division}</span>
                <span style={{ fontSize: '11px', color: 'var(--color-slate-500)', fontWeight: 600 }}>Full Time</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: '4px' }}>
                {job.title}
              </h3>
              <div style={{ fontSize: '12px', color: 'var(--color-accent-teal)', fontWeight: 600, marginBottom: '10px' }}>
                {job.location}
              </div>

              <p style={{ fontSize: '13px', color: 'var(--color-slate-600)', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>
                {job.summary}
              </p>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', padding: '8px 10px', borderRadius: '4px', fontSize: '11.5px', color: 'var(--color-slate-700)', marginBottom: '16px' }}>
                Requirement: <strong>{job.experience}</strong>
              </div>

              <button 
                className="btn btn--outline btn--sm btn--block"
                onClick={() => onApply(job.title)}
              >
                <span>Apply for Position</span>
                <ArrowRight size={13} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
