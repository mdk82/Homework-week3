// Global Variables
// ================================================================

var words = ["sword", "shield", "blade"];

var random = Math.floor(Math.random() * words.length);
var wordChoice = words[random].toLowerCase();
	//test
	console.log(wordChoice);

var underScore = [];
var correctWord = [];
var wrongWord = [];


// DOM Manipulation
var pushUnderScore = document.getElementsByClassName("displayletters");
var pushCorrectWord = document.getElementsByClassName("correctguess");
var pushWrongWord = document.getElementsByClassName("wrongguess"); 

// Main Game
// ================================================================

// Create display of letter based on length of word.
var makeUnderScores = function() {
	for (var i = 0; i < wordChoice.length; i++) {
		underScore.push("_");
	}
	return underScore;
	pushUnderScore[0].innerHTML = makeUnderScores().join(" ");
}
	// Test
	 console.log(underScore);

// Get users guess
document.onkeyup = function (event) { 
	var letterChoice = String.fromCharCode(event.keyCode).toLowerCase();
		// test
		//console.log(letterChoice);
	
	// Check if user letter guess matches letter within the word.
	if (wordChoice.indexOf(letterChoice) > -1) {

		correctWord.push(letterChoice);
		//test
		//console.log(correctWord);
		underScore[wordChoice.indexOf(letterChoice)] = letterChoice;
		pushUnderScore[0].innerHTML = underScore.join(" ");
		
	// if right push to correctGuess
	if (underScore.join("") == wordChoice) {
		alert("You Win");
	}
	// if wrong push to wrongGuess
	} else {
		wrongWord.push(letterChoice);
		console.log(wrongWord);
	}
};

