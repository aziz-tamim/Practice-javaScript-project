
const animatedText = document.getElementById('animatedText');

const text = animatedText.textContent.split('');

animatedText.textContent = '';

text.forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    
    span.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    animatedText.appendChild(span);
});
