// script.js

function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var formTitle = document.getElementById("form-title");
    var toggleButton = document.getElementById("toggle-button");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.innerHTML = "Login";
        toggleButton.innerHTML = "Switch to Sign Up";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.innerHTML = "Sign Up";
        toggleButton.innerHTML = "Switch to Login";
    }
}

function login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you can add your login logic.
    // For demonstration purposes, let's just toggle the visibility of the login and profile pages.

    var loginPage = document.querySelector(".login-container");
    var profilePage = document.getElementById("profile-page");

    loginPage.style.display = "none";
    profilePage.style.display = "block";
}

function logout() {
    // Add your logout logic here
    alert("Logout clicked! Add your logout logic.");
}
