import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Solutions Matter Privacy Policy detailing patient compliance, cloud data storage systems, and visitor tracking structures.'
};

export default function PrivacyPage() {
  return (
    <>
      <section className="policy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Effective Date: June 06, 2026</p>
        </div>
      </section>

      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. Introduction & Scope</h2>
            <p>
              Solutions Matter (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your corporate and personal data. This Privacy Policy outlines our practices regarding the collection, usage, storage, and protection of information when you visit our website, schedule consulting discovery sessions, interact with our staging environments, or contract our custom software engineering services.
            </p>

            <h2>2. Types of Information We Collect</h2>
            <p>
              We collect information to provide, maintain, and optimize our custom technology offerings. The types of data we gather include:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Contact Information:</strong> Full name, professional email address, phone number, company name, and project descriptions submitted voluntarily through our consultation forms.</li>
              <li><strong>Technical Metadata:</strong> IP addresses, browser types, operating systems, screen dimensions, device types, and page scroll navigation records. This data is collected anonymously to optimize our web app performance and responsive layouts.</li>
              <li><strong>Staging & Testing Data:</strong> While auditing beta links or staging deployments, we may collect session logs, database execution queries, and error metrics strictly to troubleshoot client builds.</li>
            </ul>

            <h2>3. Methods of Data Collection</h2>
            <p>
              We collect information through standard, transparent avenues:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Direct Form Inputs:</strong> Information you explicitly type and submit via our contact, request-for-proposal, or career portal forms.</li>
              <li><strong>Secure Server Access Logs:</strong> Automated logging of page visits, requests, and latency values to ensure our serverless clusters operate within target parameters.</li>
              <li><strong>Client-Authorized Credentials:</strong> API keys, staging server credentials, or database configurations provided under non-disclosure agreements (NDAs) to perform project integrations.</li>
            </ul>

            <h2>4. Purposes of Data Processing</h2>
            <p>
              We utilize collected data solely to conduct our professional operations, specifically:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Consulting Evaluations:</strong> Processing lead details to compile project estimates, tech stack recommendations, and delivery timeline blueprints.</li>
              <li><strong>Contract Management:</strong> Coordinating bi-weekly development sprints, scheduling reviews, and fulfilling Master Service Agreement (MSA) milestones.</li>
              <li><strong>System Performance & Auditing:</strong> Monitoring serverless function logs and optimizing CSS layout animations to deliver premium responsive web performance.</li>
            </ul>

            <h2>5. Data Share & Third-Party Disclosures</h2>
            <p>
              We do NOT sell, lease, or rent your corporate records, personal information, or email addresses to third-party marketing companies, advertisers, or retargeting networks. We disclose information only to standard, secure hosting infrastructure providers (such as AWS and Vercel) strictly to serve our web content, under isolated parameters that prevent data leaking.
            </p>

            <h2>6. Database Security & compliance Protocols</h2>
            <p>
              As custom software engineers specializing in high-compliance architectures, we prioritize security:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Network Encryptions:</strong> All data in transit is encrypted using TLS 1.3 cryptographic protocols. All data at rest is stored behind AES-256 database encryptions.</li>
              <li><strong>Virtual Private Clouds (VPC):</strong> Databases and API endpoints created for our clients are isolated within secure, virtual private networks on Amazon Web Services (AWS) with strict firewall white-lists.</li>
              <li><strong>Row-Level Security (RLS):</strong> Multi-tenant SaaS schemas utilize active database-level policies to ensure strict tenant data segregation, preventing authorization bypasses (BOLA).</li>
              <li><strong>Compliance Readiness:</strong> We build databases according to industry-standard data security guidelines and OWASP Top 10 security standards.</li>
            </ul>

            <h2>7. Data Retention & Purging Policies</h2>
            <p>
              We retain contact lead records for up to 24 months to coordinate prospective accounts. For active projects, client data is stored strictly for the duration of the MSA contract. Upon contract termination or project handoff, we execute automated scripts to wipe database credentials and staging backups from our networks, transferring 100% intellectual property ownership to the client.
            </p>

            <h2>8. Your Legal Rights</h2>
            <p>
              Under applicable international data regulations, you hold full authority over your data. You may exercise the following options:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Right of Access & Portability:</strong> Request a complete summary export of any contact records we have collected.</li>
              <li><strong>Right to Rectification:</strong> Request changes to correct inaccurate phone numbers, names, or corporate profiles.</li>
              <li><strong>Right of Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate purging of your contact records from our active lead databases.</li>
            </ul>

            <h2>9. Policy Modifications</h2>
            <p>
              We may update this Privacy Policy to reflect changing security guidelines or infrastructure upgrades. If updates occur, we will log the changes with a new effective date at the top of this page.
            </p>

            <h2>10. Contact Details</h2>
            <p>
              To submit data request requests, ask compliance questions, or seek database security details, contact our engineering lead at: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
