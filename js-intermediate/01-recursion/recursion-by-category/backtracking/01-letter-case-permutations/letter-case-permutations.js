// Letter Case Permutation:
// Create a function letterCasePermutation that takes a string
// containing alphabetic characters and returns all possible
// permutations by changing the case of each character. For instance,
// if given the string "a1b2", the function should return
// ["a1b2", "a1B2", "A1b2", "A1B2"].

function letterCasePermutation(str) {
  const results = [];

  if (str.length === 0) {
    results.push('');
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);
  }

  return results;
}

module.exports = letterCasePermutation;

console.log(letterCasePermutation('a1b2'));

// const string = 'a1b2';
// console.log(string.toUpperCase());

// Base-case:
// String.length is 0 > push empty string ("") to results array,
// and return results array

// Recursive case:
// Get to base case by removing one letter, and recursively calling
// the function on the rest of the letters
// The string has to be in the same order always, so i need to figure
// out a way to insert the transformed letters at the correct index
// position
