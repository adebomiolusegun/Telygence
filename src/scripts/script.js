"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const showPassword = document.getElementById("showPassword");
const hidePassword = document.getElementById("hidePassword");
const getStartedIcon = document.getElementById("gettingStartedDropdownIcon");
const getStartedDropdown = document.getElementById("gettingStartedDropdown");
const menuItem = document.querySelectorAll("meunitem");
const gettingStartedInput = document.getElementById("gettingStartedInput");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  mainMenu.classList.add("hidden");
  menuBtn.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  closeMenu.classList.add("hidden");
  mainMenu.classList.remove("hidden");
  menuBtn.classList.remove("hidden");
});

showPassword.addEventListener("click", function () {
  hidePassword.classList.remove("hidden");
  showPassword.classList.add("hidden");
});

hidePassword.addEventListener("click", function () {
  hidePassword.classList.add("hidden");
  showPassword.classList.remove("hidden");
});
