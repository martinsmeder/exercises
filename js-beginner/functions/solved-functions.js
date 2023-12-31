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

// chaining 1: Chaining Map and Filter:
// Given an array of numbers, chain the map and filter functions to first double each
// number and then filter out the even numbers.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const empty = arr.map((x) => x * 2).filter((x) => x % 2 !== 0);
// console.log(empty);

// =========================================================================

// chaining 2: Chaining Map and Reduce:
// Starting with an array of strings, chain the map and reduce functions to create a
// single string that concatenates all the elements.

// const arr = ['a', 'bunch', 'of', 'words'];

// const string = arr.map((x) => x + ' ').reduce((acc, curr) => acc + curr);

// console.log(string);

// =========================================================================

// chaining 3: Chaining Filter, Map, and Reduce:
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

// currying 1: Currying and Mapping:
// Create a curried function that takes an array of numbers and a multiplier as arguments.
// The function should return a new array where each number is multiplied by the provided
// multiplier.

// const arr = [1, 2, 3, 4, 5];

// function curry(callback) {
//   return function (a) {
//     return function (b) {
//       return callback(a, b);
//     };
//   };
// }

// function mapper(array, multiplier) {
//   return array.map((array) => array * multiplier);
// }

// let curriedMapper = curry(mapper);

// console.log(curriedMapper(arr)(2)); // [2, 4, 6, 8, 10]

// =========================================================================

// currying 2: Curried Filter:
// Design a curried function that takes an array of strings and a keyword as arguments.
// The function should return a new array containing only the strings that include the
// provided keyword.

// const arr = ['a string', 'another string', 'something else'];

// function curry(callback) {
//   return function (a) {
//     return function (b) {
//       return callback(a, b);
//     };
//   };
// }

// function filterer(array, keyword) {
//   return array.filter((string) => string.includes(keyword));
// }

// let curriedFilterer = curry(filterer);

// console.log(curriedFilterer(arr)('string')); // ['a string', 'another string']

// =========================================================================

// currying 3: Partial Application with Currying:
// Develop a curried function that calculates the average of numbers in an array.
// The function should be able to accept an optional argument for the number of decimal
// places to round the average to. If no decimal places argument is provided, the average
// should be returned as is.

// const arr = [1.232, 2.1231, 3.457546, 4.45645634564, 5.234251345];

// function curry(callback) {
//   return function (a) {
//     return function (b) {
//       return callback(a, b);
//     };
//   };
// }

// function getAverage(array, decimals) {
//   const reduced = array.reduce((acc, curr) => acc + curr);
//   const average = reduced / array.length;
//   if (decimals) {
//     const rounded = average.toFixed(decimals);
//     console.log(rounded);
//     return rounded;
//   }
//   console.log(average);
//   return average;
// }

// const curriedAverage = curry(getAverage);

// const partialAverage = curriedAverage(arr);

// partialAverage(); // 3.3006707381280003
// partialAverage(2); // 3.30

// =========================================================================

// composition 1: Data Transformation Pipeline:
// Given an array of numbers, create a function composition pipeline that
// first filters out the even numbers, then squares each remaining number,
// and finally calculates the sum of the squared numbers.

// const arr = [1, 2, 3, 4, 5];

// const filter = (array) => array.filter((num) => num % 2 !== 0);
// const square = (array) => array.map((num) => num * num);
// const getSum = (array) => array.reduce((acc, curr) => acc + curr);

// const composed = getSum(square(filter(arr)));

// console.log(composed); // 35

// =========================================================================

// composition 2: String Formatting and Transformation:
// Start with an array of strings. Create a function composition that
// first filters out strings with less than 5 characters, then capitalizes
// the remaining strings, and finally concatenates all the strings into a
// single string.

// const arr = ['a bunch of words', 'some other words', 'word', 'last word'];

// const filter = (array) => array.filter((string) => string.length >= 5);
// const capitalized = (array) =>
//   array.map((string) => string.charAt(0).toUpperCase() + string.slice(1) + ' ');
// const concat = (array) => array.reduce((acc, curr) => acc + curr);

// const composed = concat(capitalized(filter(arr)));

// console.log(composed); // A bunch of words Some other words Last word

// =========================================================================

// composition 3: Processing User Profiles:
// Imagine you have an array of user objects with properties like name,
// age, and isAdmin. Create a function composition that filters out users
// who are not admins, then extracts the names of the remaining admin users,
// and finally sorts the names in alphabetical order.

// const users = [
//   { name: 'Jack', age: 23, isAdmin: true },
//   { name: 'Henry', age: 40, isAdmin: true },
//   { name: 'Alice', age: 25, isAdmin: true },
//   { name: 'Bob', age: 30, isAdmin: false },
//   { name: 'Charlie', age: 22, isAdmin: true },
//   { name: 'David', age: 28, isAdmin: false },
//   { name: 'Eva', age: 19, isAdmin: true },
//   { name: 'Frank', age: 34, isAdmin: true },
//   { name: 'Grace', age: 27, isAdmin: false },
//   { name: 'Ivy', age: 29, isAdmin: false },
// ];

// const getAdmins = (array) => array.filter((user) => user.isAdmin === true);
// const getNames = (array) => array.map((user) => user.name);
// const sort = (array) => array.sort();

// const composed = sort(getNames(getAdmins(users)));

// console.table(composed);
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │  'Alice'  │
// │    1    │ 'Charlie' │
// │    2    │   'Eva'   │
// │    3    │  'Frank'  │
// │    4    │  'Henry'  │
// │    5    │  'Jack'   │
// └─────────┴───────────┘

// =========================================================================

// =========================================================================

// custom array-methods 1: Custom Map Function:
// Create a custom myMap function that takes a callback function as argument.
// The function should iterate through the array and apply the callback function to each
// element, returning a new array containing the transformed elements.

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function (callback) {
//   const mapped = [];
//   this.forEach((item) => {
//     const mappedItem = callback(item);
//     mapped.push(mappedItem);
//   });
//   return mapped;
// };

// console.log(arr.myMap((item) => item * 2)); // [2, 4, 6, 8, 10]

// =========================================================================

// custom array-methods 2: Custom Filter Function:
// Design a custom myFilter function that takes a filtering callback function as
// argument. The function should iterate through the array and use the callback function to
// determine whether each element should be included in the new array.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Define the function as a property on the array prototype
// Array.prototype.myFilter = function (callback) {
//   const filtered = [];
//   // Make the array into the 'this' context
//   this.forEach((item) => {
//     if (callback(item)) {
//       filtered.push(item);
//     }
//   });
//   return filtered;
// };

// console.log(arr.myFilter((item) => item % 2 === 0)); // [2, 4, 6, 8, 10]

// =========================================================================

// custom array-methods 3: Custom Reduce Function:
// Implement a custom myReduce function that takes a reducer callback function, and
// an initial value as arguments. The function should apply the reducer function to each element
// of the array, accumulating the result based on the initial value.

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.reduce((acc, curr) => (acc *= curr), 1)); // 120

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator;
//   if (initialValue) {
//     accumulator = initialValue;
//     this.forEach((item) => {
//       accumulator = callback(accumulator, item);
//     });
//   } else {
//     accumulator = this[0];
//     for (let i = 1; i < this.length; i++) {
//       accumulator = callback(accumulator, this[i]);
//     }
//   }

//   return accumulator;
// };

// console.log(arr.myReduce((acc, curr) => (acc *= curr), 1)); // 120
