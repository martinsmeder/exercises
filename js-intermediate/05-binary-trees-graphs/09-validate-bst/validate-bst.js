// Validate Binary Search Tree:
// Write a function called isValidBST that takes in the following parameters:
// * root - The root/current node of a binary tree.

// The function should return a boolean indicating whether the binary tree is
// a valid binary search tree (BST).

// You want to check ALL subtrees, not just the right and left of the root
// node. I would suggest creating a helper function to call recursively that
// takes in a min and max value. Make sure that anything on the left of the
// node is less than the max (parent node) and anything on the right is more
// than the min (parent node).

// Valid Binary Search Tree (BST):
// A binary search tree (BST) is a binary tree where each node has a value, and
// all the nodes in the left subtree have values less than the current node's
// value, while all the nodes in the right subtree have values greater than the
// current node's value. Additionally, the left and right subtrees must also be
// valid binary search trees.

// Input: root = [2,1,3]
// Output: true
// Explanation: The binary tree is as follows:
//     2
//    / \
//   1   3
// This is a valid binary search tree.

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The binary tree is as follows:
//      5
//     / \
//    1   4
//       / \
//      3   6
// The node with a value of 4 has its left child with a value of 3, which
// violates the BST property, so it is not a valid BST.

// Hints
// 1. You can solve this problem using a depth-first traversal approach.
// 2. Use recursion to explore the left and right subtrees of each node and check
//    if the current node's value is within the valid range based on its position
//    in the binary search tree.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST() {}

module.exports = { Node, isValidBST };

const root = new Node(8);
const node4 = new Node(4);
const node10 = new Node(10);
const node2 = new Node(2);
const node6 = new Node(6);

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right = node6;

const result = isValidBST(root);
console.log(result); // True
