//Create a mouse object that has four properties and three methods

let mouse = {};

mouse.brand = "Logitech";
mouse.color = "black";
mouse.model = "G305";
mouse.wireless = true;

mouse.leftClick = function () {
  console.log("left click");
};
mouse.rightClick = function () {
  console.log("right click");
};
mouse.scroll = function () {
  console.log("vertical");
};

let mouse2 = {};

mouse2.brand = "Logitech";
mouse2.color = "white";
mouse2.model = "G307";
mouse2.wireless = true;

mouse2.leftClick = function () {
  console.log("left click");
};
mouse2.rightClick = function () {
  console.log("right click");
};
mouse2.scroll = function () {
  console.log("vertical");
};
