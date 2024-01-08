function numberRange(x, y) {
  // Base-case:
  // When y is equal to x, return an array containing x
  if (y === x) return [x];

  // Recursive case:
  // Recursively generate the array of numbers from x to y - 1
  const numbers = numberRange(x, y - 1);
  // Add y to array
  numbers.push(y);
  // Return the updated array containing the range from x to y
  return numbers;
}

module.exports = numberRange;
