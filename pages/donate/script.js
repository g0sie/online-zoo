"use strict";

let radios = document.querySelectorAll("button.radio");
let clickedRadio = document.getElementById("clicked");
console.log(radios);

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    clickedRadio.id = null;
    radio.id = "clicked";
    clickedRadio = radio;
  });
});
