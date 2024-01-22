// Two Sum:
// Write a function called twoSum that takes an array of integers
// and a target integer as input and returns an array of indices of
// the two numbers that add up to the target.

// Examples:
// console.log(twoSum([2, 7, 11, 15], 9));
// // Output: [0, 1] (2 + 7 = 9)

// console.log(twoSum([3, 2, 4], 6));
// // Output: [1, 2] (2 + 4 = 6)

// console.log(twoSum([3, 3], 6));
// // Output: [0, 1] (3 + 3 = 6)

function twoSum(arr, target) {
  let indices = [];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    // Set the value that together with current array index will
    // add up to the target
    const complement = target - arr[i];

    // Check if the complement is in the set
    if (set.has(complement)) {
      // Push the indices of the pair that sums up to the target
      // to the indices array
      indices.push(arr.indexOf(complement));
      indices.push(i);
    }

    // Add the current number to the set
    set.add(arr[i]);
  }

  return indices;
}

module.exports = twoSum;
