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
// const keyword = 'artificial';

// const fetchJson = (url) => {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const filterByKeyword = (items, keyword) =>
//   items.filter((item) => item.title.includes(keyword));

// const extractTitleAndUrl = (items) =>
//   items.map((item) => `Title: ${item.title}\nUrl: ${item.url}`);

// const processFeed = (url, keyword) => {
//   return fetchJson(api + url).then((data) => {
//     const filteredItems = filterByKeyword(data.items, keyword);
//     return extractTitleAndUrl(filteredItems);
//   });
// };

// const processPromises = urls.map((url) => processFeed(url, keyword));

// Promise.all(processPromises)
//   .then((results) => {
//     const allParsedItems = results.flat();
//     allParsedItems.forEach((item) => console.log(item));
//   })
//   .catch((error) => console.error('An error occurred:', error));

// ============================================================================================

// promise.all() 3: Fetch and Group by Source
// 1. Fetch data from all the provided feed URLs using the given API.
// 2. Use Promise.all() to wait for all the fetch requests to complete.
// 3. Group the fetched items by their respective sources (deepmind, mitNews).
// 4. Log the titles and URLs of items for each source separately.

// ============================================================================================
