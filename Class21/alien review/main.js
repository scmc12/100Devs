//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["Sopranos", "Breaking Bad", "The Wire"];

tvShows.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let myNumbers = [1, 2, 3, 4, 5, 6];

let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEvens(myNumbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumOfSecondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b);
  alert(sorted[1] + sorted[arr.length - 2]);
}

sumOfSecondLowAndHigh([2, 3, 1, 5, 4]);
