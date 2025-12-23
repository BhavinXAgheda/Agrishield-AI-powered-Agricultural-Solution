const { black } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#77b122',
      'gray': '#707070',
      'black2': '#0f1112',
      'darkwhite': '#b7b7b7',
      'bordercol': '#e1e1e1',
      'green2': '#88D66C',
      'blackh': '#303030',
      'bg':'#f9f9f9',
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}