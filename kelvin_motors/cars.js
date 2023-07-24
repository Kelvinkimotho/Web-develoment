cars=[
     {
        Name:"Audi A4",
        image:"cars/Audi A4.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$345600"
    },
     {
        Name:"Lamborghini Aventador SVJ",
        image:"cars/Lamborghini Aventador SVJ.png",
        Brand:"Lamborghini",
        Fuel:"Petrol",
        Price:"$247400"
     },
     {
        Name:"Audi R8",
        image:"cars/Audi R8.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$485000"
     },
     {
        Name:"Ferrari F8 Spider",
        image:"cars/Ferrari F8 Spider.png",
        Brand:"Ferrari",
        Fuel:"Petrol",
        Price:"$44800"
     },
     {
        Name:"Audi S6",
        image:"cars/Audi S6.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$195600"
     },
     {
        Name:"Mercedes-Benz AMG C 43",
        image:"cars/Mercedes-Benz AMG C 43.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$575600"
     },
     {
        Name:"Mercedes-Benz S-Class",
        image:"cars/Mercedes-Benz S-Class.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$338600"
     },
     {
        Name:"Audi S7",
        image:"cars/Audi S7.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$279600"
     },
     {
        Name:"Audi A3",
        image:"cars/Audi A3.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$345600"
    },
     {
        Name:"Mercedes-BenzMaybach S 580",
        image:"cars/Mercedes-BenzMaybach S 580.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$345600"
     },
     {
        Name:"Ferrari  SF90 Stradale",
        image:"cars/Ferrari  SF90 Stradale.png",
        Brand:"Ferrari",
        Fuel:"Petrol",
        Price:"$345600"
     },
     {
        Name:"Audi TT RS",
        image:"cars/Audi TT RS.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$345600"
     },
     {
        Name:"Audi TTS",
        image:"cars/Audi TTS.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$345600"
     },     
     {
        Name:"Audi RS e-tron GT",
        image:"cars/Audi RS e-tron GT.png",
        Brand:"Audi",
        Fuel:"Petrol",
        Price:"$345600"
     },  
     {
        Name:"Lamborghini Urus",
        image:"cars/Lamborghini Urus.png",
        Brand:"Lamborghini",
        Fuel:"Petrol",
        Price:"$345600"
     },         
     {
        Name:"Nissan GT-R",
        image:"cars/Nissan GT-R.png",
        Brand:"Nissan",
        Fuel:"Diesel",
        Price:"$345600"
     },  
     {
        Name:"Ferrari F8 Tributo",
        image:"cars/Ferrari F8 Tributo.png",
        Brand:"Ferrari",
        Fuel:"Petrol",
        Price:"$345600"
     }, 
     {
        Name:"Dodge Challenger",
        image:"cars/Dodge Challenger.png",
        Brand:"Dodge",
        Fuel:"Petrol",
        Price:"$345600"
     },  
     {
        Name:"Ferrari 296 GTB",
        image:"cars/Ferrari 296 GTB.png",
        Brand:"Ferrari",
        Fuel:"Petrol",
        Price:"$275600"
     },  
     {
        Name:"BMW M240",
        image:"cars/BMW M240.png",
        Brand:"BMW",
        Fuel:"Diesel",
        Price:"$340000"
     },     
     {
        Name:"Dodge Charger",
        image:"cars/Dodge Charger.png",
        Brand:"Dodge",
        Fuel:"Petrol",
        Price:"$558600"
     },    
     {
        Name:"Mercedes-Benz AMG C 43",
        image:"cars/Mercedes-Benz AMG C 43.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$148900"
     },    
     {
        Name:"Mercedes-Benz EQE 500",
        image:"cars/Mercedes-Benz EQE 500.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$175600"
     }, 
     {
        Name:"BMW Z4",
        image:"cars/BMW Z4.png",
        Brand:"Mercedes",
        Fuel:"Petrol",
        Price:"$135600"
     }   
                            

]
//car brands
let brands=["Ferrari","Dodge","BMW","Mercedes","Audi","Nissan","Lamborghini"]
//cars brands ul list
document.addEventListener( `DOMContentLoaded`,function(){
    //cars brands ul list
    let cars_ul=document.querySelector("#brands");
    for(let i=0;i<brands.length;i++){
        let li=document.createElement("li");
        li.innerHTML=`${brands[i]}`;
        cars_ul.append(li);
    }

//Cars info 
let name_tag=document.querySelector("#car_name");
let brand_name_tag=document.querySelector("#brand_name");
let fuel=document.querySelector('#fuel');
let price=document.querySelector("#Price");
//next button implementation
let show_image=document.querySelector("#my_image");
let next_btn=document.querySelector("#next");
let image1_index=0
show_image.src=cars[image1_index].image;
//initial car information
name_tag.innerHTML=`<span>Name:</span> ${cars[image1_index].Name}`;
brand_name_tag.innerHTML=`<span>Brand:</span> ${cars[image1_index].Brand}`;
fuel.innerHTML=`<span>Fuel:</span> ${cars[image1_index].Fuel}`;
price.innerHTML=`<span>Price:</span> ${cars[image1_index].Price}`;

//**************** */
next_btn.onclick=()=>{
    image1_index+=1;
    show_image.src=`${cars[image1_index].image}`;  
    //car information
    name_tag.innerHTML=`<span>Name:</span> ${cars[image1_index].Name}`;
    brand_name_tag.innerHTML=`<span>Brand:</span>: ${cars[image1_index].Brand}`;
    fuel.innerHTML=`<span>Fuel:</span>: ${cars[image1_index].Fuel}`;
    price.innerHTML=`<span>Price:</span> ${cars[image1_index].Price}`;
}

//previous button implementation
let previous_btn=document.querySelector("#previous");
previous_btn.onclick=()=>{
        image1_index=image1_index-1;
        show_image.src=cars[image1_index].image;
    //car information 
    name_tag.innerHTML=`<span>Name:</span> ${cars[image1_index].Name}`;
    brand_name_tag.innerHTML=`<span>Brand:</span>: ${cars[image1_index].Brand}`;
    fuel.innerHTML=`<span>Fuel:</span>: ${cars[image1_index].Fuel}`;
    price.innerHTML=`<span>Price:</span> ${cars[image1_index].Price}`;
}

})