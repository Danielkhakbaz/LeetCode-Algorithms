/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    // (1)
    // let minLength = Infinity;

    // for (let str of strs) {
    //     minLength = Math.min(minLength, str.length);
    // }

    // let i = 0;

    // while (i < minLength) {
    //     for (let str of strs) {
    //         if (str[i] !== strs[0][i]) {
    //             return strs[0].substring(0, i);
    //         }
    //     }

    //     i++;
    // }

    // return strs[0].substring(0, i);

    // (2)
    // let str = "";
    // let min = Infinity;

    // for (let str of strs) {
    //     if (min > str.length || min.length > str.length) {
    //         min = str;
    //     }
    // }

    // for (let i=0; i<=min.length; i++) {
    //     for (let str of strs) {
    //         if (min[0] !== str[0]) {
    //             return "";
    //         } else if (!str.startsWith(min)) {
    //             min = min.slice(0, min.length - 1)
    //         }
    //     }
    // }

    // return min;

    // (3)
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }

    return prefix;
};