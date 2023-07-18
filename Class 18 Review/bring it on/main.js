// *Variables*
// Create a variable and console log the value

let age = 34;

console.log(age);

// Create a variable, add 10 to it, and alert the value

let num = 20;

num += 10;

alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}
subFour(50, 10, 10, 5);

// Create a function that divides one number by another and returns the remainder

function divTwo(mouse, keyboard) {
  return mouse % keyboard;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1, n2) {
  if (n1 + n2 > 100) {
    alert("Jumanji");
  }
}

addTwo(50, 51);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(n1, n2, n3) {
  product = n1 * n2 * n3;
  if (product % 3 === 0) {
    alert("Zebra!");
  }
}

multiThree(3, 3, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
