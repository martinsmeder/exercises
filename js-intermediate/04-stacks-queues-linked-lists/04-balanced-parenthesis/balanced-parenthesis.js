// Balanced Parenthesis:
// Write a function called isBalanced that takes in a string and checks
// if the parenthesis are balanced.

// The function should return true if the parenthesis are balanced and
// false if they are not. Use the stack implementation you created in
// the previous exercise.

// Examples:
// isBalanced('()'); // true
// isBalanced('()()'); // true
// isBalanced('(()())'); // true
// isBalanced('(()'); // false
// isBalanced(')('); // false

// Constraints:
// The string will only contain parenthesis and no other characters

const Stack = require('./stack');

function balancedParenthesis(str) {
  // Create a new stack to keep track of open parentheses
  const stack = new Stack();

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // If the current character is an open parenthesis
    if (str[i] === '(') {
      // Push the open parenthesis onto the stack
      stack.push(str[i]);
    }
    // If the current character is a closing parenthesis
    else if (str[i] === ')') {
      // Check if the stack is empty (no matching open parenthesis)
      if (stack.isEmpty()) {
        // If the stack is empty, parentheses are not balanced, return false
        return false;
      }
      // If there is a matching open parenthesis, pop it from the stack
      stack.pop();
    }
  }

  // After iterating through the entire string, check if the stack is empty
  // If it's empty, all open parentheses have a matching closing parenthesis
  // If it's not empty, there are unmatched open parentheses, return false
  return stack.isEmpty();
}

module.exports = balancedParenthesis;
