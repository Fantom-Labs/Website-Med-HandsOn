# 🔍 Configuração do Google Search Console - Med HandsOn

## Passo a Passo Completo

### 1️⃣ Criar Conta no Google Search Console

1. Acesse: https://search.google.com/search-console
2. Faça login com sua conta Google (use a conta profissional da Med HandsOn)

---

### 2️⃣ Adicionar a Propriedade do Site

1. Clique em **"Adicionar propriedade"** (ou "Add property")
2. Escolha o tipo: **"Prefixo do URL"**
3. Digite: `https://medhandson.com.br`
4. Clique em **"Continuar"**

---

### 3️⃣ Verificar Propriedade (Método Recomendado: Meta Tag HTML)

O Google oferecerá várias opções de verificação. Use o **método Meta Tag HTML**:

1. Selecione **"Tag HTML"**
2. O Google mostrará algo assim:
   ```html
   <meta name="google-site-verification" content="ABC123xyz456..." />
   ```
3. **Copie apenas o código** (exemplo: `ABC123xyz456...`)

#### Adicionar o Código no Site:

1. Abra o arquivo: `src/app/layout.tsx`
2. Localize a linha 56 (dentro do objeto `metadata`):
   ```typescript
   verification: {
     google: "google-site-verification=SEU_CODIGO_AQUI",
   },
   ```
3. Substitua `SEU_CODIGO_AQUI` pelo código fornecido pelo Google
4. Exemplo:
   ```typescript
   verification: {
     google: "google-site-verification=ABC123xyz456...",
   },
   ```
5. **Salve o arquivo**
6. **Faça deploy** do site atualizado (ou aguarde o deploy automático se usar Netlify/Vercel)

#### Confirmar Verificação:

1. Volte ao Google Search Console
2. Clique em **"Verificar"**
3. Aguarde a confirmação (pode levar alguns segundos)
4. ✅ Você verá "Propriedade verificada" se tudo estiver correto

---

### 4️⃣ Submeter o Sitemap

Após a verificação:

1. No menu lateral, clique em **"Sitemaps"**
2. No campo **"Adicionar um novo sitemap"**, digite:
   ```
   sitemap.xml
   ```
3. Clique em **"Enviar"**

O Google começará a rastrear automaticamente:
- `https://medhandson.com.br/sitemap.xml`

**Status esperado**: "Êxito" em verde após algumas horas

---

### 5️⃣ Solicitar Indexação Manual (Opcional, mas Recomendado)

Para acelerar a indexação das páginas principais:

1. Clique em **"Inspeção de URL"** (topo da página)
2. Digite uma URL, por exemplo:
   - `https://medhandson.com.br`
   - `https://medhandson.com.br/cursos`
   - `https://medhandson.com.br/noticias`
3. Clique em **"Solicitar indexação"**
4. Aguarde (pode levar 1-2 minutos)
5. Repita para as páginas mais importantes

---

### 6️⃣ Configurações Recomendadas

#### a) **Ativar Email de Notificações**
1. Vá em **"Configurações"** (ícone de engrenagem)
2. Em **"Usuários e permissões"**, adicione emails
3. Marque **"Ativar notificações por email"**
4. Isso alertará sobre erros críticos

#### b) **Verificar Robots.txt**
1. No menu lateral, vá em **"Configurações"** > **"Rastreamento"**
2. Clique em **"robots.txt"**
3. Deve mostrar o conteúdo do seu `robots.txt`:
   ```
   User-agent: *
   Allow: /
   Disallow: /studio/
   Disallow: /admin/
   Sitemap: https://medhandson.com.br/sitemap.xml
   ```
4. ✅ Se aparecer assim, está correto!

---

### 7️⃣ Aguardar Indexação Inicial

**Timeline esperado:**

- **24 horas**: Google começa a rastrear
- **3-7 dias**: Primeiras páginas indexadas
- **2 semanas**: Indexação completa
- **1 mês**: Dados significativos no Search Console

---

## 📊 Como Usar o Google Search Console

### Relatórios Principais:

#### 1. **Visão Geral**
- Impressões totais
- Cliques totais
- CTR médio
- Posição média

#### 2. **Desempenho**
- Consultas de pesquisa (palavras-chave que levaram ao site)
- Páginas mais acessadas
- Países de origem dos visitantes
- Dispositivos (mobile vs desktop)

**Ações recomendadas:**
- Identifique palavras-chave com muitas impressões mas poucos cliques
- Otimize títulos e descriptions dessas páginas
- Foque em keywords com posição 11-20 (página 2 do Google)

#### 3. **Cobertura / Páginas**
- Páginas indexadas vs não indexadas
- Erros de rastreamento
- Páginas excluídas

**Se aparecerem erros:**
- Verifique se há problemas de acesso
- Corrija links quebrados
- Solicite reindexação

#### 4. **Experiência**
- Core Web Vitals (velocidade do site)
- Usabilidade mobile
- HTTPS

#### 5. **Links**
- Links externos apontando para o site
- Links internos mais importantes
- Texto âncora mais usado

---

## 🎯 Metas de SEO para Primeiros 3 Meses

### Mês 1:
- [ ] Verificar propriedade no Search Console
- [ ] Submeter sitemap
- [ ] Solicitar indexação das principais páginas
- [ ] Verificar se todas as páginas foram indexadas
- [ ] Adicionar campos SEO em pelo menos 5 posts no Sanity

### Mês 2:
- [ ] Monitorar palavras-chave com impressões
- [ ] Otimizar posts com baixo CTR
- [ ] Criar novos posts focados em keywords estratégicas
- [ ] Verificar erros de rastreamento

### Mês 3:
- [ ] Analisar palavras-chave em crescimento
- [ ] Expandir conteúdo de posts populares
- [ ] Criar links internos entre posts relacionados
- [ ] Avaliar necessidade de mais keywords

---

## 🔧 Troubleshooting

### Problema: "Não foi possível verificar a propriedade"
**Soluções:**
1. Certifique-se de que fez deploy do código atualizado
2. Limpe o cache do CDN (Netlify/Vercel)
3. Aguarde 5-10 minutos e tente novamente
4. Verifique se a meta tag está no HTML da página (inspecione o código-fonte)

### Problema: "Sitemap não pode ser lido"
**Soluções:**
1. Acesse `https://medhandson.com.br/sitemap.xml` no navegador
2. Verifique se retorna XML válido
3. Se houver erro, verifique o arquivo `src/app/sitemap.ts`

### Problema: "Páginas não estão sendo indexadas"
**Causas comuns:**
1. Robots.txt bloqueando páginas
2. Tag noindex nas páginas
3. Conteúdo muito novo (aguardar mais tempo)
4. Conteúdo duplicado

**Soluções:**
1. Use a ferramenta "Inspeção de URL"
2. Veja o que o Google encontrou
3. Solicite reindexação

---

## 📈 Dicas Avançadas

### 1. Monitorar Keywords Estratégicas

Crie uma lista de keywords-alvo e monitore mensalmente:
- `rinoplastia ultrassônica`
- `fellowship cirurgia plástica`
- `curso cirurgia hands on`
- `especialização medicina recife`

### 2. Otimizar Posts Antigos

- Identifique posts com tráfego baixo
- Atualize com informações recentes
- Adicione keywords no seoTitle e seoDescription
- Solicite reindexação

### 3. Criar Conteúdo Baseado em Dados

- Use "Desempenho" para ver queries
- Identifique perguntas comuns dos usuários
- Crie posts respondendo essas perguntas

### 4. Link Building Interno

- Adicione links entre posts relacionados
- Use texto âncora descritivo
- Crie hub pages (páginas centrais) ligando a conteúdos específicos

---

## ✅ Checklist Final

Antes de considerar a configuração concluída:

- [ ] Propriedade verificada no Google Search Console
- [ ] Sitemap submetido e status "Êxito"
- [ ] Páginas principais solicitadas para indexação
- [ ] Notificações por email ativadas
- [ ] Código de verificação adicionado ao `layout.tsx`
- [ ] Deploy do site realizado
- [ ] Primeiras páginas aparecem no relatório "Cobertura"
- [ ] Sem erros críticos no Search Console
- [ ] Campos SEO preenchidos em pelo menos alguns posts

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. **Documentação oficial**: https://support.google.com/webmasters
2. **Comunidade Google**: https://support.google.com/webmasters/community
3. **Fórum Next.js SEO**: https://github.com/vercel/next.js/discussions

---

**Última atualização**: Dezembro 2024  
**Status**: ✅ Site otimizado e pronto para indexação



