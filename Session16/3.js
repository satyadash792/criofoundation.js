const values = [1, 2, 3, 4, 5];

const double = (x) => 2 * x;
const isEven = (x) => x % 2 === 0;

const doubleValues = values.map(double)
const evenValues = values.map(num => isEven(num) ? num : null)

console.log(values)
console.log(doubleValues)
console.log(evenValues)