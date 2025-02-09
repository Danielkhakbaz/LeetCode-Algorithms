function findMaxAverage(nums: number[], k: number): number {
    let sum: number = 0;
    let average: number = 0;

    for (let i=0; i<k; i++) {
        sum += nums[i];
    }

    average = sum / k;

    for (let i=k; i<nums.length; i++) {
        sum += nums[i];
        sum -= nums[i - k];

        average = Math.max(sum / k, average);
    }

    return average;
};