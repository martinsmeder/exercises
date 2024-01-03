// Array Length:
// Implement a function to find the length of an array using
// recursion, without relying on the .length array method.

function getLength(arr) {
  // Base-case:
  if (arr[0] === undefined) return 0;

  // Recursive case:
  const sliced = arr.slice(1); // Get all elements except the first one
  return 1 + getLength(sliced); // Add 1 to the returned count
}

module.exports = getLength;

// Example arr = [1, 2, 3, 4, 5]:
// 1 sliced becomes [2, 3, 4, 5] > recursive call getLength([2, 3, 4, 5]) > 1 is saved
// 2 sliced becomes [3, 4, 5] > recursive call getLength([3, 4, 5]) > 2 is saved
// 3 sliced becomes [4, 5] > recursive call getLength([4, 5]) > 3 is saved
// 4 sliced becomes [5] > recursive call getLength([5]) > 4 is saved
// 5 sliced becomes [] > recursive call getLength([]) > 5 is saved
//   Base case: returns 0
// 1 (0 from base case) + 1 = 1
// 2 (1 from recursive call) + 1 = 2
// 3 (2 from recursive call) + 1 = 3
// 4 (3 from recursive call) + 1 = 4
// 5 (4 from recursive call) + 1 = 5 > Computation is finished and final value (5) is returned
