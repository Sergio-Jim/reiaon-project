/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        // Change with you want it
        gold: "#ffd700",
      },
      fontFamily: {
        old: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
