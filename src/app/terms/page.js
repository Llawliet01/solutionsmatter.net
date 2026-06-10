import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Solutions Matter Terms and Conditions detailing custom code delivery, IP rights, and support terms.'
};

export default function TermsPage() {
  return (
    <>
      {/* Terms Hero */}
      <section className="policy-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: June 8, 2026</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. Service Delivery</h2>
            <p>
              Solutions Matter provides custom software development, cloud DevOps orchestration, website designs, and automation pipelines under mutual Master Service Agreements (MSAs). Specific milestones, pricing structures, and SLA parameters are established in distinct Statements of Work (SOWs).
            </p>

            <h2>2. Intellectual Property (IP) Rights</h2>
            <p>
              Upon complete payment of project milestones, the custom codebase, database schemas, graphics, and server scripts developed specifically for a client belong entirely to the client, with zero ongoing per-user licensing fees. Solutions Matter retains general developer skills, utility codes, and library abstractions.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>
              Clients must provide accurate data schemas, API credentials, and required asset approvals in a timely manner. Solutions Matter is not responsible for project delays caused by client assets or credentials being withheld.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              Solutions Matter is not liable for data loss, server downtime, or cyber security breaches occurring outside of our direct telemetry network control or within third-party hosting frameworks (e.g., AWS, GCP).
            </p>

            <h2>5. Contact Information</h2>
            <p>
              For questions regarding our terms of service, reach out to us at: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
