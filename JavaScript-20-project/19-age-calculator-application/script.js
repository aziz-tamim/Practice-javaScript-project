function calculateAge() {
  let birthDate = document.getElementById("date").value;

  if (!birthDate) {
    document.getElementById("result").innerHTML =
      "Please select your date of birth.";
    return;
  }

  let birth = new Date(birthDate);
  let today = new Date();

  let ageYears = today.getFullYear() - birth.getFullYear();
  let ageMonths = today.getMonth() - birth.getMonth();
  let ageDays = today.getDate() - birth.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInMonth(today.getMonth() - 1, today.getFullYear());
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>Your age is <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days.</p>`;
}

function daysInMonth(age, month) {
    return new Date(year, month + 1, 0).getDate();
}
