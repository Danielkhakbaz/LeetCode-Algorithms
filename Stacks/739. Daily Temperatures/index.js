/**
 * @param {number[]} temps
 * @return {number[]}
 */

var dailyTemperatures = function(temps) {
    // const result = new Array(temps.length).fill(0);

    // for (let i=0; i<temps.length; i++) {
    //     for (let j=i+1; j<temps.length; j++) {
    //         if (temps[i] < temps[j]) {
    //             result[i] = j - i;

    //             break;
    //         }
    //     }
    // }

    // return result;

    // Time Complexity: O(n^2)

    const result = new Array(temps.length).fill(0);

    const stack = [];

    for (let i=0; i<temps.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][0] < temps[i]) {
            const [temp, indice] = stack.pop();

            result[indice] = i - indice;
        }

        stack.push([temps[i], i]);
    }

    return result;
};