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


// adding time at top
const d = new Date();
document.getElementById("time").innerHTML = d;

// pop up button

let popUp = document.getElementById("popUp")

function openPopup() {
    popUp.classList.add("popUp-open");
}

function closePopup() {
    popUp.classList.remove("popUp-open");
}


// loop through all apply button
const apply = document.querySelectorAll(".r-button");
let applyLength = apply.length;

for (let i = 0; i < applyLength; i++) {
    apply[i].addEventListener("click", openPopup);
}


