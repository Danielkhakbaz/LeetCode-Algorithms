function calPoints(operations: string[]): number {
    const array: number[] = [];

    operations.forEach((opr) => {
        switch (opr) {
            case "+": {
                let a = array[array.length - 1];
                let b = array[array.length - 2];

                array.push(a + b);

                break;
            };
            case "D": {
                let a = array[array.length - 1];

                array.push(2 * a);

                break;
            };
            case "C": {
                array.pop();

                break;
            };
            default: {
                array.push(parseInt(opr));
            };
        }
    })

    return array.reduce((sum, acc) => sum + acc, 0);
};