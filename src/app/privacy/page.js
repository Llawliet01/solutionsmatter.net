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
          <p>Effective Date: June 8, 2026</p>
        </div>
      </section>

      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. Information We Collect</h2>
            <p>
              Solutions Matter collects contact information submitted through our online consultation and application forms (specifically name, email, company, and message text). We do not collect cookies or utilize third-party trackers unless explicitly consented to.
            </p>

            <h2>2. How We Use Information</h2>
            <p>
              We use the submitted information strictly to process your custom software consulting requests or job applications. We do not sell, share, or distribute your email address or business records to third-party advertisers.
            </p>

            <h2>3. Database Security & Compliance</h2>
            <p>
              We implement encryption protocols (SSL/TLS) to secure all active data pipelines. In accordance with enterprise standards, databases created for our clients utilize row-level security parameters and virtual private cloud setups on AWS.
            </p>

            <h2>4. Your Data Rights</h2>
            <p>
              You may request access to, correction of, or removal of any contact record stored in our support systems. Contact us directly at our general email link to process these requests.
            </p>

            <h2>5. Contact General Information</h2>
            <p>
              For concerns regarding our privacy configurations, send an email to: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
