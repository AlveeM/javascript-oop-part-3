/* added after lecture since I didn't have time to cover this */

function Vehicle(year) {
  const vehicle = Object.create(vehicleFunctionStore);
  vehicle.year = year;
  return vehicle;
}

const vehicleFunctionStore = {
  goForward() {
    console.log("forward");
  }
}

// You should not modify the __proto__ property directly and instead use Object.setPrototypeOf
// I've kept the direct __proto__ modification for reference
function Car(make, model, year) {
  const car = Vehicle(year);
  car.make = make;
  car.model = model;
  Object.setPrototypeOf(car, carFunctionStore);
  // car.__proto__ = carFunctionStore;
  return car;
}

const carFunctionStore = {
  // __proto__: vehicleFunctionStore,
  honk() {
    console.log("HONK!");
  }
}

Object.setPrototypeOf(carFunctionStore, vehicleFunctionStore);

const car = Car("Ford", "Fusion", 2015);
console.log(car);