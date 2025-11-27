# 🚀 ÚLTIMA ETAPA - CRIAR .ENV.LOCAL

## ⚠️ AÇÃO NECESSÁRIA

O Sanity está configurado! Só falta criar o arquivo de variáveis de ambiente.

### 📝 O QUE FAZER AGORA:

**Crie um arquivo chamado `.env.local` na raiz do projeto com este conteúdo:**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="ybel3uit"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-27"
```

### 💻 FORMA RÁPIDA (Windows PowerShell):

```powershell
@"
NEXT_PUBLIC_SANITY_PROJECT_ID="ybel3uit"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-27"
"@ | Out-File -FilePath .env.local -Encoding utf8
```

Cole esse comando no terminal e pressione Enter.

---

## ✅ DEPOIS DE CRIAR O ARQUIVO:

### 1. Rodar o servidor:
```bash
npm run dev
```

### 2. Acessar o Sanity Studio:
```
http://localhost:3000/studio
```

### 3. Fazer login com sua conta Sanity

### 4. Criar seu primeiro post!

### 5. Ver o resultado:
```
http://localhost:3000/blog
```

---

## 🎊 PRONTO!

Após criar o `.env.local`, tudo vai funcionar perfeitamente!

**Seu Project ID:** `ybel3uit` ✅

