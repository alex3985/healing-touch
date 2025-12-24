/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Breakpoints aligned to your designs:
      // - Mobile design: 430x760
      // - Desktop design: 1920x900
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },

      // Helpful max widths (optional, but handy)
      maxWidth: {
        "1920": "1920px",
      },

      fontFamily: {
        jost: ["Jost", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};