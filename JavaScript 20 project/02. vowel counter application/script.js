function countVowels() {
    const textArea = document.getElementById('textArea').value;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    for(let char of textArea.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    document.getElementById('result').textContent = `Total vowels: ${vowelsCount}`;
}