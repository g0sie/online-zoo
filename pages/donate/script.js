"use strict";

let radios = document.querySelectorAll("button.radio");
let clickedRadio = document.getElementById("clicked");
let dietsNumber = document.getElementById("diets-number");
let dollars;

clickRadioDependingOnWidth();
setNumberOfDiets();

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    clickRadio(radio);
    setNumberOfDiets();
  });
});

window.addEventListener("resize", () => {
  clickRadioDependingOnWidth();
});

function getDollars() {
  return +clickedRadio.classList[1].substring(3);
}

function countDiets(dollars) {
  return dollars / 250;
}

function setNumberOfDiets() {
  dollars = getDollars(clickedRadio);
  dietsNumber.innerHTML = countDiets(dollars);
}

function clickRadio(radio) {
  clickedRadio.id = null;
  radio.id = "clicked";
  clickedRadio = radio;
}

function clickRadioDependingOnWidth() {
  if (window.innerWidth <= 850) {
    clickRadio(document.querySelector(".radio.dol100"));
  }
}
