/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4DB6AC",  // Lighter teal
          DEFAULT: "#009688", // Tosot brand teal
          dark: "#00796B",    // Darker teal
        }
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}