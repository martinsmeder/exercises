function fibonacci(num) {
  // Base case:
  if (num < 2) return num;
  // Get result of "current" call (num - 1) > Get result of "previous" call (num - 2)
  // > Return sum of adding them together (Fibonacci of num)
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
