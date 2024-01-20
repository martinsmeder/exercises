// Word Frequency Counter:
// Write a function called wordFrequencyCounter that takes a string as
// input and returns a map that represents the frequency of each word
// in the string. We did a similar challenge way back that counted the
// occurrences of a character. This function should count the
// occurrences of each word, ignoring case and excluding punctuation.

// Constraints:
// The input string will only contain letters, spaces, and punctuation
// marks.

// Examples:
// wordFrequencyCounter('The quick brown fox jumps over the lazy dog.');
// Output: Map { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }

// wordFrequencyCounter(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
// );
// Output: Map { 'lorem' => 1, 'ipsum' => 1, 'dolor' => 1, 'sit' => 1, 'amet' => 1, 'consectetur' => 1, 'adipiscing' => 1, 'elit' => 1 }

function wordFrequencyCounter(str) {
  // Check if the input string is empty, and return an empty Map if so
  if (str.length === 0) return new Map();

  // Replace dots with an empty string, convert to lowercase, and split the string into an array of words
  const arr = str.replace(/\./g, '').toLowerCase().split(' ');

  // Create a new Map to store word frequencies
  let map = new Map();

  // Iterate through the array of words
  arr.forEach((word) => {
    // Check if the word is already in the map
    if (map.has(word)) {
      // If yes, get the current count, increment it, and update the map
      let amount = map.get(word);
      map.set(word, amount + 1);
    } else {
      // If no, add the word to the map with a count of 1
      map.set(word, 1);
    }
  });

  // Return the final map representing word frequencies
  return map;
}

module.exports = wordFrequencyCounter;
