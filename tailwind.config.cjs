/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/Pages/Clients/index.{js,jsx,ts,tsx}',
  './src/main.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
