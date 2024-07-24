/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow: "#F5C044",
        green: "#4CA154",
        black:"#18181B",
        gray:"#52525A",
        lightgray:"#D4D4D8",
        thingray:"#FAFAF9",
      },
      fontFamily:{
        sora:"sora"
      }
    },
  },
  plugins: [],
}