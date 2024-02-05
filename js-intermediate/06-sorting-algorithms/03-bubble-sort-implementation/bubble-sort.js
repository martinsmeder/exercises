// Bubble Sort Algorithm:
// Implement a function called bubbleSort that takes an array of numbers as
// an argument and returns a sorted array using the Bubble Sort algorithm.

// Constraints
// The input array can contain any number of elements.
// The elements in the input array are unique and positive integers.

// Examples:
// console.log(bubbleSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

function bubbleSort(arr) {
  // Outer loop
  for (let i = 1; i < arr.length; i++) {
    // Inner loop
    for (let j = 1; j < arr.length; j++) {
      // If previous number is higher than current number
      if (arr[j - 1] > arr[j]) {
        // Create a copy of current item
        const copy = arr[j];
        // Assign previous item to current item
        arr[j] = arr[j - 1];
        // Assign copy of current item to previous item
        arr[j - 1] = copy;
      }
    }
  }

  // Return sorted array
  return arr;
}

module.exports = bubbleSort;
