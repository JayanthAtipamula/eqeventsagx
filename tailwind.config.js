/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '.25em',
        'super': '.5em',
      },
    },
  },
  plugins: [],
};