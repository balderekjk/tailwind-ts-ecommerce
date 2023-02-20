/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat, Helvetica, serif'],
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
};
