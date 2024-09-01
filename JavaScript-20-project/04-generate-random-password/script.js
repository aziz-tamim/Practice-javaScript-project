
document.getElementById("range").addEventListener("input", updateLength);
document.getElementById("generatePassword").addEventListener("click", generatePassword);
document.getElementById("copyPassword").addEventListener("click", copyPassword);

function updateLength() {
  const length = this.value;
  document.getElementById("updateLength").textContent = length;
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

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
