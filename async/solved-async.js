// promise constructor 1: Simple Resolving Promise:
// Create a promise that resolves with a string message after a short delay
// using setTimeout.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolved after 1 second');
//   }, 1000);
// });

// const consumer = () => {
//   promise.then((result) => {
//     console.log(result);
//   });
// };

// consumer(); // resolved after 1 second

// ============================================================================================

// promise constructor 2: Simple Rejecting Promise:
// Create a promise that rejects with an error object after a short delay using
// setTimeout.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('rejected after 1 second'));
//   }, 1000);
// });

// const consumer = () => {
//   promise.then((error) => {
//     console.error(error);
//   });
// };

// consumer(); // resolved after 1 second

// ============================================================================================

// promise constructor 3: Promise with Conditional Resolution:
// Create a promise that resolves with a string message if a certain condition
// is met, otherwise, it rejects with an error object. Use an if statement
// inside the executor function to determine whether to resolve or reject the
// promise.

// let condition = 'a condition';

// const promise = new Promise((resolve, reject) => {
//   if (!condition) {
//     reject(new Error('ERROR!'));
//   } else {
//     resolve('Resolved smoothly');
//   }
// });

// const consumer = () => {
//   promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// };

// consumer(); // Resolved smoothly

// ============================================================================================
