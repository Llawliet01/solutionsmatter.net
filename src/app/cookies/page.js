import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Solutions Matter Cookie Policy detailing our essential session cookies usage policies.'
};

export default function CookiesPage() {
  return (
    <>
      <section className="policy-hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p>Effective Date: June 15, 2026</p>
        </div>
      </section>

      <section className="section-spacing policy-body">
        <div className="container">
          <div className="card policy-card-content">
            <h2>1. What are Cookies?</h2>
            <p>
              Cookies are small alphanumeric text files stored on your computer, mobile device, or tablet by websites you visit. They allow web applications to maintain state, identify returning users, and coordinate security frameworks. First-party cookies are set directly by the site you are visiting, while third-party cookies are set by external services (such as tracking scripts or analytic widgets) embedded within the site.
            </p>

            <h2>2. Our Strict Anti-Tracking Commitment</h2>
            <p>
              Solutions Matter believes in complete data privacy. Unlike generic software portals, **we do NOT utilize marketing cookies, cross-site trackers, behavioral profiling algorithms, or share information with retargeting pixels (e.g. Meta pixel)**. We only deploy essential, secure technical session cookies and local storage configurations necessary for website navigation, user configurations, and secure form tokens.
            </p>

            <h2>3. Detailed Breakdown of Cookies Used</h2>
            <p>
              The table below catalogs every cookie configuration utilized on our platform:
            </p>

            <div style={{ overflowX: 'auto', marginTop: '12px', marginBottom: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.4rem', border: '1px solid var(--border)', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--border)', color: 'var(--main-dark)', fontWeight: '700' }}>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Cookie Name</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Category</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Purpose</th>
                    <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--border)' }}>Lifespan</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-secondary)' }}>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--main-dark)' }}>`sm_session_token`</td>
                    <td style={{ padding: '12px 16px' }}>Essential Session</td>
                    <td style={{ padding: '12px 16px' }}>Manages secure browser authentication during client dashboard and staging project audits.</td>
                    <td style={{ padding: '12px 16px' }}>Session-Only</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--main-dark)' }}>`sm_csrf_token`</td>
                    <td style={{ padding: '12px 16px' }}>Essential Security</td>
                    <td style={{ padding: '12px 16px' }}>Prevents Cross-Site Request Forgery attacks on contact form and RFP proposal submissions.</td>
                    <td style={{ padding: '12px 16px' }}>Session-Only</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--main-dark)' }}>`sm_theme_pref`</td>
                    <td style={{ padding: '12px 16px' }}>Functional Cache</td>
                    <td style={{ padding: '12px 16px' }}>Remembers visual configurations and theme selections (e.g. Dark Mode transitions).</td>
                    <td style={{ padding: '12px 16px' }}>30 Days</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--main-dark)' }}>`sm_layout_nav`</td>
                    <td style={{ padding: '12px 16px' }}>Functional Cache</td>
                    <td style={{ padding: '12px 16px' }}>Remembers collapsible navigation state configurations and bento hover variables.</td>
                    <td style={{ padding: '12px 16px' }}>30 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. Managing Cookie Settings on Your Device</h2>
            <p>
              You hold complete control over your browser's cookie storage. You can audit, block, or delete cookies by accessing your web browser settings. Follow the guides below for common browsers:
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Google Chrome:</strong> Go to Settings → Privacy and Security → Cookies and other site data.</li>
              <li><strong>Mozilla Firefox:</strong> Go to Settings → Privacy & Security → Cookies and Site Data.</li>
              <li><strong>Apple Safari:</strong> Go to Preferences → Privacy → Block all cookies.</li>
              <li><strong>Microsoft Edge:</strong> Go to Settings → Cookies and site permissions → Manage and delete cookies.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              *Please note that blocking essential security and session cookies may prevent you from successfully submitting RFP forms or logging into custom staging dashboards.*
            </p>

            <h2>5. Periodic Policy Revisions</h2>
            <p>
              We periodically review our technical configurations to ensure absolute security. Any adjustments to our cookies usage will be logged immediately with an updated effective date at the top of this policy page.
            </p>

            <h2>6. Help Desk Contact</h2>
            <p>
              If you have any questions, security concerns, or require assistance managing your privacy configurations on our portal, contact our compliance desk at: <a href="mailto:info@solutionsmatter.com">info@solutionsmatter.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
