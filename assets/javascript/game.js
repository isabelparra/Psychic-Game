 // possible computer choices
var possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
// variables for tracking wins, losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// input displayed by user
var currentTries = [];
var computerGuess = [];

window.onload = function() {
    var compGuess = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    computerGuess.push(compGuess);
    console.log('Computer chose ' + computerGuess[0]);
    return computerGuess;
}

// this function is run whenever the user presses a key
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    currentTries.push(userInput);
    console.log(userInput);

if ((userInput === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    alert('You guessed correctly!');
    guessesLeft= 9;
    var compGuess = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    computerGuess.push(compGuess);
 } else {
    guessesLeft--;

    if (guessesLeft < 1) {
        losses++;
        guessesLeft = 9;
        updateScore();
        currentTries = "";
    }
 }

var html = "<p>Guess  what letter I'm thinking of</p>" +
"<div class='scoreboard' id='wins'>Wins: " + wins + "</div><br>" +
"<div class='scoreboard' id='losses'>Losses: " + losses + "</div><br>" +
"<div class='scoreboard' id='guessesLeft'>Guesses Left: " + guessesLeft + "</div><br>" +
"<div class='scoreboard' id='currentTries'>Your Guesses So Far: " + currentTries + "</div><br>";

document.querySelector("#game").innerHTML = html;

}
