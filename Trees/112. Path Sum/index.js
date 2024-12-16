/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function findSum(node, sum=0, target) {
        if (!node) {
            return false;
        }

        sum += node.val;

        if (!node.left && !node.right) {
            return sum === target;
        }

        return findSum(node.left, sum, targetSum) || findSum(node.right, sum, targetSum);
    }

    return findSum(root, 0, targetSum);
};