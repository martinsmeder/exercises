function permutations(str) {
  const result = [];

  // Base-case:
  if (str.length === 0) {
    result.push('');
    return result;
  }

  // Recursive case:
  for (let i = 0; i < str.length; i++) {
    // Get current character
    const current = str[i];
    // Get rest of characters
    const rest = str.slice(0, i) + str.slice(i + 1);
    // Recursive call with the rest of the string
    const subPermutation = permutations(rest);

    for (let j = 0; j < subPermutation.length; j++) {
      // Combine current character with sub-permutations
      const permutation = current + subPermutation[j];
      // Add the permutation to the result array
      result.push(permutation);
    }
  }

  return result;
}

module.exports = permutations;

// ================================ Example - permutations('abc') ================================
// First iteration of outer loop:
// 1. i = 0, current = 'a', rest = 'bc'
// 2. subPermutation = permutations('bc')
// 3. i = 0, current = 'b', rest = 'c'
// Base case reached: [''] (for string 'c')
// 1. subPermutation = ['c']
// 2. subPermutation = ['bc', 'cb'] (for string 'bc')
// 3. subPermutation = ['abc', 'acb'] (for string 'abc')
// Result array: ['abc', 'acb']

// Second iteration of outer loop:
// 4. i = 1, current = 'b', rest = 'ac'
// 5. subPermutation = permutations('ac')
// 6. i = 0, current = 'a', rest = 'c'
// Base case reached: [''] (for string 'c')
// 4. subPermutation = ['c']
// 5. subPermutation = ['ac', 'ca'] (for string 'ac')
// 6. subPermutation = ['bac', 'bca'] (for string 'bac')
// Result array: ['abc', 'acb', 'bac', 'bca']

// Third iteration of outer loop:
// 7. i = 2, current = 'c', rest = 'ab'
// 8. subPermutation = permutations('ab')
// 9. i = 0, current = 'a', rest = 'b'
// Base case reached: [''] (for string 'b')
// 7. subPermutation = ['b']
// 8. subPermutation = ['ab', 'ba'] (for string 'ab')
// 9. subPermutation = ['cab', 'cba'] (for string 'cab')
// Result array: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
