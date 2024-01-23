/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'orb':['"Orbitron", sans-serif']
      },
      screens:{
        'xsm': '412px',
      }
    },
  },
  plugins: [],
}

