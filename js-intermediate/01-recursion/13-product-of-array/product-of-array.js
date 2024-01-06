// Product of an array:
// Write a function called productOfArray which takes in an array
// of numbers and returns the product of them all.

function productOfArray(arr) {
  // Base-cases:
  // Return 1 when the array is empty (e.g., product of no elements)
  if (arr.length === 0) return 1;
  // Return the single element when only one element
  if (arr.length === 1) return arr[0];

  // Destructure array into its first element and the rest of the elements
  const [first, ...rest] = arr;
  // Recursively call productOfArray with the rest of the elements
  const remaining = productOfArray(rest);

  // Calculate the product of the first element and the remaining elements
  return first * remaining;
}

module.exports = productOfArray;
