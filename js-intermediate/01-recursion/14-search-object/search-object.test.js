const contains = require('./search-object');

const nestedObject = {
  data: {
    info: {
      stuff: 'foo',
      otherStuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'bar',
          },
        },
      },
    },
  },
};

describe('contains', () => {
  it('should return true if value is found in the nested object', () => {
    expect(contains(nestedObject, 'foo')).toBe(true);
    expect(contains(nestedObject, 'bar')).toBe(true);
    expect(contains(nestedObject, 44)).toBe(true);
  });

  it('should return false if value is not found in the nested object', () => {
    expect(contains(nestedObject, 'abc')).toBe(false);
    expect(contains(nestedObject, 100)).toBe(false);
    expect(contains(nestedObject, null)).toBe(false);
  });
});
