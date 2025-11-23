"use client";

export function Section6() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: '#EDF2FD' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          {/* Title */}
          <div>
            <h2 
              className="mb-4 lg:mb-0" 
              style={{ 
                fontFamily: 'var(--font-open-sans), sans-serif', 
                fontSize: '32px', 
                fontWeight: 600, 
                color: '#111827',
                lineHeight: '1.2',
                maxWidth: '400px'
              }}
            >
              O futuro do ensino médico é real
            </h2>
          </div>
          
          {/* Description */}
          <div className="lg:text-right flex lg:justify-end">
            <p 
              className="mb-0" 
              style={{ 
                fontFamily: 'var(--font-open-sans), sans-serif', 
                fontSize: '16px', 
                fontWeight: 400, 
                color: '#111827',
                lineHeight: '1.6',
                maxWidth: '480px',
                textAlign: 'left' // Texto alinhado à esquerda, mas o container alinhado à direita
              }}
            >
              Aqui, o aprendizado acontece no centro cirúrgico, com pacientes reais e acompanhamento direto de especialistas que vivem a prática todos os dias.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Cirurgias reais com pacientes reais */}
          <div 
            className="rounded-lg p-8 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(147, 185, 255, 0.6)',
              borderRadius: '12px',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.1)';
              e.currentTarget.style.borderColor = '#93B9FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(147, 185, 255, 0.6)';
            }}
          >
            <div className="mb-6 flex justify-center">
              <img src="/CIRURGIA.svg" alt="Cirurgias reais" style={{ width: '64px', height: '64px' }} />
            </div>
            <h3 
              className="text-center font-bold mb-4" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '20px',
                lineHeight: '1.3'
              }}
            >
              Cirurgias reais com<br/>pacientes reais
            </h3>
            <p 
              className="text-center leading-relaxed px-2" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '16px'
              }}
            >
              Nada de simulação. Você aprende dentro do ambiente hospitalar.
            </p>
          </div>

          {/* Card 2: Mentoria prática e personalizada */}
          <div 
            className="rounded-lg p-8 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(147, 185, 255, 0.6)',
              borderRadius: '12px',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.1)';
              e.currentTarget.style.borderColor = '#93B9FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(147, 185, 255, 0.6)';
            }}
          >
            <div className="mb-6 flex justify-center">
              <img src="/CARE.svg" alt="Mentoria prática" style={{ width: '64px', height: '64px' }} />
            </div>
            <h3 
              className="text-center font-bold mb-4" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '20px',
                lineHeight: '1.3'
              }}
            >
              Mentoria prática e<br/>personalizada
            </h3>
            <p 
              className="text-center leading-relaxed px-2" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '16px'
              }}
            >
              Cada aluno é guiado por médicos referência em suas áreas
            </p>
          </div>

          {/* Card 3: Método validado e seguro */}
          <div 
            className="rounded-lg p-8 transition-colors cursor-pointer"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(147, 185, 255, 0.6)',
              borderRadius: '12px',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(196, 213, 235, 0.1)';
              e.currentTarget.style.borderColor = '#93B9FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(147, 185, 255, 0.6)';
            }}
          >
            <div className="mb-6 flex justify-center">
              <img src="/ECG.svg" alt="Método validado" style={{ width: '64px', height: '64px' }} />
            </div>
            <h3 
              className="text-center font-bold mb-4" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '20px',
                lineHeight: '1.3'
              }}
            >
              Método validado<br/>e seguro
            </h3>
            <p 
              className="text-center leading-relaxed px-2" 
              style={{ 
                color: '#111827', 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '16px'
              }}
            >
              Protocolos éticos e técnicos garantem segurança total durante os procedimentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
