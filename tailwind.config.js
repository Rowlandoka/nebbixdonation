// ./tailwind.config.js

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        darkest: "#F9F9F6",
        dark: "#333333",
        DEFAULT: "#D5DDDB",
        light: "#666666",
        lightest: "#FFFFFF",
      },
      blue: {
        light: "#FBFAFA",
        darkest: "#101924",
        DEFAULT: "#0066F6",
        dark: "#192738",
        lightest: "#B1C5DC",
      },
      pink: {
        light: "#F0EFEB",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
