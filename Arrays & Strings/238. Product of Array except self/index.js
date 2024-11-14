/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var productExceptSelf = function (nums) {
    // (1)
    const result = [];

    let leftProduct = 1;
    let rightProduct = 1;

    for (let i=0; i<nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    for (let i=nums.length - 1; i>=0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;

    // (2)
    // for (let i=0; i<nums.length; i++) {
    //     let sum = 1;

    //     for (let j=0; i<nums.length; j++) {
    //         if (i !== j) {
    //             sum *= nums[j];
    //         }
    //     }

    //     ans.push(sum);
    // }

    // return sum;
};