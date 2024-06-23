"use strict";

const mainMenu = document.getElementById("article");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
// const verifyBtn = document.getElementById("verify");
// const inputFields = document.querySelectorAll(".verificationinput");

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

// const correctCode = 123456;

// verifyBtn.addEventListener("click", function () {
//   let enteredCode = "";

//   inputFields.forEach((input) => {
//     enteredCode += input.value;
//   });

//   if (enteredCode !== correctCode) {
//     inputFields.forEach((input) => {
//       input.classList.add("verification-failed");
//     });
//   } else {
//     inputFields.forEach((input) => {
//       input.classList.remove("verification-failed");
//     });
//   }
// });
