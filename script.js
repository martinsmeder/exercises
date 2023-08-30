// promisification 1: Promisifying setTimeout
// Convert the callback-based setTimeout function into a promise-based version.

// function delayCallback(ms, callback) {
//   setTimeout(callback, ms);
// }

// const delayPromise = (ms) => {
//   return new Promise((resolve, reject) => {
//     delayCallback(ms, (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// };

// delayPromise(1000).then(() => {
//   console.log('Delayed message after 1 second.');
// });

// ============================================================================================

// promisification 2: Promisifying fs.readFile
// Convert the callback-based fs.readFile function to a promise-based version.

// const fs = require('fs');

// function readFileCallback(path, callback) {
//   fs.readFile(path, 'utf8', callback);
// }

// const readFilePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     readFileCallback(path, (err) => {
//       if (err) reject(err);
//       else resolve(content);
//     });
//   });
// };

// readFilePromise('example.txt')
//   .then((content) => {
//     console.log('File content:', content);
//   })
//   .catch((error) => {
//     console.error('Error reading file:', error);
//   });

// ============================================================================================

// promisification 3: Promisifying navigator.geolocation.getCurrentPosition
// Convert the callback-based navigator.geolocation.getCurrentPosition function to a
// promise-based version.

// function getCurrentPositionCallback(successCallback, errorCallback) {
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   } else {
//     errorCallback(new Error('Geolocation is not supported by this browser.'));
//   }
// }

// const getCurrentPositionPromise = () => {
//   return new Promise((resolve, reject) => {
//     getCurrentPositionCallback(
//       (position) => {
//         resolve(position);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
// };

// getCurrentPositionPromise()
//   .then((position) => {
//     console.log('Latitude:', position.coords.latitude);
//     console.log('Longitude:', position.coords.longitude);
//   })
//   .catch((error) => {
//     console.error('Error getting current position:', error);
//   });

// ============================================================================================

// promisification 4: Promisify getSumCallBack

// const getSumCallback = (num1, num2, callback) => {
//   if (!num1 || !num2) {
//     return callback(new Error('Missing arguments'), null);
//   }
//   return callback(null, num1 + num2);
// };

// const getSumPromise = (num1, num2) => {
//   return new Promise((reject, resolve) => {
//     getSumCallback(num1, num2, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// };

// getSumPromise(1, 1)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// ============================================================================================

// // promisification 5: Promisify firstFile(), secondFile() and combineFiles()

// const fs = require('fs');

// // ==== CALLBACKS ====

// function firstFile(filePath, text, callback) {
//   fs.writeFile(filePath, text, 'utf8', callback);
// }

// function secondFile(filePath, text, callback) {
//   fs.writeFile(filePath, text, 'utf8', callback);
// }

// function combineFiles(file1Path, file2Path, resultFilePath, callback) {
//   fs.readFile(file1Path, 'utf8', (err1, data1) => {
//     if (err1) {
//       callback(err1);
//       return;
//     }

//     fs.readFile(file2Path, 'utf8', (err2, data2) => {
//       if (err2) {
//         callback(err2);
//         return;
//       }

//       const combinedText = data1 + '\n' + data2;

//       fs.writeFile(resultFilePath, combinedText, 'utf8', callback);
//     });
//   });
// }

// // ==== PROMISES ====

// const promisify =
//   (fn) =>
//   (...args) => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (error) => {
//         if (error) reject(error);
//         else resolve();
//       });
//     });
//   };

// const firstFilePromise = promisify(firstFile);
// const secondFilePromise = promisify(secondFile);
// const combineFilesPromise = promisify(combineFiles);

// // ==== USAGE ====

// firstFilePromise('file1.txt', 'Some text')
//   .then(() => {
//     console.log('File 1 created successfully.');
//     return secondFilePromise('file2.txt', 'Some more text');
//   })
//   .then(() => {
//     console.log('File 2 created successfully.');
//     return combineFilesPromise('file1.txt', 'file2.txt', 'combined.txt');
//   })
//   .then(() => {
//     console.log('Files combined successfully.');
//   })
//   .catch((error) => console.log(error));

// // Output:
// // File 1 created successfully.
// // File 2 created successfully.
// // Files combined successfully.

// ============================================================================================
