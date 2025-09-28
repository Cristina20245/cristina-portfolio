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
        primary: '#1E1CE9',
        secondary: '#EF6F6C',
        light: '#FEFFD6',
        darkGreen: '#004F29',
        mint: '#C2FFE1'
      }
    },
  },
  plugins: [],
}
