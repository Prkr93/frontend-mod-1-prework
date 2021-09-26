/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {}
var husky = new dog;
var dachshund = new dog;
console.log(husky);
console.log(dachshund);

// Prompt 2: Snack
class Snack {}
var chips = new snack;
var granola = new snack;
console.log(chips);
console.log(granola);

// Prompt 3: Shirt
class Shirt {}
var tshirt = new shirt;
var sweater = new shirt;
console.log(tshirt);
console.log(sweater);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  constructor(){
    this.name = "Frankie",
    this.breed = "Dachshund",
    this.age = 10
  }
}
var frankie = new dog2;
console.log(frankie);

// Prompt 2: Snack
class Snack2 {
  constructor(){
    this.name = "chips",
    this.calories = 120,
    this.gramsOfFat = 2
  }
}
var chips = new snack2;
console.log(chips);

// Prompt 3: Shirt
class Shirt2 {
  constructor(){
    this.color = "blue",
    this.favorite = true,
    this.type = "tshirt"
  }
}
var tshirt = new shirt2;
console.log(tshirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}
var pooch = new dog3("Frankie", "Dachshund", 10);
console.log(pooch);

// Prompt 2: Snack
class Snack3 {
  constructor(name, cal, fat){
    this.name = name;
    this.calories = cal;
    this.gramsOfFat = fat;
  }
}
var pretzels = new snack3("pretzels", 80, 6);
console.log(pretzels);

// Prompt 3: Shirt
class Shirt3 {
  constructor(color, fav, type){
    this.color = color;
    this.favorite = fav;
    this.type = type;
  }
}
var sweater = new shirt3("red", true, "sweater");
console.log(sweater);
