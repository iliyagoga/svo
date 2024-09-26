/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'bg-black': '#1D1D1D',
        'base':'#81CBE7',
       
        
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
         'bg-fsp':'radial-gradient(50% 50% at 50% 50%, #81CBE7 0%, rgba(34, 34, 34, 0) 100%)'
      }
    },
  },
  plugins: [],
}

