const myArr = [0, 1, 2, 3, 4];
const myHeros = ["Hulk", "Captain America"];

const myArr1 = new Array(1, 2, 3, 4);
console.log(myArr[0]);
console.log(Array.isArray(myArr)); // checks whether a variable is array or not. because if you do the type of myArr it will give an object in return not the array.
// Array Methods

myArr.push(6); // add the element from the end.
myArr.pop(); // remove the element from the end.

myArr.unshift(9); // add the element from the start.
myArr.shift(); // remove the element from  the start.

console.log(myArr.includes(3)); // returns boolean value based on the existence of an element.

const newArr = myArr.join(); // converts the array into string rest all is same.

// how to clone an array.
let array1 = ["1", "2", "3"];
let array2 = ["1", "2", "3"];
// let array6 = array1.slice(0); // !! new way of cloning one array to another by just slicing it from the index value you want to clone it.
// console.log(array6);
// let array2 = [].concat(array1); !! another way to clone an array to new one.

// Spread Operator
// let array2 = [...array1]; !! most commonly used way to clone an array.

// console.log(array1 === array2); // false, because triple equal to operator checks only reference(Pointing to same memory location)equality not the content equality. both are pointing to different memory location.

// concatination of two array
let array3 = ["1", "2", "3"];
let array4 = ["4", "5", "6"];
let array5 = array3.concat(array4);
console.log(array5); // ['1','2','3','4','5','6'];
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice and splice.
// It doesn't modify the original array.
const myn1 = myArr.slice(1, 3); // prints the index value 1 and 2 not 3.
console.log(myn1); // [1,2]

// Splice modifies the original array.
const originalArray = [1, 2, 3, 4, 5];
console.log(originalArray.splice(1, 2)); // Remove 2 elements, starting from index 1: [1, 4, 5]
console.log(originalArray.splice(2, 0, 6, 7)); // Remove 0 element before 2 and add 6 and 7: [1, 4, 6, 7, 5]

// ================================================================================================================

// For of loop in array

const fruits = ["Apple", "Orange", "banana", "Guava"];
const fruit2 = [];
for (let fruit of fruits) {
  // format --> for(let (anyname-for ex fruit,vegetables etc) of {arrayname-> only name with which the array is initialized.}). --> ()-> means it can contain any name. {}-> means only name of the array will be used.
  fruit2.push(fruit);
}
console.log(fruit2); // ["Apple", "Orange", "banana", "Guava"];

// =================================================================================================================

// For in loop in array -> (Always returns the index of an element).
const cars = ["BMW", "Mercedes", "Audi", "Rolls Royce"];
const cars2 = [];
for (let car in cars) {
  cars2.push(cars[car]);
  // console.log(car); // this will return the index value of each of the element.
  // console.log(cars[car]); // this will return the elements of the array.
}
// console.log(cars2);
