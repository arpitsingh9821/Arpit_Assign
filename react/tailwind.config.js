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
    },
    fontFamily:{
      body:['Josefin Sans'],
      special:['Roboto']
    }
  },
  plugins: [],
}

