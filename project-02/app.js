const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");

let ticketPrice = +movie.value;



function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function selectedCount() {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeat", JSON.stringify(seatsIndex));
  const selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

movie.addEventListener("change", (event) => {
  ticketPrice = +event.target.value;
  setMovieData(event.target.selectedIndex, event.target.value);
  selectedCount();
});

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
  selectedCount();
});

selectedCount();
