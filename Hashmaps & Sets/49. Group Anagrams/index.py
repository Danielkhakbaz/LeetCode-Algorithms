def group_anagrams(strs: list[str]) -> list[list[str]]:
    hash_map = {}
    
    for s in strs:
        count = [0] * 26
        
        for c in s:
            count[ord(c) - ord('a')] += 1
        
        key = tuple(count)
        
        if key in hash_map:
            hash_map[key].append(s)
        else:
            hash_map[key] = [s]
    
    return list(hash_map.values())
