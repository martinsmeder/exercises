// Letter Case Permutation:
// Create a function letterCasePermutation that takes a string
// containing alphabetic characters and returns all possible
// permutations by changing the case of each character. For instance,
// if given the string "abcd", the function should return
// ["abcd", "abcD", "abCd", "abCD", "aBcd", "aBcD", "aBCd", "aBCD",
// "Abcd", "AbcD", "AbCd", "AbCD", "ABcd", "ABcD", "ABCd", "ABCD"]

function letterCasePermutation(str) {
  const results = [];

  // Base case
  if (str.length === 0) {
    results.push('');
    return results;
  }

  // Extract the first character
  const current = str[0];
  // Generate permutations for the rest of the string
  const permutations = letterCasePermutation(str.slice(1));

  // Create permutations with current character
  permutations.forEach((permutation) => {
    // Add version with current character in lowercase
    results.push(current.toLowerCase() + permutation);
    // Add version with current character in uppercase
    results.push(current.toUpperCase() + permutation);
  });

  return results;
}

module.exports = letterCasePermutation;
