//arrow function
console.log(text);
// ES5
var x = function (x, y) {
  return x * y;
};
// ES6
const x = (x, y) => x * y;

//for in
const person = { fname: "John", lname: "Doe", age: 25 };
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

// for of
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);

//for each
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);
function myFunction(value, index, array) {
  console.log(value + " ");
}
