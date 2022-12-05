"use strict";

const header = document.querySelector("header");
const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", () => {
  header.classList.toggle("opened");
});
