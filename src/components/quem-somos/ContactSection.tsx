"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio aqui
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="bg-[#09111F] py-20 lg:py-32 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0d192b] to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#0085FF] mr-2"></div>
              <span className="text-sm font-medium text-white">Contato</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
              Precisa falar com a<br />
              Med Hands On?
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-sans">
              Envie uma mensagem e entre em contato conosco para parcerias institucionais.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-lg ml-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome Completo */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0f1c2e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0f1c2e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0f1c2e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent transition-all resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit Button (Optional - added for completeness) */}
              <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#0085FF] hover:bg-[#006bb3] text-white font-medium px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Enviar mensagem
                  </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

