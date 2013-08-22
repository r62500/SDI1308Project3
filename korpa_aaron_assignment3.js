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
	name:       "scratching post",
	hasCarpet:  true,
	yearsOwned: 5,
	surfaces:   ["carpet", "wood", "rope"]
};

// Flow Chart - Predefined Process: Procedure

var feedCat = function (amountOfFood) { 
	if (amountOfFood >= 2) {
		console.log("Now that she is full, my cat goes to sleep.");
	} else {
		console.log("When my cat is hungry she will bug me until she gets enough food.");
	}
};

// Flow Chart - Predefined Process: Function
var eat = function (piecesOfFood) {
	var bite = 3;
		while (piecesOfFood > 0) {
		console.log("My cat notices that there are " + piecesOfFood + 
		" bits of food in her food bowl, so she takes a bite. She can consume " + bite + " food bits each bite.");
		piecesOfFood = piecesOfFood - bite;
		};
	return 0;
};

// Flow Chart - Predefined Process: Function
var sleep = function (isItTired) {
	if (isItTired === "sleepy") {
		return tired = true;
	} else {
		return notTired = "isn't tired";
	}
};


// Flow Chart - Predefined Process: Array Function
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

// Flow Chart - Predefined Process: Function
var scratch = function (objectToScratch, isInTheHouse, isAsleep, numberOfEnergy) {
	var item = objectToScratch;
		attack = 1;
		isWithinRange = isInTheHouse;
		sleeping = isAsleep;
		interest = numberOfEnergy;
		if (isWithinRange === true) {
			if (sleeping != true) {
				while (interest > 0) {
				console.log("Chachi scratches at the " + item.name + " for five seconds.");
				interest = interest - attack;
				}
				return sharpClaws = {
					frontClaws: "sharp",
					backClaws: "dull"
					
		};
			} else {
			console.log("Chachi is too tired to do anything.");
			}
		} else {
		console.log("Chachi would probably scratch " + item + " if it were within her reach.");
		}
};	

// Flow Chart - Internal Storage: Returned Values

var remainingFood = eat();
var lowEnergyActivities;
var sharpClaws;
var tired;
var notTired;

// Flow Chart - Main code: Outputs

console.log("My name is " + characterData.characters[1].characterName + " and I have a " +
	characterData.characters[0].characterType + " named " + characterData.characters[0].characterName + 
	".");

feedCat(1);
sleep("awake");
console.log("When Chachi is hungry she " + notTired + ".");

eat(15);

console.log("My cat is no longer hungry and the food bowl now contains " + remainingFood + " pieces of food.");

sleep("sleepy");
console.log("After finishing a meal, it is " + tired + " that Chachi gets a little tired.");

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

// Flow Chart - Predefined Process: Array Function
exercise(catMotivation, catActivities);
console.log("Since my cat used all of her motivation she resumes her mellow activities such as" + lowEnergyActivities + ".");
console.log("Chachi wakes up from a nap with a sudden burst of energy.");

// Flow Chart - Predefined Process: Function
scratch(scratchingPost, true, false, 5);
console.log("All of this scratching has given Chachi " + sharpClaws.frontClaws + "claws.");
console.log("I guess it is time for Chachi to go visit " + characterData.characters[2].characterName +
	" the local " + characterData.characters[2].characterOccupation + " to get her claws clipped.");

// Flow Chart - End Terminator