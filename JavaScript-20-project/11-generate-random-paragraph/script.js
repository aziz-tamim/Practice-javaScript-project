function generate() {
    const numberOfParagraphs = document.getElementById('items').value;
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = '';
    
    for (let i = 0; i < numberOfParagraphs; i++) {
        const paragraph = document.createElement('p');
        paragraph.innerText = generateRandomParagraph();
        dataDiv.appendChild(paragraph);
    }
}

function generateRandomParagraph() {
    const sentences = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vestibulum nec velit vitae urna lacinia feugiat.",
        "Curabitur consequat felis eget sem luctus, eget vehicula ligula scelerisque.",
        "Nulla facilisi. Suspendisse sit amet purus nec metus elementum accumsan.",
        "Donec suscipit sapien non ipsum commodo, id vestibulum est varius.",
        "Integer aliquet massa id nisi eleifend viverra.",
        "Praesent vel ligula eget mauris dapibus gravida.",
        "Cras efficitur nisi at purus euismod, et tempus urna ultrices.",
        "Morbi id sapien nec dui gravida pretium a vel lacus.",
        "Quisque ac felis auctor, fermentum nulla at, tempus velit."
    ];

    const sentenceCount = Math.floor(Math.random() * 5) + 3;
    let paragraph = '';

    for (let i = 0; i < sentenceCount; i++) {
        paragraph += sentences[Math.floor(Math.random() * sentences.length)] + ' ';
    }

    return paragraph.trim();
}