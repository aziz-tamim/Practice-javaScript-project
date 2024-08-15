const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");

const ticket = +movie.value;

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
  selectedCount();
});

function selectedCount() {
  const selectSeat = document.querySelectorAll(".row .seat.selected");

  const selectSeatCount = selectSeat.length;

  count.innerText = selectSeatCount;
  total.innerText = selectSeatCount * ticket;
}

