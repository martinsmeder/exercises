const checkValues = require('./check-values');

describe('checkValues', () => {
  it('returns true if every value in the array satisfies the callback condition', () => {
    const testCases = [
      { input: [1, 2, 3], callback: (item) => item > 0, expected: true },
      { input: [1, 2, 3], callback: (item) => item < 0, expected: false },
      { input: [], callback: (item) => item > 0, expected: true },
      { input: [0, 0, 0], callback: (item) => item === 0, expected: true },
      { input: [-1, -2, -3], callback: (item) => item < 0, expected: true },
    ];

    testCases.forEach(({ input, callback, expected }) => {
      const result = checkValues(input, callback);
      expect(result).toBe(expected);
    });
  });
});
