/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: "#003366",
        yellow: "#FFD700",
        red: "#D32F2F",
        green: "#6B8E23",
        gray: "#F5F5F5",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
