const parseArray = require('./parse-array');

describe('parseArray', () => {
  it('counts the total number of integers in a multi-dimensional array', () => {
    const testCases = [
      { input: [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]], expected: 7 },
      { input: [1, [2, 3]], expected: 3 },
      { input: [1, 2, 3, [[6, [7]]]], expected: 5 },
      { input: [], expected: 0 },
      { input: 5, expected: 1 },
      { input: [1, [2, 3], 'four', [5, 6], 7], expected: 6 },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = parseArray(input);
      expect(result).toBe(expected);
    });
  });
});
