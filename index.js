var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", "./images/" + randomDiceImage);

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", "./images/" + randomDiceImage2);

heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerText = "Player 1 Wins";
}

if (randomNumber1 < randomNumber2) {
  heading.innerText = "Player 2 Wins";
}

if (randomNumber1 === randomNumber2) {
  heading.innerText = "Draw";
}
