/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EB5E28', 
          light: '#F17449',
          dark: '#B94D1F',
        },
        secondary: {
          DEFAULT: '#252422',
          light: '#464441',
          dark: '#1A1817',
        },
        success : "#82DD55",
        error: "#E23636",
        warning: "#EDB95E",
      },
    },
  },
  plugins: [],
}
