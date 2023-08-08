//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkater(skateboard, skateShoes, specialMove, sponsor) {
  this.board = skateboard;
  this.shoes = skateShoes;
  this.move = specialMove;
  this.sponsor = sponsor;
  this.taunt = function () {
    console.log("Lets skate!");
  };
  this.style = function () {
    console.log("Mongo");
  };
  this.stance = function () {
    console.log("goofy");
  };
}

let tonyHawk = new MakeSkater("birdhouse", "DC", "900", "PS2");

let rodneyMullen = new MakeSkater("enjoi", "etnies", "360 flip", "panda");
