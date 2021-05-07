/* Method 1: Create a new object for every instance */

// function Vehicle(year) {
//   const vehicle = {};
//   vehicle.year = year;
//   vehicle.goForward = function() {
//     console.log("forward");
//   }
//   vehicle.printYear = function() {
//     console.log(`Made in ${this.year}`);
//   }
//   return vehicle;
// }

// class Vehicle2 {
//   constructor(year) {
//     this.year = year;
//   }

//   goForward() {
//     console.log("forward");
//   }
// }

// const vehicle = Vehicle(2015);
// const vehicle2 = new Vehicle2(2016);

// const vehicle3 = Vehicle(2017);
// const vehicle4 = new Vehicle2(2018);

// console.log(vehicle);
// console.log(vehicle2);
// console.log(vehicle3);
// console.log(vehicle4);

// console.log(vehicle.goForward === vehicle3.goForward);
// console.log(vehicle2.goForward === vehicle4.goForward);

/* Method 2 */
function Vehicle(year) {
  // const vehicle = {};
  // Object.setPrototypeOf(vehicle, vehicleFunctionStore);
  const vehicle = Object.create(vehicleFunctionStore);
  vehicle.year = year;
  return vehicle;
}

const vehicleFunctionStore = {
  goForward: function() {
    console.log("forward");
  },
  printYear: function() {
    console.log(`Made in ${this.year}`);
  }
}

const myVehicle = Vehicle(2015);
const myVehicle2 = Vehicle(2016);
console.log(myVehicle);
myVehicle.goForward();

console.log(myVehicle.goForward === myVehicle2.goForward);
