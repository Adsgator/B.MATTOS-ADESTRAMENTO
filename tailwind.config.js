/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#F9F0DF',
        foreground:  '#1A1D23', // Azul profundo quase preto
        primary: {
          DEFAULT:    '#1A1D23',
          foreground: '#F9F0DF',
        },
        accent: {
          DEFAULT:    '#FF4D00', // Laranja Tático Vibrante
          foreground: '#FFFFFF',
        },
        surface:     '#F1E6D0',
        border:      '#1A1D23',
        muted: {
          DEFAULT:    '#E5DCC8',
          foreground: '#4A5568',
        },
        whatsapp:    '#25D366',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)',  { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2rem, 4.5vw, 4rem)',   { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.5rem, 3.5vw, 2.75rem)', { lineHeight: '1.0',  letterSpacing: '-0.015em' }],
        'h3':      ['clamp(1.125rem, 2vw, 1.75rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'body-lg': ['1.0625rem',   { lineHeight: '1.6' }],
        'body':    ['0.875rem',                            { lineHeight: '1.6' }],
        'small':   ['0.75rem',                        { lineHeight: '1.5' }],
        'label':   ['0.6875rem',                         { lineHeight: '1', letterSpacing: '0.1em' }],
        'hand-lg': ['2rem',   { lineHeight: '1' }],
      },
      spacing: {
        'section':    'clamp(3rem, 7vw, 6rem)',
        'section-sm': '3rem',
        'container':  '1rem',
      },
      maxWidth: {
        'content': '1100px',
        'narrow':  '800px',
        'tight':   '640px',
      },
      borderRadius: {
        'btn':  '0px',
        'card': '0px',
        'img':  '0px',
      },
      boxShadow: {
        'card': '8px 8px 0px 0px rgba(26, 29, 35, 1)',
        'btn':  '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
