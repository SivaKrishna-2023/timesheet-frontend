/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"], // Updated for Tailwind v3
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'media', // Change to 'media' or remove this line if not needed
}
