/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      screens: {
        '2xl': '1440px', // 2xl 스크린 크기를 추가
        '3xl': '1600px', // 3xl 스크린 크기를 추가
      },
    },
  },
  plugins: [],
});
