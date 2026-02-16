/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2d3748', // Premium dark gray
        accent: '#e2e8f0' // Soft background
      }
    },
  },
  plugins: [],
}