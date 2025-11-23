import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Políticas - Med HandsOn",
  description: "Termos de uso e política de privacidade.",
};

export default function TermosPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-primary-900 mb-8">Termos e Políticas</h1>
      <div className="prose max-w-none text-gray-600">
        <p>Em breve.</p>
      </div>
    </main>
  );
}

