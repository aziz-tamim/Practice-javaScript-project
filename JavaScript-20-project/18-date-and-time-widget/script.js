let dateContainer = document.querySelector('date-container');
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('minutes');
let secondsContainer = document.querySelector('seconds');

const weekdays = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function updateClock() {
    const today = new Date();
    console.log(today);
}

updateClock();