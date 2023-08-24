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

// ============================================================================================

// promise-chaining 4: Network Requests - Exercise: Fetching and Transforming Data
// Data Aggregation from Multiple APIs: Fetch data from multiple external APIs that provide
// related information (e.g., user profiles, posts, and comments). Chain promises to aggregate
// and merge the data from different APIs based on common identifiers, and then transform the
// combined data into a meaningful format.

// ============================================================================================
