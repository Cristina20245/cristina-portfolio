/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['JetBrains Mono', 'monospace'],  // ✅ CORREGIDO
        quote: ['Caveat', 'cursive']
      },
      colors: {
        primary: '#332e2e',
        secondary: '#f8ad9d',
        mint: '#C2FFE1',
        cream: '#fef7ed',
        charcoal: '#332e2e',
        emerald: '#10b981',
        white: '#ffffff',
        orange: '#f97316',
        slate: '#64748b',
      }
    },
  },
  plugins: [],
}