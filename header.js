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








let p1=document.querySelector('#p1');
let f1=document.querySelector('#f1');
p1.addEventListener('mouseover',(e)=>{
    f1.classList.remove('invisible')
    if(!f2.classList.contains('invisible')){
        f2.classList.add('invisible')
    }
    if(!f3.classList.contains('invisible')){
        f3.classList.add('invisible')
    }
 
})
p1.parentElement.addEventListener('mouseout',(e)=>{
    console.log(e)
    f1.classList.add('invisible')
})

let p2=document.querySelector('#p2');
let f2=document.querySelector('#f2');
p2.addEventListener('mouseover',(e)=>{
    f2.classList.remove('invisible')
    if(!f1.classList.contains('invisible')){
        f1.classList.add('invisible')
    }
    if(!f3.classList.contains('invisible')){
        f3.classList.add('invisible')
    }
})

p2.parentElement.addEventListener('mouseout',(e)=>{
    f2.classList.add('invisible')
})


let p3=document.querySelector('#p3');
let f3=document.querySelector('#f3');
p3.addEventListener('mouseover',(e)=>{
    f3.classList.remove('invisible')
    if(!f1.classList.contains('invisible')){
        f1.classList.add('invisible')
    }
    if(!f2.classList.contains('invisible')){
        f2.classList.add('invisible')
    }
})

p3.parentElement.addEventListener('mouseout',(e)=>{
    f3.classList.add('invisible')
})




