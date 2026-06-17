const SITE_URL = 'https://www.solutionsmatter.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/logo.webp`;

export function makeMetadata({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_IMAGE,
  keywords = [],
  noindex = false,
}) {
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    alternates: path ? { canonical: path } : undefined,
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url: path ? `${SITE_URL}${path}` : SITE_URL,
      siteName: 'Solutions Matter',
      locale: 'en_US',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function makeBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export { SITE_URL, DEFAULT_IMAGE };