/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d1c4fc",

          "secondary": "#6eddda",

          "accent": "#ba7437",

          "neutral": "#1D242F",

          "base-100": "#ffff",

          "info": "#5792D6",

          "success": "#107A55",

          "warning": "#F6C146",

          "error": "#F5143D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

