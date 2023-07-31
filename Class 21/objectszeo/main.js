//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.brand = "Nike";
stopwatch.color = "black";
stopwatch.shape = "round";
stopwatch.size = "medium";

stopwatch.start = () => {
  console.log("starting");
};

stopwatch.stop = () => {
  console.log("stopping");
};

stopwatch.sayBrand = () => {
  console.log(stopwatch.brand);
};
