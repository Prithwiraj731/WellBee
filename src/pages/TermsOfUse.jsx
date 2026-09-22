import React, { useEffect } from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { BookOpen, Scale, AlertTriangle, Copyright, ShieldAlert, Award } from 'lucide-react';

const tocItems = [
  { id: 'sec-scope', title: 'Scope & Target Audience' },
  { id: 'sec-no-d2c', title: 'No Direct-to-Consumer Dispensing' },
  { id: 'sec-ip', title: 'Intellectual Property & Trademarks' },
  { id: 'sec-monographs', title: 'Pharmacological Monographs Accuracy' },
  { id: 'sec-distribution', title: 'Trade & Distribution Inquiries' },
  { id: 'sec-jurisdiction', title: 'Governing Law & Jurisdiction' }
];

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "Terms of Website Use | WellBee Pharmaceutical Private Limited";
  }, []);

  return (
    <LegalPageLayout
      title="Terms of Website Use"
      subtitle="Corporate operating conditions, professional ethical usage terms, and intellectual property provisions of WellBee Pharmaceutical Private Limited."
      category="Corporate Legal Terms"
      effectiveDate="January 2026"
      docId="WB-TERMS-2026/V2.1"
      tocItems={tocItems}
    >
      <div className="legal-section" id="sec-scope">
        <h2 className="section-title">1. Scope &amp; Target Professional Audience</h2>
        <p>
          Welcome to the corporate digital portal of WellBee Pharmaceutical Private Limited ("WellBee", "the Company"). Access to and utilization of <strong>wellbeepharma.in</strong> are subject to these Terms of Use.
        </p>
        <p>
          This portal is published exclusively for licensed healthcare professionals (General Physicians, Consulting Physicians, Gynaecologists, Paediatricians, and Pulmonologists), registered retail/wholesale pharmacists, institutional hospital procurement departments, and accredited stockist trade partners.
        </p>
      </div>

      <div className="legal-callout callout-warning" id="sec-no-d2c">
        <div className="callout-icon">
          <AlertTriangle size={20} />
        </div>
        <div className="callout-content">
          <h4>No Direct-to-Consumer Dispensing (Statutory Schedule H Notice)</h4>
          <p>
            WellBee Pharmaceutical Private Limited does <strong>not sell, deliver, or dispense</strong> prescription drugs directly to patients or retail consumers through this website. All formulations referenced on this portal are <strong>Schedule H / Schedule M prescription drugs</strong> governed by the Drugs and Cosmetics Act, 1940 and must only be dispensed against a valid physical prescription from a Registered Medical Practitioner (RMP).
          </p>
        </div>
      </div>

      <div className="legal-section" id="sec-ip">
        <h2 className="section-title">2. Intellectual Property &amp; Trademarks</h2>
        <p>
          All trademarks, proprietary formulation names, brand identifiers, logo assets, graphic elements, and technical monographs appearing on this website are the exclusive intellectual property of WellBee Pharmaceutical Private Limited, protected under the Trade Marks Act, 1999 and the Copyright Act, 1957 of India.
        </p>
        <div className="legal-highlight-box">
          <p><strong>Protected WellBee Formulation Trademarks:</strong></p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-brand-primary)' }}>
            PantoBee-DSR • LevoBee-M • AceBee-P • NervBee-Plus • CalBee-D3 • FeroBee-XT • HydroBee-Z • ParaBee Suspension • BronchoBee-LS • D3-Bee 60K
          </p>
        </div>
        <p>
          Unauthorized copying, reproduction, commercial scraping, or re-distribution of any brand or scientific materials without express written authorization from WellBee Corporate Legal is strictly prohibited.
        </p>
      </div>

      <div className="legal-section" id="sec-monographs">
        <h2 className="section-title">3. Pharmacological Monographs &amp; Scientific Accuracy</h2>
        <p>
          While WellBee exercises rigorous quality assurance to ensure that all active pharmaceutical ingredients (APIs), excipient profiles, dissolution metrics, and stability specifications reflect contemporary Indian Pharmacopoeia (IP) and British Pharmacopoeia (BP) monographs, portal content is provided for informational and trade reference only.
        </p>
        <p>
          Registered medical practitioners must exercise their independent clinical judgment, review comprehensive package inserts, and consider individual patient contraindications prior to prescribing any therapeutic course.
        </p>
      </div>

      <div className="legal-section" id="sec-distribution">
        <h2 className="section-title">4. Trade &amp; Distribution Inquiries</h2>
        <p>
          Submitting a distributor or stockist inquiry through this website represents an expression of commercial interest and does not establish a legally binding supply agreement, territorial exclusivity, or commercial credit facility.
        </p>
        <p>
          Formal distribution rights are granted exclusively via executed bipartite agreements following thorough verification of state drug licenses (Form 20B/21B), GSTIN registration, cold-chain storage infrastructure, and commercial references.
        </p>
      </div>

      <div className="legal-section" id="sec-jurisdiction">
        <h2 className="section-title">5. Governing Law &amp; Exclusive Jurisdiction</h2>
        <p>
          These Terms of Use and any disputes arising from website access or commercial trade inquiries shall be governed by, construed, and enforced in accordance with the substantive laws of India.
        </p>
        <p>
          The courts of competent jurisdiction located in <strong>Mumbai and Panvel, Maharashtra, India</strong> shall have exclusive jurisdiction over any legal proceedings arising hereunder.
        </p>
      </div>
    </LegalPageLayout>
  );
}
