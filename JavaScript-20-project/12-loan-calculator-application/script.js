document.getElementById("calculate").addEventListener("click", function () {
  const loanAmount = parseFloat(
    document.getElementById("calculatorAmount").value
  );
  const interestRate =
    parseFloat(document.getElementById("calculatorRate").value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById("calculatorTerm").value);

  const monthlyPayment =
    (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
    (Math.pow(1 + interestRate, loanTerm) - 1);

  const totalInterest = monthlyPayment * loanTerm - loanAmount;
  const resultElement = document.querySelector(".final-result");
  resultElement.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}<br />
    </br>
    Total Interest: ${totalInterest.toFixed(2)}
    `;
});
