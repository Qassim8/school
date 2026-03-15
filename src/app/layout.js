import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajwal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://amal-kabashi-school.com"),
  title: {
    default: "مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية",
    template: "%s | مؤسسة آمال الكباشي",
  },
  description:
    "مؤسسة تعليمية رائدة في جمهورية مصر العربية تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية. نسنع قادة المستقبل ببيئة تعليمية ملهمة.",
  keywords: [
    "مدرسة سودانية في مصر",
    "تعليم سوداني معتمد",
    "مدارس الريادة الثانوية",
    "مؤسسة آمال الكباشي",
    "تعليم ابتدائي متوسط ثانوي",
    "رياض أطفال",
    "منهج سوداني في القاهرة",
    "تعليم اسلامي",
    "مدرسة معتمدة من السفارة السودانية",
    "تعليم متميز في مصر",
  ],
  authors: [{ name: "مؤسسة آمال الكباشي التعليمية" }],
  creator: "مؤسسة آمال الكباشي",
  publisher: "مؤسسة آمال الكباشي التعليمية",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "education",
  classification: "Educational Institution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://amal-kabashi-school.com",
    title: "مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية",
    description:
      "مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية. نسنع قادة المستقبل ببيئة تعليمية ملهمة.",
    siteName: "مؤسسة آمال الكباشي",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مؤسسة آمال الكباشي التعليمية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية",
    description:
      "مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية.",
    images: ["/og-image.jpg"],
    creator: "@amal_kabashi_school",
  },
  alternates: {
    canonical: "https://amal-kabashi-school.com",
    languages: {
      "ar-EG": "https://amal-kabashi-school.com",
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#1e40af",
    "color-scheme": "light dark",
    "twitter:site": "@amal_kabashi_school",
    "twitter:creator": "@amal_kabashi_school",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "مؤسسة آمال الكباشي التعليمية",
    alternateName: "مدارس الريادة الثانوية",
    description:
      "مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية",
    url: "https://amal-kabashi-school.com",
    logo: "https://amal-kabashi-school.com/logo.png",
    image: "https://amal-kabashi-school.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressRegion: "القاهرة",
      addressLocality: "مدينة بدر",
      streetAddress: "جوار مدرسة طه حسين",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20-1XX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "Arabic",
    },
    sameAs: [
      "https://www.facebook.com/amal.kabashi.school",
      "https://www.instagram.com/amal.kabashi.school",
      "https://wa.me/201XXXXXXXXX",
    ],
    educationalCredentialAwarded: "شهادة سودانية معتمدة",
    hasEducationalUse: "رياض أطفال، تعليم ابتدائي، تعليم متوسط، تعليم ثانوي",
    numberOfStudents: "1200",
    founder: {
      "@type": "Person",
      name: "أمال الكباشي",
    },
    foundingDate: "2020",
    areaServed: {
      "@type": "Country",
      name: "مصر",
    },
    priceRange: "$$",
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${tajawal.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
