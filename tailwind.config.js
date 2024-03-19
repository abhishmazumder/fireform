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
          DEFAULT: "#7c3aed",
          light: "#8b5cf6",
          dark: "#6639b6",
        },
        secondary: {
          DEFAULT: "#191919",
          light: "#333333",
          dark: "#000000",
        },
        tertiary: {
          DEFAULT: "#C026D3",
          light: "#a264ff",
          dark: "#6e2bd6",
        },
        success: "#82DD55",
        error: "#E23636",
        warning: "#EDB95E",
        code: {
          DEFAULT: "#FFFFFF",
          red: "#C16266",
          green: "#90B061",
          yellow: "#BE8A59",
        }
      },
    },
  },
  plugins: [],
};