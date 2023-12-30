function factorial(num) {
  // Base-case:
  if (num === 0) return 1;

  // Multiply current num by previous num (num-1) until reaching
  // base-case, and return result
  return num * factorial(num - 1);
}

module.exports = factorial;
