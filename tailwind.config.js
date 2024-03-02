/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dar-gray':'hsl(0, 0%, 59%)'
      },
      backgroundImage:{
        'back-top':'url(/images/bg-pattern-top.svg)',
        'back-bottom':'url(/images/bg-pattern-bottom.svg)',
      }
    },
  },
  plugins: [],
}