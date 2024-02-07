// Selection Sort Implementation:
// Implement a function called selectionSort that takes an array of numbers
// as an argument and returns a sorted array using the Selection Sort algorithm

// Hints
// 1. Outer Loop: The main idea of this algorithm is to divide the array into
//    two parts: the "sorted" part and the "unsorted" part. The outer loop
//    will iterate through the unsorted part and select the minimum element
//    in each iteration.
// 2. Inner Loop: The inner loop will find the minimum element in the unsorted
//    part and swap it with the first element in the unsorted part. This
//    effectively moves the minimum element to the sorted part.
// 3. Current Minimum: Keep track of the index of the current minimum element
//    found in the inner loop. You will need this index to perform the swap.

// Examples:
// console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
// console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

function selectionSort(arr) {
  // Outer loop to iterate through each element in the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Inner loop to find the index of the minimum element in the unsorted
    // part of the array
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the element at index j is smaller than the element at the
      // assumed minimum index
      if (arr[j] < arr[minIndex]) {
        // If true, update the minimum index to the current index j
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element in the unsorted
    // part
    if (minIndex !== i) {
      // Using destructuring to swap elements without a temporary variable
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // Return the sorted array
  return arr;
}

module.exports = selectionSort;
