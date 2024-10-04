document.getElementById("calculate").addEventListener("click", function() {
    const loanAmount = parseFloat(document.getElementById("calculatorAmount").value);
    const interestRate = parseFloat(document.getElementById("calculatorRate").value) / 100/ 12;
    const loanTerm = parseInt(document.getElementById("calculatorTerm").value);

    const monthlyPayment = (loanAmount * interestRate);

    const totalInterest = (monthlyPayment * loanTerm) - loanAmount;

});
