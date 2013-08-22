// alert("JavaScript works!");

// Aaron Korpa
// SDI 1308
// Project 3
// Theme: My cat's life (same theme as project 2, but partially new story)

// Flow Chart - Start Terminator

// Flow Chart - Internal Storage: Global Variables

// Flow Chart - Method: Procedure

var feedCat = function (amountOfFood) { 
	if (amountOfFood >= 2) {
		console.log("After eating, my cat goes to sleep.");
	} else {
		console.log("When my cat is hungry she will bug me until she gets enough food.");
	}
};

// Flow Chart - Method: Function
var eat = function (piecesOfFood) {
	var bite = 3,
		foodBowl;
		while (piecesOfFood > 0) {
		console.log("My cat notices that there are " + piecesOfFood + 
		" bits of food in her food bowl, so she takes a bite. She can consume " + bite + " food bits each bite.");
		piecesOfFood = piecesOfFood - bite;
		};
	foodBowl = 0;
	return foodBowl;
};

// Flow Chart - Method: Accessor

// Flow Chart - Method: Mutator

// Flow Chart - Internal Storage: Returned Values

var remainingFood = eat();

// Flow Chart - Main code: Outputs

console.log("My name is " + characterData.characters[1].characterName + " and I have a " +
	characterData.characters[0].characterType + " named " + characterData.characters[0].characterName + 
	".");

feedCat(1);
eat(15);
console.log("My cat is no longer hungry and the food bowl now contains " + remainingFood + " pieces of food.");
feedCat(3);

// Flow Chart - End Terminator