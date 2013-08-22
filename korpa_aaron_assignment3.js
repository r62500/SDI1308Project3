// alert("JavaScript works!");

// Aaron Korpa
// SDI 1308
// Project 3
// Theme: My cat's life (same theme as project 2, but partially new story)

// Flow Chart - Start Terminator

// Flow Chart - Internal Storage: Global Variables
var catMotivation = 2;
var catActivities = [" eating", " sleeping", " scratching the scratching post", " using the litter box",  " staring at the wall"];
var litterbox = {
	"litter":   {
		brand:        "\"Fresh Step\"",
		amountPerBox: "14 Pounds",
		price:        "10 Dollars"
	},
	"currentStatus": "clean",
	//Method: Accessor
	"checkStatus": function () {
		console.log("The litterbox is currently " + litterbox.currentStatus + ".");
	},
	//Method: Mutators
	"useLitterbox": function () {
		litterbox.currentStatus = "dirty"
	},
	"cleanLitterbox": function () {
		litterbox.currentStatus = "clean"
	}
};

var scratchingPost = {
	hasCarpet:  true,
	yearsOwned: 5,
	surfaces:   ["carpet", "wood", "rope"]
};

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
	var bite = 3;
		while (piecesOfFood > 0) {
		console.log("My cat notices that there are " + piecesOfFood + 
		" bits of food in her food bowl, so she takes a bite. She can consume " + bite + " food bits each bite.");
		piecesOfFood = piecesOfFood - bite;
		};
	return 0;
};

// Flow chart - Method: Array Function
var exercise = function (energyLevel, thingsToDo) {
	var activities = thingsToDo.length;
		lowEnergyActivities = thingsToDo;
	for (var i = energyLevel; i < activities; i = i + 1) {
		console.log("My cat has some motivation so she is going to begin" + thingsToDo[i] + ".");
	};
	lowEnergyActivities.pop();
	lowEnergyActivities.pop();
	lowEnergyActivities.pop();	
	return lowEnergyActivities;
};

// Flow Chart - Internal Storage: Returned Values

var remainingFood = eat();
var lowEnergyActivities;

// Flow Chart - Main code: Outputs

console.log("My name is " + characterData.characters[1].characterName + " and I have a " +
	characterData.characters[0].characterType + " named " + characterData.characters[0].characterName + 
	".");

feedCat(1);

eat(15);

console.log("My cat is no longer hungry and the food bowl now contains " + remainingFood + " pieces of food.");

feedCat(3);

console.log(characterData.characters[1].characterName + " checks to see if the litterbox is clean or dirty.");

// Flow Chart - Method: Accessor
litterbox.checkStatus();

console.log(characterData.characters[0].characterName + " wakes up and uses the litterbox.");

// Flow Chart - Method: Mutator
litterbox.useLitterbox();

console.log(characterData.characters[1].characterName + " notices an unpleasant scent and checks the litterbox again.");

// Flow Chart - Method: Accessor
litterbox.checkStatus();

console.log("Annoyed at the situation " + characterData.characters[1].characterName + " cleans the litterbox.");

// Flow Chart - Method: Mutator
litterbox.cleanLitterbox();

// Flow Chart - Method: Array Function
exercise(catMotivation, catActivities);
console.log("Since my cat used all of her motivation she resumes her mellow activities such as" + lowEnergyActivities + ".");
// Flow Chart - End Terminator