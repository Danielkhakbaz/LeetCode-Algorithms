function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);

    const stack = [];

    for (let i=0; i<temperatures.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
            const [temp, indice] = stack.pop();

            result[indice] = i - indice;
        }

        stack.push([temperatures[i], i]);
    }

    return result;
};