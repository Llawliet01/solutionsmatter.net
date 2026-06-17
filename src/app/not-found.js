import Link from 'next/link';
import { ArrowRight, Search, Home, LifeBuoy } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      className="section-spacing"
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        background: 'radial-gradient(circle at top, rgba(94, 110, 130, 0.12), transparent 40%), linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)',
      }}
    >
      <div className="container" style={{ maxWidth: '920px' }}>
        <div
          className="card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 5rem)',
            borderRadius: '28px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 30px 90px rgba(10, 20, 40, 0.12)',
            background: 'rgba(255, 255, 255, 0.92)',
          }}
        >
          <span className="badge">404</span>
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', margin: '12px 0 8px', lineHeight: 0.95 }}>Page not found</h1>
          <p style={{ fontSize: '1.8rem', maxWidth: '60rem', color: 'var(--text-secondary)', marginBottom: '2.4rem' }}>
            The page you requested may have moved, been renamed, or never existed. Use the links below to get back to the main service areas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.4rem' }}>
            <Link href="/" className="btn btn-primary">
              <Home size={16} />
              <span>Go Home</span>
            </Link>
            <Link href="/services" className="btn btn-secondary">
              <Search size={16} />
              <span>Browse Services</span>
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              <LifeBuoy size={16} />
              <span>Contact Support</span>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { href: '/solutions', title: 'Solutions', desc: 'AI, CRM, ERP, and automation systems.' },
              { href: '/industries', title: 'Industries', desc: 'Healthcare, finance, SaaS, manufacturing, retail.' },
              { href: '/insights/blog', title: 'Insights', desc: 'Articles, guides, and technical analysis.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: '1.4rem 1.6rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  background: '#fff',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <strong style={{ fontSize: '1.8rem' }}>{item.title}</strong>
                  <ArrowRight size={16} />
                </div>
                <p style={{ marginTop: '8px', fontSize: '1.4rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}