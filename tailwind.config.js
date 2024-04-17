/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
        mincho: ['"Shippori Mincho"', "serif"],
      },
      backgroundImage: {
        "lemon-jelly": "url('/img/background.webp')",
      },
    },
  },
  plugins: [],
}
