/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#f1e6d0',
          dark: '#C8B897',
          light: '#f7ead8',
        },
        btn: {
          bg: '#f1e6d0',
          hover: '#e5d5b6',
          text: '#C8B897',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        links: '430px',
      },
      height: {
        hero: '240px',
      },
      borderRadius: {
        btn: '10px',
      },
    },
  },
  plugins: [],
};
