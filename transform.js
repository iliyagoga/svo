if(window.matchMedia('(max-width: 768')){
    let y=jQuery(".u");
    for(let e of y){
        e=jQuery(e)
        if(e.children().length%2==0){
            e.addClass("md:grid-cols-"+e.children().length/2)
        }
        else{
            e.addClass("md:grid-cols-"+(e.children().length/2-1))
        }
    }
   

}