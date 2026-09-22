import React, { useEffect } from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { Cookie, CheckCircle2, ShieldCheck, Settings, Info } from 'lucide-react';

const tocItems = [
  { id: 'sec-what', title: 'What Are Cookies & Why We Use Them' },
  { id: 'sec-types', title: 'Categories of Cookies Used' },
  { id: 'sec-no-ads', title: 'Zero Third-Party Advertising Trackers' },
  { id: 'sec-manage', title: 'Managing & Disabling Browser Cookies' },
  { id: 'sec-updates', title: 'Policy Amendments & Inquiries' }
];

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | WellBee Pharmaceutical Private Limited";
  }, []);

  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="Transparent explanation of how WellBee Pharmaceutical uses strictly necessary and functional cookies to ensure secure portal operation."
      category="Technical Governance & Cookies"
      effectiveDate="January 2026"
      docId="WB-COOKIE-2026/V2.1"
      tocItems={tocItems}
    >
      <div className="legal-section" id="sec-what">
        <h2 className="section-title">1. What Are Cookies &amp; Why We Use Them</h2>
        <p>
          Cookies are compact text files placed onto your workstation or mobile device by a web server when you navigate through an internet portal. They enable the portal to remember user sessions, guarantee cryptographic communication integrity, and retain display configurations.
        </p>
        <p>
          WellBee Pharmaceutical Private Limited deploys cookies conservatively and solely to power essential portal operations, ensure zero-latency product monograph navigation, and verify security protocols for trade desk submissions.
        </p>
      </div>

      <div className="legal-section" id="sec-types">
        <h2 className="section-title">2. Categories of Cookies Deployed on WellBee</h2>
        <div className="legal-grid-cards">
          <div className="legal-mini-card">
            <div className="mini-card-head">
              <ShieldCheck size={16} className="text-primary" />
              <h4>Strictly Necessary Cookies</h4>
            </div>
            <p>
              Vital for portal security, session validation, and protection against Cross-Site Request Forgery (CSRF). Disabling these cookies prevents the distributor enquiry desk and interactive catalogue filters from functioning.
            </p>
            <div className="cookie-expiry"><strong>Duration:</strong> Session-based (Terminates on browser close)</div>
          </div>

          <div className="legal-mini-card">
            <div className="mini-card-head">
              <Settings size={16} className="text-primary" />
              <h4>Functional &amp; Preference Cookies</h4>
            </div>
            <p>
              Remembers your selected therapeutic vertical filter (e.g., Gastroenterology, Paediatrics) and modal display preferences across navigation cycles to enhance your browsing experience.
            </p>
            <div className="cookie-expiry"><strong>Duration:</strong> Up to 30 days</div>
          </div>

          <div className="legal-mini-card">
            <div className="mini-card-head">
              <CheckCircle2 size={16} className="text-primary" />
              <h4>Telemetry &amp; Core Web Vitals</h4>
            </div>
            <p>
              Collects strictly aggregated, anonymized server-side metrics regarding page load velocity and resource latency via our Vercel / Render deployment infrastructure with zero personally identifiable indicators.
            </p>
            <div className="cookie-expiry"><strong>Duration:</strong> Anonymized aggregated logs</div>
          </div>
        </div>
      </div>

      <div className="legal-callout callout-info" id="sec-no-ads">
        <div className="callout-icon">
          <Cookie size={20} />
        </div>
        <div className="callout-content">
          <h4>Strict Ban on Third-Party Advertising Trackers</h4>
          <p>
            WellBee does <strong>not deploy cross-site tracking pixels, third-party advertising cookies, or behavioral profiling mechanisms</strong> (such as social network pixel beacons or ad retargeting networks). Your navigation on our portal remains private and unmonetized.
          </p>
        </div>
      </div>

      <div className="legal-section" id="sec-manage">
        <h2 className="section-title">3. Managing &amp; Disabling Browser Cookies</h2>
        <p>
          You maintain complete authority over cookie preferences through your web browser configuration. You may elect to block or delete cookies at any time:
        </p>
        <ul className="legal-list">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies &gt; Block all third-party cookies.</li>
          <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
          <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies.</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies and site data.</li>
        </ul>
        <p>
          <em>Please note that disabling strictly necessary cookies may impact the performance of trade inquiry form submissions.</em>
        </p>
      </div>

      <div className="legal-section" id="sec-updates">
        <h2 className="section-title">4. Policy Amendments &amp; Technical Support</h2>
        <p>
          We periodically review technical cookie deployments to remain aligned with evolving Indian data governance standards. For questions concerning our cookie practices, reach our Technical Administration Team at <a href="mailto:wellbeepharmaceuticals@gmail.com">wellbeepharmaceuticals@gmail.com</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
