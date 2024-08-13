const container = document.querySelector(".container");
const seat = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");

let ticket = movie.value;

container.addEventListener('click', (event) => {
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected');
    }
})