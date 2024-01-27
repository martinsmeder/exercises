// Find Pair Sum:
// You are given an array of integers and a target sum. Implement
// a function called findPairSum that finds and returns a pair of
// distinct elements from the array whose sum is equal to the
// target sum. If no such pair exists, return null. You should use
// the DoublyLinkedList class/constructor to efficiently implement
// this function.

// Example
// const nums = [2, 6, 3, 8, 10, 5];
// const targetSum = 12;

// const pair = findPairSum(nums, targetSum);
// console.log(pair); // Should print: [2, 10]

const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(arr, target) {}

const nums = [2, 6, 3, 8, 10, 5];
const targetSum = 12;

const pair = findPairSum(nums, targetSum);
console.log(pair);

module.exports = findPairSum;
