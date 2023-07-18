// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

// let numArray = [20, 10, 20];

// function isMyArrayBig() {
//   if (numArray[0] < numArray[2]) {
//     alert("Hi");
//   } else if (numArray[0] > numArray[2]) {
//     alert("Bye");
//   } else {
//     alert("We close in an hour");
//   }
// }

// isMyArrayBig();

function checkFirstAndLast(arr) {
  if (arr[0] < arr[arr.length - 1]) {
    alert("Hi");
  } else if (arr[0] > arr[arr.lenght - 1]) {
    alert("Bye");
  } else {
    alert("We close in an hour");
  }
}
