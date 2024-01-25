// Reverse a String Using a Queue:
// Write a function called reverseStringQueue that takes in a string
// and returns the reverse of that string.

// The function should return the reversed string, but I want you to
// use the Queue class to do it.

// Constraints:
// The string will only contain lowercase letters and spaces

const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  // Initialize an empty string to store the reversed result
  let reversed = '';
  // Create a new Queue instance
  const queue = new Queue();

  // Enqueue each character of the original string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  // Dequeue each character from the queue and append it to the reversed string
  for (let j = 0; j < str.length; j++) {
    reversed += queue.dequeue();
  }

  // Return the reversed string
  return reversed;
};

module.exports = reverseStringWithQueue;
