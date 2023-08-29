// promisification 1: Promisifying setTimeout
// Convert the callback-based setTimeout function into a promise-based version.

// function delayCallback(ms, callback) {
//   setTimeout(callback, ms);
// }

// // Your task: Convert delayCallback to a promise-based version
// function delayPromise(ms) {
//   // Convert the setTimeout operation to use a promise
// }

// delayPromise(1000).then(() => {
//   console.log("Delayed message after 1 second.");
// });

// ============================================================================================

// promisification 2: Promisifying fs.readFile
// Convert the callback-based fs.readFile function to a promise-based version.

// const fs = require('fs');

// function readFileCallback(path, callback) {
//   fs.readFile(path, 'utf8', callback);
// }

// // Your task: Convert readFileCallback to a promise-based version
// function readFilePromise(path) {
//   // Convert the fs.readFile operation to use a promise
// }

// readFilePromise('example.txt')
//   .then((content) => {
//     console.log('File content:', content);
//   })
//   .catch((error) => {
//     console.error('Error reading file:', error);
//   });

// ============================================================================================

// promisification 3: Promisifying navigator.geolocation.getCurrentPosition
// Convert the callback-based navigator.geolocation.getCurrentPosition function to a promise-based version.

// function getCurrentPositionCallback(successCallback, errorCallback) {
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   } else {
//     errorCallback(new Error('Geolocation is not supported by this browser.'));
//   }
// }

// // Your task: Convert getCurrentPositionCallback to a promise-based version
// function getCurrentPositionPromise() {
//   // Convert the navigator.geolocation.getCurrentPosition operation to use a promise
// }

// getCurrentPositionPromise()
//   .then((position) => {
//     console.log('Latitude:', position.coords.latitude);
//     console.log('Longitude:', position.coords.longitude);
//   })
//   .catch((error) => {
//     console.error('Error getting current position:', error);
//   });
