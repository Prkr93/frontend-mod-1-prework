// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Define a function called "buildABear", taking 5 arguments
function buildABear(name, age, fur, clothes, specialPower) {
  //Define a string variable "greeting" for a unique greeting for your bear
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Define name and age in a "demographics" array
  var demographics = [name, age];
  //Define a "powerSaying", a saying for your bear to tell you their special power
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Define an object for a "builtBear"
  var builtBear = {
    //Set basicInfo to the demographics array
    basicInfo: demographics,
    //Set clothes to the passed clothes argument
    clothes: clothes,
    //Set exterior to the passed fur argument
    exterior: fur,
    //Hard set the cost for the bear to 49.99
    cost: 49.99,
    //Define sayings for the bear, including a dynamic greeting and powerSaying, and a default goodnight
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //Hard set isCuddly to true
    isCuddly: true,
  };
  //returns the built bear to the function
  return builtBear
}
//Runs the buildABear function to create a bear, passing in the arguments to create it
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Runs the buildABear function to create a second bear
console.log(buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'));



//FizzBuzz
//Define function fizzBuzz that takes 3 arguments
function fizzBuzz(num1, num2, range) {
  //Start a loop, starting at 0, incrementing by one each time, and going until i is less than or equal to the passed range
  for (var i = 0; i <= range; i++) {
    //If statement that determines if both passed numbers can be divided into i without any remainder
    if (i % num1 === 0 && i % num2 === 0) {
      //If true, logs "fizzbuzz"
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {
      //Preceding else if determines if i mod num1 is 0, then prints "fizz" below
      console.log('fizz');
    } else if (i % num2 === 0) {
      //Preceding else if statement determines if i mod num2 is 0, then prints "buzz" below
      console.log('buzz');
    } else {
      //If no number can be divided into i evenly, program will log the value of i
      console.log(i);
    }
  }
}

//Runs the function fizzBuzz, passing 3 and 5 as num1 and num2 respectively, and going from 0 -> 100 (the passed range)
fizzBuzz(3, 5, 100);
//Runs the function fizzBuzz, passing 5 and 8 as num1 and num2 respectively, and going from 0 -> 400 (the passed range)
fizzBuzz(5, 8, 400); // changed function from fizzBuzz, as I assumed it was a typo
