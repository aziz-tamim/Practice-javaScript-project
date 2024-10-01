const text = document.getElementById('animatedText');

function fadeIn() {
    text.style.opacity = 0;
}

function fadeOut() {
    text.style.opacity = 1;
}

function textAnimation() {
    fadeIn();
    setTimeout(function() {
        fadeOut()
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    textAnimation();
})