/**
 * @param {string} s
 * @return {number}
 */
 
var romanToInt = function(s) {
    // let sum = 0;

    // const obj = {
    //     I: 1,
    //     V: 5,
    //     X: 10,
    //     L: 50,
    //     C: 100,
    //     D: 500,
    //     M: 1000
    // };

    // for (let i=1; i<=s.length; i++) {
    //     if (obj[s[i-1]] < obj[s[i]]) {
    //         sum += obj[s[i]] - obj[s[i-1]];

    //         i++;
    //     } else {
    //         sum+= obj[s[i-1]];
    //     }
    // }

    // return sum;

    // (2)
    let sum = 0;

    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (let i=0; i<s.length; i++) {
        if (obj[s[i]] < obj[s[i+1]]) {
            sum += obj[s[i+1]] - obj[s[i]];

            i++;
        } else {
            sum += obj[s[i]];
        }
    }

    return sum;
};