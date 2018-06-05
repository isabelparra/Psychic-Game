 // possible computer choices
var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
// variables for tracking wins, losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// input displayed by user
var currentTries = [];
var computerGuess = [];

// this function is run whenever the user presses a key
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase(); // taking in user input
    var computerGuess = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]; //computer selects letter
    currentTries.push(userInput); // pushing user guess to current tries

    if ((userInput === computerGuess) && (guessesLeft > 0)) {
    wins++;
    alert('You guessed correctly!');
    guessesLeft= 9; // resets guesses back to 9
    currentTries.length = 0; // removes everything from current tries array for new round

 } else if ((userInput !== computerGuess) && (guessesLeft > 0)) {
    guessesLeft--;
  }
  else if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    currentTries.length = 0;
    console.log(computerGuess[0]);
 }


var html = "<p>Guess  what letter I'm thinking of</p>" +
"<div class='scoreboard' id='wins'>Wins: " + wins + "</div><br>" +
"<div class='scoreboard' id='losses'>Losses: " + losses + "</div><br>" +
"<div class='scoreboard' id='guessesLeft'>Guesses Left: " + guessesLeft + "</div><br>" +
"<div class='scoreboard' id='currentTries'>Your Guesses So Far: " + currentTries + "</div><br>";

document.querySelector("#game").innerHTML = html;

}
