/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const hash = { '(': ')', '{': '}', '[': ']' };
    const stack = [];
    
    for (let c of s) {
        if (c in hash) {
            stack.push(c);
        } else {
            if (hash[stack.pop()] !== c) {
                return false;
            }
        }
    }

    return !stack.length;
};