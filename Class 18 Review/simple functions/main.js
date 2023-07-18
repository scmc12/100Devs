//create a function that adds two numbers and alerts the sum

function addTwo(n1, n2) {
  sum = n1 + n2;
}
addTwo(4, 5);
console.log(sum);

//create a function that multiplys three numbers and console logs the product

function multiThree(n1, n2, n3) {
  console.log(n1 * n2 * n3);
}

multiThree(3, 3, 3);
//create a function that divides two numbers and returns the ???

function divTwo(n1, n2) {
  return n1 / n2;
}

divTwo(10, 2);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNums(n1, n2, n3) {
  return (n1 + n2) / n3;
}
threeNums(18, 2, 10);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
