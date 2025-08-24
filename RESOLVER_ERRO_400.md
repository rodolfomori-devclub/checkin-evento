# 🚨 Resolver Erro 400 - Apps Script

## 🔍 Problema
Quando você clica em "Apps Script" na planilha, aparece: **Bad Request Error 400**

## ✅ Solução: Acesso Direto

### Passo 1: Acessar Apps Script Diretamente
1. **Abra uma nova aba** no navegador
2. **Vá para:** https://script.google.com
3. **Faça login** com a mesma conta Google da planilha

### Passo 2: Criar Novo Projeto
1. **Clique em:** "Novo projeto" (ou "+ New project")
2. **Aguarde** o editor carregar
3. **Apague** todo o código que está lá (função myFunction)

### Passo 3: Colar o Código Correto
1. **Copie TODO o código** do arquivo `google-apps-script-simples.js`
2. **Cole** no editor (substitua tudo)
3. **Salve** (Ctrl+S ou Cmd+S)
4. **Renomeie** o projeto para "DevClub Check-in"

### Passo 4: Fazer o Deploy
1. **Clique em:** "Deploy" → "New deployment"
2. **Configure:**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** ⚠️ **IMPORTANTE!**
3. **Clique em:** "Deploy"
4. **Autorize** as permissões quando solicitado
5. **COPIE A URL** gerada

### Passo 5: Atualizar o Código
1. **Abra:** `src/utils/googleSheets.js`
2. **Substitua a linha 2:**
   ```javascript
   const GOOGLE_SHEETS_URL = 'COLE_AQUI_SUA_URL'
   ```
3. **Salve** o arquivo

### Passo 6: Testar
1. **Execute:** `npm run build`
2. **Teste** o check-in completo
3. **Verifique** se os dados aparecem na planilha

---

## 🛠️ Solução Alternativa: Via Planilha (se o erro persistir)

### Se ainda der erro 400:

1. **Na planilha**, vá em **Extensões** → **Macros** → **Editor de scripts**
2. Se ainda der erro: **Feche** o Google Sheets completamente
3. **Abra** novamente e tente
4. **Use o Chrome** (outros navegadores podem ter problemas)

---

## 🔍 Outras Causas do Erro 400:

### ❌ Conta sem permissão
- **Certifique-se** de estar logado na conta correta
- **Verifique** se tem acesso de edição à planilha

### ❌ Cache do navegador
- **Pressione** Ctrl+Shift+R (ou Cmd+Shift+R) para recarregar
- **Ou abra** uma aba anônima/privada

### ❌ Extensões do navegador
- **Desative** extensões como AdBlock temporariamente
- **Teste** em modo anônimo

---

## ✅ Vantagens da Solução Direta (script.google.com):

- ✅ **Evita** o erro 400
- ✅ **Mais estável**
- ✅ **Mesmo resultado** final
- ✅ **Controle total** sobre o projeto

---

## 🎯 Resultado Esperado:

Após seguir estes passos, você deve conseguir:
1. ✅ Criar o Apps Script sem erro
2. ✅ Fazer o deploy com sucesso
3. ✅ Obter a URL da API
4. ✅ Testar e ver os dados na planilha

**Se ainda houver problemas, me avise qual erro específico aparece!** 🚀