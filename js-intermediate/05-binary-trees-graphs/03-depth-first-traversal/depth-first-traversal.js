// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const Stack = require("./stack");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  // If no root node, return empty array
  if (!root) return [];

  // Initiate result and stack
  const result = [];
  const stack = new Stack();

  // Add root node to stack
  stack.push(root);

  // While the stack has nodes
  while (!stack.isEmpty()) {
    // Get last node from stack
    const current = stack.pop();
    // Push to results array
    result.push(current.data);

    // If current has right and/or left child, add it to the stack
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  // Return resulting array
  return result;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
