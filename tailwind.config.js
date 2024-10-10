/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'1020px',
      xl:'1440px',
    },
    extend: {
      colors: {
        'light-blue': '#D6E6FE',
        'lighter-blue': '#D6FCFE',
      },
      fontFamily: {
       sans: ["Inter", "system-ui"]
      }
    },
  },
  plugins: [],
}

