// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
module.exports = {
  darkMode: 'class', // or 'media' if you prefer based on user system preferences
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#141414",
        "green" : "#6d28d9",
        purple: {
          600: '#6d28d9',
          700: '#5b21b6',
        },
      }
    },
  },
  variants: {extend: {},},
  plugins: [],
}

