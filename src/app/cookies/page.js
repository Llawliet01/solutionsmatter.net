import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Solutions Matter Cookie Policy detailing our essential session cookies usage policies.'
};

export default function CookiesPage() {
  return (
    <>
      {/* Cookies Hero */}
      <section className="policy-hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p>Effective Date: June 8, 2026</p>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. What are Cookies</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device by websites you visit. They are commonly used to make websites work, or work more efficiently, as well as to provide general site metrics.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Solutions Matter does NOT use marketing tracking cookies, advertising trackers, or share information with third-party retargeting pixels (e.g. Meta pixel). We only utilize essential, secure technical session cookies necessary for website layout configurations, security form submission tokens, and standard user configurations.
            </p>

            <h2>3. Managing Cookie Settings</h2>
            <p>
              You can block or delete cookies by adjusting your browser settings (Chrome, Firefox, Safari, Edge). Please note that disabling essential cookies may impact certain responsive layout interactions.
            </p>

            <h2>4. Policy Updates</h2>
            <p>
              We may update this policy periodically to align with security guidelines. Any modifications will be logged with a new effective date at the top of this page.
            </p>

            <h2>5. Inquiries</h2>
            <p>
              For concerns regarding our cookie policies, send an email to: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
