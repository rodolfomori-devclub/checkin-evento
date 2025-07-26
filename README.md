# 🚀 Página de Check-in - Bootcamp Programador em 7 Dias

Uma página de check-in **extremamente impressionante** para o Bootcamp Programador em 7 Dias, criada com React, Vite e Tailwind CSS. 

## ✨ Características

### 🎨 Design & UX
- **Tema escuro** com fundo #020A13
- **Paleta neon** com verde vibrante (#37E359)
- **Glassmorphism** em cards
- **Animações fluidas** com Framer Motion
- **100% responsiva** com mobile-first approach
- **Performance otimizada** (Lighthouse 90+)

### 🌟 Efeitos Visuais
- ✅ Partículas de código flutuando no background
- ✅ Gradientes com verde neon e efeitos glow
- ✅ Animações de typing effect no título
- ✅ Contagem regressiva com números em neon
- ✅ Grid pattern sutil no fundo
- ✅ Blob animations orgânicas
- ✅ Terminal window decorativo
- ✅ Cursor customizado
- ✅ Parallax suave no scroll
- ✅ Botão WhatsApp flutuante animado

### 📱 Componentes
- **HeroSection**: Seção principal com título, countdown e CTA
- **Countdown**: Contagem regressiva até domingo, 3 de agosto, 20h
- **VideoSection**: Player de vídeo com glassmorphism
- **TypingText**: Efeito de máquina de escrever
- **ParticleSystem**: Sistema de partículas de código
- **FloatingBlobs**: Animações de blob em background
- **WhatsAppButton**: Botão flutuante do WhatsApp

## 🛠️ Stack Técnica

- **React 18** - Framework principal
- **Vite** - Build tool otimizado
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações avançadas
- **React Icons** - Ícones otimizados

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone [seu-repositorio]
cd "3. Check In"
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── HeroSection.jsx      # Seção principal
│   ├── Countdown.jsx        # Contagem regressiva
│   ├── VideoSection.jsx     # Seção do vídeo
│   ├── TypingText.jsx       # Efeito de digitação
│   ├── ParticleSystem.jsx   # Partículas de código
│   ├── FloatingBlobs.jsx    # Blob animations
│   └── WhatsAppButton.jsx   # Botão WhatsApp
├── App.jsx                  # Componente principal
├── main.jsx                 # Ponto de entrada
└── index.css               # Estilos globais
```

## 🎯 Customização

### 📞 WhatsApp
Edite o número do WhatsApp em `src/components/WhatsAppButton.jsx`:
```javascript
const whatsappNumber = "5511999999999" // Seu número aqui
```

### 🎬 Vídeo
Substitua o placeholder do vídeo em `src/components/VideoSection.jsx`:
```javascript
<source src="/caminho-para-video-do-rodolfo.mp4" type="video/mp4" />
```

### 🎨 Cores
As cores estão configuradas no `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#37E359',  // Verde neon principal
    dark: '#2BC348',     // Verde escuro
    light: '#52FF74'     // Verde claro
  },
  background: '#020A13', // Fundo principal
  // ...
}
```

### ⏰ Data do Evento
Altere a data da contagem regressiva em `src/components/HeroSection.jsx`:
```javascript
<Countdown targetDate="2025-08-03T20:00:00" />
```

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Verificar código
```

## 📊 Performance

- ⚡ **Vite** para build ultrarrápido
- 🎯 **Code splitting** automático
- 🖼️ **Lazy loading** para imagens/vídeos
- 📱 **Mobile-first** approach
- 🧹 **Debounce** nas animações de scroll
- 💨 **Font optimization** com font-display: swap

## 🎮 Funcionalidades Interativas

- **Hover effects** em todos elementos clicáveis
- **Micro-interações** com spring animations
- **Cursor customizado** que reage a elementos interativos
- **Loading screen** com animação
- **Smooth scroll** behavior
- **Glow effects** no verde neon

## 📱 Responsividade

- **Mobile** (< 768px): Layout em coluna única
- **Tablet** (768px - 1024px): Grid de 2 colunas
- **Desktop** (> 1024px): Layout completo com todos efeitos

## 🏗️ Build para Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/` com:
- Minificação de CSS/JS
- Otimização de imagens
- Code splitting
- Cache busting

## 🎉 Próximos Passos

Esta é a primeira dobra (hero section). Após aprovação, implementar:

1. **Sistema de check-in gamificado** (5 etapas)
2. **Formulário de confirmação**
3. **Modal de sucesso** com ingresso personalizado
4. **Seção de cronograma** dos 7 dias
5. **FAQ animado**
6. **Footer com links sociais**

## 📞 Suporte

Para dúvidas ou suporte, entre em contato via WhatsApp através do botão flutuante na página.

---

**Criado com 💚 para o DevClub | Bootcamp Programador em 7 Dias** 