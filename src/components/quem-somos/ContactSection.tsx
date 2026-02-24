"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "cooldown">("idle");
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate Limiting: Verificar última submissão
    const lastSubmitTime = localStorage.getItem('lastContactSubmit');
    const now = Date.now();
    const COOLDOWN_MS = 60000; // 60 segundos

    if (lastSubmitTime) {
      const timeSinceLastSubmit = now - parseInt(lastSubmitTime);
      
      if (timeSinceLastSubmit < COOLDOWN_MS) {
        const remainingSeconds = Math.ceil((COOLDOWN_MS - timeSinceLastSubmit) / 1000);
        setCooldownSeconds(remainingSeconds);
        setStatus("cooldown");
        
        // Atualizar contador a cada segundo
        const countdown = setInterval(() => {
          setCooldownSeconds(prev => {
            if (prev <= 1) {
              clearInterval(countdown);
              setStatus("idle");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        return;
      }
    }

    setLoading(true);
    setStatus("idle");

    // EmailJS Configuration
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "website_medhandson";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "medhandson";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "pitG1Ix1kR7VF_cqs";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      console.log("Enviando email...");
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Salvar timestamp do envio bem-sucedido
      localStorage.setItem('lastContactSubmit', now.toString());
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
                  name="name"
                  required
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
                  name="email"
                  required
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
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0f1c2e] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent transition-all resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={loading || status === "cooldown"}
                    className="bg-[#0085FF] hover:bg-[#006bb3] text-white font-medium px-8 py-3 rounded-lg transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? "Enviando..." : 
                     status === "cooldown" ? `Aguarde ${cooldownSeconds}s` : 
                     "Enviar mensagem"}
                  </button>

                  {status === "success" && (
                    <p className="text-green-400 text-sm">
                      ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      ✗ Ocorreu um erro ao enviar. Por favor, tente novamente ou contate-nos diretamente.
                    </p>
                  )}
                  {status === "cooldown" && (
                    <p className="text-yellow-400 text-sm">
                      ⏳ Por favor aguarde {cooldownSeconds} segundos antes de enviar outra mensagem.
                    </p>
                  )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}


