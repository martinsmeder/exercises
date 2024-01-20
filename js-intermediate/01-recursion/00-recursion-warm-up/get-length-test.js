const getLength = require('./get.length');

describe('getLength', () => {
  it('returns the correct length of an array', () => {
    // Test cases
    const numbers = [1, 2, 3, 4, 5];
    const emptyArray = [];
    const arrayWithOneElement = [9];

    // Assertions
    expect(getLength(numbers)).toBe(5); // Array with multiple elements
    expect(getLength(emptyArray)).toBe(0); // Empty array
    expect(getLength(arrayWithOneElement)).toBe(1); // Array with one element
  });
});
