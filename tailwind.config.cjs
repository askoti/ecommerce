/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': "#1fb6ff",
        'brand-pink': "#ff49db",
        'brand-orange': "#ff7849",
        'brand-green': "#13ce66",
        'gray-dark': "#273444",
        'brand-gray': "#8492a6",
        'gray-light': "#d3dce6",
        'brand-white': '#ffffff',
        'brand-purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'brand-red': '#ff0000',
      },
    }, 
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
