function switchToLoginPage() {
    window.location.href = "login.html";
}

const logInBtn = document.querySelector('.login-btn');
logInBtn.onclick = () => switchToLoginPage();


function switchToHomePage() {
    window.location.href = "index.html";
}


// to go to sign up page
const signUpBtn = document.querySelector(".signup-btn");
signUpBtn.addEventListener("click", toSignUpPage)

function toSignUpPage() {
    window.location.href = "signup.html";
}






