import React, { useEffect } from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { 
  AlertTriangle, 
  Stethoscope, 
  PhoneCall, 
  Mail, 
  Building2, 
  FileCheck2, 
  ShieldAlert,
  HeartPulse
} from 'lucide-react';

const tocItems = [
  { id: 'sec-schedule-h', title: 'Statutory Schedule H & Schedule M Notice' },
  { id: 'sec-no-advice', title: 'No Medical Advice or Patient Consultation' },
  { id: 'sec-patient-advice', title: 'Direct Clinical Guidance for Patients' },
  { id: 'sec-adr-protocol', title: 'Pharmacovigilance & ADR Reporting Protocol' },
  { id: 'sec-safety-contact', title: '24/7 Drug Safety Contact Directory' }
];

export default function MedicalDisclaimer() {
  useEffect(() => {
    document.title = "Medical & Pharmacovigilance Disclaimer | WellBee Pharmaceutical Private Limited";
  }, []);

  return (
    <LegalPageLayout
      title="Medical & Pharmacovigilance Disclaimer"
      subtitle="Statutory regulatory warnings, prescription medicine compliance notices, and institutional adverse event reporting protocols."
      category="Statutory Medical Governance"
      effectiveDate="January 2026"
      docId="WB-MED-DISCLAIMER-2026/V2.1"
      tocItems={tocItems}
    >
      <div className="legal-callout callout-danger" id="sec-schedule-h">
        <div className="callout-icon">
          <ShieldAlert size={22} />
        </div>
        <div className="callout-content">
          <h4>MANDATORY STATUTORY SCHEDULE H PRESCRIPTION WARNING</h4>
          <p>
            <strong>Warning:</strong> All formulations engineered, manufactured, or distributed by WellBee Pharmaceutical Private Limited are <strong>Schedule H / Schedule M Prescription Formulations</strong> under the Drugs and Cosmetics Act, 1940 and the Drugs and Cosmetics Rules, 1945 of India.
          </p>
          <p style={{ marginTop: '8px', fontWeight: 600 }}>
            "To be sold by retail on the prescription of a Registered Medical Practitioner (RMP) only."
          </p>
        </div>
      </div>

      <div className="legal-section" id="sec-no-advice">
        <h2 className="section-title">1. No Medical Advice or Doctor-Patient Relationship</h2>
        <p>
          The content displayed across <strong>wellbeepharma.in</strong>, including dosage presentations, dissolution profiles, pharmacopoeial monographs, and therapeutic indications, is intended solely for scientific documentation, professional reference by licensed healthcare providers, and institutional trade verification.
        </p>
        <p>
          Under no circumstances does information on this portal constitute:
        </p>
        <ul className="legal-list">
          <li>Direct clinical or medical advice for personal diagnostic evaluation.</li>
          <li>A therapeutic recommendation to initiate, modify, or terminate any pharmacotherapy course.</li>
          <li>An endorsement of self-medication, off-label administration, or unsupervised dosage titration.</li>
          <li>A doctor-patient, practitioner-patient, or pharmacist-consumer therapeutic relationship.</li>
        </ul>
      </div>

      <div className="legal-section" id="sec-patient-advice">
        <h2 className="section-title">2. Direct Clinical Guidance for Patients &amp; Consumers</h2>
        <div className="legal-highlight-box">
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Stethoscope size={22} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
                Always Consult a Qualified Medical Practitioner
              </p>
              <p style={{ fontSize: '13.5px', color: 'var(--color-slate-600)', margin: 0 }}>
                If you are a patient experiencing acute symptoms or seeking guidance on gastrointestinal, respiratory, pain management, haematinic, or paediatric care, please schedule an in-person consultation with a qualified Registered Medical Practitioner (MBBS, MD, or certified specialist). Never rely on online information to self-diagnose.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="legal-section" id="sec-adr-protocol">
        <h2 className="section-title">3. Pharmacovigilance &amp; Adverse Drug Reaction (ADR) Reporting Protocol</h2>
        <p>
          WellBee maintains a rigorous, proactive Drug Safety and Post-Marketing Surveillance Unit operating under the standards of the <strong>Pharmacovigilance Programme of India (PvPI)</strong> and the <strong>Indian Pharmacopoeia Commission (IPC)</strong>.
        </p>
        <p>
          Healthcare professionals, pharmacists, and consumers who suspect an Adverse Drug Reaction (ADR), product quality issue, or unexpected side-effect linked to any WellBee formulation are urged to report the incident immediately.
        </p>

        <div className="legal-grid-cards" style={{ marginTop: '16px' }}>
          <div className="legal-mini-card">
            <h4>Information Requested for ADR Submissions:</h4>
            <ul className="legal-list" style={{ marginTop: '8px', fontSize: '12.5px' }}>
              <li><strong>Patient Data:</strong> Age, gender, non-identifiable initials, and relevant medical history.</li>
              <li><strong>Suspect Product:</strong> WellBee brand name, active chemical composition, batch number, manufacturing date, and expiry date.</li>
              <li><strong>Reaction Details:</strong> Description of reaction, onset time, severity, and clinical intervention required.</li>
              <li><strong>Reporter Details:</strong> Name, professional qualification (RMP/Pharmacist/Nurse), clinic/hospital address, and contact number.</li>
            </ul>
          </div>

          <div className="legal-mini-card">
            <h4>Quality Defect &amp; Packaging Inquiries:</h4>
            <p style={{ fontSize: '12.5px' }}>
              To report broken blister barrier sealing, anomalous tablet discolouration, sediment in liquid suspensions, or labeling anomalies, retain the primary packaging and carton intact for analysis by our QA/QC validation team.
            </p>
          </div>
        </div>
      </div>

      <div className="legal-section" id="sec-safety-contact">
        <h2 className="section-title">4. 24/7 Drug Safety Contact Directory</h2>
        <p>Direct your safety alerts or pharmacovigilance reports to our dedicated unit:</p>
        <div className="legal-highlight-box">
          <p><strong>Pharmacovigilance &amp; Medical Safety Division</strong></p>
          <p>WellBee Pharmaceutical Private Limited</p>
          <p>Mumbai / Panvel Corporate Hub, Maharashtra, India</p>
          <p><strong>Primary Safety Email:</strong> <a href="mailto:wellbeepharmaceuticals@gmail.com">wellbeepharmaceuticals@gmail.com</a></p>
          <p><strong>Emergency Medical Safety Hotline:</strong> <a href="tel:+918796913727">+91 87969 13727</a></p>
          <p style={{ fontSize: '12px', color: 'var(--color-slate-500)', marginTop: '6px' }}>
            * All safety telemetry is handled with strict medical confidentiality and escalated in accordance with statutory CDSCO reporting timelines.
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
