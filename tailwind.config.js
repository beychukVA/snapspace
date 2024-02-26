/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        35: "8.75rem",
      },
    },
    colors: {
      light: "#fff",
      "blue-light": "#C6D6FF",
      "blue-light200": "#8DAEFF",
      "blue-dark": "#1F2C56",
      "blue-dark200": "#4C5678",
      "blue-dark300": "#2F3C63",
      "blue-dark400": "#354167",
      yellow: "#FCE72D",
      gray: "#79809A",
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          padding: "0 1rem",
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
      });
    },
  ],
};
