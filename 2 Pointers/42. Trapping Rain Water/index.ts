function trap(height: number[]): number {
    const n: number = height.length;
    const maxLeft: number[] = new Array(n).fill(0);
    const maxRight: number[] = new Array(n).fill(0);
    
    let lWall: number = 0;
    let rWall: number = 0;
    
    for (let i = 0; i < n; i++) {
        const j: number = n - i - 1;
        maxLeft[i] = lWall;
        maxRight[j] = rWall;
        lWall = Math.max(lWall, height[i]);
        rWall = Math.max(rWall, height[j]);
    }
    
    let total: number = 0;
    for (let i = 0; i < n; i++) {
        const pot: number = Math.min(maxLeft[i], maxRight[i]);
        total += Math.max(0, pot - height[i]);
    }
    
    return total;
}