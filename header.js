let p1=document.querySelector('#p1');
let f1=document.querySelector('#f1');
p1.addEventListener('click',(e)=>{
    f1.classList.toggle('invisible')
    if(!f2.classList.contains('invisible')){
        f2.classList.add('invisible')
    }
    if(!f3.classList.contains('invisible')){
        f3.classList.add('invisible')
    }
 
})

let p2=document.querySelector('#p2');
let f2=document.querySelector('#f2');
p2.addEventListener('click',(e)=>{
    f2.classList.toggle('invisible')
    if(!f1.classList.contains('invisible')){
        f1.classList.add('invisible')
    }
    if(!f3.classList.contains('invisible')){
        f3.classList.add('invisible')
    }
})

let p3=document.querySelector('#p3');
let f3=document.querySelector('#f3');
p3.addEventListener('click',(e)=>{
    f3.classList.toggle('invisible')
    if(!f1.classList.contains('invisible')){
        f1.classList.add('invisible')
    }
    if(!f2.classList.contains('invisible')){
        f2.classList.add('invisible')
    }
})

let bp1=document.querySelector('#bp1');
let bf1=document.querySelector('#bf1');
bp1.addEventListener('click',(e)=>{
    bf1.classList.toggle('hidden')
    if(!bf2.classList.contains('hidden')){
        bf2.classList.add('hidden')
    }
    if(!bf3.classList.contains('hidden')){
        bf3.classList.add('hidden')
    }
 
})

let bp2=document.querySelector('#bp2');
let bf2=document.querySelector('#bf2');
bp2.addEventListener('click',(e)=>{
    bf2.classList.toggle('hidden')
    if(!bf1.classList.contains('hidden')){
        bf1.classList.add('hidden')
    }
    if(!bf3.classList.contains('hidden')){
        bf3.classList.add('hidden')
    }
})

let bp3=document.querySelector('#bp3');
let bf3=document.querySelector('#bf3');
bp3.addEventListener('click',(e)=>{
    bf3.classList.toggle('hidden')
    if(!bf1.classList.contains('hidden')){
        bf1.classList.add('hidden')
    }
    if(!bf2.classList.contains('hidden')){
        bf2.classList.add('hidden')
    }
})

let b_ic =document.querySelector('#b_ic')
let b_menu =document.querySelector('#b_menu')
let b=false
b_ic.addEventListener('click',(e)=>{
    if(b===false){
        b_menu.classList.remove('-left-full')
        b_menu.classList.add('left-0')
        b=true
    }
    else{
        b_menu.classList.remove('left-0')
        b_menu.classList.add('-left-full')
        bf1.classList.add('hidden')
        bf2.classList.add('hidden')
        bf3.classList.add('hidden')

        b=false
    }
})