// test('Permutations', () => {
//   expect(permutations('abc')).toEqual([
//     'abc',
//     'acb',
//     'bac',
//     'bca',
//     'cab',
//     'cba',
//   ]);
//   expect(permutations('dog')).toEqual([
//     'dog',
//     'dgo',
//     'odg',
//     'ogd',
//     'gdo',
//     'god',
//   ]);
//   expect(permutations('')).toEqual(['']);
// });

function permutations(str) {
  const result = [];

  // Base-case:
  if (str.length === 0) {
    result.push('');
    return result;
  }

  // Recursive case:
  // ???
}

module.exports = permutations;

// Base-case:
// str.length is 0 > return array with empty string

// Recursive case:
// Loop through string
// Extract one letter and rest of letters
// Recursively call permutations(str) on rest of letters
// Use nested loop
