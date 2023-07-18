//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function multiplyArray(arr) {
  let product = 1;
  // arr.forEach((num) => (product *= num));
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  alert(product);
}

multiplyArray([10, 2, 3]);
