// Longest Consecutive Sequence:
// Write a function called longestConsecutiveSequence that takes an
// array of integers as input and returns the length of the longest
// consecutive sequence of integers in the array.

// A consecutive sequence is a sequence of consecutive integers,
// meaning each integer in the sequence is exactly one more than
// the previous integer.

// Examples:
// longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);
// // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])
// longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]);
// // Output: 10 (The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

// Constraints:
// The input array will contain only integers
// The input array may contain duplicate integers

function longestConsecutiveSequence(arr) {
  // Sort array
  const sorted = arr.sort((a, b) => a - b);
  // Initiate set by adding first element from sorted array
  let sequence = new Set([sorted[0]]);

  // Loop trough sorted array
  for (let i = 0; i < sorted.length; i++) {
    // If current element + 1 is the same as the next element in array
    if (sorted[i] + 1 === sorted[i + 1])
      // Add next element to set
      sequence.add(sorted[i + 1]);
  }

  // Return the size of the set
  return sequence.size;
}

module.exports = longestConsecutiveSequence;
