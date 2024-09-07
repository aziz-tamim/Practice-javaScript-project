function calculateTotal() {
    const note2000 = parseInt(document.getElementById("note2000").value) || 0;
    const note500 = parseInt(document.getElementById("note500").value) || 0;
    const note200 = parseInt(document.getElementById("note200").value) || 0;
    const note100 = parseInt(document.getElementById("note100").value) || 0;
    const note50 = parseInt(document.getElementById("note50").value) || 0;
    const note20 = parseInt(document.getElementById("note20").value) || 0;
    const note10 = parseInt(document.getElementById("note10").value) || 0;
    const note5 = parseInt(document.getElementById("note5").value) || 0;
    const note2 = parseInt(document.getElementById("note2").value) || 0;
    const note1 = parseInt(document.getElementById("note1").value) || 0;
  
    // Calculate value for each denomination
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
  
    // Update values in the UI
    document.getElementById("value2000").textContent = value2000;
    document.getElementById("value500").textContent = value500;
    document.getElementById("value200").textContent = value200;
    document.getElementById("value100").textContent = value100;
    document.getElementById("value50").textContent = value50;
    document.getElementById("value20").textContent = value20;
    document.getElementById("value10").textContent = value10;
    document.getElementById("value5").textContent = value5;
    document.getElementById("value2").textContent = value2;
    document.getElementById("value1").textContent = value1;
  
    // Calculate total cash
    const totalCash = value2000 + value500 + value200 + value100 + value50 + value20 + value10 + value5 + value2 + value1;
    document.getElementById("total-cash").textContent = totalCash;
  }
  
  // Event listeners for input fields
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", calculateTotal);
  });
  
  // Reset function
  document.getElementById("resetBtn").addEventListener("click", () => {
    // Clear all input fields and reset values
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    document.querySelectorAll(".value").forEach((value) => {
      value.textContent = "0";
    });
    document.getElementById("total-cash").textContent = "0";
  });
