function calculateTotal() {
    const note2000 = parseInt(document.getElementById("note2000").value) || 0;
    const note500 = parseInt(document.getElementById("note500").value) || 0;
    const note200 = parseInt(document.getElementById("note200").value) || 0;
    const note100 = parseInt(document.getElementById('note100').value) || 0;
    const note50 = parseInt(document.getElementById("note50").value) || 0;
    const note20 = parseInt(document.getElementById("note20").value) || 0;
    const note10 = parseInt(document.getElementById("note10").value) || 0;
    const note5 = parseInt(document.getElementById("note5").value) || 0;
    const note2 = parseInt(document.getElementById("note2").value) || 0;
    const note1 = parseInt(document.getElementById("note1").value) || 0;

    const value2000 = note2000 * 2000;
    const value500 = note500 * 500;
    const value200 = note200 * 200;
    const value100 = note100 * 100;
    const value50 = note50 * 50;
    const value20 = note20 * 20;
    const value10 = note10 * 10;
    const value5 = note5 * 5;
    const value2 = note2 * 2;
    const value1 = note1 * 1;

    document.getElementById("value2000").textContent = value2000;
    document.getElementById("value500").textContent = value500;
    document.getElementById("value200").textContent = value200;

}

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", calculateTotal);
})
