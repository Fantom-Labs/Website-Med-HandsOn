import { Header } from "@/components/layout/Header";
import { CourseCard } from "@/components/cursos/CourseCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos | Med HandsOn",
  description: "Conheça nossos cursos de especialização médica com prática HandsOn.",
};

const courses = [
  {
    id: 1,
    title: "Formação em Rinoplastia Ultrassônica Avançada",
    description: "Domine as habilidades necessárias para realizar Rinoplastia com formação completa com pacientes reais.",
    image: "/images/img-rp.png",
    link: "/cursos/rinoplastia-ultrassonica",
    features: [
      { icon: "/VIDEO.svg", text: "Aulas gravadas" },
      { icon: "/PRATICA.svg", text: "Aulas práticas" },
      { icon: "/INJEÇÃO.svg", text: "Participe de cirurgias" },
      { icon: "/PROFILE.svg", text: "Dr. Gustavo Motta" }
    ]
  }
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-[120px] pb-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Cursos
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Formações completas com foco em prática real para você dominar novas técnicas cirúrgicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              features={course.features}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
