const carousel = document.querySelector(".carousel");

if (carousel) {

const cards = carousel.children;

let current = 0;

function updateCarousel() {

const width = cards[0].offsetWidth + 20;

carousel.scrollTo({

left: current * width,

behavior: "smooth"

});

}

setInterval(() => {

current++;

if (current >= cards.length) {

current = 0;

}

updateCarousel();

}, 5000);

let startX = 0;

carousel.addEventListener("touchstart", e => {

startX = e.touches[0].clientX;

});

carousel.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX;

if (startX - endX > 50) {

current++;

}

else if (endX - startX > 50) {

current--;

}

if (current < 0)

current = 0;

if (current >= cards.length)

current = cards.length - 1;

updateCarousel();

});

}