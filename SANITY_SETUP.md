# 🎨 Guia de Configuração do Sanity CMS

## 📋 Passo a Passo para Começar

### 1️⃣ Criar Projeto no Sanity

1. Acesse [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Faça login ou crie uma conta gratuita
3. Clique em **"Create New Project"**
4. Dê um nome ao projeto: **"Med HandsOn Blog"**
5. Escolha o plano **Free**
6. Copie o **Project ID** que aparecerá (algo como `abc123de`)

### 2️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="seu-project-id-aqui"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-27"
```

**⚠️ IMPORTANTE:** Substitua `seu-project-id-aqui` pelo Project ID que você copiou.

### 3️⃣ Rodar o Projeto

```bash
npm run dev
```

### 4️⃣ Acessar o Sanity Studio

Abra o navegador em: **http://localhost:3000/studio**

Na primeira vez, você precisará fazer login com sua conta do Sanity.

### 5️⃣ Criar Seu Primeiro Post

1. No Sanity Studio, clique em **"Posts do Blog"** no menu lateral
2. Clique no botão **"Create"** (ícone de +)
3. Preencha os campos:
   - **Título**: Digite o título do post
   - **Slug**: Clique em "Generate" para criar automaticamente
   - **Resumo**: Breve descrição (máx. 200 caracteres)
   - **Imagem de Capa**: Clique e faça upload de uma imagem
   - **Categoria**: Escolha uma das opções
   - **Tempo de Leitura**: Ex: "5 min de leitura"
   - **Conteúdo**: Escreva o artigo usando o editor rich text
   - **Data de Publicação**: Ajuste se necessário
4. Clique em **"Publish"** quando terminar

### 6️⃣ Visualizar no Site

Acesse **http://localhost:3000/blog** para ver seus posts publicados!

---

## 📝 Como Usar o Editor de Conteúdo

### Formatação Básica
- **Negrito**: Selecione o texto e clique no ícone B
- **Itálico**: Selecione o texto e clique no ícone I
- **Links**: Selecione o texto, clique no ícone de link e adicione a URL

### Estilos de Título
Use o dropdown de estilos para criar hierarquia:
- **Normal**: Texto padrão
- **H2**: Título de seção principal
- **H3**: Subtítulo
- **H4**: Sub-subtítulo

### Listas
- **Lista com Marcadores**: Para itens não ordenados
- **Lista Numerada**: Para itens em sequência

### Adicionar Imagens no Conteúdo
1. Clique no ícone **+** no editor
2. Escolha **Image**
3. Faça upload da imagem
4. Adicione um texto alternativo (acessibilidade)
5. Opcionalmente, adicione uma legenda

---

## 🎯 Dicas para o Cliente

### ✅ Boas Práticas

1. **Títulos Descritivos**: Use títulos claros que resumem o conteúdo
2. **Resumos Concisos**: O resumo aparece nos cards, mantenha-o curto
3. **Imagens de Qualidade**: Use imagens de alta resolução (mínimo 1200x675px)
4. **SEO Amigável**: Slugs devem ser curtos e descritivos (ex: `rinoplastia-ultrassonica`)
5. **Tempo de Leitura Realista**: Calcule ~200 palavras = 1 minuto

### 📸 Tamanhos Recomendados de Imagem

- **Imagem de Capa**: 1200 x 675px (proporção 16:9)
- **Imagens no Conteúdo**: Largura máxima de 800px

### 🔄 Atualizando Posts Publicados

1. Vá em **"Posts do Blog"**
2. Clique no post que deseja editar
3. Faça as alterações
4. Clique em **"Publish"** novamente
5. O site será atualizado automaticamente em até 60 segundos (ISR)

### 🗑️ Excluindo Posts

1. Abra o post
2. Clique no menu ⋮ (três pontos) no canto superior direito
3. Escolha **"Delete"**
4. Confirme a exclusão

---

## 🚀 Comandos Úteis

```bash
# Rodar o projeto em desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Rodar em produção
npm start

# Deploy do Sanity Studio (opcional - para hospedar em sanity.studio)
npm run studio:deploy
```

---

## 🆘 Problemas Comuns

### O Studio não carrega
- Verifique se o `.env.local` está configurado corretamente
- Confirme que o Project ID está correto no Sanity
- Reinicie o servidor: Ctrl+C e depois `npm run dev`

### Imagens não aparecem
- Verifique se o `next.config.ts` tem a configuração de `cdn.sanity.io`
- Limpe o cache: delete a pasta `.next` e rode `npm run dev` novamente

### Posts não aparecem no site
- Verifique se o post foi **publicado** (não apenas salvo como rascunho)
- Aguarde até 60 segundos para o ISR atualizar
- Atualize a página com Ctrl+F5 (hard refresh)

---

## 📚 Recursos Adicionais

- [Documentação do Sanity](https://www.sanity.io/docs)
- [Sanity Studio v3 Guide](https://www.sanity.io/docs/sanity-studio)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

## ✅ Checklist de Configuração

- [ ] Conta criada no Sanity
- [ ] Project ID copiado
- [ ] Arquivo `.env.local` criado e configurado
- [ ] Servidor rodando (`npm run dev`)
- [ ] Studio acessível em `/studio`
- [ ] Login realizado no Studio
- [ ] Primeiro post criado e publicado
- [ ] Post visível em `/blog`

---

**Pronto! Seu blog agora está totalmente integrado com o Sanity CMS! 🎉**

