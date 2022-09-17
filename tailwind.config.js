/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/defaultTheme');

const plugin = require("tailwindcss/plugin");

const Myclass = plugin( function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180" : {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d" : {
      transformStyle : "preserve-3d",
    },
    ".perspective" : {
      perspective : "1000px",
    },
    "backface-hidden" : {
      backfaceVisibility : "hidden",
    },
  })
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat' : ["'Montserrat'", 'sans-serif']
    },
    extend: {
      colors : {
        "custom-white" : "#f0f0f0",
        "custom-green": {
          "100": "#D2E459",
          "200": "#91B247",
          "300": "#80A142",
          "400": "#668D2E",
          "500": "#597C2B",
      },
      },
    },
  },
  plugins: [Myclass],
}
