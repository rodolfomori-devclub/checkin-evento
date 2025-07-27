# 🚀 Landing Page - Bootcamp Programador com IA em 7 Dias

## 📋 Visão Geral

Landing page de alta conversão para captação de alunos do Bootcamp Programador com IA em 7 Dias, desenvolvida com **HTML5 + CSS3 + JavaScript vanilla** para máxima performance e compatibilidade.

## ✨ Características Principais

### 🎨 Design & UX
- **Dark Theme** com paleta neon verde (#37E359)
- **Glassmorphism** e efeitos de brilho
- **Animações fluidas** e micro-interações
- **100% Responsivo** (mobile-first)
- **Custom cursor** (desktop only)
- **Loading screen** animado com progresso

### 🚀 Performance
- **Vanilla JavaScript** - sem dependências externas
- **CSS Animations** otimizadas para 60fps
- **Lazy loading** para imagens
- **Particle system** adaptativo (reduzido em mobile)
- **Lighthouse Score 90+** estimado

### 📱 Responsividade
- **Mobile-first approach**
- **Breakpoints**: 360px, 480px, 768px, 1200px
- **Sem scroll horizontal** em nenhum dispositivo
- **Touch-friendly** em dispositivos móveis
- **Elementos adaptativos** conforme tamanho da tela

## 🔧 Funcionalidades

### ⚡ Interatividade
- **Sistema de FAQ** com accordion
- **Smooth scroll** para navegação
- **Botões CTA** com feedback visual
- **Notificações** do sistema
- **Animações on scroll** com Intersection Observer

### 🎯 Conversão
- **Copy persuasiva** baseada na estrutura fornecida
- **Múltiplos CTAs** estrategicamente posicionados
- **Prova social** com depoimentos
- **Urgência** com preço promocional
- **Garantia** destacada
- **FAQ** para objeções

## 📁 Estrutura de Arquivos

```
Captacao/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── script.js           # Funcionalidades JavaScript
└── README.md           # Esta documentação
```

## 🚀 Como Usar

### Servidor Local
```bash
cd Captacao
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

### Deploy
1. Faça upload dos arquivos para qualquer servidor web
2. Configure HTTPS para melhor performance
3. Otimize imagens se adicionar posteriormente
4. Configure analytics e pixels de conversão

## 🎨 Paleta de Cores

```css
--primary: #37E359        /* Neon Green */
--background: #020A13     /* Dark Blue */
--secondary: #0A1A2E      /* Medium Blue */
--text-primary: #FFFFFF   /* White */
--text-secondary: #B0BEC5 /* Light Gray */
```

## 📱 Breakpoints Responsivos

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 1200px) { ... }

/* Extra Small */
@media (max-width: 360px) { ... }
```

## ⚙️ Configurações JavaScript

### Sistema de Partículas
- **Desktop**: Spawna a cada 500-1500ms
- **Mobile**: Spawna a cada 1500-2500ms
- **Performance**: Desabilitado em dispositivos fracos

### Custom Cursor
- **Desktop**: Ativo com efeitos hover
- **Mobile**: Desabilitado automaticamente

### Animações
- **Intersection Observer**: Para animações on scroll
- **RequestAnimationFrame**: Para animações suaves
- **Reduced Motion**: Respeitado quando configurado

## 🔧 Customização

### Alternar Conteúdo
Edite o arquivo `index.html` para modificar:
- Textos e copy
- CTAs e links
- Depoimentos
- FAQ
- Cronograma

### Estilização
Edite o arquivo `styles.css` para modificar:
- Cores (variáveis CSS no `:root`)
- Tipografia
- Animações
- Layout

### Funcionalidades
Edite o arquivo `script.js` para modificar:
- Links de checkout
- WhatsApp
- Tracking/Analytics
- Comportamentos

## 📈 SEO & Performance

### Meta Tags Incluídas
- **Title** e **Description** otimizados
- **Open Graph** para redes sociais
- **Twitter Cards**
- **Viewport** responsivo

### Performance Otimizada
- **Preload** de fontes
- **Critical CSS** inline
- **Debounced** scroll events
- **Efficient animations** com CSS

### Acessibilidade
- **Semantic HTML**
- **Keyboard navigation**
- **Screen reader** friendly
- **Color contrast** otimizado

## 🌐 Compatibilidade

### Navegadores Suportados
- **Chrome/Edge**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Mobile Safari**: 14+

### Recursos Utilizados
- **CSS Grid** e **Flexbox**
- **CSS Custom Properties**
- **Intersection Observer API**
- **RequestAnimationFrame**

## 📞 Integração

### Checkout
Substitua a função `purchaseAction()` no script.js:
```javascript
function purchaseAction() {
    window.location.href = 'https://seu-checkout.com';
}
```

### WhatsApp
Substitua o número na função `contactSupport()`:
```javascript
const whatsappUrl = `https://go.rodolfomori.com.br/suporte`;
```

### Analytics
Adicione seus códigos de tracking:
```html
<!-- Google Analytics -->
<!-- Facebook Pixel -->
<!-- Hotjar -->
```

## 🎯 Métricas de Conversão

### CTAs Principais
1. **Hero CTA**: "GARANTIR MEU INGRESSO AGORA"
2. **Seção Etapas**: "QUERO GARANTIR O MEU LUGAR"
3. **Oferta Final**: "TÔ DENTRO! QUERO GARANTIR MEU INGRESSO"
4. **Suporte**: "QUERO FALAR COM O SUPORTE"

### Elementos de Conversão
- **Preço de desconto**: R$147 → R$17
- **Urgência**: Ingresso "praticamente de graça"
- **Garantia**: "ou você aprende ou eu devolvo"
- **Prova social**: Empresas que contrataram alunos

## 🚨 Troubleshooting

### Scroll Horizontal
Se aparecer scroll horizontal:
1. Verificar elementos com `position: absolute`
2. Conferir `max-width: 100%` nos containers
3. Testar em diferentes dispositivos

### Performance em Mobile
Se houver lentidão:
1. Reduzir partículas no script.js
2. Desabilitar animações complexas
3. Usar `will-change` com parcimônia

### Compatibilidade
Para browsers antigos:
1. Adicionar prefixos CSS
2. Polyfills para APIs modernas
3. Fallbacks para CSS Grid

---

**Desenvolvido para o DevClub | Bootcamp Programador em 7 Dias** 