function power(x, y) {
  // Base-case:
  // In mathematics: x ** 0 = 1 (for any non-zero x)
  if (y === 0) return 1;

  // Recursive case:
  // Reduce the power by 1 and multiply x with the result of
  // power(x, y - 1) until the base case is reached
  return x * power(x, y - 1);
}

// Example: power(2, 3)
// 2 * power(2, 2) -> 2 * 4 -> 8
// 2 * power(2, 1) -> 2 * 2 -> 4
// 2 * power(2, 0) -> 2 * 1 -> 2
// Result: 8 is returned

module.exports = power;
