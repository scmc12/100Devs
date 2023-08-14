//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [42, 19, 77, 33, 57];

let sum = nums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

nums = [2, 3, 4, 5];

let newArray = (nums) => nums.map((num) => num ** 2);

console.log(newArray(nums));

//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = (str) => str.split("").reverse().join("");

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = (str) =>
  alert(str === str.split("").reverse().join(""));

palindromeCheck("racecar");
