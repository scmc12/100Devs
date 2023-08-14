// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let food = "pizza";

food = "burgers";

// alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = "movies";

// alert(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

takeInThree = (n1, n2, n3) => {
  let answer = (n1 * n2) / n3;
  console.log(answer);
};
takeInThree(3, 6, 2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

cubeRoot = (n1) => {
  console.log(Math.cbrt(n1).toFixed(4));
};
cubeRoot(18);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function isItSummer(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase === "june" ||
    monthLowerCase === "july" ||
    monthLowerCase === "august"
  ) {
    alert("Yay!");
  } else {
    alert("Boo!");
  }
}
isItSummer("august");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFives(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
