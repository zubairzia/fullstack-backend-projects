// Get elements
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Fake credentials (for learning only)
const correctUsername = "admin";
const correctPassword = "1234";

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid username or password";
    message.style.color = "red";
  }
});
