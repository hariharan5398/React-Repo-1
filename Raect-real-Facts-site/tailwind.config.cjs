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
    boxShadow : {
      'custom' : '0 0 24px 0 rgb(0 3 87 / 0.3)'
    }
  },
  plugins: [],
  darkMode: "darker",
  fontFamily : {
    display : [ "Inter", "swap"]
  }
}
}
