const service =
document.getElementById("serviceSelect");


const count =
document.getElementById("countSelect");


const price =
document.getElementById("totalPrice");





function updatePrice(){


let result =
Number(service.value)
*
Number(count.value);



price.textContent =
result;



}



service.addEventListener(
"change",
updatePrice
);



count.addEventListener(
"change",
updatePrice
);



updatePrice();








const sendButton =
document.getElementById("sendBooking");



if(sendButton){


sendButton.addEventListener(
"click",
()=>{


alert(
"Заявка отправлена. Анна Сергеевна свяжется с вами."
);



}

);


}