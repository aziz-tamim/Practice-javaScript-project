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

    const partOfSpeech = document.createElement('p');
    partOfSpeech.innerHTML = `<strong>Part of Speech:</strong>${meaning.partOfSpeech}`;
    resultItem.appendChild(partOfSpeech);

    const firstDefinition = meaning.definitions[0];
    if (firstDefinition) {
        const definitions = document.createElement('p');
        definitions.innerHTML = `<strong>Definition:</strong>${firstDefinition.definition}`;
        resultItem.appendChild(definitions);
    }
    resultDiv.appendChild(resultItem);
  });

  const phonetics = wordData.phonetics.find(p => p.audio);
  if(phonetics && phonetics.audio) {
    const soundContainer = document.createElement('div');
    soundContainer.className = 'sound-container';

    const soundIcon = document.createElement('button');
    soundIcon.innerHTML = '🔊';
    soundIcon.className = 'sound-icon';

    soundIcon.addEventListener("click", function() {
        new Audio(phonetics.audio).play();

    });
    soundContainer.appendChild(soundIcon);
    resultDiv.appendChild(soundContainer);
  }
  resultDiv.style.display = 'block';
}
