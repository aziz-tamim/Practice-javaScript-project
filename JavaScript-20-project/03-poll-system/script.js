let votes = {
  javascript: 0,
  python: 0,
  java: 0,
  cpp: 0,
};
let selectedLanguage = null;

document.getElementById("javascriptBtn").addEventListener("click", function () {
  selectLanguage("javascript", "javascriptBtn");
});

document.getElementById("pythonBtn").addEventListener("click", function () {
  selectLanguage("python", "pythonBtn");
});

document.getElementById("javaBtn").addEventListener("click", function () {
  selectLanguage("java", "javaBtn");
});

document.getElementById("cppBtn").addEventListener("click", function () {
  selectLanguage("cpp", "cppBtn");
});

document.getElementById("submitBtn").addEventListener("click", function () {
  if (selectedLanguage) {
    votes[selectedLanguage]++;
    updateRanges();
  }
});

function selectLanguage(language, buttonId) {
  if (selectedLanguage) {
    document.getElementById(selectedLanguage + "Btn").style.backgroundColor =
      "";
    document.getElementById(selectedLanguage + "Btn").style.color = "";
  }
  selectedLanguage = language;
  highlightSelectedButton(buttonId);
}

function updateRanges() {
  const totalVotes = votes.javascript + votes.python + votes.java + votes.cpp;
  const jsPercentage = Math.round((votes.javascript / totalVotes) * 100);
  const pythonPercentage = Math.round((votes.python / totalVotes) * 100);
  const javaPercentage = Math.round((votes.java / totalVotes) * 100);
  const cppPercentage = Math.round((votes.cpp / totalVotes) * 100);

  document.getElementById("jsRange").value = jsPercentage;
  document.getElementById("jsPercentage").textContent = `${jsPercentage}%`;
  document.getElementById("pythonRange").value = pythonPercentage;
  document.getElementById(
    "pythonPercentage"
  ).textContent = `${pythonPercentage}%`;
  document.getElementById("javaRange").value = javaPercentage;
  document.getElementById("javaPercentage").textContent = `${javaPercentage}%`;
  document.getElementById("cppRange").value = cppPercentage;
  document.getElementById("cppPercentage").textContent = `${cppPercentage}%`;
}

function highlightSelectedButton(buttonId) {
  const selectedButton = document.getElementById(buttonId);
  selectedButton.style.backgroundColor = "#ff1f5ff3";
  selectedButton.style.color = "#fff";
}
