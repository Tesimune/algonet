/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '0px',
    },
    extend: {
      colors: {
        algonet: {
          1: '#081925',
          2: '##FFFFFF',
        }
      },
      
    },
  },
  plugins: [],
}