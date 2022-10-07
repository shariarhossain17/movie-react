module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3346d3",
          secondary: "#0287D0",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};