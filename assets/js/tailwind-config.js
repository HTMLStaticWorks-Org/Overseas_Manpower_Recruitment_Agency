tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050914',
          900: '#0A1128',
          800: '#121D3B',
          700: '#1C2B54',
          600: '#273B70',
        },
        royal: {
          900: '#2E1065',
          800: '#4C1D95',
          700: '#5B21B6',
          600: '#6D28D9',
          500: '#7C3AED',
          400: '#A78BFA',
        },
        gold: {
          600: '#B48811',
          500: '#D4AF37',
          400: '#E5C158',
          300: '#F3D97E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 17, 40, 0.12)',
        'premium': '0 20px 50px -12px rgba(10, 17, 40, 0.18)',
        'glow-purple': '0 0 40px -10px rgba(109, 40, 217, 0.45)',
        'glow-gold': '0 0 30px -8px rgba(212, 175, 55, 0.45)',
      }
    }
  }
};

