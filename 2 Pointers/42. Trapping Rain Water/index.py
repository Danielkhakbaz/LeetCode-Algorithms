def trap(height):
    n = len(height)
    max_left = [0] * n
    max_right = [0] * n
    
    l_wall = 0
    r_wall = 0
    
    for i in range(n):
        j = n - i - 1
        max_left[i] = l_wall
        max_right[j] = r_wall
        l_wall = max(l_wall, height[i])
        r_wall = max(r_wall, height[j])
    
    total = 0
    for i in range(n):
        pot = min(max_left[i], max_right[i])
        total += max(0, pot - height[i])
    
    return total