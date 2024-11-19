/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    // const anagramsMap = new Map();
    
    // strs.forEach(s => {
    //     const count = new Array(26).fill(0);
        
    //     for (let c of s) {
    //         count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    //     }

        // const key = count.join(',');

    //     if (!anagramsMap.has(key)) {
    //         anagramsMap.set(key, []);
    //     }
        
        // anagramsMap.get(key).push(s);
    // });
    
    // return Array.from(anagramsMap.values());
    
    // (2)
    let hash = {};

    for (let str of strs) {
        let array = new Array(26).fill(0);

        for (let ch of str) {
            array[ch.charCodeAt("0") - "a".charCodeAt("0")]++;
        }

        let key = array.join(",");
        
        if (hash[key]) {
            hash[key].push(str);
        } else {
            hash[key] = [str];
        }
    }

    return Array.from(Object.values(hash))  
};