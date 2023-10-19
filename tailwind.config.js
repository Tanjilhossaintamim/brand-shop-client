/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-black': "#252528",
        'color-orange': "#FF4E00",
      }
    },
  },
  plugins: [],
}

