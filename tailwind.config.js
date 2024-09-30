/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'TTLakesNeue':['TT Lakes Neue'],
        'DinPro':['DinPro']
      },
      colors:{
        'bsss':'#81CBE7',
       
        
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'bg-black': '#1D1D1D',
        'base':'#81CBE7',
        'h_bg':'#1f97c5d9'
       
        
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'base':'#81CBE7',
       
        
      }),
      shadowColor: theme => ({
        ...theme('colors'),
        'bl':'#0064C0B2',
       
        
      }),
      backgroundImage:{
         'bg-fsp':'radial-gradient(50% 50% at 50% 50%, #81CBE7 0%, rgba(34, 34, 34, 0) 100%)',
         'bg_sh':'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #1D1D1D 69.97%)'
      }
    },
  },
  plugins: [],
}

