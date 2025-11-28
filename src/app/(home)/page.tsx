import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { DiferenciaisSection } from "@/components/home/DiferenciaisSection";
import { Section3 } from "@/components/home/Section3";
import { Section4 } from "@/components/home/Section4";
import { Section5 } from "@/components/home/Section5";
import { Section6 } from "@/components/home/Section6";
import { Section7 } from "@/components/home/Section7";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Transforme sua carreira médica com a metodologia Med HandsOn. Aprenda técnicas avançadas operando pacientes reais sob supervisão de especialistas renomados.",
  alternates: {
    canonical: "https://medhandson.com.br",
  },
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med HandsOn",
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Med HandsOn",
    "url": "https://medhandson.com.br",
    "logo": "https://medhandson.com.br/logo-footer.svg",
    "description": "A única escola médica no Brasil onde o aluno aprende dentro de cirurgias reais.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/medhandson"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
  