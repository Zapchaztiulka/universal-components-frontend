/** @type {import('tailwindcss').Config} */
import myPreset from "./preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  presets: [myPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
