function flattenArray(arr) {
  let result = [];

  // Loop through array
  arr.forEach((item) => {
    // If item is array
    if (Array.isArray(item)) {
      // Concatenate flattened elements from recursive calls on
      // nested arrays, and update result
      result = result.concat(flattenArray(item));
    } else {
      // Otherwise, add item to result
      result.push(item);
    }
  });

  return result;
}

module.exports = flattenArray;
