import Image from "next/image";

export function AboutContent() {
  return (
    <section className="bg-[#EDF2FD] py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content (Left) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Tag/Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#0056b3]/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0085FF] mr-2"></div>
              <span className="text-sm font-medium text-[#0056b3]">Sobre</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] mb-8 font-sans">
              A Med HandsOn
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                Enquanto a maior parte das instituições de ensino ainda se apoia em simulações, manequins e longas jornadas teóricas, nós escolhemos seguir outro caminho, o caminho da realidade, da sala cirúrgica, do contato direto com profissionais que realmente operam todos os dias.
              </p>
              <p>
                Acreditamos que nenhum médico deveria entrar no mercado sem a confiança necessária para realizar os procedimentos que estudou. Por isso, criamos uma nova forma de ensinar: aprendizado real, com pacientes reais, sob mentoria direta de especialistas.
              </p>
            </div>
          </div>

          {/* Image Side (Right) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-auto rounded-[32px] overflow-hidden">
              <Image
                src="/images/img1-sobre.png"
                alt="Médicos em cirurgia - Med HandsOn"
                width={500}
                height={600}
                className="w-full h-auto"
                quality={100}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

