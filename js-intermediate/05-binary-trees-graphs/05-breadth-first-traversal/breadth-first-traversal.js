// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  // If no root node, return empty array
  if (!root) return [];

  // Initiate empty result and queue arrays
  const result = [];
  const queue = new Queue();

  // Push root node to queue
  queue.enqueue(root);

  // Loop though queue as long as it's not empty
  while (!queue.isEmpty()) {
    // Get current (first) element from queue
    const current = queue.dequeue();
    // Push current data into results array
    result.push(current.data);

    // If left and/or right child exists, push them to the queue
    if (current.left) queue.enqueue(current.left);
    if (current.right) queue.enqueue(current.right);
  }

  // Return results array
  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
