import { Header } from "@/components/layout/Header";
import { CourseHero } from "@/components/cursos/CourseHero";
import { CourseFeatures } from "@/components/cursos/CourseFeatures";
import { CourseInstructor } from "@/components/cursos/CourseInstructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de Rinoplastia Ultrassônica Avançada | Med HandsOn",
  description: "Curso prático e teórico de Rinoplastia Ultrassônica. Aprenda com cirurgias ao vivo e prática HandsOn.",
};

export default function RinoplastiaPage() {
  const features = [
    "Aulas teóricas aprofundadas sobre anatomia e técnica",
    "Cirurgias ao vivo demonstrativas",
    "Dissecção em peças frescas (HandsOn)",
    "Uso do Piezo na prática",
    "Discussão de casos clínicos e complicações",
    "Networking com cirurgiões experientes"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Add margin top to account for fixed header */}
      <div className="pt-[80px]">
        <CourseHero
          title="Formação em Rinoplastia Ultrassônica Avançada"
          description="Domine a técnica que revolucionou a rinoplastia com preservação de estruturas e recuperação acelerada. Curso prático HandsOn com foco em resultados previsíveis."
          startDate="Em breve"
          duration="4 semanas"
          location="Recife, PE"
          imageSrc="/images/img-c1.png"
          mobileImageSrc="/images/hero-home-mobile.png"
          mobileBgColor="#091222"
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Curso</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    A Rinoplastia Ultrassônica representa o maior avanço na cirurgia nasal dos últimos anos. 
                    Através do uso da tecnologia piezoelétrica, é possível remodelar os ossos nasais com 
                    precisão milimétrica, sem lesar tecidos moles adjacentes.
                  </p>
                  <p className="mt-4">
                    Neste curso avançado, você aprenderá não apenas a utilizar o equipamento, mas toda a 
                    filosofia de preservação e estruturação que acompanha a técnica. O treinamento é focado 
                    na prática, permitindo que você saia apto a iniciar seus casos com segurança.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Conteúdo Programático</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-4 text-primary-700">Módulo Teórico</h4>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                      <li>Anatomia cirúrgica do nariz</li>
                      <li>Princípios do Piezo</li>
                      <li>Osteotomias e Osteoplastias</li>
                      <li>Tratamento do dorso e ponta</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-4 text-primary-700">Módulo Prático</h4>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                      <li>Cirurgias ao vivo</li>
                      <li>HandsOn em simuladores</li>
                      <li>Discussão de casos</li>
                      <li>Manuseio do equipamento</li>
                    </ul>
                  </div>
                </div>
              </section>

              <CourseInstructor 
                name="Dr. Gustavo Motta"
                role="Cirurgião Plástico | Membro Titular SBCP"
                description="Especialista em Rinoplastia Estruturada e Ultrassônica. Com vasta experiência e centenas de cirurgias realizadas, Dr. Gustavo é referência no ensino de técnicas avançadas de rinoplastia, combinando arte e tecnologia para resultados naturais."
                imageSrc="/images/avatar-drgustavomotta.png"
              />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CourseFeatures features={features} />
                
                <div className="mt-6 bg-primary-50 p-6 rounded-xl border border-primary-100">
                  <h4 className="font-bold text-primary-900 mb-2">Próxima Turma</h4>
                  <p className="text-primary-700 mb-4">Vagas limitadas para garantir o aproveitamento máximo do HandsOn.</p>
                  <div className="mb-6">
                    <p className="text-sm text-primary-600 font-medium uppercase tracking-wide">Investimento</p>
                    <p className="text-3xl font-bold text-primary-600">R$ 5.997,00</p>
                    <p className="text-sm text-primary-500">ou 12x de R$ 599,70</p>
                  </div>
                  <button 
                    className="w-full text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-600/20 cursor-pointer"
                    style={{
                      background: 'linear-gradient(180deg, #0085FF 0%, #00488A 100%)',
                    }}
                  >
                    Garantir Minha Vaga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
