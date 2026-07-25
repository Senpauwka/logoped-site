function updateTime(){

const now = new Date();


const options = {

timeZone:"Europe/Moscow",

hour:"2-digit",

minute:"2-digit"

};


const dateOptions = {

timeZone:"Europe/Moscow",

day:"numeric",

month:"long",

year:"numeric"

};


document.getElementById("time").textContent =
now.toLocaleTimeString("ru-RU", options);


document.getElementById("date").textContent =
now.toLocaleDateString("ru-RU", dateOptions);

}



updateTime();


setInterval(updateTime,1000);