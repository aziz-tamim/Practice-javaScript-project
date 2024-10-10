document.getElementById('calculateBtn').addEventListener('click', function() {
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let serviceRating = document.getElementById('serviceRating').value;
    let numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    let mealType = document.getElementById('mealType').value;

    let tipPercentage;
    switch(serviceRating) {
        case 'poor':
            tipPercentage = 0.05;
            break;
        case 'average':
            tipPercentage = 0.10;
            break;
        case 'good':
            tipPercentage = 0.15;
            break;
        case 'excellent':
            tipPercentage = 0.20;
            break;
        default:
            tipPercentage = 0.10;
    }

    let tipAmount = billAmount * tipPercentage;

    let totalPerPerson = (billAmount + tipAmount) / numberOfPeople;

    document.getElementById('result').innerHTML = `
        <h3 class="result">Result:</h3>
        <p>Meal Type: ${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</p>
        <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
        <p>Total Per Person: $${totalPerPerson.toFixed(2)}</p>
    `;
});
