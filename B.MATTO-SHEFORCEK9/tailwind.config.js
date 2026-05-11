/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
    theme: {
        extend: {
            colors: {
                // Tokens de cor — nunca usar HEX direto no código
                primary: '#fe5d16', // laranja da marca
                dark: '#1a1d23', // quase preto — header, footer, CTAs
                bg: '#f9f0df', // creme — fundo principal
                surface: '#f0e6d0', // creme mais escuro — fundo seções alternadas
                text: '#1d1d1c', // texto principal
                muted: '#535353', // texto secundário / suporte
                'primary-hover': '#e04d0c', // laranja escurecido para hover
                'dark-lighter': '#252830', // dark levemente mais claro para superfícies no escuro
            },
            fontFamily: {
                display: ['"Bebas Neue"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Escala tipográfica editorial
                'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '0.01em' }],
                'display-xl': ['clamp(2.8rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '0.01em' }],
                'display-lg': ['clamp(2.2rem, 4vw, 4rem)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
                'display-md': ['clamp(1.8rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
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
                'button': '0 2px 12px rgba(254,93,22,0.20)',
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