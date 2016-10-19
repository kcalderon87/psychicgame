//Computer choices
var compChoices = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerPicks = compChoices[Math.floor(Math.random() * compChoices.length)];

var yourGuessesLeft = function() {
	document.querySelector('#guessRemaining').innerHTML = "Guesses Left: " + guessRemaining;
};

//user can have 9 guesses

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
  updatedGuess();
  soFarGuessesLeft();
  GuessesSoFar();
};

var soFarGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updatedGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var GuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('losses').innerHTML = "Losses: " + losses;
        }
};