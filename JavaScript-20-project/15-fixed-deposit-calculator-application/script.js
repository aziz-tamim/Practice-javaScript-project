document.getElementById("calculateBtn").addEventListener("click", function() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rateOfInterest = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    if(isNaN(principal) || isNaN(rateOfInterest) || isNaN(tenure)) {
        alert("Please enter valid input in all fields");
        return;
    }

    const maturityAmount = principal * Math.pow((1 + (rateOfInterest / 100)), tenure);
    document.getElementById('result').textContent = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
});