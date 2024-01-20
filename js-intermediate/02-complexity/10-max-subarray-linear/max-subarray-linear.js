// Write a function called `maxSubarraySum` that takes an array of
// integers and a positive integer `k` as input. The function should
// find the maximum sum of any subarray of length `k` using an O(n)
// solution by using the sliding window technique.

// test('Finding maximum subarray sum using O(n) solution', () => {
//     const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
//     const k1 = 3;
//     expect(maxSubarraySum(arr1, k1)).toBe(24);
//   });

function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // If array is empty or has more than k items, return error message
  if (arr.length === 0 || arr.length < k) return 'Invalid input';

  // Get sum of first subArray
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Set maxSum to the sum of the first subarray
  maxSum = windowSum;

  // Get sum of the remaining subArrays
  for (let i = 0; i <= arr.length - k; i++) {
    // If windowSum is higher than maxSum, update maxSum
    if (windowSum > maxSum) maxSum = windowSum;

    // Update the windowSum by subtracting the leftmost element and adding the rightmost element
    windowSum = windowSum - arr[i] + arr[i + k];
  }

  return maxSum;
}

module.exports = maxSubarraySum;
