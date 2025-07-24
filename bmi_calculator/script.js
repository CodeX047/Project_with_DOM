// The BMI calculations
function BMI(height, weight) {
  return (weight / height / height) * 10000;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");
  const guide = document.getElementById("guide");

  // Validate inputs at the beginning to prevent errors.
  if (isNaN(height) || height <= 54.64 || height > 272) {
    results.textContent = "Please provide a valid height";
    guide.textContent = ""; // Clear previous results
    return;
  }

  if (isNaN(weight) || weight <= 18.5 || weight > 635) {
    results.textContent = "Please provide a valid weight";
    guide.textContent = ""; // Clear previous results
    return;
  }

  // Calculate the BMI and store it in a variable as a number.
  const bmi = BMI(height, weight);

  // Display the final result.
  results.textContent = bmi.toFixed(2);

  
  if (bmi < 18.6) {
    guide.textContent = "Under Weight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    guide.textContent = "Normal Range";
  } else {
    guide.textContent = "Overweight";
  }
});
