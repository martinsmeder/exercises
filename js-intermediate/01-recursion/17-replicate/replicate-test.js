const replicate = require('./replicate');

test('replicate function', () => {
  expect(replicate(3, 5)).toEqual([5, 5, 5]);

  expect(replicate(1, 69)).toEqual([69]);

  expect(replicate(-2, 6)).toEqual([]);
});
