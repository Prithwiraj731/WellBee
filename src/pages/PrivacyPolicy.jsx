import React, { useEffect } from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { Shield, Lock, Eye, Database, Server, UserCheck } from 'lucide-react';

const tocItems = [
  { id: 'sec-overview', title: 'Scope & Regulatory Framework' },
  { id: 'sec-collection', title: 'Categories of Information Collected' },
  { id: 'sec-purpose', title: 'Purpose of Data Processing' },
  { id: 'sec-no-sale', title: 'Zero-Commercialization Guarantee' },
  { id: 'sec-security', title: 'Technical & Organizational Safeguards' },
  { id: 'sec-retention', title: 'Data Retention & Archiving' },
  { id: 'sec-contact', title: 'Grievance Officer & Contact Details' }
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Corporate Privacy Policy | WellBee Pharmaceutical Private Limited";
  }, []);

  return (
    <LegalPageLayout
      title="Corporate Privacy Policy"
      subtitle="Comprehensive data governance, commercial confidentiality, and regulatory privacy commitments of WellBee Pharmaceutical Private Limited."
      category="Statutory Data Governance"
      effectiveDate="January 2026"
      docId="WB-PRIVACY-2026/V2.1"
      tocItems={tocItems}
    >
      <div className="legal-section" id="sec-overview">
        <h2 className="section-title">1. Scope &amp; Regulatory Framework</h2>
        <p>
          WellBee Pharmaceutical Private Limited ("WellBee", "the Company", "we", "us"), headquartered with operational and commercial hubs in Mumbai and Panvel, Maharashtra, India, is dedicated to upholding the highest standards of data integrity and confidentiality.
        </p>
        <p>
          This Corporate Privacy Policy delineates how we collect, handle, process, and secure commercial, clinical, and applicant information obtained through our official corporate portal (<strong>wellbeepharma.in</strong>) and associated communications channels. Our practices are strictly compliant with:
        </p>
        <ul className="legal-list">
          <li>The Information Technology Act, 2000 (and amendments).</li>
          <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).</li>
          <li>Central Drugs Standard Control Organization (CDSCO) guidelines regarding confidential pharmacovigilance telemetry.</li>
        </ul>
      </div>

      <div className="legal-section" id="sec-collection">
        <h2 className="section-title">2. Categories of Information Collected</h2>
        <p>
          WellBee gathers information solely for legitimate pharmaceutical enterprise operations, qualified distributor onboarding, statutory pharmacovigilance reporting, and professional employment evaluation.
        </p>
        <div className="legal-grid-cards">
          <div className="legal-mini-card">
            <div className="mini-card-head">
              <Database size={16} className="text-primary" />
              <h4>Commercial &amp; Trade Inquiries</h4>
            </div>
            <p>
              Business entity name, wholesale drug license numbers (Form 20B/21B), GSTIN credentials, registered office address, designated territory interest, and authorized representative contact details.
            </p>
          </div>

          <div className="legal-mini-card">
            <div className="mini-card-head">
              <Shield size={16} className="text-primary" />
              <h4>Pharmacovigilance Telemetry</h4>
            </div>
            <p>
              Adverse Drug Reaction (ADR) reports, batch release details, reporter medical qualifications, and anonymized clinical observations submitted under drug safety protocols.
            </p>
          </div>

          <div className="legal-mini-card">
            <div className="mini-card-head">
              <UserCheck size={16} className="text-primary" />
              <h4>Talent &amp; Career Submissions</h4>
            </div>
            <p>
              Curricula Vitae (CV), academic and professional pharmaceutical qualifications, past therapeutic area experience, and applicant contact credentials.
            </p>
          </div>

          <div className="legal-mini-card">
            <div className="mini-card-head">
              <Server size={16} className="text-primary" />
              <h4>Technical Telemetry</h4>
            </div>
            <p>
              Anonymized IP telemetry, browser architecture, and portal performance metrics collected strictly to monitor infrastructure uptime, prevent DDoS exploits, and verify Core Web Vitals.
            </p>
          </div>
        </div>
      </div>

      <div className="legal-section" id="sec-purpose">
        <h2 className="section-title">3. Purpose of Data Processing</h2>
        <p>All collected data is processed strictly for legitimate institutional purposes, including:</p>
        <ul className="legal-list">
          <li><strong>Distributor Verification:</strong> Validating wholesale credentials and assigning authorized territorial supply agreements across Maharashtra and pan-India divisions.</li>
          <li><strong>Statutory Compliance:</strong> Fulfilling mandatory reporting protocols stipulated by the Indian Pharmacopoeia Commission (IPC) and Central Drugs Standard Control Organization (CDSCO).</li>
          <li><strong>Talent Recruitment:</strong> Reviewing candidate suitability for medical representative, quality assurance, and production positions.</li>
          <li><strong>Security &amp; Abuse Mitigation:</strong> Defending our corporate IT infrastructure against unauthorized tampering, automated scraping, or malicious intrusions.</li>
        </ul>
      </div>

      <div className="legal-callout callout-info" id="sec-no-sale">
        <div className="callout-icon">
          <Lock size={20} />
        </div>
        <div className="callout-content">
          <h4>Zero-Commercialization Guarantee</h4>
          <p>
            WellBee Pharmaceutical Private Limited operates as an ethical pharmaceutical manufacturer. We <strong>do not sell, rent, monetize, or trade</strong> commercial or personal data with third-party brokers, advertisers, or unauthorized external entities under any circumstances.
          </p>
        </div>
      </div>

      <div className="legal-section" id="sec-security">
        <h2 className="section-title">4. Technical &amp; Organizational Safeguards</h2>
        <p>
          We employ multi-layered technological and administrative safeguards to ensure that all data remains shielded from unauthorized access, accidental alteration, or disclosure:
        </p>
        <ul className="legal-list">
          <li><strong>256-Bit Transport Layer Security (TLS):</strong> All data submitted through our portal forms is transmitted over end-to-end encrypted tunnels.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Confidential distributor and clinical data is accessible solely by vetted corporate personnel bound by non-disclosure agreements.</li>
          <li><strong>Isolated Database Architectures:</strong> Commercial records and production batch logs are stored in hardened cloud database environments with automated failover and daily encryption snapshots.</li>
        </ul>
      </div>

      <div className="legal-section" id="sec-retention">
        <h2 className="section-title">5. Data Retention &amp; Archiving</h2>
        <p>
          We retain commercial records for the duration of the distributor partnership plus the statutory record-retention period mandated under the Drugs and Cosmetics Act, 1940. Pharmacovigilance safety reports are archived permanently in compliance with international ICH-GCP post-marketing surveillance guidelines.
        </p>
      </div>

      <div className="legal-section" id="sec-contact">
        <h2 className="section-title">6. Grievance Officer &amp; Statutory Contact</h2>
        <p>
          For queries regarding this privacy framework, data rights requests, or corporate compliance matters, please reach out to our designated Corporate Data Officer:
        </p>
        <div className="legal-highlight-box">
          <p><strong>Corporate Data &amp; Compliance Officer</strong></p>
          <p>WellBee Pharmaceutical Private Limited</p>
          <p>Mumbai / Panvel Corporate Hub, Maharashtra, India</p>
          <p><strong>Email:</strong> <a href="mailto:wellbeepharmaceuticals@gmail.com">wellbeepharmaceuticals@gmail.com</a></p>
          <p><strong>Hotline:</strong> <a href="tel:+918796913727">+91 87969 13727</a> (Mon–Sat, 09:30 – 18:30 IST)</p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
