/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            secondary: "#9353d3",
            success: "#17c964",
            warning: "#f5a524",
            danger: "#f31260",
            skeleton: "#94a3b8",
            white: "#FFFFFF",
            gray: "#c2c2c2",
            whiteBlack: "#11181C",
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            text_button_color: "#FFFFFF",
            primary: {
              base: "#006FEE",
              50: "#001731",
              500: "#338ef7",
              //... 50 to 900
              foreground: "#11181C",
              DEFAULT: "#006FEE",
            },
            fonts: {
              primary: "#11181C",
              secondary: "#ffffff",
            },
          },
        },
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            secondary: "#9353d3",
            success: "#17c964",
            warning: "#f5a524",
            danger: "#f31260",
            skeleton: "#94a3b8",
            white: "#FFFFFF",
            gray: "#ECEDEE",
            whiteBlack: "#ECEDEE",
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            text_button_color: "#FFFFFF",
            primary: {
              base: "#006FEE",
              50: "#001731",
              500: "#338ef7",
              //... 50 to 900
              foreground: "#11181C",
              DEFAULT: "#006FEE",
            },
            fonts: {
              primary: "#11181C",
              secondary: "#ffffff",
            },
          },
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
