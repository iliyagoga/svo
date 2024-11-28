
$(document).ready(function() {
    let icon= document.querySelector('#icon')
    let menu=document.querySelector('#menu')
    icon.addEventListener('click',(e)=>{
        menu.classList.toggle('hidden')
    })
    document.addEventListener('click',(e)=>{
        if(!menu.classList.contains('hidden') && e.target!=icon){
            if(!menu.contains(e.target)){
                menu.classList.add('hidden')
            }
        }

        if(!p1.contains(e.target)){
            if(!f1.classList.contains('invisible'))
            f1.classList.add('invisible')
        }
        if(!p2.contains(e.target)){
            if(!f2.classList.contains('invisible'))
            f2.classList.add('invisible')
        }
        if(!p3.contains(e.target)){
            if(!f3.classList.contains('invisible'))
            f3.classList.add('invisible')
        }

    })
    menu.addEventListener('click',(e)=>{
        if(e.target.nodeName=='A'){
            menu.classList.toggle('hidden')
        }
    })



    if(window.matchMedia('(max-width: 768')){
        $("#p1").mouseenter(function() {
            $("#f2").addClass("invisible");
            $("#f3").addClass("invisible");
    
            $("#f1").removeClass("invisible");
        });
      
        $("#f1").mouseleave(function(event) {
            $("#f1").addClass("invisible");
        });
    
        $("#p2").mouseenter(function() {
            $("#f1").addClass("invisible");
            $("#f3").addClass("invisible");
            $("#f2").removeClass("invisible");
          });
        
        $("#f2").mouseleave(function(event) {
            $("#f2").addClass("invisible");
        });
    
        $("#p3").mouseenter(function() {
            $("#f2").addClass("invisible");
            $("#f1").addClass("invisible");
    
            $("#f3").removeClass("invisible");
        });
    
        $("#f3").mouseleave(function(event) {
            $("#f3").addClass("invisible");
        });
    }
   
  });
  
  




