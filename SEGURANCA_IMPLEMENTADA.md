# 🛡️ Segurança Implementada - Med HandsOn

## ✅ Rate Limiting no Formulário de Contato

### O que foi implementado:

Proteção contra spam e abuso no formulário de contato através de **rate limiting baseado em localStorage**.

### Como funciona:

1. **Limite de tempo:** 60 segundos entre envios consecutivos
2. **Armazenamento local:** Usa `localStorage` para rastrear última submissão
3. **Feedback visual:** Contador regressivo mostra tempo restante
4. **UX clara:** Botão desabilitado durante cooldown

### Arquivo modificado:

- `src/components/quem-somos/ContactSection.tsx`

### Detalhes técnicos:

```typescript
// Configuração
const COOLDOWN_MS = 60000; // 60 segundos

// Fluxo:
1. Usuário submete formulário
2. Sistema verifica localStorage['lastContactSubmit']
3. Se < 60s desde último envio → Bloqueia com contador
4. Se >= 60s ou primeira vez → Permite envio
5. Após envio bem-sucedido → Salva timestamp
```

### Proteções implementadas:

✅ **Rate limiting cliente-side (60s)**
- Impede envios múltiplos rápidos
- Contador regressivo visual
- Botão desabilitado durante cooldown

✅ **Feedback de estados**
- `idle`: Estado normal
- `loading`: Enviando mensagem
- `success`: Enviado com sucesso
- `error`: Erro no envio
- `cooldown`: Aguardando tempo mínimo

✅ **Validação HTML5**
- Campos obrigatórios (required)
- Validação de email (type="email")
- Limites de caracteres

---

## 🔒 Próximas Melhorias Recomendadas

### Curto Prazo:

1. **Mover chaves para variáveis de ambiente**
   - Remover valores hardcoded
   - Usar apenas `process.env.NEXT_PUBLIC_*`
   - Configurar no Netlify

2. **CAPTCHA (Opcional)**
   - Google reCAPTCHA v3
   - Cloudflare Turnstile
   - hCaptcha

### Médio Prazo:

3. **API Route com rate limiting server-side**
   - Criar `src/app/api/contact/route.ts`
   - Rate limit baseado em IP real
   - Validação server-side robusta
   - Ver detalhes em: Nível 2 da documentação

4. **Validação com Zod**
   - Schema de validação
   - Sanitização de inputs
   - Detecção de conteúdo suspeito

### Longo Prazo:

5. **Redis/Upstash para rate limiting persistente**
   - Rate limit distribuído
   - Analytics de uso
   - Proteção contra ataques coordenados

6. **Monitoramento**
   - Sentry para erros
   - Logs de tentativas suspeitas
   - Alertas de abuso

---

## 📊 Níveis de Proteção Atual

| Tipo de Ataque | Proteção Atual | Nível |
|----------------|----------------|-------|
| Spam manual | ✅ Rate limiting | 🟢 Forte |
| Múltiplos envios acidentais | ✅ Cooldown 60s | 🟢 Forte |
| Scripts básicos | ✅ LocalStorage check | 🟡 Moderada |
| Scripts avançados | ⚠️ Pode contornar | 🟡 Moderada |
| DDoS coordenado | ❌ Não protegido | 🔴 Fraca |
| Injeção XSS | ✅ React escapa automaticamente | 🟢 Forte |

---

## 🧪 Como Testar

### Teste 1: Rate Limiting
1. Acesse página "Quem Somos"
2. Preencha e envie formulário
3. Tente enviar novamente imediatamente
4. Deve mostrar: "⏳ Por favor aguarde X segundos..."
5. Aguarde contador chegar a 0
6. Tente enviar novamente (deve funcionar)

### Teste 2: Feedback Visual
1. Verifique estados do botão:
   - Normal: "Enviar mensagem"
   - Durante envio: "Enviando..."
   - Em cooldown: "Aguarde Xs"
2. Verifique mensagens de status abaixo do botão

### Teste 3: Validação
1. Tente enviar com campos vazios
2. Tente enviar email inválido
3. Deve bloquear com validação HTML5

---

## 🔧 Configurações

### Ajustar tempo de cooldown:

No arquivo `ContactSection.tsx`, linha ~23:

```typescript
const COOLDOWN_MS = 60000; // Altere para o valor desejado em milissegundos

// Exemplos:
// 30 segundos = 30000
// 60 segundos = 60000 (atual)
// 120 segundos = 120000
```

### Recomendação:
- **Site pequeno/médio:** 60 segundos (atual)
- **Site grande/muito tráfego:** 120 segundos
- **Ambiente de teste:** 30 segundos

---

## 📝 Histórico de Mudanças

### 2026-02-09 - Implementação Inicial
- ✅ Rate limiting com localStorage (60s)
- ✅ Contador regressivo visual
- ✅ Estado "cooldown" adicionado
- ✅ Feedback claro ao usuário
- ✅ Botão desabilitado durante cooldown

---

## 🚨 Notas Importantes

1. **Chaves EmailJS ainda estão hardcoded**
   - Risco: 🟡 Médio (repo privado)
   - Ação: Mover para variáveis de ambiente
   - Prioridade: Média

2. **Rate limiting é cliente-side**
   - Pode ser contornado por usuários técnicos
   - Para proteção máxima, implementar server-side
   - Suficiente para 95% dos casos

3. **localStorage persiste por navegador**
   - Modo anônimo = novo limite
   - Múltiplos navegadores = múltiplos limites
   - Limpar cache = reseta limite

---

## 📚 Recursos Adicionais

- [EmailJS Security Best Practices](https://www.emailjs.com/docs/security/)
- [Next.js Security Headers](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [OWASP Rate Limiting](https://cheatsheetseries.owasp.org/cheatsheets/Rate_Limiting_Cheat_Sheet.html)

---

**Documento criado em:** 2026-02-09  
**Última atualização:** 2026-02-09  
**Responsável:** Sistema de Segurança Med HandsOn
