// input: [1, 2]
// expected: [[1], [2], [1, 2]]

// input: [1, 2, 3]
// expected: [[1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// input: [7]
// expected: [[7]]

// input: []
// expected: []

function subsets(arr) {
  const result = [];

  if (arr.length === 0) return result;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const rest = arr.filter((item) => item !== current);
    const remaining = subsets(rest);

    for (let j = 0; j < remaining.length; j++) {
      // ???
    }

    result.push([...rest]);
    result.push([current]);
  }

  result.push(arr);
  return result;
}

const result = subsets([1, 2, 3]);
console.log(result);
// result.forEach((item) => console.log(item));

module.exports = subsets;
