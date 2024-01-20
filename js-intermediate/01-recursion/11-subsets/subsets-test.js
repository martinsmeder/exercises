const subsets = require('./subsets');

describe('subsets', () => {
  it('returns all subsets of a given array', () => {
    const testCases = [
      { input: [1, 2], expected: [[], [1], [2], [1, 2]] },
      {
        input: [1, 2, 3],
        expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      },
      { input: [7], expected: [[], [7]] },
      { input: [], expected: [[]] },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = subsets(input);
      const sortedResult = result.sort();
      const sortedExpected = expected.sort();
      expect(sortedResult).toEqual(sortedExpected);
    });
  });
});
