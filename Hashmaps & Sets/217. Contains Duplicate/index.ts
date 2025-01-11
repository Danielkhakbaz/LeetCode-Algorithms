function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums);

    return true ? set.size !== nums.length : false;
};