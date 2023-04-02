document.addEventListener(`DOMContentLoaded`,function(){
    let $=document.querySelector.bind(document);
    let img_slot=$('#my_image');
    let btns=document.querySelectorAll('button');
    let images=document.querySelectorAll('.imgs');
    let img_counter=$('#img_counter');
    
//setting initial slider image 
    for(let k=0;k<images.length;k++){
        img_slot.src=images[0].src;
         }

//Create a counter Variable
     let counter=0;

  for(let i=0;i<btns.length;i++){
    
     btns[i].onclick=function(){
        
        if(btns[i].innerHTML.includes("Prev")){
            //Decrementing counter by 1
            counter=counter-1;
            
            img_slot.src=images[counter].src;
           
        }else if(btns[i].innerHTML.includes("Next")){
                 //incrementing the counter variable by 1
                counter=counter+1;
               
                img_slot.src=images[counter].src;
             
        }
    }
    
}
});