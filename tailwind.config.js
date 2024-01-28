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
        'flicker':'flicker 3s infinite 2s;',
        'glitch': 'glitch 1s infinite linear alternate-reverse;'
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
        },
        'glitch':{
          '0%, 25%, 57%, 100%': {
            transform: 'translate(0);',
            color: '#fff;'
          },
          '29%': {
            transform: 'translate(-8px, 8px);',
            color: '#f00;'
          },
          '35%': {
            transform: 'translate(8px, -8px);',
            color: '#0f0;'
          },
          '39%, 52%' :{
            transform: 'translate(0);',
            color: '#fff;'
          },
          '47%': {
            transform: 'translate(8px, 8px);',
            color: '#00f;'
          }
        }
      },
    },
  },
  plugins: [],
}

