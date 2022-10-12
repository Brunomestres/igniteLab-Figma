/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
    colors: {
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',
      'black': '#000000',
      'cyan-500': '#81D8F7',
      'cyan-300': '#C3E8F5',
    }
  },
  plugins: [],
}