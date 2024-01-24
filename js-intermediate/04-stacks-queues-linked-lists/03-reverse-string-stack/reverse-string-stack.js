// Reverse String Using a Stack:
// Write a function called reverseStringStack that takes in a string
// and returns the reversed version of the string. Be sure to use the
// Stack class that we created.

// Constraints:
// The string will only contain lowercase letters and spaces

// reverseStringStack('hello'); // olleh
// reverseStringStack('Howdy'); // ydwoH
// reverseStringStack('Greetings from Earth'); // htraE morf sgniteerG

const Stack = require('./stack');

function reverseStringStack(str) {
  // Initiate reversed variable as empty string
  let reversed = '';

  // Initiate empty stack
  const stack = new Stack();

  // Push all letters and spaces to stack
  for (let i = 0; i < str.length; i++) stack.push(str[i]);

  // Add each letter/space to reversed, from top to bottom
  for (let j = 0; j < str.length; j++) reversed += stack.pop();

  // Return reversed string
  return reversed;
}

module.exports = reverseStringStack;
