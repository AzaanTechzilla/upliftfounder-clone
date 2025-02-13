/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ['"Helvetica"', 'sans-serif'],
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
      },
      colors: {
        btn: '#6b5ee1',
        primary: "#f7edd4",
        secondary: "#c9c995"
      },
    },
  },
  plugins: [],
}