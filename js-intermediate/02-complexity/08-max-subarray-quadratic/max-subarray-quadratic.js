// Instructions:
// Write a function called maxSubarraySum that takes an array of
// integers and a positive integer k as input. The function should
// find the maximum sum of any subarray of length k using an O(n^2)
// solution by using nested for loops.

// Examples:
// const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
// const k1 = 3;
// console.log(maxSubarraySum(arr1, k1)); // Output: 24

function maxSubarraySum(arr, num) {
  // Initialize the max variable to track the maximum sum
  let max = 0;

  // Loop through the array to consider each possible subarray of length 'num'
  for (let i = 0; i <= arr.length - num; i++) {
    // Create a subarray of length 'num' starting from index 'i'
    const subarray = arr.slice(i, i + num);

    // Initialize the current variable to accumulate the sum of values in the subarray
    let current = 0;

    // Loop through each element in the subarray and accumulate the sum
    for (let j = 0; j < subarray.length; j++) {
      current += subarray[j];
    }

    // Update the max variable if the current sum is higher
    if (current > max) max = current;
  }

  // Return the maximum sum found in any subarray
  return max;
}

module.exports = maxSubarraySum;
