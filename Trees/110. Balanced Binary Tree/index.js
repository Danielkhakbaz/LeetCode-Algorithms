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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balaned = true;

    function height(node) {
        if (!node) {
            return 0;
        }

        let left = height(node.left);
        let right = height(node.right);

        if (Math.abs(left - right) > 1) {
            balaned = false;

            return 0;
        }

        return 1 + Math.max(left, right);
    }

    height(root);

    return balaned;
};