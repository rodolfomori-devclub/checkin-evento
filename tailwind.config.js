/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#37E359',
          dark: '#2BC348',
          light: '#52FF74'
        },
        background: '#020A13',
        secondary: '#0A2E4D',
        text: {
          light: '#F8F9FA',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
              animation: {
          'glow': 'glow 2s ease-in-out infinite alternate',
          'float': 'float 6s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          'typing': 'typing 3.5s steps(40, end)',
          'blink': 'blink-caret 0.75s step-end infinite',
          'particle-float': 'particle-float 20s linear infinite',
          'blob': 'blob 7s infinite',
          'gradient-x': 'gradient-x 3s ease infinite',
        },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #37E359, 0 0 30px #37E359, 0 0 40px #37E359' },
          '100%': { boxShadow: '0 0 30px #37E359, 0 0 40px #37E359, 0 0 50px #37E359' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px #37E359',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px #37E359, 0 0 60px #37E359',
            transform: 'scale(1.05)'
          }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#37E359' }
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(55, 227, 89, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 227, 89, 0.1) 1px, transparent 1px)',
      },
              backgroundSize: {
          'grid': '50px 50px',
          '300%': '300%',
        }
    },
  },
  plugins: [],
} 