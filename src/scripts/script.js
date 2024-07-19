"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const redBorder = document.getElementById("borderRed");
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
const getStartedIcon = document.getElementById("gettingStartedDropdownIcon");
const getStartedDropdown = document.getElementById("gettingStartedDropdown");
const menuItem = document.querySelectorAll(".menu-item");
const gettingStartedInput = document.getElementById("gettingStartedInput");
const resetBtn = document.querySelector(".resetBtn");
const passwordMatch = document.querySelector(".passwordMatch");
const passwordConfirm = document.querySelector(".passwordConfirm");
const faqDropdown = document.querySelector(".faqDropdown");
const faqAnswer = document.querySelector(".faqAnswer");

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

const openDropDown = () => {
  getStartedDropdown.classList.toggle("hidden");
};

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
    if (emailInput.value === "") {
      emptyEmail.classList.add("hidden");
    }
  });
  authenticationBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let hasError = false;

    if (emailInput.value.length === 0) {
      emptyEmail.classList.remove("hidden");
      invalidEmail.classList.add("hidden");

      hasError = true;
    } else {
      emptyEmail.classList.add("hidden");
    }

    if (passwordInput.value.length === 0) {
      emptyPassword.classList.remove("hidden");
      passwordLength.classList.add("hidden");
      hasError = true;
    } else {
      emptyPassword.classList.add("hidden");
    }

    if (hasError) {
      e.preventDefault();
    }
  });
}
if (emailInput && invalidEmail && emptyEmail) {
  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
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
  const passValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,}$/;

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
    if (hideRadio.classList.contains("bg-white")) {
      hideRadio.classList.remove("bg-white");
      hideRadio.classList.add("bg-blue-600");
    } else {
      hideRadio.classList.remove("bg-blue-600");
      hideRadio.classList.add("bg-white");
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
    if (emailLoginInput.value === "") {
      invalidEmail.classList.remove("hidden");
      emailNotFound.classList.add("hidden");
    } else if (emailLoginInput.value !== "onyekamgbikeh@yahoo.com") {
      emailNotFound.classList.remove("hidden");
      invalidEmail.classList.add("hidden");
    } else {
      emailNotFound.classList.add("hidden");
      invalidEmail.classList.add("hidden");
    }

    if (passwordLoginInput.value === "") {
      passwordLength.classList.remove("hidden");
    } else if (passwordLoginInput.value !== "Ade.2021") {
      incorrectPassword.classList.remove("hidden");
      passwordLength.classList.add("hidden");
    } else {
      incorrectPassword.classList.add("hidden");
      passwordLength.classList.add("hidden");
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

if (faqAnswer && faqDropdown) {
  faqDropdown.addEventListener("click", function (e) {
    e.preventDefault();
    faqAnswer.classList.toggle("hidden");
  });
}
