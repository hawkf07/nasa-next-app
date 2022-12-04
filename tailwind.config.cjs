/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#677DB7",
        secondary: "#CE6D8B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
