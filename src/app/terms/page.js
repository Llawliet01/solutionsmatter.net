import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Solutions Matter Terms and Conditions detailing custom code delivery, IP rights, and support terms.'
};

export default function TermsPage() {
  return (
    <>
      <section className="policy-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: June 15, 2026</p>
        </div>
      </section>

      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. Contractual Agreement & Scope</h2>
            <p>
              These Terms & Conditions constitute a legally binding agreement between Solutions Matter ("we," "our," or "us") and the individual or business entity accessing our website or contracting our engineering services ("Client," "you," or "your"). By utilizing our services, reviewing custom staging environments, or engaging in consultation discovery sessions, you acknowledge and agree to abide by these terms.
            </p>

            <h2>2. Scope of Services & SOW Execution</h2>
            <p>
              Solutions Matter provides technical consulting, custom software development, cloud orchestration (DevOps), database configurations, and UI/UX design. Specific timelines, deliverables, sprint schedules, and pricing matrices are governed by distinct Statements of Work (SOWs) and Master Service Agreements (MSAs) signed by both parties. Any discrepancies between these Terms and a signed SOW shall be resolved in favor of the SOW.
            </p>

            <h2>3. Intellectual Property (IP) Allocation</h2>
            <p>
              We prioritize complete transparency and ownership transfer:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Custom Deliverables:</strong> Upon 100% completion of milestone payments set forth in the SOW, all custom source code, relational database schemas, customized styling vectors, and configurations developed specifically for you belong entirely to you (the Client) with zero ongoing per-user license fees.</li>
              <li><strong>Pre-Existing Library Abstractions:</strong> Solutions Matter retains the intellectual property rights to our pre-existing software abstractions, tooling libraries, standard scripts, and generalized developer frameworks. We grant Client a perpetual, royalty-free, non-exclusive, worldwide license to compile, run, and modify these abstractions within the custom codebase.</li>
            </ul>

            <h2>4. Financial Terms, Invoicing & SLA Fees</h2>
            <p>
              Payments for custom engineering are structured around SOW project milestones. Invoices are issued upon completing specified sprint deliverables. Client agrees to pay all invoices within fourteen (14) calendar days of receipt. Late payments may result in the temporary suspension of development sprints, cloud staging servers, and support pipelines. Ongoing hosting maintenance SLA fees are billed monthly on a separate schedule.
            </p>

            <h2>5. Client Responsibilities & Asset Approvals</h2>
            <p>
              Successful engineering requires timely coordination. Client agrees to provide accurate database schemas, API keys, content assets, and required approvals within three (3) business days of request. Solutions Matter is not responsible for project delays, deployment failures, or milestone extensions caused by Client withholding credentials, assets, or final design confirmations.
            </p>

            <h2>6. Development Sprints & Staging Audits</h2>
            <p>
              Our process is designed for feedback. We deliver code in bi-weekly sprints, deploying progress to secure staging links. Client has fourteen (14) calendar days from a sprint deployment to click, audit, and provide feedback on the staging builds. If no feedback is received within fourteen (14) days, the sprint code and assets are deemed accepted, and development moves to the next SOW phase.
            </p>

            <h2>7. Technical Warranties & Post-Delivery Support</h2>
            <p>
              We stand behind our code. Solutions Matter provides a ninety (90) day technical warranty starting on the date the custom software is launched in production. This warranty covers software bugs, connection crashes, and security errors that deviate from SOW requirements. This warranty does not cover issues caused by third-party API adjustments, browser configuration updates, client edits, or hosting errors outside our control.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by governing law, Solutions Matter's total aggregate liability for any claims, damages, or breaches arising under these Terms, MSAs, or SOWs is strictly capped at the total amount paid by Client to Solutions Matter during the preceding three (3) months. We are not liable for data loss, server downtime, security breaches, or revenue losses occurring outside our direct control or within third-party hosting infrastructures (such as AWS, GCP, Vercel).
            </p>

            <h2>9. Contract Termination Policies</h2>
            <p>
              Either party may terminate a SOW or MSA for cause if the other party breaches material terms and fails to cure the breach within thirty (30) days of receiving written notice. Upon termination, Client agrees to pay Solutions Matter for all completed development sprints, design configurations, and accrued work hours up to the effective termination date.
            </p>

            <h2>10. Dispute Resolution & Governing Law</h2>
            <p>
              These Terms, and all contractual relations between Client and Solutions Matter, are governed by the laws of the State, without regard to conflict of law principles. Any disputes or claims arising out of these agreements shall be resolved through binding confidential arbitration, rather than in court.
            </p>

            <h2>11. Contact & Inquiries</h2>
            <p>
              For questions, contract clarifications, or notifications regarding our terms, write to our operations desk at: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
