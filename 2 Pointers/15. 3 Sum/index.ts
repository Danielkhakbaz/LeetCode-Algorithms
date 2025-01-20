function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let low: number = i + 1, high: number = nums.length - 1;

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high];

            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                
                low++;
                high--;

                while (nums[low] === nums[low - 1]) low++;
                while (nums[high] === nums[high + 1]) high--;
            } else if (sum > 0) {
                high--;
            } else {
                low++;
            }
        }
    }

    return result;
};