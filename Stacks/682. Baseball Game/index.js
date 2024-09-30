/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function(operations) {
    let stack = [];
    
    for (let i=0; i<operations.length; i++) {
        if (operations[i] === "C") {
            stack.pop();
        } else if (operations[i] === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(Number(operations[i]));
        }
    }

    return stack.reduce((acc, val) => acc + val, 0);
};