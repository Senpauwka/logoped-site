/* =================================
        ЧАСЫ МОСКВЫ
================================= */


function updateClock(){

    const now = new Date();


    const time = now.toLocaleTimeString(
        "ru-RU",
        {
            timeZone:"Europe/Moscow",
            hour:"2-digit",
            minute:"2-digit"
        }
    );


    const date = now.toLocaleDateString(
        "ru-RU",
        {
            timeZone:"Europe/Moscow",
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );


    document.getElementById("time").textContent = time;

    document.getElementById("date").textContent = date;

}



updateClock();

setInterval(updateClock,1000);








/* =================================
        КАЛЕНДАРЬ
================================= */


const calendarDays =
document.getElementById("calendarDays");


const monthTitle =
document.getElementById("monthTitle");



let currentDate = new Date();





const months = [

"Январь",
"Февраль",
"Март",
"Апрель",
"Май",
"Июнь",
"Июль",
"Август",
"Сентябрь",
"Октябрь",
"Ноябрь",
"Декабрь"

];





function renderCalendar(){


    calendarDays.innerHTML="";


    const year =
    currentDate.getFullYear();


    const month =
    currentDate.getMonth();



    monthTitle.textContent =
    `${months[month]} ${year}`;





    const firstDay =
    new Date(year,month,1)
    .getDay();



    const daysInMonth =
    new Date(year,month+1,0)
    .getDate();




    let start =
    firstDay === 0 ? 6 : firstDay-1;




    for(let i=0;i<start;i++){

        const empty =
        document.createElement("div");

        calendarDays.appendChild(empty);

    }





    for(let day=1;day<=daysInMonth;day++){


        const dayElement =
        document.createElement("div");


        dayElement.textContent=day;



        const today =
        new Date();



        if(

            day === today.getDate()
            &&
            month === today.getMonth()
            &&
            year === today.getFullYear()

        ){

            dayElement.classList.add("today");

        }




        const weekDay =
        new Date(year,month,day)
        .getDay();



        if(
            weekDay===0 ||
            weekDay===6
        ){

            dayElement.classList.add("weekend");

        }




        calendarDays.appendChild(dayElement);


    }


}




document
.getElementById("prevMonth")
.addEventListener(
"click",
()=>{


    currentDate.setMonth(
        currentDate.getMonth()-1
    );


    renderCalendar();


});





document
.getElementById("nextMonth")
.addEventListener(
"click",
()=>{


    currentDate.setMonth(
        currentDate.getMonth()+1
    );


    renderCalendar();


});



renderCalendar();










/* =================================
        КАРУСЕЛЬ
================================= */



const slides =
document.querySelectorAll(".slide");


let currentSlide = 0;




function showSlide(index){


    slides.forEach(
        slide =>
        slide.classList.remove("active")
    );


    slides[index]
    .classList.add("active");


}





document
.getElementById("nextSlide")
.addEventListener(
"click",
()=>{


    currentSlide++;


    if(currentSlide>=slides.length){

        currentSlide=0;

    }


    showSlide(currentSlide);


});





document
.getElementById("prevSlide")
.addEventListener(
"click",
()=>{


    currentSlide--;


    if(currentSlide<0){

        currentSlide=slides.length-1;

    }


    showSlide(currentSlide);


});






setInterval(()=>{


    currentSlide++;


    if(currentSlide>=slides.length){

        currentSlide=0;

    }


    showSlide(currentSlide);


},5000);










/* =================================
        ОКНО ЗАПИСИ
================================= */


const bookingModal =
document.getElementById("bookingModal");


const openBooking =
document.getElementById("openBooking");


const closeBooking =
document.getElementById("closeBooking");





openBooking.addEventListener(
"click",
()=>{

    bookingModal.classList.add("active");

});





closeBooking.addEventListener(
"click",
()=>{

    bookingModal.classList.remove("active");

});






bookingModal.addEventListener(
"click",
(e)=>{


    if(e.target===bookingModal){

        bookingModal.classList.remove("active");

    }


});