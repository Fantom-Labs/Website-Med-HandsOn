import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

interface CourseHeroProps {
  title: string;
  description: string;
  startDate: string;
  duration: string;
  location: string;
  imageSrc?: string;
}

export function CourseHero({ title, description, startDate, duration, location, imageSrc }: CourseHeroProps) {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background Image */}
      {imageSrc ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-700 z-0" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-[52px] font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-primary-50 mb-8 leading-relaxed max-w-2xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Calendar className="h-5 w-5 text-primary-200" />
              <span>{startDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Clock className="h-5 w-5 text-primary-200" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <MapPin className="h-5 w-5 text-primary-200" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50 cursor-pointer border-0">
              Inscrever-se Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

