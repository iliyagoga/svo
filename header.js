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