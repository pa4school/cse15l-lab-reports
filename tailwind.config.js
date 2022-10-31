const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./report/index.html"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Switzer", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
