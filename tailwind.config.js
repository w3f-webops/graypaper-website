/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
      },
      backgroundImage: {
        "lemon-jelly": "url('/img/background.webp')",
      },
    },
  },
  plugins: [],
}
