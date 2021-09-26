## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

  I feel like using the pomodoro technique was definitely effective. I appreciated the scheduled and forced breaks, as it let me think about the problem but get some movement and fidget time.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

  I actually estimated time pretty well, even though I should have given myself a bit more time. I felt a lot more focused and productive during my work times while doing it, but I found myself getting distracted around the 20 minute mark. Setting my timer shorter to be 20 and 5 minutes instead worked better for me.

1. What is an Object, and how is it different from an Array in Javascript?

  An object and array are similar. An array is a simplistic version of an object, in that it stores a collection of items, but those items are only accessible by their index. An object allows for the items in the list to be accessed by a string. In this way, we can create Literal Objects. We can also create Classes to rapidly create objects of similar type. Objects are used to create detailed arrays with key/value pairs, which can easily be used to compare objects.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - array, if you're just listing the students' names. You could use objects for each "student" to store information about them.
  * List of states and their capitals - since it's simple enough, I would just create an array of strings, each string including both state and capital. I feel like there isn't enough information to store it in a "state" object, unless you're planning on adding more details for each state, like population, land area, elevation, etc.
  * List of things to pack for vacation - it would just be a simple list of items, so an array would work fine.
  * Names of all the Instagram accounts I follow - array. You're just creating a list of strings, so an array would be fine.
  * List of student names and their cohort - this is a similar one to the states and capitals. If the intention is to just create a simple list of name/cohort, I think it would be easier to use an array and just parse it for functions. If storing more information, an object could be appropriate.
  * Ingredients and amount of each ingredient to bake a cake - I would create a cake object with a listOfIngredients and a corresponding ingredientAmount. In functions to add/remove an ingredient, you could just required both variables to be passed.
  * All my favorite restaurants - just a list of strings, so an array.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

  Another example Object in a web app would be a Facebook singular blog post. Example key=>value pairs could be:
  +name => "John"
  +content => "Lorem Ipsum"
  +photos => ["<img src="example.com">"]
  +numberOfLikes => 1

1. What questions do you still have about classes and/or Objects?
  I guess I'm having trouble distinguishing when to use an array vs an object, as both *could* be used depending on the circumstance. Without knowing the exact situation and goal, how do you decide which to use?
