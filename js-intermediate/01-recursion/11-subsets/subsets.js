function subsets(arr) {
  // Base case: Return empty array as the only subset
  if (arr.length === 0) {
    return [[]];
  }

  // Get current element
  const current = arr[0];

  // Get rest of elements (excluding current)
  const rest = arr.slice(1);

  // Recursively generate subsets without the current element
  const subsetsWithoutCurrent = subsets(rest);

  // For each subset without current element, create a new subset that includes the current element
  const subsetsWithCurrent = subsetsWithoutCurrent.map((subset) => [
    // Combine the current element with each subset obtained without it
    current,
    ...subset,
  ]);

  // Combine subsets without current element and subsets with the current element
  return subsetsWithoutCurrent.concat(subsetsWithCurrent);
}

module.exports = subsets;
