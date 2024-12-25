function summaryRanges(nums: number[]): string[] {
    let result: string[] = [];
    
    for (let i=0; i<=nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            let startingPoint: number = nums[i];

            while (nums[i] + 1 === nums[i + 1]) {
                i++;
            }

            result.push(`${startingPoint}->${nums[i]}`);
        } else {
            result.push(nums[i].toString());
        }
    }

    return result;
};