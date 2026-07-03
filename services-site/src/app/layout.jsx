import "../index.css";

export const viewport = { themeColor: "#020617" };

export const metadata = {
  metadataBase: new URL('https://services.kanniyakumarione.com'),
  title: {
    default: "Web Design and Digital Services Worldwide | Kanniyakumarione",
    template: "%s | Kanniyakumarione"
  },
  description: "Kanniyakumarione helps businesses worldwide with websites, custom software, automation, SEO, Google Business optimization, Google Ads, and Meta Ads.",
  applicationName: "Kanniyakumarione",
  authors: [{ name: "Kanniyakumarione" }],
  generator: 'Next.js',
  keywords: ['Web Design', 'Digital Services', 'SEO', 'Automation', 'Google Ads', 'Meta Ads', 'Custom Software'],
  referrer: 'origin-when-cross-origin',
  creator: 'Kanniyakumarione',
  publisher: 'Kanniyakumarione',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Web Design and Digital Services Worldwide | Kanniyakumarione",
    description: "Explore websites, software, automation, SEO, Google Business setup, Google Ads, and Meta Ads for businesses worldwide.",
    url: "https://services.kanniyakumarione.com/",
    siteName: "Kanniyakumarione",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kanniyakumarione web design and digital services for global businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design and Digital Services Worldwide | Kanniyakumarione",
    description: "Websites, software, automation, SEO, Google Business support, Google Ads, and Meta Ads for businesses globally.",
    images: ["/og-image.svg"],
  },
  
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://services.kanniyakumarione.com/#business",
      "name": "Kanniyakumarione",
      "url": "https://services.kanniyakumarione.com/",
      "image": "https://services.kanniyakumarione.com/og-image.svg",
      "logo": "https://services.kanniyakumarione.com/favicon.ico",
      "description": "Website development, custom software, automation, SEO, Google Business Profile optimization, Google Ads, and Meta Ads for businesses worldwide.",
      "email": "mailto:kanniyakumarione@gmail.com",
      "telephone": "+91 73588 47752",
      "areaServed": ["Worldwide", "India", "United Kingdom", "United States", "Australia", "Canada", "Singapore"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+91 73588 47752",
        "email": "kanniyakumarione@gmail.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Tamil"]
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZjbjkFkgwBISuhMoaGCaApgCYvw_pJanlm0lmKUJNIg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
