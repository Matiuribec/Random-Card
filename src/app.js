/* eslint-disable */
import css from "./style.css";

window.onload = function() {
  generarCarta();
  document.getElementById("carta").style.display = "block";
};
function generarCarta() {
  let suitArray = ["♦", "♥", "♠", "♣"];
  let randFig = Math.floor(Math.random() * 4);
  let figure = suitArray[randFig];
  let color = randFig;
  if (color >= 2) {
    color = "black";
  } else {
    color = "red";
  }

  let rand = Math.floor(Math.random() * 12) + 1;
  switch (rand) {
    case 1:
      rand = "A";
      break;
    case 11:
      rand = "J";
      break;

    case 12:
      rand = "Q";
      break;
    case 13:
      rand = "K";
      break;
  }
  console.log(`Cart: ${figure} | Color: ${color} | Value: ${rand}`);
  document.getElementById("top").style.color = color;
  document.getElementById("top").innerHTML = figure;
  document.getElementById("bottom").innerHTML = figure;
  document.getElementById("bottom").style.color = color;
  document.getElementById("value").innerHTML = rand;
  document.getElementById("value").style.color = color;
}
