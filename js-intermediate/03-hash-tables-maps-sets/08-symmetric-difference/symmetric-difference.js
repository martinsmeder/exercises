// Symmetric Difference:
// We'll start with a pretty simple challenge. Write a function
// called `symmetricDifference` that takes in two arrays and returns
// an array containing the symmetric difference of the two arrays.
// The symmetric difference of two arrays is a new array containing
// only the elements that are present in one of the arrays but not
// both, with no duplicates.

// Examples:
// symmetricDifference([1, 2, 3], [3, 4, 5]);
// // Output: [1, 2, 4, 5]

// symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]);
// // Output: [1, 5]

// symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
// // Output: []

// symmetricDifference([1, 2, 3], [4, 5, 6]);
// // Output: [1, 2, 3, 4, 5, 6]

function symmetricDifference(firstArr, secondArr) {
  // Convert arrays to sets to remove duplicates
  let firstSet = new Set(firstArr);
  const secondSet = new Set(secondArr);

  // Loop though second set
  for (const number of secondSet) {
    // If firstSet has current number, delete it from firstSet
    if (firstSet.has(number)) firstSet.delete(number);
    // Otherwise add the current number to firstSet
    else firstSet.add(number);
  }

  // Return the firstSet as an array
  return Array.from(firstSet);
}

module.exports = symmetricDifference;
