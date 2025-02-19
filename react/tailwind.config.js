/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

