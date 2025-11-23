import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/quem-somos/AboutHero";
import { AboutContent } from "@/components/quem-somos/AboutContent";
import { AboutStats } from "@/components/quem-somos/AboutStats";
import { ContactSection } from "@/components/quem-somos/ContactSection";
import { AboutFAQ } from "@/components/quem-somos/AboutFAQ";

export default function QuemSomosPage() {
  return (
    <main className="bg-[#EDF2FD] min-h-screen">
      <Header />
      <AboutHero />
      <AboutContent />
      {/* <AboutStats /> */}
      <ContactSection />
      <AboutFAQ />
    </main>
  );
}
