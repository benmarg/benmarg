/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        redacted: {
          '0%': { left:"0", width:"0%" },
          '50%': { left:"0", width:"100%" },
          '100%': { left:"100%", width:"0%" },
        },
        fade: {
          '0%': { opacity:"0" },
          '100%': { opacity:"1" },
        }
      },
      colors: {
        offGrey: "rgb(51,51,51)",
      },
      fontFamily: {
        'sans': ['futura'],
      },
    },
  },
  plugins: [],
};

