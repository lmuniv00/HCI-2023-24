import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        tahoma: ["var(--font-tahoma)"],
      },
      colors: {
        "brand-purple": {
          50: "#F2F4FE",
          100: "#D8DBFD",
          200: "#C5CAFC",
          300: "#ABB2FA",
          400: "#9AA3F9",
          500: "#818CF8",
          600: "#757FE2",
          700: "#5C63B0",
          800: "#474D88",
          900: "#363B68",
        },
        "brand-orange": {
          50: "#FFF5E6",
          600: "#E88C00",
          800: "#8C5500",
        },
        "brand-blue": {
          100: "#769CD1",
          200: "#B4D4E8",
          300: "#808CAA",
        },
        "brand-grey": {
          100: "#717680",
          200: "#575C6C",
          300: "#54646C",
        },
        "brand-special": {
          100: "#242D3D",
          200: "#F2F5F4",
          300: "#EE8545",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;