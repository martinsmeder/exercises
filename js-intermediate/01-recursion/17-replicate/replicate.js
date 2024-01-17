// Replicate:
// The function should return an array containing repetitions of
// the number argument. For instance, replicate(3, 5) should return
// [5,5,5]. If the times argument is negative, return an empty array.

// Examples:
// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate(times, number) {
  const results = [];

  // If times argument is less than 1, return an empty array
  if (times < 1) {
    return results;
  }

  // Get the resulting array from recursively calling replicate with
  // a decremented times argument for each call
  const result = replicate(times - 1, number);
  // Spread out all items in the array, and push them into the results
  // array together with the current number argument
  results.push(...result, number);

  // Return the resulting array
  return results;
}

module.exports = replicate;
