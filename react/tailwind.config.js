/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'350px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1536px',
    },
    extend: {
      colors: {
        Brown: '#2c2523',
      },

// colors: {
//         // brown: "#53423e",
//         // lightBrown: "#645550",
//         Brown: "#2c2523",
        




//       },
      
    },
    extend: {
      colors: {
        lightgrey: "#978580",
        brown1: "#53423e",
        // lightBrown: "#645550",
        Brown: "#2c2523",
        
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 159, 79, 0.5)",
      },

    },
    fontFamily:{
      SpaceBet:['Julius Sans One'],
      body:['Josefin Sans'],
      special:['Roboto'],
      logo:['Dancing Script']
    }
  },
  plugins: [],
}

