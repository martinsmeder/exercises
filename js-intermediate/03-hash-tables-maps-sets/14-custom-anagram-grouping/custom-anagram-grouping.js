// Anagram Grouping Challenge:
// Create a function called anagramGrouping to use the HashTable
// class that we created. The function should take an array of words
// as input and return an array of arrays, where each inner array
// represents a group of anagrams.

// Example:
// anagramGrouping(['listen', 'silent', 'hello', 'world', 'act', 'cat']);
// // Output: [['listen', 'silent'], ['act', 'cat'], ['hello'], ['world']]

const HashTable = require('./HashTable');

function anagramGrouping(arr) {
  // Initiate an instance of custom HashTable with a size of
  // array length
  const groups = new HashTable(arr.length);

  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // Sort current string alphabetically
    const sorted = arr[i].split('').sort().join('');
    // If groups doesn't have sorted string key, add the key
    // together with an an array containing the unsorted string
    if (!groups.has(sorted)) groups.set(sorted, [arr[i]]);
    // Otherwise push the unsorted string to the array that
    // corresponds with the current sorted string
    else groups.get(sorted).push(arr[i]);
  }

  // Return the grouped arrays
  return groups.getValues();
}

module.exports = anagramGrouping;
