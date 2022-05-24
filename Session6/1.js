const person = {
  name: "Dhruv",
  grades: {
    subject1: "A",
    subject2: "A+",
  },
  printName: function() {
      console.log("Print some name")
  }
};

console.log(person.printName);
console.log(person.printName());
function createCar(make, model, color = "Black") {
  return {
    make, //make: make
    model,
    color:"Green",
    start: function () {
      console.log("Car Start");
    },
  };
}

const myCar = createCar("Q3");
console.log(myCar.make, myCar.color);