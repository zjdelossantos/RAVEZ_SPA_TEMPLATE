const otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const currentValue = input.value;

        // For the first input, do not allow '0'
        if (index === 0 && currentValue === '0') {
            input.value = ''; // Clear the input if '0' is typed in the first field
            return;
        }

        // Allow only numeric values
        if (!/^\d$/.test(currentValue)) {
            input.value = ''; // Clear invalid input
            return;
        }

        // Move to the next input if a valid number is entered
        if (currentValue.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle Backspace: Move focus to the previous input
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});
