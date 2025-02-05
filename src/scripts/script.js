"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const emailDiv = document.getElementById("emailDiv");
const passwordDiv = document.getElementById("passwordDiv");
const inputdiv = document.querySelector(".inputdiv");
const emailInput = document.querySelector(".emailInput");
const emptyEmail = document.querySelector(".emptyEmail");
const invalidEmail = document.querySelector(".invalidEmail");
const passwordInput = document.querySelector(".passwordInput");
const togglePassword = document.querySelector(".togglePassword");
const showIcon = document.querySelector(".showIcon");
const hideIcon = document.querySelector(".hideIcon");
const passwordLength = document.querySelector(".passwordLength");
const emptyPassword = document.querySelector(".emptyPassword");
const authenticationBtn = document.querySelector(".authenticationBtn");
const hideRadio = document.querySelector(".hideRadio");
const emailLoginInput = document.getElementById("emailLoginInput");
const passwordLoginInput = document.getElementById("passwordLoginInput");
const emailNotFound = document.getElementById("emailNotFound");
const incorrectPassword = document.getElementById("incorrectPassword");
const loginVerification = document.getElementById("loginVerification");
const otpInputs = document.querySelectorAll(".verificationinput");
const menuItem = document.querySelectorAll(".menu-item");
const resetBtn = document.querySelector(".resetBtn");
const passwordMatch = document.querySelector(".passwordMatch");
const passwordConfirm = document.querySelector(".passwordConfirm");
const faqDropdowns = document.querySelectorAll(".toggleFaqArrow");
const faqAnswers = document.querySelectorAll(".faqAnswer");
const faqArrowsUp = document.querySelectorAll(".faqArrowUp");
const faqArrowsDown = document.querySelectorAll(".faqArrowDown");
const clearInput = document.querySelector(".clearInput");
const inputGetStarted = document.querySelector(".inputGetStarted");
const gettingStartedInput = document.getElementById("gettingStartedInput");
const gettingStartedArrowUp = document.getElementById("gettingStartedArrowUp");
const gettingStartedArrowDown = document.getElementById(
  "gettingStartedArrowDown"
);
const getStartedDropdown = document.getElementById("gettingStartedDropdown");
const toggleArrow = document.querySelector(".toggleArrow");

const passValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

function toggleClass(element, class1, class2) {
  if (element && element.classList) {
    if (element.classList.contains(class1)) {
      element.classList.remove(class1);
      element.classList.add(class2);
    } else {
      element.classList.remove(class2);
      element.classList.add(class1);
    }
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.remove("hidden");
    mainMenu.classList.add("hidden");
    menuBtn.classList.add("hidden");
    closeMenu.classList.remove("hidden");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    closeMenu.classList.add("hidden");
    mainMenu.classList.remove("hidden");
    menuBtn.classList.remove("hidden");
  });
}

if (gettingStartedArrowUp && getStartedDropdown && gettingStartedArrowDown) {
  // gettingStartedArrowDown.addEventListener("click", function () {
  //   getStartedDropdown.classList.remove("hidden");
  //   gettingStartedArrowUp.classList.remove("hidden");
  //   gettingStartedArrowDown.classList.add("hidden");
  // });

  // gettingStartedArrowUp.addEventListener("click", function () {
  //   getStartedDropdown.classList.add("hidden");
  //   gettingStartedArrowUp.classList.add("hidden");
  //   gettingStartedArrowDown.classList.remove("hidden");
  // });

  if (gettingStartedArrowUp && getStartedDropdown && gettingStartedArrowDown) {
    function toggleDropdown() {
      const toggleArrows = getStartedDropdown.classList.contains("hidden");
      getStartedDropdown.classList.toggle("hidden", !toggleArrows);
      gettingStartedArrowUp.classList.toggle("hidden", toggleArrows);
      gettingStartedArrowDown.classList.toggle("hidden", !toggleArrows);
    }

    gettingStartedArrowDown.addEventListener("click", toggleDropdown);
    gettingStartedArrowUp.addEventListener("click", toggleDropdown);
  }
}

if (menuItem) {
  menuItem.forEach((items) => {
    items.addEventListener("click", () => {
      gettingStartedInput.value = items.textContent;
      getStartedDropdown.classList.add("hidden");
    });
  });
}

if (togglePassword) {
  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showIcon.classList.add("hidden");
      hideIcon.classList.remove("hidden");
    } else {
      passwordInput.type = "password";
      hideIcon.classList.add("hidden");
      showIcon.classList.remove("hidden");
    }
  });
}

if (emailInput && passwordInput && authenticationBtn) {
  emailInput.addEventListener("input", function () {
    if (!emailValidation.test(emailInput.value)) {
      invalidEmail.classList.remove("hidden");
      emptyEmail.classList.add("hidden");
    } else {
      invalidEmail.classList.add("hidden");
    }
    toggleClass(emailDiv, "ring-red-300", "ring-slate-300");
  });

  passwordInput.addEventListener("input", function () {
    if (!passValidation.test(passwordInput.value)) {
      passwordLength.classList.remove("hidden");
      emptyPassword.classList.add("hidden");
    } else {
      passwordLength.classList.add("hidden");
    }
    toggleClass(passwordDiv, "ring-red-300", "ring-slate-300");
  });

  authenticationBtn.addEventListener("click", function (e) {
    let hasError = false;

    if (emailInput.value.trim() === "") {
      emptyEmail.classList.remove("hidden");
      invalidEmail.classList.add("hidden");
      toggleClass(emailDiv, "ring-slate-300", "ring-red-300");
      hasError = true;
    } else {
      emptyEmail.classList.add("hidden");
    }

    if (passwordInput.value.trim() === "") {
      emptyPassword.classList.remove("hidden");
      passwordLength.classList.add("hidden");
      toggleClass(passwordDiv, "ring-slate-300", "ring-red-300");
      hasError = true;
    } else {
      emptyPassword.classList.add("hidden");
    }

    if (!emailValidation.test(emailInput.value)) {
      invalidEmail.classList.remove("hidden");
      hasError = true;
    }

    if (!passValidation.test(passwordInput.value)) {
      passwordLength.classList.remove("hidden");
      hasError = true;
    }

    if (!hasError) {
      window.location.href = "verification.html";
    } else {
      e.preventDefault();
    }
  });
}

if (emailInput && invalidEmail && emptyEmail) {
  emailInput.addEventListener("input", function () {
    if (!emailValidation.test(emailInput.value)) {
      invalidEmail.classList.remove("hidden");
      emptyEmail.classList.add("hidden");
    } else {
      invalidEmail.classList.add("hidden");
    }
  });
}

if (passwordInput && emptyPassword) {
  passwordInput.addEventListener("input", function () {
    if (!passValidation.test(passwordInput.value)) {
      passwordLength.classList.remove("hidden");
      emptyPassword.classList.add("hidden");
    } else {
      passwordLength.classList.add("hidden");
    }
  });
}

if (hideRadio) {
  hideRadio.addEventListener("click", function () {
    toggleClass(hideRadio, "bg-white", "bg-blue-600");

    if (authenticationBtn) {
      toggleClass(authenticationBtn, "opacity-40", "opacity-100");
    }

    if (loginVerification) {
      toggleClass(loginVerification, "opacity-40", "opacity-100");
    }
  });
}

if (emailLoginInput && passwordLoginInput && loginVerification) {
  emailLoginInput.addEventListener("input", function () {
    emailNotFound.classList.add("hidden");
    invalidEmail.classList.add("hidden");
  });

  passwordLoginInput.addEventListener("input", function () {
    passwordLength.classList.add("hidden");
    incorrectPassword.classList.add("hidden");
  });

  loginVerification.addEventListener("click", function (e) {
    e.preventDefault();

    let isEmailValid = false;
    let isPasswordValid = false;

    if (emailLoginInput.value === "") {
      invalidEmail.classList.remove("hidden");
      emailNotFound.classList.add("hidden");
    } else if (emailLoginInput.value !== "adebomiolusegun1@gmail.com") {
      emailNotFound.classList.remove("hidden");
      invalidEmail.classList.add("hidden");
    } else {
      emailNotFound.classList.add("hidden");
      invalidEmail.classList.add("hidden");
      isEmailValid = true;
    }

    if (passwordLoginInput.value === "") {
      passwordLength.classList.remove("hidden");
    } else if (passwordLoginInput.value !== "Ade.2025") {
      incorrectPassword.classList.remove("hidden");
      passwordLength.classList.add("hidden");
    } else {
      incorrectPassword.classList.add("hidden");
      passwordLength.classList.add("hidden");
      isPasswordValid = true;
    }

    if (isEmailValid && isPasswordValid) {
      window.location.href = "dashboard.html";
    }
  });
}

if (resetBtn) {
  passwordInput.addEventListener("input", function () {
    passwordLength.classList.remove("hidden");
  });

  resetBtn.addEventListener("click", function () {
    if (passwordInput.value === "") {
      emptyPassword.classList.remove("hidden");
    } else if (passwordInput.value !== passwordConfirm.value) {
      passwordMatch.classList.remove("hidden");
      passwordLength.classList.add("hidden");
    } else {
      passwordMatch.classList.add("hidden");
    }
  });
}

if (otpInputs) {
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  // const clearOtp = () => {
  //   otpInputs.forEach((input) => (input.value = ""));
  //   otpInputs[0].focus();
  // };

  // // const clearButton = document.createElement("button");
  // // clearButton.textContent = "Clear OTP";
  // // clearButton.className = "onbordingbutton mt-5";
  // // clearButton.addEventListener("click", clearOtp);
  // // document.querySelector(".pb-10").appendChild(clearButton);
}

for (let i = 0; i < faqDropdowns.length; i++) {
  faqDropdowns[i].addEventListener("click", function (e) {
    e.preventDefault();

    const faqAnswer = this.parentElement.nextElementSibling;
    const faqArrowUp = this.querySelector(".faqArrowUp");
    const faqArrowDown = this.querySelector(".faqArrowDown");

    // Hide all FAQ answers and show all arrow ups
    for (let j = 0; j < faqAnswers.length; j++) {
      if (faqAnswers[j] !== faqAnswer) {
        faqAnswers[j].classList.add("hidden");
        faqArrowsUp[j].classList.remove("hidden");
        faqArrowsDown[j].classList.add("hidden");
      }
    }

    // Toggle the current FAQ answer and arrows
    if (faqAnswer.classList.contains("hidden")) {
      faqAnswer.classList.remove("hidden");
      faqArrowUp.classList.add("hidden");
      faqArrowDown.classList.remove("hidden");
    } else {
      faqAnswer.classList.add("hidden");
      faqArrowUp.classList.remove("hidden");
      faqArrowDown.classList.add("hidden");
    }
  });
}

if (clearInput) {
  clearInput.addEventListener("click", function () {
    if (inputGetStarted) {
      inputGetStarted.value = "";
    }
  });
}
