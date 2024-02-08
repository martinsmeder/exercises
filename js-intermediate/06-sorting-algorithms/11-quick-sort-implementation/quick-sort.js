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
  const originalPivot = arr[arr.length - 1];
  const left = [];
  const right = [originalPivot];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < originalPivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }
  console.log(left, right);
}

const toSort = [20, 13, 3, 2, 10, 1, 5, 6];
console.log(quickSort(toSort));

module.exports = quickSort;

// rearrange
// recurse on both subArrays
