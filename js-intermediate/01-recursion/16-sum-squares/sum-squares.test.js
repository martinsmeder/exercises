const sumSquares = require('./sum-squares');

describe('Sum Squares Function', () => {
  it('should return the sum of squares for a simple array', () => {
    expect(sumSquares([1, 2, 3])).toBe(14);
  });

  it('should return the sum of squares for an array with nested arrays', () => {
    expect(sumSquares([[1, 2], 3])).toBe(14);
  });

  it('should return the sum of squares for an array with deeply nested arrays', () => {
    expect(sumSquares([[[[[[[[[1]]]]]]]]])).toBe(1);
  });

  it('should return the sum of squares for an array with multiple nested arrays', () => {
    expect(sumSquares([10, [[10], 10], [10]])).toBe(400);
  });

  it('should handle an empty array and return 0', () => {
    expect(sumSquares([])).toBe(0);
  });
});
