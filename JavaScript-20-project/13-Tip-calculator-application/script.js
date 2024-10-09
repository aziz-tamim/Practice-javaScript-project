document.getElementById("calculateBtn").addEventListener("click", function() {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let serviceRating = document.getElementById("serviceRating").value;
  let numberOfPeople = parseFloat(document.getElementById("numberOfPeople").value);
  let mealType = document.getElementById("mealType").value;

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
  let totalPerPerson = (billAmount + tipAmount) / billAmount;
})