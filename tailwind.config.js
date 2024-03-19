/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primaryPink: "hsla(308, 33%, 49%, 1)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95)",
        darkBlue: "hsl(228, 39%, 23%)",
        GrayishDark: "hsla(216, 6%, 51%, 1)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLight: "hsla(280, 43%, 96%, 1)",
      },
    },
  },
  plugins: [],
};
