/* @type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

*/
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
