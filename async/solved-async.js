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

// promise.all() 1: Fetch and Combine Titles
// 1. Fetch data from all the provided feed URLs using the given API.
// 2. Use Promise.all() to wait for all the fetch requests to complete.
// 3. Extract the title of each item from the fetched data.
// 4. Combine and log the titles from all the feeds.

// const urls = [
//   'https://www.deepmind.com/blog/rss.xml',
//   'https://news.mit.edu/topic/mitmachine-learning-rss.xml',
// ];
// const api = 'https://rss-to-json-serverless-api.vercel.app/api?feedURL=';

// const deepmind = fetch(api + urls[0]);
// const mit = fetch(api + urls[1]);

// Promise.all([deepmind, mit]) // Wait for both fetch promises to resolve
//   .then(([response1, response2]) => // Resolved fetch promises
//     Promise.all([response1.json(), response2.json()]) // Wait for json parsing to resolve
//   )
//   .then(([data1, data2]) => { // Resolved json promises
//     const items1 = data1.items;
//     const items2 = data2.items;
//     const allItems = [...items1, ...items2];

//     const titles = allItems.map((item) => item.title);
//     console.log(titles);
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });

// ============================================================================================

// promise.all() 2: Fetch and Filter by Keyword
// 1. Fetch data from all the provided feed URLs using the given API.
// 2. Use Promise.all() to wait for all the fetch requests to complete.
// 3. Filter the fetched items to include only those containing a specific keyword
//    (e.g., "machine learning").
// 4. Extract and log the titles and URLs of the filtered items.

// const urls = [
//   'https://www.deepmind.com/blog/rss.xml',
//   'https://news.mit.edu/topic/mitmachine-learning-rss.xml',
// ];
// const api = 'https://rss-to-json-serverless-api.vercel.app/api?feedURL=';

// const fetchJson = (url) => {
//   // Return the promise itself, which will eventually resolve to the parsed json data. This is
//   // needed to ensure proper chaining of asynchronous operations. This allows the calling code
//   // to handle the asynchronous result as a promise, which is needed to continue chaining
//   // operations using .then and .catch. If you don't return the promises from these functions,
//   // the calling code won't be able to wait for the asynchronous operations to complete, and
//   // won't be able to access the resolved values (i.e., response.json() and titleAndUrl)

//   // TLDR: Return the function in order to return the promise, and continue the chain. Otherwise
//   // the promise chain will be broken, the calling code won't be able to access the resolved values.
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     // Return the parsed json data
//     return response.json();
//   });
// };

// const parseJson = (url, keyword) => {
//   return fetchJson(api + url).then((data) => {
//     const filteredItems = data.items.filter((item) =>
//       item.title.includes(keyword)
//     );
//     const titleAndUrl = filteredItems.map(
//       (item) => `Title: ${item.title}\nUrl: ${item.url}`
//     );
//     return titleAndUrl;
//   });
// };

// const processPromises = urls.map((url) => parseJson(url, 'artificial'));

// Promise.all(processPromises)
//   .then((results) => {
//     const allParsedItems = results.flat();
//     allParsedItems.forEach((item) => console.log(item));
//   })
//   .catch((error) => console.error('An error occurred:', error));

// ============================================================================================

// promise.all() 3: Get current items and sort by date
// 1. Fetch data from all the provided feed URLs using the given API.
// 2. Use Promise.all() to wait for all the fetch requests to complete.
// 3. Remove any items older than a year from todays date
// 4. Sort items from newest to oldest
// 4. Log the titles and dates

// const urls = [
//   'https://www.deepmind.com/blog/rss.xml',
//   'https://news.mit.edu/topic/mitmachine-learning-rss.xml',
// ];
// const api = 'https://rss-to-json-serverless-api.vercel.app/api?feedURL=';

// const deepmind = fetch(api + urls[0]);
// const mit = fetch(api + urls[1]);

// function getCurrentItems(array) {
//   const today = new Date();
//   const itemDate = new Date(item.published);

//   const msPerDay = 24 * 60 * 60 * 1000;
//   const elapsedTime = Math.abs(today - itemDate);
//   const elapsedDays = Math.floor(elapsedTime / msPerDay);

//   const currentItems = array.filter((item) => {
//     if (elapsedDays < 365) {
//       return item;
//     }
//   });
//   return currentItems;
// }

// Promise.all([deepmind, mit])
//   .then(([response1, response2]) => {
//     [response1, response2].forEach((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }
//     });
//     return Promise.all([response1.json(), response2.json()]);
//   })
//   .then(([data1, data2]) => {
//     const items1 = data1.items;
//     const items2 = data2.items;
//     const allItems = [...items1, ...items2];
//     const currentItems = getCurrentItems(allItems);
//     const sortedItems = currentItems.sort((a, b) => b.published - a.published);
//     sortedItems.forEach((item) => console.log(item));
//     return sortedItems;
//   })
//   .catch((error) => console.log(error));

// ============================================================================================

// Promise.allSettled() 1: Multiple API Responses
// Fetch data from multiple APIs using fetch(). After fetching from all APIs, use
// Promise.allSettled() to handle all the responses, regardless of whether they succeeded or
// failed. You want to log both successful and unsuccessful responses, along with relevant
// error messages.

// const url1 = 'https://invalid-url-that-will-reject.com';
// const url2 = 'https://reqres.in/api/users';

// const promise1 = fetch(url1);
// const promise2 = fetch(url2);

// Promise.allSettled([promise1, promise2])
//   .then((results) => {
//     const rejected = results.filter((result) => result.status === 'rejected');
//     rejected.forEach((error) => console.log(error));

//     const resolved = results
//       .filter((result) => result.status === 'fulfilled')
//       .map((result) => result.value);
//     return resolved;
//   })
//   .then((resolved) => console.log(resolved))
//   .catch((error) => console.log(error));

// Output:
// {status: 'rejected', reason: TypeError: Failed to parse URL from
//     at Ob…h (node:internal/deps/undici/undici:11118:11…}
// (1) [Response]

// ============================================================================================

// promise.race() 1: Fastest Response
// Use promise.race() to get the fastest response from two apis and display the data from
// that response.

// const url1 = 'https://jsonplaceholder.typicode.com/users';
// const url2 = 'https://reqres.in/api/users';

// const promise1 = fetch(url1);
// const promise2 = fetch(url2);

// Promise.race([promise1, promise2])
//   .then((response) => response.json())
//   .then((data) => data.data.forEach((item) => console.log(item))) // Logs the url2 data
//   .catch((error) => console.log(error));

// ============================================================================================

// Promise.resolve() 1: Caching layer
// Add a caching layer to avoid making unnecessary API requests for the same data.

// const url = 'https://jsonplaceholder.typicode.com/users';

// const cache = new Map();

// fetch(url)
//   .then((response) => {
//     if (cache.has(url)) {
//       return Promise.resolve(cache.get(url));
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     cache.set(url, data); // Cash data
//     console.log('First request data:', data);
//     return data;
//   })
//   .catch((error) => console.log(error));

// setTimeout(() => {
//   fetch(url)
//     .then((response) => {
//       if (cache.has(url)) {
//         return Promise.resolve(cache.get(url));
//       } else {
//         console.log(response.json());
//       }
//     })
//     .then((data) => {
//       console.log('Second request data:', data); // Should be the same as the first request
//     })
//     .catch((error) => console.log(error));
// }, 3000);

// Output:
// First request data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// Second request data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// ============================================================================================

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

// promisification 5: Promisify firstFile(), secondFile() and combineFiles()

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

// Pagination with promises:
// Loop through each page of an API until there's no more data.

// const url = 'https://reqres.in/api/users?page=';

// function fetchPage(page) {
//   return fetch(url + page).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     return response.json();
//   });
// }

// function fetchAllPages() {
//   let page = 1;
//   const results = [];

//   function fetchNextPage() {
//     // Fetch data for the current page using the fetchPage function
//     return fetchPage(page).then((data) => {
//       // If the data array in the response is empty, return the results
//       if (data.data.length === 0) return results;

//       // If there is data, push it to the results array
//       results.push(data);
//       // Increment the page number for the next fetch
//       page++;
//       // Continue fetching the next page by recursively calling fetchNextPage
//       return fetchNextPage();
//     });
//   }

//   // Start the process by calling fetchNextPage for the first page
//   return fetchNextPage();
// }

// // Call fetchAllPages, which returns a promise
// // When the promise is resolved, log the resulting array to the console
// fetchAllPages()
//   .then((dataArray) => console.log(dataArray))
//   .catch((error) => console.error(error));

// ============================================================================================
