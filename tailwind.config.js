/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:
      {
       'tablet' : {raw:'(min-width:768px) and (min-height:388px)'},
      },
    },
  },
  plugins: [require("daisyui")],
}

