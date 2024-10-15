// Get the input field for the user's birthdate
let userInput = document.getElementById("date");

// Set the maximum allowed date for the input field to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Get the element where the result will be displayed
let result = document.getElementById("result");

// Function to calculate the user's age
function calculateAge() {
  // Create a Date object from the user's birthdate
  let birthDate = new Date(userInput.value);

  // Get the day, month, and year from the birthdate
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // Get the current date
  let today = new Date();

  // Get the day, month, and year from the current date
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  // Initialize variables to store the age in years, months, and days
  let d3, m3, y3;

  // Calculate the age in years
  y3 = y2 - y1;

  // Calculate the age in months
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--; // Decrement the year if the month is less than the birth month
    m3 = 12 + m2 - m1; // Calculate the remaining months
  }

  // Calculate the age in days
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--; // Decrement the month if the day is less than the birth day
    d3 = getDaysInMonth(y2, m2) + d2 - d1; // Calculate the remaining days
  }

  // Adjust the month and year if the month is less than 0
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // Display the result
  result.innerHTML = `You are  <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

// Function to get the number of days in a month
function getDaysInMonth(year, month) {
  return new Date(year, month - 1, 0).getDate();
}
