import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      monospace: ['Source Code Pro', 'monospace'],
      }
    },
  },
  darkMode: "class",
  plugins: [flowbite],
};

export default config;
