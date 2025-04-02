/** @type {import('tailwindcss').Config} */

import { transform } from "framer-motion";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#081444",
        secondary: "#26a9e0",
        tertiary: "#ffffff",
      },
    },
    screens: {
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "925px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px",
    },
  },
  plugins: [],
};
