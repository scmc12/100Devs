// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Christmas";
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "Holiday";
console.log(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subOneHundred(n1, n2, n3, n4, n5) {
  alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
}
subOneHundred(25, 44, 62, 12, 15);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function highAndLow(n1, n2, n3) {
  let min = Math.min(n1, n2, n3);
  let max = Math.max(n1, n2, n3);
  console.log(`The highest number is ${max} and the lowest number is ${min}`);
}
highAndLow(44, 23, 99);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsOrTails() {
//   let result = Math.random();
//   if (result < 0.5) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// }

const headsOrTails = (_) => (Math.random < 0.5 ? "heads" : "tails");

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function takeInNum(n) {
  for (let i = 1; i <= n; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}
takeInNum(10);
