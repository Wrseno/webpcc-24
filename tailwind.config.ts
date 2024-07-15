const flowbite = require("flowbite-react/tailwind");

import type {Config} from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0C2753",
        secondary: "#203D6F",
        teartiary: "#133F86",
        quaternary: "#4C90FF",
        quinary: "#46A5FF",
        senary: "#FFFFFF",
        septenary: "#A09B9B",
        octonary: "#5B5959",
        nonary: "#000000",
        denary: "#1B57B9",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
