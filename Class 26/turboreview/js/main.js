// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it

let word = ["h", "e", "l", "l", "o"];

console.log(word.join(""));

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

playGame = () => {
  let random = Math.random();
  if (random < 0.19) {
    return "rock";
  } else if (random < 0.39) {
    return "paper";
  } else if (random < 0.59) {
    return "lizard";
  } else if (random < 0.79) {
    return "spock";
  } else return "scissors";
};

console.log(playGame());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

letsPlayGame = (playerChoice) => {
  let computerChoice = playGame();
  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "lizard" && computerChoice === "scissors") ||
    (playerChoice === "spock" && computerChoice === "lizard") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    return "You lose!";
  } else if (playerChoice === computerChoice) {
    return "You tied";
  } else return "You win!";
};
