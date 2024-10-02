const zoomableElement = document.getElementById('zoomable');
let scale = 1;

window.addEventListener('wheel', function(event) {
    event.preventDefault();

    const zoomIntensity = 0.1;
    if(event.deltaY < 0) {
        scale += zoomIntensity;
    } else {
        scale -= zoomIntensity;
        if (scale < 0.3) scale = 0.3;
    }

    zoomableElement.style.transform = `scale(${scale})`;
});