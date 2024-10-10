/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'TTLakesNeue':['TT Lakes Neue'],
        'DinPro':['DinPro'],
        'Conthrax':['Conthrax']
      },
      colors:{
        'bsss':'#81CBE7',
        'chor':'#BCB679',
        'chor-black':"#7E7451",
        'light-black':'#1C1B17'
       
        
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'bg-black': '#1D1D1D',
        'base':'#81CBE7',
        'h_bg':'#1f97c5d9',
        'chor':'#BCB679'
       
        
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'base':'#81CBE7',
        'chor':'#BCB679'
       
        
      }),
      shadowColor: theme => ({
        ...theme('colors'),
        'bl':'#0064C0B2',
       
        
      }),
      backgroundImage:{
         'bg-fsp':'radial-gradient(50% 50% at 50% 50%, #81CBE7 0%, rgba(34, 34, 34, 0) 100%)',
         'bg_sh':'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #1D1D1D 69.97%)',
         'bg-mean2-mg':"url('../assets/imgs/Mask group.png')",
         'bg-mean2-mg2':"url('../assets/imgs/Mask group (2).png')",

         'bg-mean2-mg3':"url('../assets/imgs/Mask group (3).png')",
         
         'gradient-theme2-yellow':'linear-gradient(90deg, #DDD8AF 0%, #FFFFFF 100%)',
         'necro-gradient-theme2-yellow':'linear-gradient(90deg, #FFFFFF 0%, #DDD8AF 100%)'
      }
    },
  },
  plugins: [],
}

