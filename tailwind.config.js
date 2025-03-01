/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          background: '#1C1C1E',
          container: '#242426',
          button: '#0D0D0D',
          text: '#D1D1D6',
          platinum: '#B8B8B8',
          gold: '#C4A77D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 15px rgba(196, 167, 125, 0.15)',
      },
      backgroundImage: {
        'gradient-noir': 'linear-gradient(to right, #1C1C1E, #242426)',
        'gradient-gold': 'linear-gradient(to right, #C4A77D, #D4B78D)',
      },
    },
  },
  plugins: [],
}