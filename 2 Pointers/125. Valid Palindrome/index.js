/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    // let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();;

    // for (let i=0; i<str.length/2; i++) {
    //     if (str[i] !== str[str.length - 1 - i]) {
    //         return false;
    //     }
    // }

    // return true;

    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};