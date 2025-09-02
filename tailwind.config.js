/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#020A0D",
        "fresh-green": "#3FB14E",
        "slate-gray": "#464B4E",
        "med-gray": "#757575",
        "light-gray": "#e6e6e6",
        "charcoal-gray": "#686868",
        "soft-gray": "#959595",
        "cloud-gray": "#cecece",
        jet: "#1a1a1a",
        "eerie-black": "#151515",
      },
      fontFamily: {
        satoshiLight: ["satoshi-light", "sans-serif"],
        satoshiReg: ["satoshi-reg", "sans-serif"],
        satoshiMed: ["satoshi-med", "sans-serif"],
        satoshiBold: ["satoshi-bold", "sans-serif"],
        satoshiBlack: ["satoshi-black", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
