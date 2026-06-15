import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import './industry-pages.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  variable: '--font-fraunces',
});


export const metadata = {
  title: {
    default: 'Solutions Matter | Premium IT Consulting & Custom Software Development',
    template: '%s | Solutions Matter'
  },
  description: 'Solutions Matter is a premium IT consulting and software development company specializing in custom software, mobile app development, AI solutions, and digital transformation.',
  metadataBase: new URL('https://www.solutionsmatter.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Solutions Matter | Premium IT Consulting & Custom Software Development',
    description: 'Your premium technology partner specializing in custom software engineering, responsive web development, and digital transformation.',
    url: 'https://www.solutionsmatter.com',
    siteName: 'Solutions Matter',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Solutions Matter',
    'url': 'https://www.solutionsmatter.com',
    'logo': 'https://www.solutionsmatter.com/images/logo.webp',
    'email': 'mailto:info@solutionsmatter.com',
    'description': 'Solutions Matter is a premium IT consulting and custom software development company focused on digital transformation and custom tech solutions.'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <ScrollRevealInit />
        <Header />
        <main className="main-content-layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
