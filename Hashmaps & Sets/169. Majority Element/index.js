/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    // const hash = {};

    // for (let num of nums) {
    //     hash[num] = (hash[num] || 0) + 1;
    // }

    // let max = 0;
    // let ans = 0;
    
    // for (let num in hash) {
    //     if (max < parseInt(hash[num])) {
    //         max = parseInt(hash[num]);
    //         ans = parseInt(num);
    //     }
    // }

    // return ans;

    // Time Complexity: O(n)
    // Space Complexity: O(n)

    let candidate = 0;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (candidate !== num) ? -1 : 1;
    }

    return candidate;

    // Time Complexity: O(n)
    // Space Complexity: O(1)
};