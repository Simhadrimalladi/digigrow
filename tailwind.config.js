/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071B4D",
        royal: "#173F9D",
        lightBlue: "#F5F8FF",
        text: "#101828",
        muted: "#667085",
        white: "#FFFFFF",
        yellow: "#FACC15",
      },
    },
  },
  plugins: [],
}