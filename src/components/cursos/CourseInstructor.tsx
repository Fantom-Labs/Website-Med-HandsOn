import { User } from "lucide-react";

interface CourseInstructorProps {
  name: string;
  role: string;
  description: string;
  imageSrc?: string;
}

export function CourseInstructor({ name, role, description, imageSrc }: CourseInstructorProps) {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Seu Mentor</h3>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User className="h-16 w-16 text-gray-400" />
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-primary-600 font-medium mb-4">{role}</p>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
