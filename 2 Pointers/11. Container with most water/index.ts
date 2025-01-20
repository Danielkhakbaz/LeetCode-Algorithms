function maxArea(height: number[]): number {
    let left: number = 0, right = height.length - 1;

    let maxV: number = 0;

    while (left < right) {
        maxV = Math.max((right - left) * Math.min(height[left], height[right]), maxV);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxV;
};