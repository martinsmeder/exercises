// Solved: 10

// ==========================================================================================
// Problem:
// Write a program that produces this shape, using only one output statement:
//     ##
//    ####
//   ######
//  ########
// ##########
//  ########
//   ######
//    ####
//     ##

// let spaceCount = 8;
// let hashCount = 0;

// for (let row = 0; row < 10; row++) {
//   console.log(' '.repeat(spaceCount) + '#'.repeat(hashCount));
//   if (row <= 4) {
//     spaceCount--;
//     hashCount += 2;
//   } else {
//     spaceCount++;
//     hashCount -= 2;
//   }
// }

// ==========================================================================================
// Problem:
// Write a program that produces this shape, using only one output statement:
// #            #
//  ##        ##
//   ###    ###
//    ########
//   ###    ###
//  ##        ##
// #            #

// let leftSpaceCount = 0;
// let middleSpaceCount = 12;
// let hashCount = 1;

// for (let row = 0; row < 7; row++) {
//   console.log(
//     ' '.repeat(leftSpaceCount) +
//       '#'.repeat(hashCount) +
//       ' '.repeat(middleSpaceCount) +
//       '#'.repeat(hashCount)
//   );

//   if (row < 3) {
//     leftSpaceCount++;
//     middleSpaceCount -= 4;
//     hashCount++;
//   } else {
//     leftSpaceCount--;
//     middleSpaceCount += 4;
//     hashCount--;
//   }
// }

// ==========================================================================================
// Problem:
// Given a string, write a program to count the number of vowels and consonants in the string.

// function countVowelsAndConsonants(str) {
//   let vowels = 0;
//   let consonants = 0;

//   const vowelRegex = /[aeiou]/i;
//   const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
//   // / = beginning and end of regex pattern
//   // [] = define character set
//   // i = case-insensitive

//   for (let letter = 0; letter < str.length; letter++) {
//     if (vowelRegex.test(str[letter])) {
//       vowels++;
//     } else if (consonantRegex.test(str[letter])) {
//       consonants++;
//     }
//   }

//   console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
// }

// countVowelsAndConsonants('ThIs Is a sTrInG');

// ==========================================================================================
// Write a program to print the Fibonacci sequence up to a given number 'n'.

// function fibonacci(num) {
//   let a = 0;
//   let b = 1;

//   console.log(a);
//   console.log(b);

//   for (let fib = 1; fib <= num; fib = a + b) {
//     console.log(fib);
//     a = b;
//     b = fib;
//   }
// }

// fibonacci(15000);

// ==========================================================================================
// Problem:
// Create a Luhn algorithm that gets the check digit an then verifies the entire id-number

// function getCheckDigit(num) {
//   const numString = num.toString();
//   let sum = 0;
//   let double = false;

//   // Loop through entire ID-number
//   for (let i = 0; i < numString.length; i++) {
//     let digit = parseInt(numString[i]);

//     if (double) {
//       digit *= 2;
//       if (digit > 9) {
//         // Split double digits in two and add together
//         const digitString = digit.toString();
//         digit = parseInt(digitString[0]) + parseInt(digitString[1]);
//       }
//     }

//     sum += digit;
//     double = !double;
//   }

//   // Get check digit
//   const negativeDigit = (sum % 10) - 10;
//   const checkDigit = -negativeDigit;
//   console.log(`Sum: ${sum}\nCheck-digit: ${checkDigit}`);
//   return checkDigit;
// }

// getCheckDigit(176248);

// function fullLuhnVerification(num) {
//   const numString = num.toString();
//   let sum = 0;
//   let double = false;
//   let checkDigit;

//   // Exclude the last digit (checkDigit)
//   for (let i = 0; i < numString.length - 1; i++) {
//     let digit = parseInt(numString[i]);

//     if (double) {
//       digit *= 2;
//       if (digit > 9) {
//         const digitString = digit.toString();
//         digit = parseInt(digitString[0]) + parseInt(digitString[1]);
//       }
//     }

//     sum += digit;
//     double = !double;
//   }

//   // Get the last digit as check digit
//   checkDigit = parseInt(numString[numString.length - 1]);

//   // Calculate the correct check digit
//   const negativeDigit = (sum % 10) - 10;
//   const correctCheckDigit = -negativeDigit;

//   console.log(`Sum: ${sum}\nCorrect check-digit: ${correctCheckDigit}`);
//   console.log(`Entered check-digit: ${checkDigit}`);

//   if (checkDigit === correctCheckDigit) {
//     console.log('Check digit is valid.');
//   } else {
//     console.log('Check digit is not valid.');
//   }

//   // Check if entire ID is valid according to luhn formula
//   if ((sum + checkDigit) % 10 === 0) {
//     console.log('ID is valid.');
//   } else {
//     console.log('ID is not valid');
//   }
// }

// fullLuhnVerification(1762483);
