class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        merged = []

        intervals.sort(key=lambda x: x[0])

        for interval in intervals:
            if len(merged) == 0 or merged[len(merged) - 1][1] < interval[0]:
                merged.append(interval)
            else:
                poped = merged.pop()

                merged.append([poped[0], max(poped[1], interval[1])])

        return merged