function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

  // Function to apply random colors to all blocks on page load
  function applyRandomColors() {
    const colorBodies = document.querySelectorAll(".color-body");

    colorBodies.forEach(function (colorBody) {
      const colorCodeElement = colorBody.querySelector("p");
      const randomColor = getRandomHexColor();

      // Set background color and text
      colorBody.style.backgroundColor = randomColor;
      colorCodeElement.textContent = randomColor;
    });
  }

  // Function to copy hex code to clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }).catch(err => {
      console.error('could not copy text: ', err);
    });
  }

  // Event listener for the copy buttons
  document.addEventListener("DOMContentLoaded", function () {
    // Apply random colors on page load
    applyRandomColors();

    // Attach click event to each copy button
    const copyButtons = document.querySelectorAll(".copyCode");
    copyButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const colorCodeId = this.getAttribute("data-color");
        const colorCodeElement = document.getElementById(colorCodeId);
        const colorCode = colorCodeElement.textContent;

        // Copy the color code to clipboard
        copyToClipboard(colorCode);
      });
    });
  });
