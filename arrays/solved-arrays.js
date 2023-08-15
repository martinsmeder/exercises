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

// insertAtIndex([1, 2, 3, 4], 5, 2);

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
