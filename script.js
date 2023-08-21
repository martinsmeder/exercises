// Don't forget functional programming concepts (pure functions and immutability)!

// https://www.javascripttutorial.net/javascript-callback/
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// callbacks 1: Filtering even numbers
// Create a function called filterEven that takes an array of numbers and a callback
// function as arguments. The callback function should determine whether a number is even.
// filterEven should return a new array containing only the even numbers from the original array.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(number) {
//   return number % 2 === 0;
// }

// function filterEven(array, callback) {
//   const even = [];
//   array.forEach((number) => {
//     if (callback(number)) {
//       even.push(number);
//     }
//   });
//   console.log(even);
//   return even;
// }

// filterEven(arr, isEven);

// =========================================================================

// callbacks 2: Mapping numbers to strings
// Write a function called mapToString that takes an array of numbers and a callback function
// as arguments. The callback function should convert a number to its string representation.
// mapToString should return a new array containing the string representations of the
// numbers from the original array.

// const arr = [1, 2, 3, 4, 5];

// function mapToString(array, callback) {
//   const stringArray = [];
//   array.forEach((number) => {
//     const string = callback(number);
//     stringArray.push(string);
//   });
//   console.log(stringArray);
//   return stringArray;
// }

// mapToString(arr, (number) => number.toString());

// =========================================================================

// callbacks 3: Finding maximum value
// Create a function called findMax that takes an array of numbers and a callback function as
// arguments. The callback function should compare two numbers and return the larger one.
// findMax should use the callback function to find and return the maximum value from the array.

const arr = [2, 4, 3, 6, 10, 2, 6, 7, 3];

function isHigher(a, b) {
  return a > b ? a : b;
}

function findMax(array, callback) {
  const initialValue = array[0];
  return array.reduce((acc, curr) => callback(acc, curr), initialValue);
}

const highest = findMax(arr, isHigher);
console.log(highest);

// =========================================================================
