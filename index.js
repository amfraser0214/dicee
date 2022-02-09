var roll = Math.ceil(Math.random() * 6);
console.log(roll)
var roll2 = Math.ceil(Math.random() * 6);
console.log(roll2);

var player1dice = "images/dice" + roll + ".png";
var player2dice = "images/dice" + roll2 + ".png";

function diceRoll() {
    document.querySelector("#dice1").src = player1dice;
    document.querySelector("#dice2").src = player2dice;
};

function winnerWinnerChickenDinner(){
  if (roll > roll2) {
    document.querySelector("#winner").innerHTML = "Player 1 Wins!";
  } else if (roll < roll2) {
    document.querySelector("#winner").innerHTML = "Player 2 Wins!";
  } else if (roll === roll2) {
    document.querySelector("#winner").innerHTML = "It's a Tie!";
  }
}
