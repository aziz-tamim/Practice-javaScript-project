document.getElementById("searchBtn").addEventListener("click", function () {
  const inputWord = document
    .getElementById("dictionaryInput")
    .value.toLowerCase();
  fetch("./frog.json")
    .then((response) => response.json())
    .then((data) => {
      const wordData = data.find(
        (entry) => entry.word.toLowerCase() === inputWord
      );
      if (wordData) {
        displayResult(wordData);
      } else {
        document.getElementById("result").innerHTML =
          "<p>Word not found in dictionary.</p>";
        document.getElementById("result").style.display = "block";
      }
    });
});

function displayResult(wordData) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const wordTitle = document.createElement("h3");
  wordTitle.textContent = wordData.word;
  resultDiv.appendChild(wordTitle);

  const firstTwoMeanings = wordData.meanings.slice(0, 2);
  firstTwoMeanings.forEach((meaning) => {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    
  });
}
