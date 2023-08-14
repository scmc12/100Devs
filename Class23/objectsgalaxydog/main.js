// Create a dog object that has four properties and three methods

let dog = {};

function MakeDog(Bob, greatDane, black, male) {
  this.name = Bob;
  this.breed = greatDane;
  this.color = black;
  this.gender = male;
  this.trick = function () {
    console.log(`SHAKE`);
  };
  this.treat = function () {
    console.log(`Give ${this.name} a treat when he ${this.trick}`);
  };
  this.greeting = function () {
    console.log(`This is ${this.name}, he's a ${this.breed}`);
  };
}

let newDog = new MakeDog("Bob", "Great Dane", "Black", "male");
