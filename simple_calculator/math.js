document.addEventListener(`DOMContentLoaded`,function(){
let $=document.querySelector.bind(document);
//fetching all buttons in our page
let btns=document.querySelectorAll('.arithmetic');
//fetching the tag displaying the answer
let answer_tag=document.querySelector('#answer');
//adding an event listener to the form 'onsubmit'
document.querySelector('form').onsubmit=function(){
    let answer=0;
    let num1=parseInt($('#num1').value);
    let num2=parseInt($('#num2').value);
    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function(){
        if(btns[i].innerHTML==="Add"){
            answer=num1+num2;
            answer_tag.innerHTML=`Answer =${answer}`;
        }else if(btns[i].innerHTML==="multiply"){
            answer=num1*num2;
            answer_tag.innerHTML=`Answer =${answer}`;
        }else{
            answer=num1-num2;
            answer_tag.innerHTML=`Answer =${answer}`;
        }
      }
    }
    
    
    return false;
}
});