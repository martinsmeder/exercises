// Anagram Grouping:
// Write a function called `anagramGrouping` that takes an array of
// strings as input and returns an array of arrays, where each
// sub-array contains words that are anagrams of each other.

// Examples:
// anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
// Output: [['cat', 'act', 'tac'], ['dog', 'god']]

// anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']);
// Output: [['listen', 'silent', 'enlist'], ['hello'], ['world']]

// Hints:
// 1. You can use a map to store the anagram groups, where the key is
//    the sorted characters of each word, and the value is an array
//    of words that have the same sorted characters
// 2. You can sort a string by splitting it into an array of chars
//    and calling `.sort()` and then `join()` it back to a string
// 3. You can use `Array.from()` to convert a map to an array

function anagramGrouping(arr) {
  // Initiate empty map
  let map = new Map();

  // Loop through array
  arr.forEach((str) => {
    // Sort current string alphabetically
    const sorted = str.split('').sort().join('');
    // If the map doesn't have the sorted string as a key, set the
    // key to be the sorted string, and set the value to an array
    // containing the unsorted string
    if (!map.has(sorted)) map.set(sorted, [str]);
    // If the map already has the sorted string as a key, push the
    // unsorted string to the corresponding array
    else map.get(sorted).push(str);
  });

  // Return an array containing the values (arrays) from the map
  return Array.from(map.values());
}

module.exports = anagramGrouping;
