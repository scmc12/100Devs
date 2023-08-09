//Create a constructor with 4 properties and 3 methods

function PizzaType(size, toppings, crust, sauce) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.sauce = sauce;
  this.dippingSauce = function () {
    console.log(`Depends on ${this.toppings} and ${this.crust}`);
  };
  this.delivery = function () {
    console.log(`Would you like this for delivery or pickup?`);
  };
  this.dessert = function () {
    console.log(`If your ${this.size} isn't enough, add dessert too!`);
  };
}

let bigPepperoni = new PizzaType("large", "pepperoni", "garlic", "ranch");

console.log(bigPepperoni);
