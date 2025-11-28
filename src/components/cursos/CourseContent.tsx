"use client";

import { CourseModule } from "@/lib/sanity.types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CourseContentProps {
  modules: CourseModule[];
}

export function CourseContent({ modules }: CourseContentProps) {
  if (!modules || modules.length === 0) return null;

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Conteúdo Programático</h3>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <ModuleItem key={index} module={module} />
        ))}
      </div>
    </section>
  );
}

function ModuleItem({ module }: { module: CourseModule }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-lg text-gray-900">{module.title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 border-t border-gray-100">
          <ul className="space-y-3 mt-4">
            {module.topics?.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

