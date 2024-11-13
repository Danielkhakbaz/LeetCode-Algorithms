/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isSubsequence = function(s, t) {
    // let S = s.length;
    // let T = t.length;

    // let j = 0;

    // if (s === "") {
    //     return true;
    // }

    // for (let i=0; i<T; i++) {
    //     if (t[i] === s[j]) {
    //         if (j === S - 1) {
    //             return true;
    //         }

    //         j++;
    //     }
    // }

    // return false;

    // (2)
    let j=0;

    if (s === "") {
        return true;
    }

    for (let i=0; i<t.length; i++) {
        if (s[j] === t[i]) {
            j++;

            if (j >= s.length) {
                return true;
            }
        }
    }

    return false;
};