/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F0DF',
        foreground: '#1A1D23', // Azul profundo quase preto
        primary: {
          DEFAULT: '#1A1D23',
          foreground: '#F9F0DF',
        },
        accent: {
          DEFAULT: '#FF4D00', // Laranja Tático Vibrante
          foreground: '#FFFFFF',
        },
        surface: '#F1E6D0',
        border: '#1A1D23',
        muted: {
          DEFAULT: '#E5DCC8',
          foreground: '#4A5568',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.85rem, 7vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.8125rem', { lineHeight: '1.5' }],
        'label': ['0.9rem', { lineHeight: '1', letterSpacing: '0.1em' }],
        'cta': ['clamp(1.15rem, 4vw, 2rem)', { lineHeight: '1', letterSpacing: '0.05em' }],
        'hand-lg': ['2.25rem', { lineHeight: '1' }],
      },
      spacing: {
        'section': 'clamp(3.5rem, 8vw, 7rem)',
        'section-mobile-py': 'clamp(5rem, 10vw, 8rem)',
        'section-sm': '3.5rem',
        'container': '1.25rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '860px',
        'tight': '700px',
      },
      borderRadius: {
        'btn': '0px',
        'card': '0px',
        'img': '0px',
      },
      boxShadow: {
        'card': '8px 8px 0px 0px rgba(26, 29, 35, 1)',
        'btn': '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
