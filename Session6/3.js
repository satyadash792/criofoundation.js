function createCar(){
    const newCar = {};
    this = newCar;

    this.make = "Audi"

    return newCar;
}

const newCar = createCar();
newCar.make;