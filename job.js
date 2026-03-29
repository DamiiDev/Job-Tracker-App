// Login page logic

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const success = document.getElementById("success");
const form = document.getElementById("form");
const togglePassword = document.getElementById("togglePassword");


togglePassword.addEventListener("click", () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        loginPassword.type = "password";
        togglePassword.textContent = "👁️";
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";


    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    if (emailValue === "") {
        emailError.textContent = "Please fill in all fields";
        return;
    }

    if (passwordValue === "") {
        passwordError.textContent = "Please fill in all fields";
        return;
    }


    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long."
        return;
    }

    success.style.display = "block";
    success.style.opacity = 1;

    setTimeout(() => {
        success.style.display = "none";
        success.style.opacity = "0";
    }, 2000);

    success.textContent = "Login Successful";

    loginBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "dashboard.html"
    }, 2500);
});




// Signup logic

const signupForm = document.getElementById("signupForm");
const signupFullName = document.getElementById("signupFullName");
