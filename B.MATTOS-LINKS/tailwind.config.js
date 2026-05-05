/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8B9E87',
          dark: '#6B7E67',
          light: '#A8BBA4',
        },
        btn: {
          bg: '#FFFFFF',
          hover: '#F3F0EB',
          text: '#2A2A2A',
        },
      },
      fontFamily: {
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
