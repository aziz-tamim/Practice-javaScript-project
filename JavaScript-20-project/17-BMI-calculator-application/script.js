document.getElementById('bmiBtn').addEventListenter("click", function() {
    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let weight = document.getElementById("weight").value;

    if (feet == '' || inches == '' || weight == '') {
        document.getElementById('result').innerHTML = '<p>please fill in all fields.</p>';
        return;
    }

    feet = parseInt(feet);
    inches = parseInt(inches);
    weight = parseFloat(weight);

    let heightInInches = (feet * 12) + inches;
    let heightInMeters = heightInInches * 0.0254;

    let bmi = weight / (heightInMeters * heightInInches);

    let category = '';
    if (bmi < 16) {
        category = "You are savere Thin";
    } else if (bmi >= 16 && bmi <= 17) {
        category = "You are Moderate Thin";
    } else if (bmi > 17 && bmi <= 18.5) {
        category = "You are mid Thin";
    } else if (bmi > 18 && bmi <=25) {
        category = "You are Normal";
    } else {
        category = "category"
    }
});