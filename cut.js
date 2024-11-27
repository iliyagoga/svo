let ps= document.querySelectorAll('#cut')
for(let p of ps){
    p.innerHTML=p.innerHTML.substring(0,200)+'...'
}