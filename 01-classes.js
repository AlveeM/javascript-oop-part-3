// class Vehicle {
//   constructor(year, wheels, color, driveTrain, flightNo) {
//     this.year = year;
//     this.color = color;
//     this.wheels = wheels;
//     this.driveTrain = driveTrain;
//     this.flightNo = flightNo;
//   }

//   goForward() {
//     console.log("forward");
//   }
// }

// const car = new Vehicle(2015, 4, "blue", "AWD");
// const airplane = new Vehicle(2012, 8, "gray", "A3521");

// console.log(car);
// console.log(airplane);

/* Inheritance */
class Vehicle {
  constructor(year) {
    this.year = year;
  }

  goForward() {
    console.log("forward");
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(year);
    this.make = make;
    this.model = model;
  }

  honk() {
    console.log("HONK!!!");
  }
}

class Airplane extends Vehicle {
  constructor(flightNo, year) {
    super(year);
    this.flightNo = flightNo;
  }
}

class Truck extends Car {
  constructor(make, model, year) {
    super(make, model, year);
    this.driveTrain = "AWD";
  }
}

const vehicle = new Vehicle(2016);
const car = new Car("Ford", "Fusion", 2015);
const airplane = new Airplane("A3235", 2012);
const truck = new Truck("Ford", "F-150", 2020);

console.log(vehicle);
console.log(car);
console.log(airplane);
console.log(truck);

car.goForward();
airplane.goForward();
truck.goForward();

car.honk();
truck.honk();