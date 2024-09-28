document.getElementById('searchBtn').addEventListener("click", function() {
   const inputWord = document.getElementById('dictionaryInput').value.toLowerCase();
   fetch('./frog.json')
    .then(response => response.json())
    .then(data => {
        
    })
});