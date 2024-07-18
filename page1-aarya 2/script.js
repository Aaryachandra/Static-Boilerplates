let x = document.getElementById("mainsvg").querySelectorAll("g");
console.log(x);

let firstElement = x[0];
let secondElement = x.item(8);
let thirdElement = x.item(15);
let fourthElement = x.item(21);
let fifthElement = x.item(28);
let sixthElement = x.item(35);

function opacity() {
  firstElement.style.opacity = "0";
  secondElement.style.opacity = "0";
  thirdElement.style.opacity = "0";
  fourthElement.style.opacity = "0";
  fifthElement.style.opacity = "0";
  sixthElement.style.opacity = "0";
}

function rotateSVG() {
  opacity();
  firstElement.style.opacity = "1";
  firstElement.style.transform = "rotate(0deg)";

  secondElement.style.transform = "rotate(60deg)";

  thirdElement.style.transform = "rotate(120deg)";

  fourthElement.style.transform = "rotate(180deg)";

  fifthElement.style.transform = "rotate(240deg)";

  sixthElement.style.transform = "rotate(360deg)";
}

function rotateSVG1() {
  opacity();
  secondElement.style.opacity = "1";
  firstElement.style.transform = "rotate(-60deg)";

  secondElement.style.transform = "rotate(0deg)";

  thirdElement.style.transform = "rotate(60deg)";

  fourthElement.style.transform = "rotate(120deg)";

  fifthElement.style.transform = "rotate(180deg)";

  sixthElement.style.transform = "rotate(240deg)";
}

function rotateSVG2() {
  opacity();
  thirdElement.style.opacity = "1";
  firstElement.style.transform = "rotate(-120deg)";

  secondElement.style.transform = "rotate(-60deg)";

  thirdElement.style.transform = "rotate(0deg)";

  fourthElement.style.transform = "rotate(60deg)";

  fifthElement.style.transform = "rotate(120deg)";

  sixthElement.style.transform = "rotate(180deg)";
}

function rotateSVG3() {
  opacity();
  fourthElement.style.opacity = "1";
  firstElement.style.transform = "rotate(-180deg)";

  secondElement.style.transform = "rotate(-120deg)";

  thirdElement.style.transform = "rotate(-60deg)";

  fourthElement.style.transform = "rotate(0deg)";

  fifthElement.style.transform = "rotate(60deg)";

  sixthElement.style.transform = "rotate(120deg)";
}

function rotateSVG4() {
  opacity();
  fifthElement.style.opacity = "1";
  firstElement.style.transform = "rotate(-240deg)";

  secondElement.style.transform = "rotate(-180deg)";

  thirdElement.style.transform = "rotate(-120deg)";

  fourthElement.style.transform = "rotate(-60deg)";

  fifthElement.style.transform = "rotate(0deg)";

  sixthElement.style.transform = "rotate(60deg)";
}

function rotateSVG5() {
  opacity();
  sixthElement.style.opacity = "1";
  firstElement.style.transform = "rotate(-300deg)";

  secondElement.style.transform = "rotate(-240deg)";

  thirdElement.style.transform = "rotate(-180deg)";

  fourthElement.style.transform = "rotate(-120deg)";

  fifthElement.style.transform = "rotate(-60deg)";

  sixthElement.style.transform = "rotate(0deg)";
}
