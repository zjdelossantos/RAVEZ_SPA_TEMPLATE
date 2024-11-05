function createAccount() {
    // Add your account creation logic here
  }
  
  function logIn() {
    // Add your login logic here
  }
  
  function forgotPassword() {
    // Add your forgot password logic here
  }
  
  document.getElementById('show-password-create').addEventListener('change', function() {
    const passwordField = document.getElementById('create-password');
    passwordField.type = this.checked ? 'text' : 'password';
  });
  
  document.getElementById('show-password-login').addEventListener('change', function() {
    const passwordField = document.getElementById('login-password');
    passwordField.type = this.checked ? 'text' : 'password';
  });
  