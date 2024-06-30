"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
// const showPassword = document.getElementById("showPassword");
// const hidePassword = document.getElementById("hidePassword");
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

menuItem.forEach((items) => {
  items.addEventListener("click", () => {
    gettingStartedInput.value = items.textContent;
    getStartedDropdown.classList.add("hidden");
  });
});

// showPassword.addEventListener("click", function () {
//   hidePassword.classList.remove("hidden");
//   showPassword.classList.add("hidden");
// });

// hidePassword.addEventListener("click", function () {
//   hidePassword.classList.add("hidden");
//   showPassword.classList.remove("hidden");
// });
