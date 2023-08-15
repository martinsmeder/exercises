// Exercise 4: Split into Chunks
// Write a function that takes an array and a chunk size as input and returns a new array
// with the original array split into subarrays of the specified chunk size.

// Use splice and push the result of each splice into the new array

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function splitIntoChunks(arr, chunk) {
  const newArr = [];
  while (arr.length > 0) {
    const subArr = arr.splice(0, chunk);
    newArr.push(subArr);
  }
  console.log(newArr);
  return newArr;
}

splitIntoChunks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
