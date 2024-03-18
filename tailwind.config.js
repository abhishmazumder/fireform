/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      code: ["Courier Prime", "monospace"]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff0033",
          light: "#ff5577",
          dark: "#aa0022",
        },
        secondary: {
          DEFAULT: "#252422",
          light: "#464441",
          dark: "#1A1817",
        },
        success: "#82DD55",
        error: "#E23636",
        warning: "#EDB95E",
        code: {
          DEFAULT: "#FFFFFF",
          background: "#292d34",
          red:"#c16266",
          green: "#90b061",
          yellow: "#be8a59",

        }
      },
    },
  },
  plugins: [],
};
