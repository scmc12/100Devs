//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [42, 19, 77, 33, 57];

let sum = nums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArray = (nums) => nums.map((num) => num ** 2);

//Create a function that takes string
//Print the reverse of that string to the console

let str = "went to the store yesterday";

myString = (str) => {
  return str.split("").reverse().join("");
};

console.log(myString(str));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
