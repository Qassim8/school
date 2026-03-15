"use client";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Landing from "../components/landing";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slow animation
      once: true, // Animate only once
      offset: 100, // Trigger animation 100px before element enters viewport
      mirror: false, // Don't animate on scroll back up
      anchorPlacement: "top-bottom", // Better triggering
      easing: "ease-out-cubic", // Smoother easing
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية - تعليم سوداني
          معتمد في مصر
        </title>
        <meta
          name="description"
          content="مؤسسة تعليمية رائدة في جمهورية مصر العربية تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية. نسنع قادة المستقبل ببيئة تعليمية ملهمة."
        />
        <meta
          name="keywords"
          content="مدرسة سودانية في مصر, تعليم سوداني معتمد, مدارس الريادة الثانوية, مؤسسة آمال الكباشي, تعليم ابتدائي متوسط ثانوي, رياض أطفال, منهج سوداني في القاهرة"
        />
        <meta name="author" content="مؤسسة آمال الكباشي التعليمية" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://amal-kabashi-school.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amal-kabashi-school.com" />
        <meta
          property="og:title"
          content="مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية"
        />
        <meta
          property="og:description"
          content="مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية. نسنع قادة المستقبل ببيئة تعليمية ملهمة."
        />
        <meta
          property="og:image"
          content="https://amal-kabashi-school.com/og-image.jpg"
        />
        <meta property="og:locale" content="ar_EG" />
        <meta property="og:site_name" content="مؤسسة آمال الكباشي" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://amal-kabashi-school.com"
        />
        <meta
          property="twitter:title"
          content="مؤسسة آمال الكباشي التعليمية | مدارس الريادة الثانوية"
        />
        <meta
          property="twitter:description"
          content="مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد مع برامج متكاملة من رياض الأطفال حتى الثانوية."
        />
        <meta
          property="twitter:image"
          content="https://amal-kabashi-school.com/og-image.jpg"
        />

        {/* Additional SEO */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="application-name" content="مؤسسة آمال الكباشي" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "مؤسسة آمال الكباشي التعليمية",
              description: "مؤسسة تعليمية رائدة تقدم تعليم سوداني معتمد",
              url: "https://amal-kabashi-school.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressLocality: "القاهرة",
                addressRegion: "مدينة بدر",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-1XX-XXX-XXXX",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-blue-50 font-sans">
        <Header />
        <Landing />
      </div>
    </>
  );
}
