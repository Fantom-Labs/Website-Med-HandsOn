"use client";

export function DiferenciaisSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: '#EDF2FD' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-center mb-4" style={{ fontFamily: 'var(--font-open-sans), sans-serif', fontSize: '28px', fontWeight: 700, color: '#111827' }}>
          Um ecossistema formado por médicos para médicos
        </h2>
        
        {/* Subtitle */}
        <p className="text-center mb-12 md:mb-16 mx-auto" style={{ fontFamily: 'var(--font-open-sans), sans-serif', fontSize: '18px', fontWeight: 400, color: '#111827', maxWidth: '600px' }}>
          Aprenda a realizar cirurgias e procedimentos na prática, ao lado de profissionais especializados que vivem a medicina.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Aulas em Vídeo */}
          <div 
            className="rounded-lg p-6 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'rgba(196, 213, 235, 0.20)',
              border: '1px solid #93B9FF',
              borderRadius: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.40)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.20)'}
          >
            <img src="/VIDEO-PLAY.svg" alt="Aulas em Vídeo" className="mb-4" style={{ width: '56px', height: '56px' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Aulas em Vídeo
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Conteúdos objetivos gravados em ambiente hospitalar, mostrando o que realmente importa na rotina cirúrgica.
            </p>
          </div>

          {/* Card 2: Aulas práticas */}
          <div 
            className="rounded-lg p-6 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'rgba(196, 213, 235, 0.20)',
              border: '1px solid #93B9FF',
              borderRadius: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.40)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.20)'}
          >
            <img src="/AULA-PRATICA.svg" alt="Aulas práticas" className="mb-4" style={{ width: '56px', height: '56px' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Aulas práticas
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Aqui você aprende fazendo. Práticas estruturadas dentro do centro cirúrgico, com orientação direta de especialistas.
            </p>
          </div>

          {/* Card 3: Mentorias */}
          <div 
            className="rounded-lg p-6 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'rgba(196, 213, 235, 0.20)',
              border: '1px solid #93B9FF',
              borderRadius: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.40)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.20)'}
          >
            <img src="/MENTOR.svg" alt="Mentorias" className="mb-4" style={{ width: '56px', height: '56px' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Mentorias
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Acompanhamento de médicos experientes que ensinam exatamente como executam no dia a dia.
            </p>
          </div>

          {/* Card 4: Cirurgias reais */}
          <div 
            className="rounded-lg p-6 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'rgba(196, 213, 235, 0.20)',
              border: '1px solid #93B9FF',
              borderRadius: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.40)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.20)'}
          >
            <img src="/CIRURGIA.svg" alt="Cirurgias reais" className="mb-4" style={{ width: '56px', height: '56px' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Cirurgias reais
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#111827', fontFamily: 'var(--font-open-sans), sans-serif' }}>
              Você participa de cirurgias com pacientes reais, desenvolvendo segurança e experiência que nenhum curso simulado oferece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

