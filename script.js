// Step 1: Get references to our elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

// Step 2: Add event listener for real-time validation
username.addEventListener('input', validateUsername);

// Step 3: Create validation function
function validateUsername() {
    const usernameValue = username.value.trim();
    
    // Let's start simple - just check if it's empty
    if (usernameValue === '') {
        showError(username, usernameError, 'Username is required');
        return false;
    }
    
    // Now check length
    if (usernameValue.length < 3) {
        showError(username, usernameError, 'Username must be at least 3 characters');
        return false;
    }
    
    // Success!
    showSuccess(username, usernameError);
    return true;
}

// Helper functions
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.style.borderColor = 'red';
}

function showSuccess(input, errorElement) {
    errorElement.textContent = '';
    input.style.borderColor = 'green';
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    
    if (validateUsername()) {
        alert('Form submitted successfully!');
        // In real app, you'd submit to server here
    }
});