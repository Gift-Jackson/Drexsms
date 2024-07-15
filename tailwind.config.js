/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#665df5",
        secondary: "#f9f9f9",
        dark: "#303030",
        light: "#fefefe",
        maintext: "#555",
        subtext: "#888",
        border: "#eee",
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
        poppins: ["Poppins, sans-serif"],
        mont: ["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

