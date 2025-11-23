import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/cursos/CourseHero";
import { CourseFeatures } from "@/components/cursos/CourseFeatures";
import { CourseInstructor } from "@/components/cursos/CourseInstructor";

// Mock data
interface CourseData {
  title: string;
  description: string;
  startDate: string;
  duration: string;
  location: string;
  features: string[];
  instructor: {
    name: string;
    role: string;
    description: string;
    imageSrc?: string;
  };
}

const COURSES_DATA: Record<string, CourseData> = {
  "rinoplastia-ultrassonica": {
    title: "Rinoplastia Ultrassônica Avançada",
    description: "Aprenda a técnica que revolucionou a rinoplastia com menor trauma e maior precisão. Curso completo com teoria e prática em pacientes reais.",
    startDate: "24 e 25 de Agosto",
    duration: "2 dias (20 horas)",
    location: "São Paulo - SP",
    features: [
      "Aulas teóricas aprofundadas",
      "Cirurgias ao vivo demonstrativas",
      "Prática hands-on em modelos",
      "Material didático exclusivo",
      "Certificado de conclusão"
    ],
    instructor: {
      name: "Dr. Gustavo Motta",
      role: "Cirurgião Plástico e Coordenador",
      description: "Especialista em Rinoplastia Ultrassônica com ampla experiência internacional. Dedica-se ao ensino de técnicas avançadas para cirurgiões que buscam excelência.",
      imageSrc: "/images/avatar-drgustavomotta.png"
    }
  },
  "lipo-hd": {
    title: "Lipoaspiração de Alta Definição",
    description: "Domine a arte da escultura corporal com tecnologias modernas e segurança.",
    startDate: "14 e 15 de Setembro",
    duration: "2 dias (20 horas)",
    location: "São Paulo - SP",
    features: [
      "Tecnologias em Lipo HD",
      "Marcação pré-operatória",
      "Pós-operatório especializado",
      "Gestão de intercorrências",
      "Network exclusivo"
    ],
    instructor: {
      name: "Dr. Gustavo Motta",
      role: "Cirurgião Plástico",
      description: "Referência em contorno corporal e tecnologias aplicadas à cirurgia plástica.",
      imageSrc: "/images/avatar-drgustavomotta.png"
    }
  },
  "blefaroplastia": {
    title: "Blefaroplastia Estruturada",
    description: "Técnicas avançadas para rejuvenescimento do olhar com resultados naturais.",
    startDate: "05 e 06 de Outubro",
    duration: "2 dias (16 horas)",
    location: "São Paulo - SP",
    features: [
      "Anatomia periorbital",
      "Blefaroplastia superior e inferior",
      "Cantopexia e cantoplastia",
      "Videoaulas comentadas",
      "Acompanhamento de casos"
    ],
    instructor: {
      name: "Equipe Med HandsOn",
      role: "Corpo Docente Especializado",
      description: "Equipe multidisciplinar focada em cirurgia periorbital e rejuvenescimento facial.",
    }
  },
  "otoscopia": {
    title: "Otoscopia Avançada",
    description: "Diagnóstico preciso e tratamento eficaz para patologias do ouvido.",
    startDate: "A definir",
    duration: "1 dia (8 horas)",
    location: "São Paulo - SP",
    features: [
      "Treinamento prático intensivo",
      "Diagnóstico diferencial",
      "Equipamentos modernos",
      "Discussão de casos clínicos",
      "Suporte continuado"
    ],
    instructor: {
      name: "Equipe Med HandsOn",
      role: "Especialistas em Otorrinolaringologia",
      description: "Profissionais com vasta experiência em diagnóstico e tratamento de patologias otológicas.",
    }
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
        <CourseHero 
          title={course.title} 
          description={course.description}
          startDate={course.startDate}
          duration={course.duration}
          location={course.location}
        />
        
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
              
              <CourseInstructor 
                name={course.instructor.name}
                role={course.instructor.role}
                description={course.instructor.description}
                imageSrc={course.instructor.imageSrc}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CourseFeatures features={course.features} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
