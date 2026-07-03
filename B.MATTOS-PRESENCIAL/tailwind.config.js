/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
    theme: {
        extend: {
            colors: {
                // Tokens de cor — nunca usar HEX direto no código
                primary: '#C6541F', // terracota queimado — marca em tom mais quente/profundo
                gold: {
                    DEFAULT: '#C6541F',
                    light: '#DE7440',
                    dark: '#A8451A',
                },
                dark: '#24211D', // quase-preto quente — header, footer, CTAs
                'dark-lighter': '#322D27',
                bg: '#F6EFE4', // creme pergaminho, mais profundo e quente
                surface: '#EDE1CD', // creme mais escuro para contraste
                text: '#2B2621', // marrom muito escuro, aconchegante
                muted: '#79695A', // marrom acinzentado médio
                'primary-hover': '#A8451A',
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C6541F 0%, #DE7440 50%, #A8451A 100%)',
                'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            },
            fontFamily: {
                display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
                sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-2xl': ['clamp(1.75rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
                'display-xl': ['clamp(1.5rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'display-lg': ['clamp(1.375rem, 3vw, 2.5rem)', { lineHeight: '1.15' }],
                'display-md': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
                'body-lg': ['clamp(0.95rem, 2vw, 1.125rem)', { lineHeight: '1.75' }],
                'body-md': ['clamp(0.9rem, 1.5vw, 1rem)', { lineHeight: '1.7' }],
                'body-sm': ['clamp(0.8rem, 1.2vw, 0.875rem)', { lineHeight: '1.65' }],
                'label': ['0.7rem', { lineHeight: '1', letterSpacing: '0.12em' }],
            },
            spacing: {
                'section-y-mobile': '5rem',
                'section-y-desktop': '8rem',
            },
            maxWidth: {
                'prose-tight': '60ch',
                'content': '1280px',
                'wide': '1440px',
            },
            borderRadius: {
                // Regra: cantos sempre arredondados — identidade acolhedora desta LP
                DEFAULT: '0.75rem',
                'sm': '0.5rem',
                'card': '1.25rem',
                'pill': '999px',
            },
            boxShadow: {
                // Regra: sombras suaves e difusas, nunca duras ou deslocadas
                'card': '0 8px 30px rgba(43,38,33,0.08)',
                'card-hover': '0 16px 48px rgba(43,38,33,0.14)',
                'button': '0 8px 24px rgba(198,84,31,0.25)',
                'glow': '0 0 60px rgba(198,84,31,0.25)',
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
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
                    '50%': { opacity: '0.55', transform: 'scale(1.08)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
