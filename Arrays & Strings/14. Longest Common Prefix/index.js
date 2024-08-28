/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let minLength = Infinity;

    for (let str of strs) {
        minLength = Math.min(minLength, str.length);
    }

    let i=0;

    while (i < minLength) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }

        i++;
    }

    return strs[0].substring(0, i);
};