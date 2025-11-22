// Step 1: Get references to our elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const passwordStrength = document.getElementById('passwordStrength');
const confirmPasswordError = document.getElementById('confirmPasswordError');

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
// Add event listeners
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);
// Password validation function
function validatePassword() {
    const passwordValue = password.value.trim();
    
    if (passwordValue === '') {
        showError(password, passwordError, 'Password is required');
        updatePasswordStrength(0);
        return false;
    }
    if (passwordValue.length < 8) {
        showError(password, passwordError, 'Password must be at least 8 characters');
        updatePasswordStrength(1);
        return false;
    }
     // Check for complexity
    let strength = 0;
    if (passwordValue.length >= 12) strength++;
    if (/[a-z]/.test(passwordValue)) strength++;
    if (/[A-Z]/.test(passwordValue)) strength++;
    if (/[0-9]/.test(passwordValue)) strength++;
    if (/[^A-Za-z0-9]/.test(passwordValue)) strength++;
    updatePasswordStrength(strength);
    
    if (strength < 3) {
        showError(password, passwordError, 'Password must include uppercase, lowercase, number, and special character');
        return false;
    }
    
    showSuccess(password, passwordError);
    return true;
}
// Update password strength visual
function updatePasswordStrength(strength) {
    passwordStrength.className = 'password-strength';
    
    if (strength === 0) {
        passwordStrength.style.display = 'none';
    } else if (strength <= 2) {
        passwordStrength.style.display = 'block';
        passwordStrength.classList.add('strength-weak');
    } else if (strength <= 4) {
        passwordStrength.style.display = 'block';
        passwordStrength.classList.add('strength-medium');
    } else {
        passwordStrength.style.display = 'block';
        passwordStrength.classList.add('strength-strong');
    }
}
// Confirm password validation
function validateConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();
    
    if (confirmPasswordValue === '') {
        showError(confirmPassword, confirmPasswordError, 'Please confirm your password');
        return false;
    }
    
    if (confirmPasswordValue !== passwordValue) {
        showError(confirmPassword, confirmPasswordError, 'Passwords do not match');
        return false;
    }
    
    showSuccess(confirmPassword, confirmPasswordError);
    return true;
}

// Update your form submit function
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Form submitted successfully!');
        // In a real app, you would submit to a server here
    }
});