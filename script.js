/* ini java*/
document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const passwordHelp = document.getElementById('passwordHelp');

    passwordForm.addEventListener('submit', function(event) {
        const passwordValue = passwordInput.value;
        if (passwordValue.length < 6 || passwordValue.length > 12) {
            passwordHelp.textContent = 'Password must be between 6 and 12 characters.';
            passwordHelp.style.color = 'red';
            event.preventDefault();
        } else {
            passwordHelp.textContent = 'Password is valid.';
            passwordHelp.style.color = 'green';
        }
    });
});
