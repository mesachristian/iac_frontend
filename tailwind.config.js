/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
  plugins: [],
}
