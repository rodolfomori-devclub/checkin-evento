# 🚀 Google Apps Script - Guia Completo

## 📋 Passo a Passo Detalhado

### 1️⃣ Preparar a Planilha Google Sheets

1. **Abra sua planilha:**
   - Link: https://docs.google.com/spreadsheets/d/1h5yG0zs3fJNtdHPuRVRkS3EGztsoSHifxBEsblJSYs4/edit

2. **Limpe a planilha** (se necessário):
   - Selecione todas as células com dados
   - Delete o conteúdo

3. **NÃO precisa criar cabeçalhos**:
   - O script criará automaticamente na primeira execução

### 2️⃣ Acessar o Google Apps Script

1. **Na planilha**, clique em **Extensões** → **Apps Script**
2. Você verá o editor do Google Apps Script
3. **Apague todo o código existente** (se houver)

### 3️⃣ Colar o Código

1. **Copie TODO o código** do arquivo `google-apps-script.js`
2. **Cole no editor** do Apps Script
3. **Salve** (Ctrl+S ou Cmd+S) 
4. Dê um nome ao projeto: **"DevClub Check-in API"**

### 4️⃣ Testar o Script (Opcional)

1. No editor, selecione a função **`testScript`**
2. Clique em **▶️ Executar**
3. Se pedir permissões, autorize
4. Verifique se uma linha de teste foi adicionada na planilha

### 5️⃣ Fazer o Deploy como Web App

1. **Clique em Deploy** → **New Deployment**

2. **Configure o deployment:**
   - **Type**: Web app
   - **Description**: "DevClub Check-in API v1"
   - **Execute as**: Me (sua conta)
   - **Who has access**: Anyone ⚠️ **IMPORTANTE!**

3. **Clique em Deploy**

4. **Autorizar permissões:**
   - Clique em "Authorize access"
   - Escolha sua conta Google
   - Clique em "Advanced" → "Go to DevClub Check-in API"
   - Clique em "Allow"

5. **COPIE A URL GERADA** 📋
   - Será algo como: `https://script.google.com/macros/s/ABC123.../exec`
   - **GUARDE ESTA URL!**

### 6️⃣ Atualizar o Código do Site

1. **Abra o arquivo:** `src/utils/googleSheets.js`

2. **Substitua a linha 2:**
   ```javascript
   const GOOGLE_SHEETS_URL = 'COLE_AQUI_SUA_URL_DO_GOOGLE_APPS_SCRIPT'
   ```

3. **Salve o arquivo**

### 7️⃣ Fazer Build e Testar

1. **Execute o build:**
   ```bash
   npm run build
   ```

2. **Teste completo:**
   - Abra o site
   - Faça um check-in completo
   - Responda sobre gravação e código
   - Gere o ingresso

3. **Verifique a planilha:**
   - Os dados devem aparecer automaticamente
   - Com todos os 6 campos preenchidos

### 8️⃣ Verificar se Funcionou

**Na planilha, você deve ver:**

| Nome | Email | Data | Horário | Resposta Gravação | Resposta Código |
|------|-------|------|---------|-------------------|-----------------|
| João Silva | joao@email.com | 31/07/2025 | 14:30:25 | Quero a gravação | Não quero o código |

**No console do navegador:**
```
✅ Dados enviados para Google Sheets com sucesso!
```

---

## 🔧 Troubleshooting

### ❌ Erro 403 - Forbidden
**Problema:** Script não autorizado
**Solução:** 
1. Refaça o deploy
2. Certifique-se de escolher "Anyone" no acesso
3. Reautorize as permissões

### ❌ Erro 404 - Not Found  
**Problema:** URL incorreta
**Solução:**
1. Verifique se copiou a URL completa (com `/exec` no final)
2. Refaça o deploy e copie a nova URL

### ❌ Dados não aparecem na planilha
**Problema:** Script não está salvando
**Solução:**
1. Verifique os logs no Apps Script (View → Logs)
2. Execute a função `testScript` manualmente
3. Verifique se a planilha está correta

### ❌ Script fica dando erro
**Problema:** Código incorreto
**Solução:**
1. Apague todo o código
2. Cole novamente o código do arquivo `google-apps-script.js`
3. Salve e refaça o deploy

### ❌ Erro de CORS
**Problema:** Bloqueio do navegador
**Solução:**
- O código já tem fallback para FormData
- Verifique se o deployment tem acesso "Anyone"

---

## 📊 Dados que serão salvos:

1. **Nome**: Nome completo da pessoa
2. **Email**: Email usado na compra
3. **Data**: Data do check-in (DD/MM/AAAA)
4. **Horário**: Hora do check-in (HH:MM:SS)
5. **Resposta Gravação**: 
   - "Quero a gravação"
   - "Não quero"
   - "Não quero a gravação" 
   - "Já comprei a gravação"
6. **Resposta Código**:
   - "Quero o código"
   - "Não quero"
   - "Não quero o código"
   - "Já comprei o código"

---

## ✅ Vantagens do Google Apps Script:

- ✅ **Gratuito** (até 6 min/execução)
- ✅ **Sem limitações** de quantidade
- ✅ **Direto no Google Sheets**
- ✅ **Não precisa de terceiros**
- ✅ **Logs detalhados** para debug
- ✅ **Backup automático** (dados locais)

---

## 🎯 Resultado Final:

Após seguir este guia, você terá:
- ✅ Dados salvos automaticamente no Google Sheets
- ✅ Mapeamento completo das respostas
- ✅ Sistema de backup local
- ✅ Logs detalhados no console
- ✅ API funcionando 24/7