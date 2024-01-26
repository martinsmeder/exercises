// Is Palindrome Using Queue and Stack:
// We are going to revisit the Palindrome challenge, but we are going
// to use BOTH the Queue and Stack data structures to solve it.

// Create a function called isPalindromeQueueStack that takes in a
// string and checks if it is a palindrome.

// The function should return true if the string is a palindrome, and
// alse if it is not. Again, use the Queue and Stack data structures
// to solve this problem.

// Examples:
// isPalindromeQueueStack('racecar'); // true
// isPalindromeQueueStack('hello'); // false
// isPalindromeQueueStack('A man, a plan, a canal: Panama'); // true

const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  // Remove special characters and transform to lowercase
  const cleanString = str.replace(/[^\w]/g, '').toLowerCase();

  // Initiate empty queue and stack
  let queue = new Queue();
  let stack = new Stack();

  // Initiate empty string variables
  let queueString = '';
  let stackString = '';

  // Loop through formatted string and add characters to queue and
  // stack
  for (let i = 0; i < cleanString.length; i++) {
    queue.enqueue(cleanString[i]);
    stack.push(cleanString[i]);
  }

  // Loop again and accumulate the removed characters from both queue
  // and stack to the string variables
  for (let j = 0; j < cleanString.length; j++) {
    queueString += queue.dequeue(); // Start from beginning of queue
    stackString += stack.pop(); // Start from end of stack
  }

  // Return true if strings match, false if not
  return queueString === stackString;
}

module.exports = isPalindromeQueueStack;
