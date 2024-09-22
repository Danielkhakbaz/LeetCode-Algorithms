/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    // const result = [];

    // for (let num of nums) {
    //     result.push(Math.pow(num, 2));
    // }

    // return result.sort((a, b) => a - b);

    // Time Complexity: O(N log N)

    let left = 0, right = nums.length - 1;

    let result = [];
    
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.push(Math.pow(nums[left], 2));

            left++;
        } else {
            result.push(Math.pow(nums[right], 2));

            right--;
        }
    }

    return result.reverse();
};