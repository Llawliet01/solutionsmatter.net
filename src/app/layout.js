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
  description: 'Solutions Matter builds custom software, SaaS platforms, AI automation, CRM and ERP systems, and digital transformation solutions for growing businesses.',
  metadataBase: new URL('https://www.solutionsmatter.com'),
  keywords: [
    'custom software development',
    'web development services',
    'AI automation',
    'SaaS development',
    'CRM development',
    'ERP development',
    'digital transformation',
    'IT consulting'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'Solutions Matter | Premium IT Consulting & Custom Software Development',
    description: 'Your premium technology partner specializing in custom software engineering, responsive web development, AI solutions, and digital transformation.',
    url: 'https://www.solutionsmatter.com',
    siteName: 'Solutions Matter',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.solutionsmatter.com/images/logo.webp',
        width: 512,
        height: 512,
        alt: 'Solutions Matter logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Matter | Premium IT Consulting & Custom Software Development',
    description: 'Custom software, AI automation, SaaS, CRM, ERP, and digital transformation solutions.',
    images: ['https://www.solutionsmatter.com/images/logo.webp']
  }
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Solutions Matter',
    'url': 'https://www.solutionsmatter.com',
    'logo': 'https://www.solutionsmatter.com/images/logo.webp',
    'email': 'mailto:info@solutionsmatter.com',
    'description': 'Solutions Matter is a premium IT consulting and custom software development company focused on digital transformation and custom tech solutions.'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Solutions Matter',
    'url': 'https://www.solutionsmatter.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.solutionsmatter.com/insights/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
