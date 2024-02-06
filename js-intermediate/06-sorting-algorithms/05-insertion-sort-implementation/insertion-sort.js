// Insertion Sort Algorithm:
// Implement a function called insertionSort that takes an array of numbers
// as an argument and returns a sorted array using the Insertion Sort algorithm.

// Constraints:
// The input array can contain any number of elements.
// The elements in the input array are unique and positive integers.

// Examples:
// console.log(insertionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
// console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

function insertionSort(arr) {
  // Loop through original array
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i]; // Get current element
    let j = i - 1; // Get index of last element in sorted part

    // Loop through sorted part
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]; // Shift elements to the right
      j--; // Decrement index
    }

    // Insert current element at correct position
    arr[j + 1] = currentElement;
  }

  // Return sorted array
  return arr;
}

module.exports = insertionSort;
