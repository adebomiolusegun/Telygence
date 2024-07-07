"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const passwordInput = document.getElementById("passwordInput");
const redBorder = document.getElementById("borderRed");
const emailInput = document.getElementById("emailInput");
const emptyEmail = document.getElementById("emptyEmail");
const emptyPassword = document.getElementById("emptyPassword");
const invalidEmail = document.getElementById("invalidEmail");
const authenticationBtn = document.getElementById("authenticationBtn");
const togglePassword = document.getElementById("togglePassword");
const showIcon = document.getElementById("showIcon");
const hideIcon = document.getElementById("hideIcon");
const passwordLength = document.getElementById("passwordLength");
const passwordInstruction = document.getAnimations("passwordInstruction");
const getStartedIcon = document.getElementById("gettingStartedDropdownIcon");
const getStartedDropdown = document.getElementById("gettingStartedDropdown");
const menuItem = document.querySelectorAll(".menu-item");
const gettingStartedInput = document.getElementById("gettingStartedInput");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
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
      passwordInstruction.classList.remove("hidden");
    } else {
      passwordInput.type = "password";
      hideIcon.classList.add("hidden");
      showIcon.classList.remove("hidden");
    }
  });
}

if (emailInput && passwordInput) {
  authenticationBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
      emptyEmail.classList.remove("hidden");
      emptyPassword.classList.remove("hidden");
    }
  });
}

if (emailInput && invalidEmail) {
  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailInput.addEventListener("input", function () {
    if (!emailValidation.test(emailInput.value)) {
      invalidEmail.classList.remove("hidden");
      emptyEmail.classList.add("hidden");
    } else {
      invalidEmail.classList.add("hidden");
    }
  });
}

if (passwordInput) {
  const passValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  passwordInput.addEventListener("input", function () {
    if (!passValidation.test(passwordInput.value)) {
      passwordLength.classList.remove("hidden");
      emptyPassword.classList.add("hidden");
    } else {
      passwordLength.classList.add("hidden");
    }
  });
}
