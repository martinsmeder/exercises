function arraySum(arr) {
  if (arr.length === 0) return 0;

  const [first, ...rest] = arr;
  return first + arraySum(rest);
}

// Explanation:
// Base case: When the array is empty, return 0.
// Recursive case:
// 1. Destructure the array into the first element (first) and the rest of the elements (rest).
// 2. Recursively call the function on the rest of the array.
// 3. Return the sum of the first element and the result of the recursive call on the rest of the array.

// Example with [1, 2, 3, 4, 5]:
// 1. first = 1, rest = [2, 3, 4, 5], returns 1 + getSum([2, 3, 4, 5])
// 2. first = 2, rest = [3, 4, 5], returns 2 + getSum([3, 4, 5])
// 3. first = 3, rest = [4, 5], returns 3 + getSum([4, 5])
// 4. first = 4, rest = [5], returns 4 + getSum([5])
// 5. first = 5, rest = [], returns 5 + getSum([]) [Base case reached, returns 0]
// Calculation:
// 5 + 0 = 5 (from the base case)
// 4 + 5 = 9
// 3 + 9 = 12
// 2 + 12 = 14
// 1 + 14 = 15 > Final computed sum (15) is returned.

module.exports = arraySum;
