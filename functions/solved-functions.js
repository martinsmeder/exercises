// closures 1: Counter Factory
// Create a function counterFactory that generates a counter function. The
// counter function should return the next count each time it's called. Each
// generated counter should be independent and maintain its own count.

// function counterFactory() {
//   let count = 0;
//   return () => (count += 1);
// }

// const first = counterFactory();
// console.log(first()); // 1
// console.log(first()); // 2
// console.log(first()); // 3
// const second = counterFactory();
// console.log(second()); // 1

// =========================================================================

// closures 2: Multiplier
// Implement a function multiplier that takes a factor as an argument and
// returns a function. The returned function should accept a number and return
// the product of that number and the factor.

// function multiplier(factor) {
//   return (num) => factor * num;
// }
// const factor5 = multiplier(5);
// console.log(factor5(5));

// =========================================================================

// closures 3: Filtering by Threshold
// Create a function filterByThreshold that takes a threshold value as an
// argument and returns a function. The returned function should filter an
// array of numbers, keeping only the numbers that are greater than or equal
// to the threshold.

// const arr1 = [1, 2, 3, 4, 5];

// function filterByThreshold(threshold) {
//   return function filter(arr) {
//     const filtered = [];
//     arr.forEach((el) => {
//       if (el >= threshold) {
//         filtered.push(el);
//       }
//     });
//     return filtered;
//   };
// }

// const threshold3 = filterByThreshold(3);
// console.log(threshold3(arr1)); // [3, 4, 5]

// =========================================================================

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

// const arr = [2, 4, 3, 6, 10, 2, 6, 7, 3];

// function isHigher(a, b) {
//   return a > b ? a : b;
// }

// function findMax(array, callback) {
//   const initialValue = array[0];
//   return array.reduce((acc, curr) => callback(acc, curr), initialValue);
// }

// const highest = findMax(arr, isHigher);
// console.log(highest);

// =========================================================================

// Chaining Map and Filter:
// Given an array of numbers, chain the map and filter functions to first double each
// number and then filter out the even numbers.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const empty = arr.map((x) => x * 2).filter((x) => x % 2 !== 0);
// console.log(empty);

// =========================================================================

// Chaining Map and Reduce:
// Starting with an array of strings, chain the map and reduce functions to create a
// single string that concatenates all the elements.

// const arr = ['a', 'bunch', 'of', 'words'];

// const string = arr.map((x) => x + ' ').reduce((acc, curr) => acc + curr);

// console.log(string);

// =========================================================================

// Chaining Filter, Map, and Reduce:
// Begin with an array of objects containing name and age properties. Chain the filter,
// map, and reduce functions to first filter out individuals under a certain age, then extract
// their names, and finally calculate the total length of all the names combined.

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
//   { name: 'David', age: 28 },
//   { name: 'Eva', age: 19 },
//   { name: 'Frank', age: 34 },
//   { name: 'Grace', age: 27 },
//   { name: 'Henry', age: 40 },
//   { name: 'Ivy', age: 29 },
//   { name: 'Jack', age: 23 },
// ];

// const length = people
//   .filter((person) => person.age >= 20)
//   .map((person) => person.name)
//   .reduce((acc, name) => acc + name.length, 0);

// console.log(length);

// =========================================================================
