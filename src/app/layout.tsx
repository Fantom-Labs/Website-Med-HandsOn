import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Med HandsOn | Escola Médica com Prática em Cirurgias Reais",
    template: "%s | Med HandsOn",
  },
  description: "Med HandsOn: A única escola médica no Brasil onde você aprende operando em cirurgias reais. Cursos de especialização com prática intensiva.",
  keywords: ["cursos médicos", "cirurgia plástica", "prática cirúrgica", "fellowship", "medicina", "especialização médica"],
  openGraph: {
    title: "Med HandsOn | Escola Médica com Prática em Cirurgias Reais",
    description: "Med HandsOn: A única escola médica no Brasil onde você aprende operando em cirurgias reais. Cursos de especialização com prática intensiva.",
    url: "https://medhandson.com.br",
    siteName: "Med HandsOn",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med HandsOn",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
