"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Formação em Rinoplastia Ultrassônica Avançada",
    description: "Domine as habilidades necessárias para realizar Rinoplastia com formação completa com pacientes reais.",
    image: "/images/img-rp.png",
    features: [
      { icon: "/VIDEO.svg", text: "Aulas gravadas" },
      { icon: "/PRATICA.svg", text: "Aulas práticas" },
      { icon: "/INJEÇÃO.svg", text: "Participe de cirurgias" },
      { icon: "/PROFILE.svg", text: "Dr. Gustavo Motta" }
    ]
  },
  // Adicione mais cursos aqui
];

export function Section4() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section 
      className="relative w-full overflow-hidden py-12 md:py-0 min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{ 
        background: 'radial-gradient(circle, rgba(7, 125, 234, 0.3) 0%, #09111F 100%)',
        backgroundColor: '#09111F'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-0 md:pt-12 mb-8 md:mb-12 w-full" style={{ maxWidth: '1280px' }}>
          <h2 
            className="text-white mb-6 md:mb-0"
            style={{ 
              fontFamily: 'var(--font-open-sans), sans-serif',
              fontSize: '28px',
              fontWeight: 600
            }}
          >
            Cursos<br />disponíveis
          </h2>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center transition-all hover:bg-white/20"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '0.8px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '32.8px'
                }}
                aria-label="Curso anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="flex items-center justify-center transition-all hover:bg-white/20"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '0.8px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '32.8px'
                }}
                aria-label="Próximo curso"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Ver todos os cursos button */}
            <Link
              href="/cursos"
              className="flex items-center justify-center gap-4 transition-all hover:bg-white/10 flex-1 md:flex-none"
              style={{
                padding: '16px 32px',
                border: '1px solid #5C5C5C',
                borderRadius: '36px',
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: '#FFFFFF'
              }}
            >
              Ver todos os cursos
            </Link>
          </div>
        </div>

        {/* Course Card */}
        <div 
          className="rounded-3xl overflow-hidden w-full"
          style={{ backgroundColor: '#EDF2FD', maxWidth: '1280px' }}
        >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
               {/* Image Side */}
               <div className="relative h-[250px] sm:h-[400px] md:h-auto p-4 md:p-8">
                 <div className="relative w-full h-full">
                  <Image
                    src={courses[currentSlide].image}
                    alt={courses[currentSlide].title}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                 </div>
               </div>

               {/* Content Side */}
               <div className="p-6 md:p-12 flex flex-col justify-center">
                 <h3 
                   className="text-[20px] md:text-[24px] font-bold mb-4"
                   style={{ 
                     fontFamily: 'var(--font-open-sans), sans-serif',
                     color: '#111827',
                     maxWidth: '400px'
                   }}
                 >
                   {courses[currentSlide].title}
                 </h3>

                 <p 
                   className="text-sm md:text-base mb-6"
                   style={{ 
                     fontFamily: 'var(--font-open-sans), sans-serif',
                     color: '#111827',
                     maxWidth: '400px'
                   }}
                 >
                   {courses[currentSlide].description}
                 </p>

                 {/* Features */}
                 <div className="space-y-3 mb-6">
                   {courses[currentSlide].features.map((feature, index) => (
                     <div key={index} className="flex items-center gap-3">
                       <img 
                         src={feature.icon} 
                         alt="" 
                         className="w-5 h-5 md:w-6 md:h-6"
                         style={{ minHeight: '20px' }}
                       />
                       <span 
                         className="text-sm md:text-base"
                         style={{ 
                           fontFamily: 'var(--font-open-sans), sans-serif',
                           color: '#111827'
                         }}
                       >
                         {feature.text}
                       </span>
                     </div>
                   ))}
                 </div>

                {/* Button */}
                <Link
                  href="/cursos/rinoplastia-ultrassonica"
                  className="inline-flex items-center justify-center gap-2 text-white w-full md:w-fit"
                  style={{
                    background: 'linear-gradient(180deg, #0085FF 0%, #00488A 100%)',
                    borderRadius: '8px',
                    padding: '16px 32px',
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  Saiba mais
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
               </div>
             </div>
         </div>
       </div>
     </section>
  );
}

