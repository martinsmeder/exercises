const maxSubarraySum = require('./max-subarray-quadratic');

test('Finding maximum subarray sum using O(n^2) solution', () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(maxSubarraySum(arr1, k1)).toBe(24);
});
