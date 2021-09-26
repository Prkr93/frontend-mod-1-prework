// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Captain America";
var specialAbility = "super strength";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello " + heroName;
var catchphrase = `Fear my ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers
var power = 50;
var energy = 75;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 50;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Adolf Hitler", "Red Skull", "Baron Zemo"];
var sidekicks = ["Bucky", "Falcon", "Demolition Man"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Crossbones");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel


// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if(dangerLevel > 50) {
    console.log(badExcuse);
  } else if(dangerLevel > 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
assessSituation(99, announcement, excuse)//> Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse)//> should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse)//> should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Frankenstein",
  smell: "rotten",
  weight: 300,
  citiesDestroyed: ["Naples"],
  luckyNumbers: [1, 3, 5],
  address: {
    number: 1800,
    street: "Frankenstein St",
    state: "North Dakota",
    zip: 58103
  }
}


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
  }
  gainPower(powerMultiplier){
    this.powerLevel = this.powerLevel * powerMultiplier;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var superman = new SuperHero("Superman", "heat vision", 30);
var wolverine = new SuperHero("Logan", "quick healing", 750)
console.log(superman);
superman.sayName();
superman.maximizeEnergy();
superman.gainPower(3);
console.log(superman);

// Reflection
// What parts were most difficult about this exerise?
// Just remembering all of the syntax for each different thing, but it's becomming more familiar again.
// Also got stuck on if I could put an object inside of an object, but I figured it out pretty quickly with a google search.

// What parts felt most comfortable to you?
// At this point, all of it feels comfortable again. I throw an error every now and then, sure, but I've had to look up very few things so far.

// What skills do you need to continue to practice before starting Mod 1?
// I feel like the subject in mod 0 that I've had the least exposure to and am least comfortable with is GitHub.
//I'll probably spend some time looking into best practices and finding more interesting databases to help develop my programming skills.
