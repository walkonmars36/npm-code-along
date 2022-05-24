import "./style.scss";

// NAMED IMPORT - CONFETTI -> BRINGING THE PACKAGE INTO OUR PROJECT

import confetti from "canvas-confetti";
import ColorThief, {getPalette} from "colorthief";

const fireBtn = document.querySelector(".fire-confetti");
const dogImg = document.querySelector("#dog-image");
const colorThief = new ColorThief();
const body = document.querySelector("body");
const inputBox = document.getElementById("image-input");
const form = document.querySelector("form");

//  IF IMAGE HAS LOADED GET THE COLOR
// ELSE SET AN EVENT LISTENER ONCE IT HAS LOADED
if (dogImg.complete) {
  const color = colorThief.getColor(dogImg);
  //   console.log(color);
  //  reference the rgb values returned in the array ie [21,125,166]
  body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
} else {
  dogImg.addEventListener("load", () => {
    const color = colorThief.getColor(dogImg);
    // console.log(color);
  });
}

// console.log(dogImg);

// call the function

const urlBox = document.getElementById("input-box");

const fireConfetti = (palette) => {
  confetti();
};

let url = "";
let palette = [];

const getURL = (event) => {
  event.preventDefault();
  console.log(event);
  url = event.target[0].value;
  console.log(url);
  dogImg.src = url;

  palette = ColorThief.getPalette(dogImg);
  fireConfetti(palette);
};

fireBtn.addEventListener("click", fireConfetti);
inputBox.addEventListener("submit", getURL);
