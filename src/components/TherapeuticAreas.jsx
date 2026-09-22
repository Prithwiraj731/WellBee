import React from 'react';
import { Activity, Wind, Shield, HeartPulse, Sun, Droplets, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const therapyAreas = [
  {
    id: 'gastro',
    name: 'Gastroenterology',
    desc: 'Advanced proton pump inhibitors and prokinetic formulations addressing GERD, acid-peptic disorders, and gastric reflux.',
    specialty: 'Target Practice: GP, CP & Gastroenterology',
    icon: Activity
  },
  {
    id: 'respiratory',
    name: 'Respiratory & Pulmonology',
    desc: 'Synergistic dual-action antihistamines, expectorants, and bronchodilators for asthma, wheeze, and airway congestion.',
    specialty: 'Target Practice: GP, CP & Paediatric',
    icon: Wind
  },
  {
    id: 'ortho',
    name: 'Pain Management & Ortho',
    desc: 'Selective NSAIDs and analgesic combinations delivering rapid relief from musculoskeletal distress and arthritis pain.',
    specialty: 'Target Practice: GP, CP & Orthopaedics',
    icon: Shield
  },
  {
    id: 'nutrition',
    name: 'Neuro-Nutrition & Metabolic',
    desc: 'High-potency bioactive nerve nourishment compounds with Alpha Lipoic Acid and B-vitamins for neuropathy care.',
    specialty: 'Target Practice: GP, CP & Diabetology',
    icon: HeartPulse
  },
  {
    id: 'bone',
    name: 'Bone Health & Gynaecology',
    desc: 'Therapeutic calcium-cholecalciferol combinations and high-dose Vitamin D3 formulations preserving bone mineral density.',
    specialty: 'Target Practice: GP, Gynae & Paediatric',
    icon: Sun
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics & Hydration',
    desc: 'Child-safe calibrated oral drops, palatable suspensions, and WHO low-osmolarity oral rehydration formulas.',
    specialty: 'Target Practice: Paediatrics & General Physicians',
    icon: Droplets
  }
];

export default function TherapeuticAreas({ onSelectCategory }) {
  const handleView = (categoryId) => {
    onSelectCategory(categoryId);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section therapeutic-section" id="therapeutic-areas">
      <div className="container">
        <motion.div 
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Specialized Therapeutic Divisions</h2>
          <p className="section-desc">
            Essential pharmaceutical formulations engineered for high-frequency clinical prescribers across GP, CP, Gynae, and Paediatric healthcare sectors.
          </p>
        </motion.div>

        <div className="therapeutic-grid">
          {therapyAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div 
                key={area.id}
                className="therapy-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="therapy-card__icon">
                  <Icon size={22} />
                </div>
                <h3 className="therapy-card__name">{area.name}</h3>
                <p className="therapy-card__desc">{area.desc}</p>
                <div className="therapy-card__specialty">{area.specialty}</div>
                <button 
                  className="therapy-card__btn"
                  onClick={() => handleView(area.id)}
                >
                  View Formulations &rarr;
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
