// Merge Sort Implementation:
// Implement a function called mergeSort that takes an array of numbers as
// an argument and returns a sorted array using the Merge Sort algorithm.

// Notes
// The Merge Sort algorithm divides the input array into smaller sub-arrays,
// sorts them separately, and then merges them back together in the correct
// order.

// Examples:
// console.log(mergeSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
// console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

function mergeSort(arr) {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves and recursively call mergeSort on
  // each half
  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2));

  function merge(left, right) {
    const merged = [];
    let leftIndex = 0; // Initialize an index for the left array
    let rightIndex = 0; // Initialize an index for the right array

    // Compare elements from both halves and merge them in ascending order
    while (leftIndex < left.length && rightIndex < right.length) {
      // If the current element in the left array is smaller than the
      // current element in the right array
      if (left[leftIndex] < right[rightIndex]) {
        // Add the current element from the left array to the merged array
        merged.push(left[leftIndex]);
        // Move to the next element in the left array
        leftIndex++;
      } else {
        // If the current element in the right array is smaller than or
        // equal to the current element in the left array, add the current
        // element from the right array to the merged array
        merged.push(right[rightIndex]);
        // Move to the next element in the right array
        rightIndex++;
      }
    }

    // Extract any remaining elements from the left and right array
    const mergedLeft = left.slice(leftIndex);
    const mergedRight = right.slice(rightIndex);
    // Concatenate the merged array with the remaining elements from both
    // halves... if no remaining elements, just return the merged array
    return merged.concat(mergedLeft).concat(mergedRight);
  }

  // Return the result of merging the sorted left and right halves
  return merge(left, right);
}

module.exports = mergeSort;
