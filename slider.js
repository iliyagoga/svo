$(document).ready(function(){
    $('#partners').owlCarousel({
      loop:true,
      margin:30,
      responsive:{
          0:{
              items:2
          },
          700:{
              items:3
          },
          1024:{
              items:5
          }
      }
    });
    $('#proj').owlCarousel({
      loop:true,
      responsive:{
          0:{
              items:2,
              margin:20
          },
          700:{
            items:3,
            margin: 30
          },
          1024:{
              items:4,
              margin: 20
          },
      }
    });
    $('#fils').owlCarousel({
      loop:true,
      margin:30,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          768:{
            items:3
          },
          1200:{
            items:4
          }
 
      }
    });
  });


  