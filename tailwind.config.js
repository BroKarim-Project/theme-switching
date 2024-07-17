/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bgColor)',
        gtColor1: 'var(--gtColor1)',
        gtColor2: 'var(--gtColor2)',
      },
    },
  },
  plugins: [],
};
