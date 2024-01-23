// Word Frequency Counter using HashTable:
// Write a function called wordInstanceCounter that takes a string
// and a word as input and returns the number of instances of that
// word in the string. This function should count the occurrences
// of the specified word, ignoring case and excluding punctuation.

// Examples:
// console.log(
//     wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
//   );
// // Output: 2
// console.log(
// wordInstanceCounter(
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'ipsum'
// )
// );
// // Output: 1
// console.log(wordInstanceCounter('Hello, world!', 'hello'));
// // Output: 1
// console.log(wordInstanceCounter('Hello, Hello, Hello!', 'hello'));
// // Output: 3

// Constraints:
// The input string will only contain letters, spaces, and punctuation
// marks.

const HashTable = require('./HashTable');

function wordInstanceCounter(string, word) {
  // Transform string into array
  const lettersOnlyArray = string
    .replace(/[^\w\s]/g, '') // Remove special characters
    .toLowerCase() // Set to lowercase
    .split(' '); // Split into array of strings

  // Initiate counter variable
  let count = 0;
  // Initiate and instance of custom hashTable with length of 1
  const ht = new HashTable(1);
  // Set word as key and count as value
  ht.set(word.toLowerCase(), count);

  // Loop though the array of strings
  for (let i = 0; i < lettersOnlyArray.length; i++) {
    // If word at current index is the same as input word
    if (lettersOnlyArray[i] === word.toLowerCase()) {
      // Increment count
      count += 1;
      // Replace the key, value pair with the updated count
      ht.set(word.toLowerCase(), count);
    }
  }

  // Return the value (count) of the corresponding key (input word)
  return ht.get(word.toLowerCase());
}

module.exports = wordInstanceCounter;
