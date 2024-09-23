/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    // s.reverse();

    // Time C: O(n^2)
    // Space C: O(n)

    let left = 0, right = s.length - 1;

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }

    // Time C: O(n)
    // Space C: O(1)
};