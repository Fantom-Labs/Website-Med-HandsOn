/**
 * Configuração de Palavras-chave SEO para o site Med HandsOn
 * 
 * Este arquivo centraliza todas as keywords usadas para otimização de busca.
 * Útil para manter consistência nas palavras-chave em todo o site.
 */

export const SEO_KEYWORDS = {
  // Palavras-chave principais do site
  main: [
    "med handson",
    "medhandson",
    "escola médica",
    "cursos medicina",
    "cirurgia plástica",
    "fellowship",
    "especialização médica",
    "hands on medicina",
    "prática cirúrgica",
  ],

  // Palavras-chave para a seção de cursos
  cursos: [
    "curso cirurgia plástica",
    "rinoplastia ultrassônica",
    "fellowship cirurgia",
    "curso rinoplastia",
    "especialização cirurgia plástica",
    "hands on cirurgia",
    "formação médica",
    "curso para médicos",
    "treinamento cirúrgico",
    "prática em cirurgias reais",
  ],

  // Palavras-chave para o blog/notícias
  blog: [
    "notícias medicina",
    "artigos médicos",
    "artigos cirurgia plástica",
    "educação médica",
    "carreira médica",
    "técnicas cirúrgicas",
    "inovações medicina",
    "procedimentos cirúrgicos",
    "atualização médica",
  ],

  // Palavras-chave por categoria de post
  categorias: {
    cirurgiaPlastica: [
      "cirurgia plástica",
      "rinoplastia",
      "blefaroplastia",
      "ultrassom piezométrico",
      "técnicas cirúrgicas",
      "procedimentos estéticos",
    ],
    educacaoMedica: [
      "educação médica",
      "ensino médico",
      "hands on",
      "prática cirúrgica",
      "fellowship",
      "especialização",
      "treinamento médico",
    ],
    carreira: [
      "carreira médica",
      "médico cirurgião",
      "desenvolvimento profissional",
      "mercado médico",
      "especialização profissional",
    ],
    noticias: [
      "notícias medicina",
      "novidades cirurgia plástica",
      "atualizações médicas",
      "eventos médicos",
    ],
  },

  // Palavras-chave geográficas
  localizacao: [
    "recife",
    "pernambuco",
    "nordeste",
    "brasil",
    "curso médico recife",
    "cirurgia plástica recife",
  ],

  // Long-tail keywords (frases mais específicas)
  longTail: [
    "como se tornar cirurgião plástico",
    "melhor curso de rinoplastia no brasil",
    "fellowship em cirurgia plástica",
    "aprenda cirurgia com prática real",
    "curso de especialização em medicina",
    "rinoplastia ultrassônica curso",
    "hands on em cirurgias reais",
  ],
} as const;

// Keywords combinadas para uso no metadata global
export const GLOBAL_KEYWORDS = [
  ...SEO_KEYWORDS.main,
  ...SEO_KEYWORDS.cursos.slice(0, 3),
  ...SEO_KEYWORDS.blog.slice(0, 3),
];

// Helper function para obter keywords por categoria de post
export function getKeywordsByCategory(category: string): string[] {
  const categoryMap: Record<string, string[]> = {
    "Cirurgia Plástica": SEO_KEYWORDS.categorias.cirurgiaPlastica,
    "Educação Médica": SEO_KEYWORDS.categorias.educacaoMedica,
    "Carreira": SEO_KEYWORDS.categorias.carreira,
    "Notícias": SEO_KEYWORDS.categorias.noticias,
  };

  return categoryMap[category] || [];
}

