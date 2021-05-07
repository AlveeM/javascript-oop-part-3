class Vehicle {
  constructor(year) {
    this._year = year;
  }

  goForward() {
    console.log("forward");
  }

  static vroom() {
    console.log("VROOM!!! VROOM!!!");
  }
}

Vehicle.vroom();
