from typing import List

def dailyTemperatures(temperatures: List[int]) -> List[int]:
    result = [0] * len(temperatures)
    stack = []
    
    for i in range(len(temperatures)):
        while stack and stack[-1][0] < temperatures[i]:
            temp, index = stack.pop()
            result[index] = i - index
            
        stack.append([temperatures[i], i])
    
    return result
