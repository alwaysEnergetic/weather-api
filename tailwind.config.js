module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "#161b33",
      white: "#FFF",
      mainBackground: "#cbd5e1",
      yellow: "#cc5803",
      buttonColor: "#0ea5e9",
      textColor: "#f7ebde",
    },
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
