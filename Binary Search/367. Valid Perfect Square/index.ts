function isPerfectSquare(num: number): boolean {
    // (1)

    // if (num === 1) {
    //     return true;
    // }

    // for (let i=0;i<=num / 2; i++) {
    //     if (i * i === num) {
    //         return true;
    //     }
    // }

    // return false;

    // (2)
    let left = 1, right = Math.floor(num / 2);

    while (left <= right) {
        let mid = Math.floor((left + right ) / 2);

        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};