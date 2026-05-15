import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { DiferenciaisSection } from "@/components/home/DiferenciaisSection";
import { Section3 } from "@/components/home/Section3";
import { Section4 } from "@/components/home/Section4";
import { Section5 } from "@/components/home/Section5";
import { Section6 } from "@/components/home/Section6";
import { Section7 } from "@/components/home/Section7";
import { getAllCourses } from "@/lib/sanity.queries";
import type { Metadata } from "next";

export const revalidate = 60;

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

export default async function Home() {
  const courses = await getAllCourses();

  return (
    <>
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <Section3 />
      {courses.length > 0 && <Section4 courses={courses} />}
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
  