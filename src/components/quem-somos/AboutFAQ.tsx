"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A Med HandsOn é reconhecida pelo MEC?",
    answer: "Sim, todos os nossos cursos de pós-graduação e extensão são devidamente credenciados e reconhecidos, garantindo a validade do seu certificado em todo o território nacional."
  },
  {
    question: "Quem são os mentores dos cursos?",
    answer: "Nosso corpo docente é formado por especialistas renomados em suas áreas de atuação, com vasta experiência prática e acadêmica, selecionados rigorosamente para oferecer a melhor mentoria."
  },
  {
    question: "Onde ocorrem as aulas práticas?",
    answer: "As atividades práticas são realizadas em hospitais parceiros de excelência, equipados com toda a infraestrutura necessária para garantir a segurança e o melhor aprendizado cirúrgico."
  },
  {
    question: "Como faço para me inscrever nos cursos?",
    answer: "Você pode realizar sua inscrição diretamente pelo nosso site na página de Cursos, ou entrar em contato com nossa equipe de atendimento para mais informações e suporte no processo de matrícula."
  }
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: '#EDF2FD' }}>
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-400 mb-6" style={{ backgroundColor: 'transparent' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>FAQ</span>
          </div>
          
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: 'var(--font-open-sans), sans-serif', 
              fontSize: '32px', 
              fontWeight: 600, 
              color: '#111827'
            }}
          >
            Dúvidas Frequentes
          </h2>

          <div className="w-full h-px bg-gray-200 mb-12"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-200"
              style={{ backgroundColor: 'rgba(147, 185, 255, 0.15)' }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/50 transition-colors"
              >
                <span 
                  className="text-base md:text-lg font-medium pr-8"
                  style={{ 
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    color: '#111827'
                  }}
                >
                  {faq.question}
                </span>
                <div 
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(147, 185, 255, 0.3)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13" stroke="#077DEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path 
                      d="M7 1V13" 
                      stroke="#077DEA" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{
                        transformOrigin: 'center',
                        transition: 'transform 0.3s ease',
                        transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                      }}
                    />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0">
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


