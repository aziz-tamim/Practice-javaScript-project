function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

function applyRandomColors() {
  const colorBodies = document.querySelectorAll(".color-body");

  colorBodies.forEach(function (colorBody) {
    const colorCodeElement = colorBody.querySelector("P");
    const randomColor = getRandomHexColor();
    colorBody.style.backgroundColor = randomColor;
    colorCodeElement.textContent = randomColor;
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    alert(`Color Copied: ${text}`);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyRandomColors();
  const copyButtons = document.querySelectorAll(".copyCode");
  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const colorCodeId = this.getAttribute("data-color");
      const colorCodeElement = document.getElementById(colorCodeId);
      const colorCode = colorCodeElement.textContent;

      copyToClipboard(colorCode);
    });
  });
});
