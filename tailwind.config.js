/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EDE5D8',
          400: '#E0D5C4',
          500: '#CFC0A8',
        },
        stone: {
          850: '#1C1916',
          900: '#141210',
        },
        cashmere: {
          light: '#D4C4A8',
          DEFAULT: '#B8A48A',
          dark: '#8A7860',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
};
