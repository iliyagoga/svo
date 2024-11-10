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
        'chor':'#BCB679',
        'bg_def':'#F0EEE1'
       
        
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'base':'#81CBE7',
        'chor':'#BCB679',
        "grey_custom":"#D9D9D9"
       
        
      }),
      shadowColor: theme => ({
        ...theme('colors'),
        'bl':'#0064C0B2',
        "chor":"#7E745180"
       
        
      }),
      boxShadow:{
        "shadow":"8px 8px 17.5px 0px #7E745185",
        "new_shadow_bottom":"8px 8px 22px 0px #7E745180",
        "new_shadow_top":"-8px -8px 22px 0px #7E745180"


      },
      backgroundImage:{
         'bg-fsp':'radial-gradient(50% 50% at 50% 50%, #81CBE7 0%, rgba(34, 34, 34, 0) 100%)',
         'bg_sh':'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #1D1D1D 69.97%)',
         'bg-mean2-mg':"url('../assets/imgs/Mask group.png')",
         'bg-mean2-mg2':"url('../assets/imgs/Mask group (2).png')",
         'bg-mean2-mg3':"url('../assets/imgs/Mask group (3).png')",
         'gradient-theme2-yellow':'linear-gradient(90deg, #DDD8AF 0%, #FFFFFF 100%)',
         'necro-gradient-theme2-yellow':'linear-gradient(90deg, #FFFFFF 0%, #DDD8AF 100%)',
         'theme3-top-bg': 'url("../assets/imgs/fsdfds.png")',
         'gradient-theme3-yellow': "linear-gradient(90deg, #DDD8AF 0%, #F0EEE1 100%)",
         'gradient-theme3-yellow-90': "linear-gradient(180deg, #DDD8AF 0%, #F0EEE1 100%)",
         'gradient-theme3-yellow-anty': "linear-gradient(-90deg, #DDD8AF 0%, #F0EEE1 100%)",
         'grad-grey':'linear-gradient(90deg, #DDD8AF 0%, #D9D9D9 100%)',
         'decorate-theme3-ec':'url("../assets/imgs/Group 204.svg")',
         'grad-left':'linear-gradient(-90deg, #807552 0%, #D9D9D9 69.97%)',
         'radial-2':'radial-gradient(farthest-corner at 40px 40px,#DDD8AF 0%,#D9D9D9 100%)',
         'bg-afisha-1':'url("../assets/imgs/Group 207.png")',
         'bg-afisha-2':'url("../assets/imgs/Group 209.png")',
         'bg-afisha-3':'url("../assets/imgs/Group 208.png")',
         'bg-lorem':"url('../assets/imgs/image 29.png')"

      }
    },
  },
  plugins: [],
}

