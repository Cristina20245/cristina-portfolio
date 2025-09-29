/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        quote: ['Caveat', 'cursive']
      },
      colors: {
        primary: '#4361ee',
        secondary: '#f8ad9d',
        light: '#FEFFD6',
        darkGreen: '#2a9d8f',
        mint: '#C2FFE1'
      }
    },
  },
  plugins: [],
}
