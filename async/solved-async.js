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

// promise-chaining 1: Reading and Processing a File:
// Read a text file asynchronously using the Node.js fs module. The file could contain a
// list of items, such as names or numbers. Chain promises to process the data, such as
// sorting or filtering the items, and then write the processed data to a new file.

// const fs = require('fs');

// const readPath = '';
// const writePath = '';

// const readFilePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (error, content) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(content);
//       }
//     });
//   });
// };

// const writeFilePromise = (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, 'utf8', (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve('File written successfully.');
//       }
//     });
//   });
// };

// readFilePromise(readPath)
//   .then((content) => {
//     console.log('Old file content:\n', content);
//     const modifiedContent = content.replace('Original', 'Modified');
//     return writeFilePromise(writePath, modifiedContent);
//   })
//   .then((writeResult) => {
//     console.log(writeResult);
//     return readFilePromise(writePath);
//   })
//   .then((content) => console.log('New file content:\n', content))
//   .catch((error) => {
//     console.log(error);
//   });

// ============================================================================================

// promise-chaining 2: Multiple File Processing:
// Read multiple text files asynchronously using the Node.js fs module. Each file might
// contain data related to a specific category. Chain promises to process the data from each
// file and create a summary report that combines information from all the files.

// const fs = require('fs');

// const path = '';

// const readFilePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (error, content) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(content);
//       }
//     });
//   });
// };

// const writeFilePromise = (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, 'utf8', (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve('File written successfully.');
//       }
//     });
//   });
// };

// readFilePromise(`${path}news.txt`)
//   .then((newsContent) => {
//     return writeFilePromise(`${path}summary.txt`, newsContent);
//   })
//   .then((writeResult) => {
//     console.log(writeResult);
//     return readFilePromise(`${path}misc.txt`);
//   })
//   .then((miscContent) => {
//     return (
//       readFilePromise(`${path}summary.txt`)
//         // Nested '.then' to access contents of both summary.txt and misc.txt
//         .then((summaryContent) => {
//           const combinedContent = summaryContent + '\n' + miscContent;
//           console.log(`summary:\n${combinedContent}`);
//           // File written successfully.
//           // summary:
//           // News content
//           // Misc content
//           return writeFilePromise(`${path}summary.txt`, combinedContent);
//         })
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ============================================================================================

// promise-chaining 3: Data Fetch and Processing:
// Fetch data from an external API that returns an array of objects (e.g., a list of books,
// movies, or user profiles). Chain promises to filter out specific items based on certain
// criteria, and then use .map() to extract relevant information from the filtered data.

// const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => data.filter((item) => item.id <= 10))
//   .then((filtered) => filtered.map((item) => item.title))
//   .then((mapped) => mapped.forEach((item) => console.log(item)))
//   // If any error in promise chain, handle it without stopping the rest of the program
//   .catch((error) => console.log(error));

// ============================================================================================

// promise-chaining 4: Data Aggregation from Multiple APIs:
// Fetch data from multiple external APIs that provide related information (e.g., user profiles,
// posts, and comments). Chain promises to aggregate and merge the data from different APIs
// based on common identifiers, and then transform the combined data into a meaningful format.

// const url1 = 'https://jsonplaceholder.typicode.com/users';
// const url2 = 'https://reqres.in/api/users';

// const emails = [];

// fetch(url1)
//   .then((response) => response.json())
//   .then((data) => data.filter((item) => item.id <= 5))
//   .then((filtered) => filtered.map((item) => item.email))
//   .then((mapped) => {
//     mapped.forEach((item) => emails.push(item));
//     return fetch(url2);
//   })
//   .then((response) => response.json())
//   .then((data) => data.data.filter((item) => item.id <= 5))
//   .then((filtered) => filtered.map((item) => item.email))
//   .then((mapped) => {
//     mapped.forEach((item) => emails.push(item));
//     return emails;
//   })
//   .then((emails) => emails.forEach((email) => console.log(email)))
//   .catch((error) => console.log(error));

// ============================================================================================
