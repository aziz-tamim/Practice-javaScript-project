document.getElementById("range").addEventListener("input", rangeChange);
document.getElementById("copyPassword").addEventListener("click", copyPassword);
document
  .getElementById("generatePassword")
  .addEventListener("click", generatePassword);

function updateRangeBackground(value) {}

function rangeChange() {
  const length = this.value;
  document.getElementById("updateLength").textContent = length;
  updateRangeBackground(length);
}
