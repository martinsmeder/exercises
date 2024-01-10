# Backtracking in Programming:

Backtracking is an algorithmic technique where a problem is solved incrementally by trying different possible solutions. When a choice is made, if it leads to a dead-end or an incorrect solution, the algorithm backtracks to the previous decision and explores a different path.

## Problem: Permutations of a String

Given a string, such as "ABC", we want to find all possible combinations of its characters.

Here's a step-by-step breakdown of how recursion can solve this problem:

### Base Case:

If the input string is empty, return an array with an empty string as the only combination.

### Recursive Step:

For each character in the string:

- Take one character as the "current" character and remove it from the remaining string.
- Recursively find all combinations of the remaining characters.
- Combine the "current" character with each combination of the remaining characters to form new combinations.

### Code:

```js
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

const result = permutations('ABC');
console.log(result); // ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']
```

### Explanation - permutations('abc')

First iteration of outer loop:
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
