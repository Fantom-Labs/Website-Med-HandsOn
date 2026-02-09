"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Section3() {
  return (
    <section className="flex flex-col md:flex-row w-full" style={{ backgroundColor: 'transparent' }}>
      {/* Left Side - Image */}
      <div 
        className="w-full md:w-1/2 flex items-center justify-center md:justify-end py-8 md:py-24 md:pr-[160px]" 
        style={{ backgroundColor: 'transparent' }}
      >
        <Image
          src="/images/image s3.png"
          alt="Profissional médico em cirurgia"
          width={315}
          height={400}
          className="object-cover object-center"
          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
          priority
        />
      </div>

      {/* Right Side - Content */}
      <div 
        className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-24"
        style={{ backgroundColor: '#EDF2FD' }}
      >
        <div className="w-full max-w-2xl space-y-6 md:space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2.5 text-base font-medium"
            style={{
              backgroundColor: 'rgba(196, 213, 235, 0.20)',
              border: '1px solid #93B9FF',
              borderRadius: '40px',
              color: '#111827'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#0085FF' }}
            />
            <span>Aprenda a realizar na prática</span>
          </div>

          {/* Headline */}
          <h2 
            className="text-[36px] font-semibold leading-tight"
            style={{ 
              fontFamily: 'var(--font-open-sans), sans-serif', 
              color: '#111827',
              maxWidth: '500px'
            }}
          >
            Aqui, cada aprendizado vem de uma cirurgia real
          </h2>

          {/* Paragraph */}
          <p 
            className="text-base leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-open-sans), sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#111827',
              maxWidth: '500px'
            }}
          >
            Na Med HandsOn, você realiza procedimentos em cirurgias reais, com pacientes reais e mentoria direta de especialistas reconhecidos. Experiência prática para médicos que querem evoluir de verdade.
          </p>

          {/* Button */}
          <div className="pt-2">
            <Button 
              size="lg" 
              asChild 
              className="text-white px-6"
              style={{
                background: 'linear-gradient(180deg, #0085FF 0%, #00488A 100%)',
                borderRadius: '8px',
                border: 'none',
                paddingTop: '32px',
                paddingBottom: '32px',
                fontSize: '18px',
                fontWeight: 500
              }}
            >
              <Link href="/cursos" className="flex items-center">
                Ver cursos disponíveis
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

