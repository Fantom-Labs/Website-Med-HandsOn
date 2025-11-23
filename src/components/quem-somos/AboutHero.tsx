import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative bg-[#09111F] text-white pt-28 pb-16 md:py-32 overflow-hidden min-h-[850px] md:min-h-[700px] flex items-end md:items-center">
      {/* Background Image Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/hero-quemsomosmobile.png"
          alt="Background"
          fill
          className="object-cover object-top"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09111F] via-[#09111F] to-transparent z-10 opacity-90"></div>
      </div>

      {/* Background Image Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero-quemsomos.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          unoptimized
        />
        {/* Overlay gradiente para garantir leitura se necessário, mas o design parece limpo */}
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#09111F]/20 to-[#09111F]/90 z-10 lg:via-[#09111F]/10 lg:to-[#09111F]/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start h-full">
           {/* Left side spacer for the image subject (Doctor) */}
           <div className="w-full lg:w-5/12 relative h-full min-h-[0px] lg:min-h-[auto]"></div>

           {/* Right side content */}
           <div className="w-full lg:w-7/12 lg:pl-20 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white leading-tight md:leading-[1.15] mb-4 md:mb-6 font-sans">
              <span className="md:hidden">Transformando o ensino médico através da prática com pacientes reais</span>
              <span className="hidden md:block">
                Transformando o <br className="hidden lg:block" />
                ensino médico através <br className="hidden lg:block" />
                da prática real
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl font-sans">
              A Med HandsOn nasceu de um propósito de formar médicos mais seguros, experientes e preparados através da experiência prática dentro de cirurgias reais.
            </p>

            <Link
              href="/cursos"
              className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-[#077DEA] hover:bg-[#0062B9] text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-900/20"
            >
              Ver Cursos Disponíveis
              <ArrowUpRight className="w-5 h-5" />
            </Link>
           </div>
        </div>
      </div>
    </section>
  );
}

