// Check all values in an array:
// Write a function called "all" which accepts an array and a
// callback and returns true if every value in the array returns
// true when passed as parameter to the callback function

function checkValues(arr, callback) {
  // Base-case:
  if (arr.length === 0) return true;

  // Get first and rest
  const [first, ...rest] = arr;
  // Get result of calling the callback function on first element
  const firstResult = callback(first);
  // Get result of recursively calling checkValues on the rest
  const restResult = checkValues(rest, callback);

  // Return the output (true/false) of combining the results
  return firstResult && restResult;
}

module.exports = checkValues;
