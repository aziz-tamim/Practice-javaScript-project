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

});