"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#09111F] text-white py-20 md:py-32 overflow-hidden min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-img.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          unoptimized
        />
        {/* Gradiente lateral para garantir leitura do texto na direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#09111F]/20 to-[#09111F]/90 z-10"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999" // Substituir pelo número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-8 bottom-8 z-50 w-14 h-14 bg-[#1F1F1F] hover:bg-[#292929] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 border border-white/10"
      >
        <img src="/zapzap.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Card Flutuante com Blur */}
        <div className="hidden lg:block absolute left-0 -bottom-[90px] max-w-sm w-full bg-[#0f1c2e]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl z-30">
          <h3 className="text-2xl font-bold text-white mb-3">Rinoplastia Ultrassônica</h3>
          <p className="text-gray-200 text-base mb-8 leading-relaxed">
            Domine as habilidades necessárias para realizar Rinoplastia com formação completa com pacientes reais.
          </p>
          <Link 
            href="/cursos/rinoplastia-ultrassonica" 
            className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg px-6 py-4 transition-all group"
          >
            <span className="font-medium text-white">Conhecer o curso</span>
            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="flex justify-end">
          <div className="max-w-2xl w-full">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 w-fit">
              <Calendar className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium tracking-wide text-gray-200 uppercase">
                ÚLTIMAS VAGAS · RINOPLASTIA ULTRASSÔNICA AVANÇADA
              </span>
            </div>

            {/* Title Section */}
            <div className="relative mb-6">
              <h1 
                className="text-[52px] font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  Aprenda com quem
                  <div className="inline-flex items-center justify-center">
                     <img src="/images/icone heading.svg" alt="" className="min-w-[80px] h-auto" />
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap mt-2">
                  opera e participe
                  <div className="relative h-10 w-28 min-w-[80px]">
                    <Image 
                      src="/images/MINIATURAS HEADING.png" 
                      alt="Alunos" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="block mt-2">de cirurgias reais.</span>
              </h1>
            </div>
            
            <p 
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
            >
              A <strong className="text-white">única escola médica do Brasil</strong> onde você aprende dentro de cirurgias reais, com <strong className="text-white">pacientes reais</strong> e especialistas que vivem a medicina todos os dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="#cursos"
                className="bg-[#077DEA] hover:bg-[#0062B9] text-white px-8 py-4 rounded-lg font-medium transition-colors text-base flex items-center gap-2"
              >
                Ver cursos disponíveis
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quem-somos"
                className="text-gray-300 hover:text-white px-8 py-4 font-medium transition-colors text-base flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
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
