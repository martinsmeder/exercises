// Exercise 1: Removing Duplicates
// Write a function that takes an array of numbers and returns a new array with duplicate
// elements removed, maintaining the order of the original array.

// function killDupes(arr) {
//   const uniqueArr = [];
//   const seenItems = [];

//   // Avoid indexOf and splice when looping through collections, indexOf lead to inefficient
//   // re-searching, and splice can cause loop disruptions and changes of length
//   arr.forEach((item) => {
//     if (!seenItems.includes(item)) {
//       uniqueArr.push(item);
//       seenItems.push(item);
//     }
//   });

//   console.log(uniqueArr);
//   return uniqueArr;
// }

// killDupes([1, 2, 3, 3, 6, 4, 5, 6, 7, 7, 8, 6, 9, 0, 0]); // [1, 2, 3, 6, 4, 5, 7, 8, 9, 0]

// ============================================================================================

// // Exercise 2: Find Maximum and Minimum
// // Write a function that takes an array of numbers as input and returns an
// // object containing the  maximum and minimum values in the array.

// function getMaxAndMin(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });

//   const highest = arr.pop();
//   const lowest = arr[0];

//   const obj = {
//     highest: highest,
//     lowest: lowest,
//   };

//   console.log(obj);
//   return obj;
// }

// getMaxAndMin([1, 3, 5, 7, 9, 2, 4, 6, 8]); //{highest: 9, lowest: 1}

// ============================================================================================

// Exercise 3: Insert Element at Index
// Given an array and an element, write a function that inserts the element at a specified
// index. The original array should be modified.

// function insertAtIndex(arr, el, index) {
//   const arr2 = arr.splice(0, index);
//   arr2.push(el);

//   arr.forEach((item) => {
//     arr2.push(item);
//   });

//   arr = arr2;

//   console.log(arr);
// }

// insertAtIndex([1, 2, 3, 4], 5, 2); // [1, 2, 5, 3, 4]

// ============================================================================================

// Exercise 4: Split into Chunks
// Write a function that takes an array and a chunk size as input and returns a new array
// with the original array split into subarrays of the specified chunk size.

// function splitIntoChunks(arr, chunk) {
//   const newArr = [];
//   while (arr.length > 0) {
//     const subArr = arr.splice(0, chunk);
//     newArr.push(subArr);
//   }
//   console.log(newArr);
//   return newArr;
// }

// splitIntoChunks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// // (4) [Array(3), Array(3), Array(3), Array(1)]

// ============================================================================================

// Exercise 5: Array Rotation
// Write a function that takes an array and a number n as input and returns a new array where
// the elements are rotated to the right by n positions.

// function rotateArray(arr, num) {
//   const newArr = [];

//   for (let i = 0; i < num; i++) {
//     const lastEl = arr.pop();
//     newArr.push(lastEl);
//   }

//   const reversed = newArr.reverse();

//   const toConcat = [reversed, arr];
//   const finalArr = toConcat.flat();

//   console.log(finalArr);
//   return finalArr;
// }

// rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// ============================================================================================

// map 1: Doubling Numbers
// Given an array of numbers, create a new array where each number is doubled.

// const arr = [1, 2, 3];

// const mapped = arr.map((x) => x * 2);

// console.log(mapped);

// ============================================================================================

// map 2: Capitalizing Words
// Given an array of strings, create a new array where each string has its
// first letter capitalized.

// const arr = ['these', 'words', 'are', 'capitalized'];

// const mapped = arr.map((x) => x.charAt(0).toUpperCase() + x.slice(1));

// console.log(mapped);

// ============================================================================================

// map 3: Length of Words
// Given an array of strings, your task is to transform each string into its corresponding
// word length. Create a new array where each element represents the length of the word from
// the original array.

// const arr = ['an', 'array', 'of', 'strings'];

// const mapped = arr.map((x) => x.length);

// console.log(mapped);

// ============================================================================================

// filter 1: Even Numbers
// Given an array of numbers, create a new array that only contains the even numbers.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filtered = arr.filter((num) => num % 2 === 0);

// console.log(filtered);

// ============================================================================================

// filter 2: Short Words
// Given an array of strings, create a new array that only contains the words with a
// length less than or equal to a specified value.

// const arr = [
//   'looooooooong',
//   'short',
//   'loooooooooooooooong',
//   'short',
//   'loooooong',
//   'short',
// ];

// ============================================================================================

// filter 3: Palindromic Words
// Given an array of strings, create a new array that only contains the palindromic words.
// Palindromic words are words that read the same forwards and backwards (e.g., "radar",
// "level", "deified").

// const arr = [
//     'radar',
//     'level',
//     'deified',
//     'naturrutan',
//     'word',
//     'bird',
//     'girdle',
//     'dirt',
//   ];

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }

//   const filtered = arr.filter((str) => isPalindrome(str));

//   console.log(filtered);

// ============================================================================================

// reduce() 1: Sum of Numbers
// Given an array of numbers, use reduce() to calculate and return the sum of all the
// numbers in the array.

// const arr = [1, 2, 3, 4, 5]; // 15

// const sum = arr.reduce((acc, curr) => acc + curr);

// console.log(sum);

// ============================================================================================

// reduce() 2: Maximum Number
// Given an array of numbers, use reduce() to find and return the maximum number in the array.

// const arr = [4, 3, 5, 1, 2, 10, 8];

// // If currentValue > accumulator; return currentValue, otherwise; return accumulator
// const highest = arr.reduce((acc, curr) => (curr > acc ? curr : acc));

// console.log(highest); // 10

// ============================================================================================

// reduce() 3: Concatenate Strings
// Given an array of strings, use reduce() to concatenate all the strings in the array and
// return the resulting string

// const arr = ['this ', 'is ', 'a ', 'concatenated ', 'string'];

// const str = arr.reduce((acc, curr) => acc + curr);

// console.log(str); // this is a concatenated string

// ============================================================================================

// reduce() 4: Counting Odd Numbers
// Given an array of numbers, use reduce() with an initial value of 0 to count and return
// the number of odd numbers in the array.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddCount = arr.reduce((acc, curr) => {
//   if (!(curr % 2 === 0)) {
//     acc++;
//   }

//   return acc;
// }, 0);

// console.log(oddCount); // 5

// ============================================================================================

// reduce() 5: Longest Word
// Given an array of strings, use reduce() with an initial value of an empty string ('') to
// find and return the longest word in the array.

// const arr = ['code', 'coder', 'coding', 'theCodingCoder', 'cod'];

// // If curr.length > acc.length, return curr, otherwise return acc
// const longest = arr.reduce(
//   (acc, curr) => (curr.length > acc.length ? curr : acc),
//   ''
// );

// console.log(longest);

// ============================================================================================

// reduce() 6: Sum of Squares
// Given an array of numbers, use reduce() with an initial value of 0 to calculate and return
// the sum of the squares of all the numbers in the array.

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, curr) => (acc += curr * curr), 0);

// console.log(sum); // 55

// ============================================================================================

// destructuring 1: Swapping Variables
// Given two variables a and b, swap their values using array destructuring.

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a, b); // 2 1

// ============================================================================================

// destructuring 2: Extracting First and Rest Elements
// Given an array, extract the first element and the rest of the elements using array
// destructuring.

// let first, rest;
// const arr = [1, 2, 3, 4, 5];

// [first, ...rest] = arr;

// console.log(first, rest); // 1 (4) [2, 3, 4, 5]

// ============================================================================================

// destructuring 3: Returning Multiple Values from a Function
// Write a function that takes an array as an argument and returns the first and second
// elements of the array using array destructuring.

// function multipleValues(arr) {
//   let a, b;
//   [a, b] = arr;
//   console.log(a, b);
//   return a, b;
// }

// const numbers = [1, 2, 3, 4, 5];

// multipleValues(numbers); 1 2

// ============================================================================================

// spread 1: Concatenating Arrays
// Given two arrays, create a new array that contains all the elements from both
// arrays using the spread operator.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];

// console.log(combined);

// ============================================================================================

// spread 2: Cloning Arrays
// Clone an existing array using the spread operator to create a new instance with the same
// values.

// const arr = [1, 2, 3, 4, 5];
// const clone = [...arr];
// console.log(clone); // [1, 2, 3, 4, 5]

// ============================================================================================

// spread 3: Reversing an Array
// Given an array, create a new array that contains the elements of the original array in
// reverse order using the spread operator.

// const arr = [1, 2, 3, 4, 5];
// const reversed = [...arr].reverse();
// console.log(arr);
// console.log(reversed); // [5, 4, 3, 2, 1]

// ============================================================================================
