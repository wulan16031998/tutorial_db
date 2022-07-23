module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heropic: "url('/public/hero.png')",
        loginpic: "url('/public/login.png')",
      },
      colors: {
        primary: "#29B2FF",
        netral: "#9f9f9f",
      },
    },
    plugins: [],
    mode: "jit",
  },
};
