const productOfArray = require('./product-of-array');

describe('productOfArray', () => {
  it('returns the product of all numbers in an array', () => {
    expect(productOfArray([1, 2, 3])).toEqual(6);
    expect(productOfArray([4, 5, 6])).toEqual(120);
    expect(productOfArray([2, 4, 6, 8])).toEqual(384);
    expect(productOfArray([10])).toEqual(10);
    expect(productOfArray([])).toEqual(1);
  });
});
