/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        surface: '#111111',
        sahel: '#C9A84C',
        aerials: '#00A3FF',
        afrocidade: '#C45C26',
        primary: '#F5F5F5',
        muted: '#888888',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}