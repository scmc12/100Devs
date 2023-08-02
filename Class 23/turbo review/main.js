// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const str = "Is this the best week ever?";
console.log(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let text = "I'm looking for a jr dev position.";
let result = text.replace("jr dev", "software engineer");

console.log(result);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choiceP) {
  let choiceC = rockPaperScissors();
  if (choiceP === choiceC) {
    console.log("Tie");
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    console.log("You win");
  } else {
    console.log("You lose");
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

playGameXTimes = (arr) => {
  arr.forEach((choice) => checkWin(choice));
};

playGameXTimes(["rock", "paper", "scissors"]);
