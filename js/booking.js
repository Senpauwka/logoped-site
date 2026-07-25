const service =
document.getElementById("serviceSelect");


const count =
document.getElementById("countSelect");


const price =
document.getElementById("totalPrice");



function updatePrice(){


    let total =
    Number(service.value)
    *
    Number(count.value);


    price.textContent = total;


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


const booking = {


name:
"Новый пользователь",


service:
service.options[
service.selectedIndex
].text,


count:
count.value,


date:
document.getElementById("lessonDate").value,


time:
document.getElementById("timeSelect").value,


price:
price.textContent,


status:
"Ожидает подтверждения"



};





console.log(
"Новая заявка:",
booking
);





alert(
"Заявка создана! Ожидайте подтверждения."
);



}

);


}