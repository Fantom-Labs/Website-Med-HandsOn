export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "evolucao-rinoplastia-ultrassonica",
    title: "A evolução da Rinoplastia Ultrassônica: Precisão e Recuperação",
    excerpt: "Descubra como a tecnologia ultrassônica transformou as cirurgias nasais, proporcionando resultados mais previsíveis e um pós-operatório mais tranquilo para os pacientes.",
    coverImage: "/images/rinoplastia-blog.png",
    date: "22 Nov 2023",
    readTime: "5 min de leitura",
    category: "Cirurgia Plástica",
    content: `
      <p>A rinoplastia é uma das cirurgias plásticas mais realizadas no mundo, e sua evolução tecnológica tem permitido resultados cada vez mais naturais e previsíveis. Entre as inovações mais significativas das últimas décadas está a <strong>Rinoplastia Ultrassônica</strong>, uma técnica que utiliza a tecnologia piezoelétrica para remodelar os ossos nasais com precisão milimétrica.</p>
      
      <h3>O que é a Rinoplastia Ultrassônica?</h3>
      <p>Diferente da técnica tradicional, que utiliza martelo e cinzel para fraturar os ossos do nariz, a rinoplastia ultrassônica emprega um dispositivo que emite vibrações ultrassônicas. Esse aparelho é capaz de cortar e remodelar o osso sem lesionar os tecidos moles adjacentes, como vasos sanguíneos, nervos e cartilagens.</p>
      
      <h3>Principais Vantagens</h3>
      <ul>
        <li><strong>Menor trauma:</strong> Por preservar os tecidos moles, há significativamente menos inchaço (edema) e hematomas (roxos) no pós-operatório.</li>
        <li><strong>Maior precisão:</strong> O cirurgião tem controle total sobre a modelagem óssea, permitindo correções mais refinadas de gibas e assimetrias.</li>
        <li><strong>Recuperação mais rápida:</strong> Com menos trauma, os pacientes tendem a retornar às suas atividades sociais e profissionais mais precocemente.</li>
      </ul>

      <h3>Para quem é indicada?</h3>
      <p>A técnica é especialmente indicada para pacientes que necessitam de reestruturação óssea, seja para redução de giba dorsal, estreitamento da base óssea ou correção de desvios. No entanto, a avaliação individualizada com um cirurgião especializado é fundamental para determinar a melhor abordagem para cada caso.</p>
      
      <p>Na Med HandsOn, ensinamos essa técnica com profundidade, permitindo que os cirurgiões dominem o uso do piezótomo e ofereçam o que há de mais moderno aos seus pacientes.</p>
    `
  },
  {
    slug: "importancia-anatomia-real",
    title: "A importância do estudo em anatomia real para cirurgiões",
    excerpt: "Por que simuladores e manequins não substituem a experiência do tecido real? Entenda os benefícios do treinamento em Fresh Frozen Cadaver.",
    coverImage: "/images/img-rp.png",
    date: "15 Out 2023",
    readTime: "8 min de leitura",
    category: "Educação Médica",
    content: `
      <p>A formação cirúrgica exige um conhecimento profundo da anatomia humana. Embora livros, atlas 3D e simuladores sintéticos sejam ferramentas valiosas de aprendizado, nada substitui a experiência tátil e visual do tecido humano real. É nesse contexto que o treinamento em <strong>Fresh Frozen Cadaver</strong> (Cadáver Fresco Congelado) se destaca como o padrão-ouro na educação médica continuada.</p>

      <h3>O que é Fresh Frozen Cadaver?</h3>
      <p>Trata-se de peças anatômicas que, logo após o óbito, são submetidas a um processo de congelamento rápido, sem o uso de formol ou outros fixadores químicos tradicionais. Isso preserva a textura, a cor, a flexibilidade e a resistência dos tecidos, proporcionando uma experiência cirúrgica extremamente próxima à realidade de um paciente vivo.</p>

      <h3>Benefícios do Treinamento em Cadáveres Frescos</h3>
      <p>Para o cirurgião em formação ou em especialização, as vantagens são inúmeras:</p>
      <ul>
        <li><strong>Fidelidade Anatômica:</strong> Permite identificar planos de dissecção, nervos e vasos com a mesma aparência e consistência encontrada no centro cirúrgico.</li>
        <li><strong>Segurança:</strong> Oferece um ambiente controlado para praticar procedimentos complexos e lidar com possíveis complicações sem colocar pacientes em risco.</li>
        <li><strong>Desenvolvimento de Habilidades:</strong> Facilita o aprendizado de novas tecnologias e dispositivos, como o uso de endoscópios e instrumentos de energia, que interagem com o tecido real de forma específica.</li>
      </ul>

      <h3>A Metodologia Med HandsOn</h3>
      <p>Na Med HandsOn, acreditamos que a excelência vem da prática. Por isso, nossos cursos são focados em experiências imersivas, onde o aluno não apenas observa, mas realiza os procedimentos. O contato com a anatomia real dá ao cirurgião a confiança necessária para atuar com precisão e segurança em sua prática diária.</p>
    `
  },
  {
    slug: "fellowship-internacional",
    title: "Como se preparar para um Fellowship Internacional",
    excerpt: "Guia completo para médicos que desejam expandir seus horizontes e buscar especialização fora do Brasil. Dicas de documentação, idioma e networking.",
    coverImage: "/images/fellowship-blog.png",
    date: "28 Set 2023",
    readTime: "6 min de leitura",
    category: "Carreira",
    content: `
      <p>Realizar um <strong>Fellowship Internacional</strong> é o sonho de muitos médicos que buscam aprimoramento técnico e crescimento profissional. A oportunidade de aprender com grandes nomes da medicina mundial e vivenciar diferentes culturas hospitalares é um diferencial inestimável na carreira.</p>

      <h3>O que é um Fellowship?</h3>
      <p>O Fellowship é um programa de complementação especializada destinado a médicos que já concluíram a residência. No exterior, esses programas podem variar de alguns meses a alguns anos e podem ser focados em pesquisa (Research Fellowship) ou prática clínica (Clinical Fellowship).</p>

      <h3>Passos para a Preparação</h3>
      <ol>
        <li><strong>Defina seu Objetivo:</strong> Escolha a área de atuação e pesquise os centros de referência mundial nesse nicho.</li>
        <li><strong>Idioma:</strong> A fluência no idioma do país de destino (geralmente inglês) é essencial. Exames de proficiência como TOEFL ou IELTS são frequentemente exigidos.</li>
        <li><strong>Networking:</strong> Participe de congressos internacionais e tente estabelecer contato com médicos dos serviços que você almeja. Uma carta de recomendação pode abrir portas.</li>
        <li><strong>Currículo e Documentação:</strong> Prepare seu CV no formato adequado e esteja atento aos prazos de aplicação e aos requisitos de validação de diploma, se aplicável.</li>
      </ol>

      <h3>O Impacto na Carreira</h3>
      <p>Além do ganho técnico, um fellowship internacional demonstra proatividade e adaptabilidade. O retorno ao Brasil traz consigo não apenas novas técnicas cirúrgicas, mas também uma visão mais ampla de gestão e atendimento ao paciente.</p>
      
      <p>A Med HandsOn apoia a educação continuada e incentiva seus alunos a buscarem sempre o estado da arte na medicina, seja através de nossos cursos práticos ou de experiências internacionais.</p>
    `
  }
];

