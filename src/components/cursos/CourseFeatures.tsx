import { CheckCircle2 } from "lucide-react";

interface CourseFeaturesProps {
  features: string[];
}

export function CourseFeatures({ features }: CourseFeaturesProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">O que está incluso</h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
