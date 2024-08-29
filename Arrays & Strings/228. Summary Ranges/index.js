/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    let ans = [];

    for (let i=0; i<nums.length; i++) {
        let start = nums[i];

        while (nums[i+1] === nums[i] + 1) {
            i++;
        }

        if (start === nums[i]) {
            ans.push(nums[i].toString());
        } else {
            ans.push(`${start}->${nums[i]}`);
        }
    }

    return ans;
};