/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {

      backgroundImage : {
        'logolight' : "url('./public/react-icon-light.png')",
        'logoDark' : "url('./public/react-icon-dark.png')"
    },
  },
  plugins: [],
  darkMode: "darker"
}
}
