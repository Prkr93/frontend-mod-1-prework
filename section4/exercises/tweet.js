/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike(){
    this.numberOfLikes++;
    return this;
  }
  addComment(comment){
    this.comments.push(comment);
    return this;
  }
};

var tweet1 = new Tweet(
  "Dillon",
  "Hello World!",
  Date.now(),
  14,
  ["Hello Dillon", "Howdy!"]
);


console.log(tweet1);
tweet1.addLike();
console.log(tweet1);
tweet1.addComment("This is so cool!");
console.log(tweet1);

var tweet2 = new Tweet(
  "John",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  Date.now(),
  0,
  ["This isn't so fancy..."]
);

console.log(tweet2);
tweet2.addLike().addLike().addLike().addComment("This is pretty fancy, though").addComment("Definitely fancy!");
console.log(tweet2);
