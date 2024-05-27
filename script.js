const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

$(document).ready(function() {
            $('#loginButton').on('click', function() {
                // Simulate successful login by setting an authenticated flag
                sessionStorage.setItem('isAuthenticated', 'true');
                // Redirect to the home page after login
                window.location.href = 'index.html';
            });
});
