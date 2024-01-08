// Parse a multi-dimensional array:
// Given a multi-dimensional integer array, return the total number of integers stored inside
// this array.

// const seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]; // Should output: 7

function parseArray(arr) {
  // Base case:
  // If arr is not an array and is an integer, return 1, otherwise return 0
  if (!Array.isArray(arr)) {
    return Number.isInteger(arr) ? 1 : 0;
  }

  let count = 0;

  // Iterate through each element in the array
  for (const element of arr) {
    // Recursively count integers in nested arrays
    count += parseArray(element);
  }

  // Return accumulated count
  return count;
}

module.exports = parseArray;
