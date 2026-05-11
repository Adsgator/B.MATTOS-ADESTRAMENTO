/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
    theme: {
        extend: {
            colors: {
                // Tokens de cor — nunca usar HEX direto no código
                primary: '#ff4d00', // laranja da marca
                gold: {
                    DEFAULT: '#ff4d00',
                    light: '#ff6e33',
                    dark: '#cc3d00',
                },
                dark: '#1a1d23', // quase preto — header, footer, CTAs
                bg: '#fbf7f0', // creme mais claro e elegante
                surface: '#f3ede2', // creme mais quente
                text: '#2d2d2b', // cinza muito escuro, menos "duro" que o preto
                muted: '#71716f', // cinza médio
                'primary-hover': '#e64500', 
                'dark-lighter': '#252830', 
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #ff4d00 0%, #ff6e33 50%, #cc3d00 100%)',
                'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            },
            fontFamily: {
                display: ['"Bebas Neue"', 'sans-serif'],
                sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Escala tipográfica editorial — Reduzida para não ficar "gritante"
                'display-2xl': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
                'display-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '0.01em' }],
                'display-lg': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
                'display-md': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
                'body-lg': ['1.125rem', { lineHeight: '1.75' }],
                'body-md': ['1rem', { lineHeight: '1.7' }],
                'body-sm': ['0.875rem', { lineHeight: '1.65' }],
                'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em' }],
            },
            spacing: {
                // Espaçamento de seção
                'section-y-mobile': '6rem',   // py-24
                'section-y-desktop': '10rem',  // py-40
            },
            maxWidth: {
                'prose-tight': '60ch',
                'content': '1280px',
                'wide': '1440px',
            },
            borderRadius: {
                // Regra: sem arredondamento excessivo
                DEFAULT: '0.25rem',  // rounded-sm para botões
                'card': '0.375rem', // rounded para cards
            },
            boxShadow: {
                // Regra: sombras apenas em tons neutros, max opacity 0.15
                'card': '0 4px 24px rgba(0,0,0,0.08)',
                'card-hover': '0 8px 40px rgba(0,0,0,0.13)',
                'button': '0 2px 12px rgba(255,77,0,0.20)',
            },
            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};