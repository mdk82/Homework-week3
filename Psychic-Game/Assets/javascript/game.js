
// Get users guess with keyup event
// Get computer guess using random from array
// Compair user guess to computer guess to see if match
// Determine how many guesses user gets
// If match increment wins by 1 and restart game without refresh
// If guesses are up increment losses by 1 and restart game
// Determine how many guesses the user has left and decrement by 1
// Display the user guesses 


var wins = 0;
var losses = 0;
var guesses = 9;
var lettersguessed = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var computerGuess = letters[Math.floor(Math.random() * letters.length)];
	

document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guesses--
		lettersguessed.push(userGuess);
		console.log(lettersguessed);
		
			if (userGuess == computerGuess) {
				wins++
				guesses = 9;
				lettersguessed = [];
				computerGuess = letters[Math.floor(Math.random() * letters.length)];
			}
			if (guesses == 0) {
				losses++
				guesses = 9;
				lettersguessed = [];
				computerGuess = letters[Math.floor(Math.random() * letters.length)];
			} else {

			}
			console.log(computerGuess);

		
	console.log(userGuess);
	console.log(wins);
	console.log(losses);
	console.log(guesses);

	var w = "<p> Wins: " + wins + "</p>"
	var l = "<p> Losses: " + losses + "</p>"
	var g = "<p> Guesses Left: " + guesses + "</p>"
	var gl = "<p> : Letters Guessed:  " + lettersguessed + "</p>"

	document.querySelector("#wins").innerHTML = w;
	document.querySelector("#losses").innerHTML = l;
	document.querySelector("#guesses").innerHTML = g;
	document.querySelector("#guessesleft").innerHTML = gl;

};


