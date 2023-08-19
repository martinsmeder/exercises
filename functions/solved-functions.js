// closures 1: Counter Factory
// Create a function counterFactory that generates a counter function. The
// counter function should return the next count each time it's called. Each
// generated counter should be independent and maintain its own count.

// function counterFactory() {
//   let count = 0;
//   return () => (count += 1);
// }

// const first = counterFactory();
// console.log(first()); // 1
// console.log(first()); // 2
// console.log(first()); // 3
// const second = counterFactory();
// console.log(second()); // 1

// =========================================================================

// closures 2: Multiplier
// Implement a function multiplier that takes a factor as an argument and
// returns a function. The returned function should accept a number and return
// the product of that number and the factor.

// function multiplier(factor) {
//   return (num) => factor * num;
// }
// const factor5 = multiplier(5);
// console.log(factor5(5));

// =========================================================================

// closures 3: Filtering by Threshold
// Create a function filterByThreshold that takes a threshold value as an
// argument and returns a function. The returned function should filter an
// array of numbers, keeping only the numbers that are greater than or equal
// to the threshold.

// const arr1 = [1, 2, 3, 4, 5];

// function filterByThreshold(threshold) {
//   return function filter(arr) {
//     const filtered = [];
//     arr.forEach((el) => {
//       if (el >= threshold) {
//         filtered.push(el);
//       }
//     });
//     return filtered;
//   };
// }

// const threshold3 = filterByThreshold(3);
// console.log(threshold3(arr1)); // [3, 4, 5]

// =========================================================================
