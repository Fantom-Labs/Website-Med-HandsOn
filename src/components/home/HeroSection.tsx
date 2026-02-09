"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#09111F] text-white pt-28 pb-16 md:py-32 overflow-hidden min-h-[600px] md:min-h-[650px] 2xl:min-h-[800px] flex items-center">
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 z-0 md:hidden"
        style={{ 
          background: 'radial-gradient(circle, rgba(7, 125, 234, 0.3) 0%, #09111F 100%)',
          backgroundColor: '#09111F'
        }}
      />

      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero-img.png"
          alt="Background"
          fill
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999" // Substituir pelo número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 bottom-8 z-50 w-16 h-16 bg-[#1F1F1F] hover:bg-[#292929] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 border border-white/10"
      >
        <img src="/zapzap.svg" alt="WhatsApp" className="w-[50px] h-[50px]" />
      </a>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Card Flutuante com Blur */}
        <div className="hidden lg:flex flex-col justify-center absolute left-0 -bottom-[90px] max-w-[350px] w-full h-[210px] bg-[#0f1c2e]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl z-30">
          <h3 className="text-2xl font-bold text-white mb-3">Rinoplastia Ultrassônica</h3>
          <p className="text-gray-200 text-[14px] mb-2 leading-relaxed max-w-[300px]">
            Domine as habilidades necessárias para realizar a Rinoplastia com pacientes reais.
          </p>
          <Link 
            href="/cursos/rinoplastia-avancada" 
            className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg px-6 py-4 transition-all group max-w-[300px]"
          >
            <span className="font-medium text-white">Conhecer o curso</span>
            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      <div className="flex justify-center md:justify-end mb-[110px]">
        <div className="max-w-2xl w-full flex flex-col items-center md:items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8 w-fit">
              <Calendar className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium tracking-wide text-gray-200 uppercase">
                <span className="md:hidden">ÚLTIMAS VAGAS · RINOPLASTIA</span>
                <span className="hidden md:inline">ÚLTIMAS VAGAS · RINOPLASTIA ULTRASSÔNICA AVANÇADA</span>
              </span>
            </div>

          {/* Title Section */}
          <div className="relative mb-0 md:mb-6 w-full">
            <h1 
              className="text-[36px] sm:text-4xl md:text-[52px] font-semibold leading-tight text-center md:text-left"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 flex-wrap">
                Aprenda com quem
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 flex-wrap mt-2">
                opera e participe
                <div className="hidden md:block relative h-[3.9rem] sm:h-[52px] w-[9.75rem] sm:w-36 min-w-[156px] sm:min-w-[104px]">
                  <Image 
                    src="/images/MINIATURAS HEADING.png" 
                    alt="Alunos" 
                    fill 
                    sizes="(max-width: 768px) 156px, 144px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="block mt-2">de cirurgias reais.</span>
            </h1>
            
            {/* Mobile Image */}
            <div className="md:hidden flex justify-center mt-2 mb-2">
              <div className="relative h-[5.07rem] w-[12.675rem]">
                <Image 
                  src="/images/miniaturas-mobile.png" 
                  alt="Alunos" 
                  fill 
                  sizes="203px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <p 
            className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-xl text-center md:text-left"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
              A <strong className="text-white">única escola médica do Brasil</strong> onde você aprende dentro de cirurgias reais, com <strong className="text-white">pacientes reais</strong> e especialistas que vivem a medicina todos os dias.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center">
            <Link
              href="/cursos"
                className="bg-[#077DEA] hover:bg-[#0062B9] text-white px-8 py-4 rounded-lg font-medium transition-colors text-base flex items-center gap-2"
              >
                Ver cursos disponíveis
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quem-somos"
                className="hidden sm:flex text-gray-300 hover:text-white px-8 py-4 font-medium transition-colors text-base items-center gap-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
              >
                Saiba mais
                <img src="/arrows.svg" alt="" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
