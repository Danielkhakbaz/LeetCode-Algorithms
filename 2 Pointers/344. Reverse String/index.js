/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
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

    // let left = 0, right = s.length - 1;

    // for (let i=0; i<(s.length - 1) / 2; i++) {
    //     [s[left], s[right]] = [s[right], s[left]];

    //     left++;
    //     right--;
    // }
};