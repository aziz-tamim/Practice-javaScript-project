function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    function applyRandomColors() {
        const colorBodies = document.querySelectorAll(".color-body");
        colorBodies.forEach(function (colorBody) {

            const colorCodeElement = colorBody.querySelector('p');
            const randomColor = getRandomHexColor();

            
        });
    }
}
