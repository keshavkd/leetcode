/**
 * Invert binary tree: https://leetcode.com/problems/invert-binary-tree/
 *
 * Inverts a binary tree by swapping its left and right subtrees recursively.
 *
 * @summary Inverts a binary tree.
 *
 * @param {TreeNode} root - The root node of the binary tree to invert.
 * @return {TreeNode} - Returns the root node of the inverted binary tree.
 *
 * @description
 * Time Complexity: O(n) - each node is visited exactly once.
 * Space Complexity: O(h) - The space complexity of the recursive approach is O(h),
 * where h is the height of the tree. In the worst case, the height of the tree is O(n),
 * where n is the number of nodes in the tree, which leads to a space complexity of O(n).
 * */

/* Recursive */
const invertTreeRecursive = (root) => {
  if (root === null) return root;

  let left = root.left,
    right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
};

/* Iterative */
const invertTreeIterative = (root) => {
  if (root === null) return root;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(left);
    if (node.right) queue.push(right);
  }

  return root;
};
