// Sum squares:
// Write a function that takes an array that may contain nested
// arrays, and sum the squares (the number multiplied by itself)
// of each number stored in the array

// Examples:
// console.log(SumSquares([1,2,3])); // 1 + 4 + 9 = 14
// console.log(SumSquares([[1,2],3])); // 1 + 4 + 9 = 14
// console.log(SumSquares([[[[[[[[[1]]]]]]]]])); // 1 = 1
// console.log(SumSquares([10,[[10],10],[10]])); // 100 + 100 + 100 + 100 = 400

function sumSquares(arr) {
  // Base case: If the array is empty, return 0
  if (arr.length === 0) return 0;

  // Initialize the sum variable to accumulate the squares
  let sum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is an array
    if (Array.isArray(arr[i])) {
      // Recursively calculate the sum of squares for the nested array
      const result = sumSquares(arr[i]);
      // Accumulate the result to the overall sum
      sum += result;
    } else {
      // Square the individual number and accumulate it to the sum
      const squared = arr[i] * arr[i];
      sum += squared;
    }
  }

  // Return the final sum of squares
  return sum;
}

module.exports = sumSquares;
