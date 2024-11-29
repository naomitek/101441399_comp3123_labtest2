
//Question 1
         const greeter = (myArray, counter) => {
          const greetText = 'Hello ';
 for (const name of myArray) {
  console.log(`${greetText}${name}`);
 }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Question 2

const capitalize = (str) => {
 let [first, ...rest] = str;
 return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));



//Question 3

     const colors = ['red', 'green', 'blue'];

     const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);



//Question 4
const array = [1, 2, 3, 4];

const calculateSum = (arr) => arr.reduce((acc, value) => acc + value, 0);
const calculateProduct = (arr) => arr.reduce((acc, value) => acc * value, 1);

console.log(calculateSum(array));
console.log(calculateProduct(array));



//Question 5



const filterLessThan20 = (arr) => arr.filter(value => value < 20);

const values = [1, 60, 34, 30, 20, 5];
const result = filterLessThan20(values);

console.log(result);


// Question 6
class Car {
 constructor(model, year) {
  this.model = model;
  this.year = year;
 }

 details() {
  return `Model: ${this.model} Engine ${this.year}`;
 }
}


class Sedan extends Car {
 constructor(model, year, balance) {
  super(model, year);
  this.balance = balance;
 }

 info() {
  return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
 }
}


const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());