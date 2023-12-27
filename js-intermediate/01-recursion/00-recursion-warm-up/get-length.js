// Array Length:
// Implement a function to find the length of an array using
// recursion, without using the .length method.

// Base-case:
// Array empty > return 0

// Recursive case:
// Slice the array (except for the first element) and recursively call arrayLength
// Increment a count for each recursive call
// Return the count representing the length of the array

function getLength(arr) {
  if (arr[0] === undefined) return 0;
}
