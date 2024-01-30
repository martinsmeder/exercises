// Binary Tree Maximum Depth:
// Write a function called maxDepth that takes the root of a binary tree
// as input and returns the maximum depth of the tree. The maximum depth is
// defined as the number of nodes along the longest path from the root node
// down to the farthest leaf node.

// Examples:
// Explanation: The binary tree is as follows:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// The maximum depth is 3, which is the path 3 -> 20 -> 7.

// Explanation: The binary tree is as follows:
//     1
//      \
//       2
// The maximum depth is 2, which is the path 1 -> 2.

// Input: root = []
// Output: 0
// Explanation: An empty tree has a maximum depth of 0.

// Hints
// 1. You can solve this problem using a depth-first traversal approach.
// 2. Use recursion to explore the left and right subtrees of each node and
//    return the maximum depth between them.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // Base case: If no root, end of branch is reached, return null
  if (!root) return 0;

  // Get leftDepth and rightDepth
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // If left is deeper, return leftDepth + 1 (for current level)
  if (leftDepth > rightDepth) return leftDepth + 1;
  // If right is deeper, or they have equal length, return rightDepth + 1
  // (for current level)
  else return rightDepth + 1;
}

module.exports = {
  maxDepth,
  Node,
};
