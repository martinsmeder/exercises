const letterCasePermutation = require('./letter-case-permutations');

describe('letterCasePermutation', () => {
  it('should return all possible permutations by changing the case of each character', () => {
    const result = letterCasePermutation('abcd');
    const expected = [
      'abcd',
      'Abcd',
      'aBcd',
      'ABcd',
      'abCd',
      'AbCd',
      'aBCd',
      'ABCd',
      'abcD',
      'AbcD',
      'aBcD',
      'ABcD',
      'abCD',
      'AbCD',
      'aBCD',
      'ABCD',
    ];
    expect(result).toEqual(expected);
  });

  it('should return an array with an empty string for an empty input', () => {
    const result = letterCasePermutation('');
    const expected = [''];
    expect(result).toEqual(expected);
  });
});
