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
  title: "Med HandsOn",
  description: "A única escola médica no Brasil onde o aluno aprende dentro de cirurgias reais.",
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
