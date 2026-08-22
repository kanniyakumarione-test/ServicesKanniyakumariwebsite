import { Inter, Syne, Playfair_Display, Montserrat } from "next/font/google";
import "../index.css";
import CursorGrid from "../components/CursorGrid";
import LenisProvider from "../components/LenisProvider";
import Preloader from "../components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const viewport = { themeColor: "#020617" };

export const metadata = {
  metadataBase: new URL('https://softgenz.kanniyakumarione.com'),
  title: {
    default: "Web Design and Digital Services Worldwide | SOFTGENZ",
    template: "%s | SOFTGENZ"
  },
  description: "Software for the Digital Generation. SOFTGENZ helps businesses worldwide with websites, custom software, automation, SEO, Google Business optimization, Google Ads, and Meta Ads.",
  applicationName: "SOFTGENZ",
  authors: [{ name: "SOFTGENZ" }],
  generator: 'Next.js',
  keywords: ['Web Design Company Nagercoil', 'Software Developer Kanyakumari', 'Digital Marketing Agency', 'SEO Expert Tamil Nadu', 'Best Web Design India', 'Custom Software Development', 'Google Ads Agency', 'Meta Ads Expert', 'Business Automation Services'],
  referrer: 'origin-when-cross-origin',
  creator: 'SOFTGENZ',
  publisher: 'SOFTGENZ',
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
  alternates: {
    canonical: 'https://softgenz.kanniyakumarione.com',
  },
  openGraph: {
    title: "Web Design and Digital Services Worldwide | SOFTGENZ",
    description: "Software for the Digital Generation. Explore websites, software, automation, SEO, Google Business setup, Google Ads, and Meta Ads for businesses worldwide.",
    url: "https://softgenz.kanniyakumarione.com/",
    siteName: "SOFTGENZ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOFTGENZ web design and digital services for global businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design and Digital Services Worldwide | SOFTGENZ",
    description: "Websites, software, automation, SEO, Google Business support, Google Ads, and Meta Ads for businesses globally.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/softgenz.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://softgenz.kanniyakumarione.com/#business",
      "name": "SOFTGENZ",
      "url": "https://softgenz.kanniyakumarione.com/",
      "image": "https://softgenz.kanniyakumarione.com/og-image.png",
      "logo": "https://softgenz.kanniyakumarione.com/favicon.ico",
      "description": "Website development, custom software, automation, SEO, Google Business Profile optimization, Google Ads, and Meta Ads for businesses worldwide.",
      "email": "mailto:softgenzservices@gmail.com",
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
        "email": "softgenzservices@gmail.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Tamil"]
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <meta name="google-site-verification" content="ZjbjkFkgwBISuhMoaGCaApgCYvw_pJanlm0lmKUJNIg" />
        <link rel="icon" href="/softgenz.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative bg-[#050505] font-sans text-white selection:bg-amber-500 selection:text-black">
        <Preloader />
        <LenisProvider>
          <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505]">
            <CursorGrid color="#fbbf24" cellRadius={4} />
          </div>
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
