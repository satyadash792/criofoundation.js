function Car(make, model, color = "Black") {
  this.make = make;
  this.model = model;
  this.color = color;
  this.start = function () {
    console.log("Car Start");
    console.log(this);
  };
}

const myCar = new Car("Audi", "Q3");
console.log(myCar.color);
console.log(myCar.start());

