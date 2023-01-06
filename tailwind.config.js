/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-black": "#222831",
        "light-black": "#393E46",
        "custom-blue": "#00ADB5",
        "custom-grey": "#EEEEEE",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
