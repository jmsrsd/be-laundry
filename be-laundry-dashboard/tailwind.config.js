/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bubbles: "#E7F5FD",
        water: "#CAECFF",
        "bleu-de-france": "#2D9CDB",
        "vivid-cerulean": "#0099EE",
        "medium-aquamarine": "#56E4A0",
        "pastel-red": "#F36868",
        secondary: "#B2C5D4",
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
