// Step by step explanation:
// sumUpTo(5) calls sumUpTo(4) and stores 5 to later return the sum of all values between 1 and 5
// sumUpTo(4) calls sumUpTo(3) and stores 4 to later return the sum of all values between 1 and 4
// sumUpTo(3) calls sumUpTo(2) and stores 3 to later return the sum of all values between 1 and 3
// sumUpTo(2) calls sumUpTo(1) and stores 2 to later return the sum of all values between 1 and 2
// sumUpTo(1) calls sumUpTo(0) and stores 1 to later return the sum of all values between 1 and 1
// sumUpTo(0) returns 0 (base case and not computed because the value for 0 is known)
// sumUpTo(1) returns 1 (computed using the stored value from the last sumUpTo(1) call on the call stack))
// sumUpTo(2) returns 3 (computed using the stored value from the last sumUpTo(2) call on the call stack)
// sumUpTo(3) returns 6 (computed using the stored value from the last sumUpTo(3) call on the call stack)
// sumUpTo(4) returns 10 (computed using the stored value from the last sumUpTo(4) call on the call stack)
// sumUpTo(5) returns 15 (computed using the stored value from the last sumUpTo(5) call on the call stack)

// function sumUpTo(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   return n + sumUpTo(n - 1);
// }

// Reverse string:
// function reverseString(str) {
// ???
// }

// Sum numbers:
function sumArray(arr) {}

module.exports = reverseString;
