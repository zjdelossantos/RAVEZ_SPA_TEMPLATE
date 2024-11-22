const showNewPasswordCheckbox = document.getElementById('show-new-password-checkbox');
const newPasswordInput = document.getElementById('new-password');
const showConfirmPasswordCheckbox = document.getElementById('show-confirm-password-checkbox');
const confirmPasswordInput = document.getElementById('confirm-password');
const changePasswordButton = document.getElementById('otp-button');
const popupMessage = document.getElementById('popup-message');

// Show/Hide New Password
showNewPasswordCheckbox.addEventListener('change', () => {
    newPasswordInput.type = showNewPasswordCheckbox.checked ? 'text' : 'password';
});

// Show/Hide Confirm Password
showConfirmPasswordCheckbox.addEventListener('change', () => {
    confirmPasswordInput.type = showConfirmPasswordCheckbox.checked ? 'text' : 'password';
});

// Validate Passwords and Show Pop-Up
changePasswordButton.addEventListener('click', () => {
    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!newPassword || !confirmPassword) {
        // Show an inline error message or handle empty fields
        popupMessage.textContent = "Please fill out all fields.";
        popupMessage.classList.remove('hidden');
        popupMessage.classList.add('visible');
        setTimeout(() => popupMessage.classList.remove('visible'), 3000); // Hide after 3 seconds
        return;
    }

    if (newPassword !== confirmPassword) {
        // Show a mismatch error message
        popupMessage.textContent = "Passwords do not match.";
        popupMessage.classList.remove('hidden');
        popupMessage.classList.add('visible');
        setTimeout(() => popupMessage.classList.remove('visible'), 3000); // Hide after 3 seconds
        return;
    }

    // Success message
    popupMessage.textContent = "Password Successfully Updated.";
    popupMessage.classList.remove('hidden');
    popupMessage.classList.add('visible');
    setTimeout(() => popupMessage.classList.remove('visible'), 3000); // Hide after 3 seconds

    // Clear the input fields (optional)
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';
});
