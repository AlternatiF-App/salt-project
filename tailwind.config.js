/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7879F1',
        secondary: '#AFA2C3',
        third: '#B2A6C5',
        'salt-black': '#3E334E'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

