import flowbiteReact from "flowbite-react/plugin/tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }, // Fixed: Added '%' sign
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
      sm: "640px",
      md: "768px",
      lg: "925px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("flowbite/plugin")], // Keep this as an array
});
