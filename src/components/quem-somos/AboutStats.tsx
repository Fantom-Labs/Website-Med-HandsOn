"use client";

export function AboutStats() {
  const features = [
    {
      icon: "/realidade.svg",
      title: "Realidade",
      description: 'Nada de simulação. Nada de "quase real". Aqui, você aprende onde tudo acontece: no centro cirúrgico com pacientes reais.'
    },
    {
      icon: "/segurança.svg",
      title: "Segurança",
      description: "Todo procedimento é conduzido com rigor ético, supervisão total e protocolos hospitalares completos."
    },
    {
      icon: "/excelencia.svg",
      title: "Excelência",
      description: "Os mentores são especialistas que atuam na linha de frente da medicina, com experiência sólida e dezenas, ou muitas vezes centenas, de cirurgias realizadas."
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 px-4 md:px-6"
      style={{ backgroundColor: '#EDF2FD' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2.5 text-base font-medium mb-6"
              style={{
                backgroundColor: 'rgba(196, 213, 235, 0.20)',
                border: '1px solid #93B9FF',
                borderRadius: '40px',
                color: '#111827',
                width: 'fit-content'
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#0085FF' }}
              />
              <span style={{ fontFamily: 'var(--font-open-sans), sans-serif', fontSize: '18px' }}>Metodologia</span>
            </div>

            {/* Heading */}
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '32px',
                fontWeight: 600,
                color: '#111827'
              }}
            >
              Ensino HandsOn
            </h2>

            {/* Paragraph 1 */}
            <p 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#111827',
                lineHeight: '1.6',
                maxWidth: '400px'
              }}
            >
              A Med HandsOn é a única escola médica no Brasil que oferece aprendizado 100% conectado à prática real.
            </p>

            {/* Paragraph 2 */}
            <p 
              style={{ 
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#111827',
                lineHeight: '1.6',
                maxWidth: '400px'
              }}
            >
              Na Med HandsOn, conhecimento não é apenas transmitido, é vivenciado. Cada curso, cada aula prática e cada mentoria é construída sobre três pilares:
            </p>
          </div>

          {/* Right Side - Features Cards */}
          <div className="flex flex-col gap-12" style={{ marginTop: '80px' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'var(--font-open-sans), sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#111827'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: 'var(--font-open-sans), sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: '#111827',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

