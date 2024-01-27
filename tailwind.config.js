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
        'xsm': '448px',
      },
      animation:{
        'float':'float 3s infinite;',
        'flicker':'flicker 3s infinite 2s;'
      },
      keyframes:{
        'float':{
          '0%, 100%' :{
            transform: 'translateY(1%);',
          },
          '50%':{
            transform: 'translateY(0);'
          }
        },
        'flicker':{
          '0%, 21%, 30%, 36%, 50%':{
            opacity:'0.5;'
          },
          '20%, 28%, 34%, 47%':{
            opacity:'0.8;'
          },
        }
      }
    },
  },
  plugins: [],
}

