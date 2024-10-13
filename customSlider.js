let line = document.querySelector('#line')
let left= document.querySelector('#left');
let right= document.querySelector('#right');
let slider= document.querySelector('#slider');
const width= slider.clientWidth;
const length=line.children.length
const childWidth=line.children.item(0).clientWidth
if(line){
    let c=0;
    left.addEventListener('click',(e)=>{
        if(c>0){
           c--
           line.style.left=((0-c*width))+'px'
        }
    })
    right.addEventListener('click',(e)=>{
        const left= Number(line.style.left.split('px')[0])
        if((line.clientWidth-Number(line.style.left.split('px')[0])*-1)>width){
            if(line.clientWidth-(-1*(left-width))<width){
                line.style.left=left+(-1*(line.clientWidth-(-1*(left-width))))+'px'
                c++
            }
            else{
                    c++;
                    line.style.left=((c*width)*-1)+'px'
                }
       
        }
           
        
        
    })
}