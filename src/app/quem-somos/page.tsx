import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/quem-somos/AboutHero";
import { AboutContent } from "@/components/quem-somos/AboutContent";
import { AboutStats } from "@/components/quem-somos/AboutStats";
import { ContactSection } from "@/components/quem-somos/ContactSection";
import { AboutFAQ } from "@/components/quem-somos/AboutFAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Med HandsOn",
  description: "Conheça a Med HandsOn, líderes em educação médica prática no Brasil. Nossa missão é elevar o padrão da cirurgia através de treinamento hands-on.",
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med HandsOn - Quem Somos",
      },
    ],
  },
};

export default function QuemSomosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://medhandson.com.br"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Quem Somos",
      "item": "https://medhandson.com.br/quem-somos"
    }]
  };

  return (
    <main className="bg-[#EDF2FD] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <AboutHero />
      <AboutContent />
      {/* <AboutStats /> */}
      <ContactSection />
      <AboutFAQ />
    </main>
  );
}
