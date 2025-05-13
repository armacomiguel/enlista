/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        app:{
          main1: "#4EB2D3",
          main2: "#35758A"
        },
        orange: {
          light: "#ffefd6",
          strong: "#ef5f00",
        },
        green: {
          light: "#e6f6eb",
          strong: "#2b9a66",
          solid1: "#69c300",
          solid2: "#539a00"

        }, 
        red: {
          strong: "#ef4848",
          solid1: "#a9543a",
          solid2: "#9a2b00",
        },
        black: {
          serie100: "#000000"
        },
        blue: {
          strong1: "#242F3B",
          dark1: "#1D2730",
          dark2: "#1B242C",
        },
        yellow: {
          strong1: "#e4b600",
          strong2: "#cea500"
        }
        
      },
    },
  },
  plugins: [],
};
