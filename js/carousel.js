const carousel = document.querySelector(".carousel");

if (carousel) {

fetch("data/services.json")
.then(response => response.json())
.then(cards => {

carousel.innerHTML = "";

cards.forEach(card => {

carousel.innerHTML += `
<a href="${card.link}" class="carousel-card">

<img src="${card.image}" alt="${card.title}">

<h3>${card.title}</h3>

<p>${card.description}</p>

</a>
`;

});

});

}