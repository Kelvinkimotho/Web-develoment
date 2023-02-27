document.addEventListener(`DOMContentLoaded`,function(){
    //let's disable the Add button  to avoid users submitting iTems with no names
    let btn=document.querySelector('#submit');
    btn.disabled=true;
    //but we have to enable the button if the user starts typing something
    let submit_value=document.querySelector('#item');
    submit_value.onkeyup=function(){
              if(submit_value.value.length>0){
                   btn.disabled=false;
              }else{
                  btn.disabled=true;

              }
     }

    //lets query the form

    document.querySelector('form').onsubmit=function(){
        //getting user input
        let item=document.querySelector('#item').value;

        //creating a list item and setting its innertext to the item value

        let li=document.createElement('li');

        //Assigning the li variable the item value

        li.innerText=item;
        //Appending the li to the list 
        document.querySelector('#items').append(li);

        //clearing user input after submitting the value

        document.querySelector('#item').value='';
        return false;
    }
});