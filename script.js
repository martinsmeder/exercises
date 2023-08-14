// Exercise 1: Removing Duplicates
// Write a function that takes an array of numbers and returns a new array with duplicate
// elements removed, maintaining the order of the original array.

function killDupes(arr) {
  const uniqueArr = [];
  const seenItems = [];

  // Avoid indexOf and splice when looping through collections, indexOf lead to inefficient
  // re-searching, and splice can cause loop disruptions and changes of length
  arr.forEach((item) => {
    if (!seenItems.includes(item)) {
      uniqueArr.push(item);
      seenItems.push(item);
    }
  });

  console.log(uniqueArr);
}

killDupes([1, 2, 3, 3, 6, 4, 5, 6, 7, 7, 8, 6, 9, 0, 0]); // [1, 2, 3, 6, 4, 5, 7, 8, 9, 0]
