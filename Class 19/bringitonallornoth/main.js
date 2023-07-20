// *Variables*
// Declare a variable, assign it a boolean, and alert the value

// let haveADuck = true;
// alert(haveADuck);

// Declare a variable, reassign it to your favorite color, and console log the value

let favoriteColor = "red";
favoriteColor = "blue";

console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function takeInFour(n1, n2, n3, n4) {
  return (answer = (n1 * n2 * n3) / n4);
}
takeInFour(3, 6, 2, 2);
console.log(answer);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function morePower(n1, n2) {
  console.log(Math.pow(n1, n2));
}
morePower(2, 4);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

const alertOrLog = (bool, str) => (bool ? alert(str) : console.log(str));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(30);
