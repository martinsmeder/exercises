// Quick Sort Implementation:
// Implement a function called quickSort that takes an array of numbers
// as an argument and returns a sorted array using the Quick Sort algorithm.

// Hints:
// 1. Pivot Selection: The choice of pivot significantly affects the
//    efficiency of Quick Sort. Common pivot selection strategies include
//    choosing the first, last, or middle element, or using the median of
//    three random elements.
// 2. Partitioning: Implement a partitioning step that rearranges the elements
//    such that elements less than the pivot are on the left, and elements
//    greater than the pivot are on the right.
// 3. Recursion: Recursively apply the Quick Sort algorithm to the subarrays
//    on either side of the pivot.

// Examples:
// console.log(quickSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
// console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

function quickSort(arr) {
  // Base-case: If array length equal to or less than 1, return array
  if (arr.length <= 1) return arr;

  // Select last element as pivot
  const pivot = arr[arr.length - 1];

  // Initiate empty left and right arrays
  const left = [];
  const right = [];

  // Loop though array, excluding pivot element
  for (let i = 0; i < arr.length - 1; i++) {
    // If current element is lower than pivot
    if (arr[i] < pivot) {
      left.push(arr[i]); // Push to left array
    } else {
      right.push(arr[i]); // Otherwise, push to right array
    }
  }

  // Get resulting arrays from recursively calling quickSort on left and right
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Merge the resulting arrays, with the pivot element placed in middle
  return [...sortedLeft, pivot, ...sortedRight];
}

module.exports = quickSort;
