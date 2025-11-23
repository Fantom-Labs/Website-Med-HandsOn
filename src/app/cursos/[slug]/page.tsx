import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/cursos/CourseHero";
import { CourseFeatures } from "@/components/cursos/CourseFeatures";
import { CourseInstructor } from "@/components/cursos/CourseInstructor";

// Mock data
const COURSES_DATA: Record<string, { title: string; description: string }> = {
  "rinoplastia-ultrassonica": {
    title: "Rinoplastia Ultrassônica Avançada",
    description: "Aprenda a técnica que revolucionou a rinoplastia com menor trauma e maior precisão. Curso completo com teoria e prática em pacientes reais."
  },
  "lipo-hd": {
    title: "Lipoaspiração de Alta Definição",
    description: "Domine a arte da escultura corporal com tecnologias modernas e segurança."
  },
  "blefaroplastia": {
    title: "Blefaroplastia Estruturada",
    description: "Técnicas avançadas para rejuvenescimento do olhar com resultados naturais."
  },
  "otoscopia": {
    title: "Otoscopia Avançada",
    description: "Diagnóstico preciso e tratamento eficaz para patologias do ouvido."
  }
};

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA[slug];
  
  if (!course) {
    return {
      title: "Curso não encontrado",
    };
  }

  return {
    title: `${course.title} - Med HandsOn`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = COURSES_DATA[slug];

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <CourseHero title={course.title} description={course.description} />
        
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre o Curso</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Este curso foi desenhado para médicos que buscam excelência. Você aprenderá desde a anatomia detalhada até as técnicas cirúrgicas mais refinadas.
                  </p>
                  <p>
                    A metodologia Med HandsOn garante que você não apenas assista, mas participe ativamente do processo de aprendizado dentro do centro cirúrgico.
                  </p>
                </div>
              </section>
              
              <CourseInstructor />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CourseFeatures />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
