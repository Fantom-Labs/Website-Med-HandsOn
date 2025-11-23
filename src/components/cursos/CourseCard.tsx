import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CourseFeature {
  icon: string;
  text: string;
}

export interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  features: CourseFeature[];
  link: string;
}

export function CourseCard({ title, description, image, features, link }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <Link
          href={link}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors mt-auto"
        >
          Saiba mais
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

