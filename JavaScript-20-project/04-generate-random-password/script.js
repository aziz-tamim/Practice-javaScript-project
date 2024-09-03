document.getElementById("range").addEventListener("input", rangeChange);
document
  .getElementById("generatePassword")
  .addEventListener("click", generatePassword);
document.getElementById("copyPassword").addEventListener("click", copyPassword);

function updateRangeBackground(value) {
  const max = document.getElementById("range").max;
  const percentage = (value / max) * 100;
  document.getElementById(
    "updateRange"
  ).style.background = `linear-gradient(90deg, #4caf50 ${percentage}%, #ddd ${percentage}%)`;
}
function rangeChange() {
  const length = this.value;
  document.getElementById("updateLength").textContent = length;
  updateRangeBackground(length);
  generatePassword();
}
function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Copied");
}
function generatePassword() {
  const length = document.getElementById("range").value;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "@#$%^&*()_+~|}{[]:;?><,./-=";

  let availableChars = "";
  if (includeLowercase) availableChars += lowerChars;
  if (includeUppercase) availableChars += upperChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  document.getElementById("password").value = password;
}
