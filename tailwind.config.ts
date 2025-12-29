import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5462A8",
          50: "#E8EAF3",
          100: "#D1D5E7",
          200: "#A3ABCF",
          300: "#7581B7",
          400: "#5462A8",
          500: "#424D84",
          600: "#313963",
          700: "#212642",
          800: "#101321",
          900: "#000000",
        },
        charcoal: "#272727",
        gray: {
          text: "#646464",
        },
      },
      fontFamily: {
        sans: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
