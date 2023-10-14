/** @type {import('tailwindcss').Config} */
import theme from "./presets";
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme,
  plugins: [],
};
