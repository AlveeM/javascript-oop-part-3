class Vehicle {
  constructor(year) {
    this._year = year;
  }

  goForward() {
    console.log("forward");
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (newYear < 1950) {
      throw new Error("invalid year");
    }
    this._year = newYear;
  }
}

const vehicle = new Vehicle(2016);
vehicle.year = 2015;

console.log(vehicle);
console.log(vehicle.year);