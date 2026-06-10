import { ShieldCheck, Cpu, Layout, Compass, Users } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'About Solutions Matter',
  description: 'Learn about Solutions Matter, our company mission, core values, and development process. We specialize in engineering high-compliance custom software architectures.'
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Security-First Architecture',
      desc: 'We integrate role-based database permissions, HIPAA encryption compliance, and API security tokens within every custom build from day one.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Technical Excellence',
      desc: 'Our codebases rely on industry-standard React/NextJS frontends, PostgreSQL databases, Docker container pipelines, and AWS staging networks.'
    },
    {
      icon: <Layout size={28} />,
      title: 'Operational Transparency',
      desc: 'We coordinate tasks through two-week Agile sprints. Clients receive access to live staging links and code logs to monitor development progress.'
    },
    {
      icon: <Compass size={28} />,
      title: 'Absolute IP Ownership',
      desc: 'We build clean, customized systems with zero per-user licensing fees. The software code and database files belong entirely to your company.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content text-center">
            <span className="badge">Who We Are</span>
            <h1>Engineering Premium Technology Partners</h1>
            <p>
              Solutions Matter is a professional IT consulting and software engineering firm focused on custom enterprise software, cloud structures, and workflow automation.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Profile Section */}
      <section className="section-spacing profile-section">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-intro-text">
              <h2>Company Overview</h2>
              <p>
                We believe that software should match the unique operations of the enterprise using it. Pre-packaged SaaS applications often introduce user friction, lock data behind expensive license paywalls, and prevent crucial integrations.
              </p>
              <p>
                Solutions Matter co-engineers custom web portals, cross-platform mobile apps, and machine learning models from scratch. We focus on scalability, clean interface design, and deep system connectivity.
              </p>
            </div>
            <div className="card mission-vision-card">
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>
                  To design and build secure, custom software architectures that automate administrative bottlenecks, secure corporate databases, and drive lead conversions.
                </p>
              </div>
              <div className="vision-box">
                <h3>Our Vision</h3>
                <p>
                  To serve as the primary technology partner for scaling SMEs, startups, and enterprises seeking secure digital transformations and custom IP equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-spacing values-section">
        <div className="container">
          <div className="heading-group">
            <span className="badge">Our Standards</span>
            <h2>Core Corporate Values</h2>
            <p>The engineering principles that guide our development cycles and software quality assurances.</p>
          </div>
          <div className="grid-2">
            {values.map((v, idx) => (
              <div key={idx} className="card value-card">
                <div className="value-icon-box">{v.icon}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle CTA */}
          <CTA variant="middle" />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA variant="bottom" />
    </>
  );
}
