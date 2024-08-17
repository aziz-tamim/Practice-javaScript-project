const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const miliSecondEl = document.getElementById("mili-second");
const lapTimesEl = document.getElementById("lap-times");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
stopButton.addEventListener("click", stop);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateDisplay() {
  const minutes = Math.floor(elapsedTime / 6000);
  const seconds = Math.floor((elapsedTime % 6000) / 100);
  const miliSeconds = elapsedTime % 100;
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
  miliSecondEl.textContent = formatTime(miliSeconds);
}

function renderLapTimes() {
  lapTimesEl.innerHTML = "";
  lapTimes.forEach((time, index) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const miliSeconds = time % 100;
    const lapTimeItem = document.createElement("li");
    lapTimeItem.textContent = `Lap ${index + 1}: ${formatTime(
      minutes
    )}:${formatTime(seconds)}:${formatTime(miliSeconds)}`;
    lapTimesEl.appendChild(lapTimeItem);
  });
}

let watchRunning = false;
let timers;
let elapsedTime = 0;
let lapTimes = [];

function start() {
  if (!watchRunning) {
    watchRunning = true;
    timers = setInterval(function () {
      elapsedTime += 1;
      updateDisplay();
    }, 10);
  }
}
function pause() {
  watchRunning = false;
  clearInterval(timers);
}
function reset() {
  pause();
  elapsedTime = 0;
  lapTimes = [];
  updateDisplay();
  renderLapTimes();
}
function stop() {
  if (watchRunning) {
    recordLap();
  }
  pause();
  elapsedTime = 0;
  updateDisplay();
}

function recordLap() {
  lapTimes.push(elapsedTime);
  renderLapTimes();
}
