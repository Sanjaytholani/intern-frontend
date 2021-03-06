module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      3: "3 3 0%",
      7: "7 7 0%",
    },

    extend: {
      animation: {
        "spin-slow": "spin 0.5s forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
