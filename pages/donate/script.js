"use strict";

let radios = document.querySelectorAll("button.radio");
let clickedRadio = document.getElementById("clicked");
let dietsNumber = document.getElementById("diets-number");
let dollars;

setDiets();

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    clickedRadio.id = null;
    radio.id = "clicked";
    clickedRadio = radio;
    setDiets();
  });
});

function getDollars() {
  return +clickedRadio.classList[1].substring(3);
}

function countDiets(dollars) {
  return dollars / 250;
}

function setDiets() {
  dollars = getDollars(clickedRadio);
  dietsNumber.innerHTML = countDiets(dollars);
}
