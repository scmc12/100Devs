//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.size = "large";
pizza.toppings = ["pepperoni", "jalapenos", "garlic"];
pizza.crust = "stuffed";
pizza.sauce = "heavy";

pizza.estimatedDeliveryTime = function () {
  console.log("Calculating...");
};
pizza.burnMouth = function () {
  console.log("hot");
};
pizza.frisbee = function () {
  console.log("full send");
};
