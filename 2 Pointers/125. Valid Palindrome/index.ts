function isPalindrome(s: string): boolean {
    let str: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // (1)
    // let left: number = 0, right: number = str.length - 1;

    // while (left <= right) {
    //     if (str[left] !== str[right]) {
    //         return false;
    //     } else {
    //         left++;
    //         right--;
    //     }
    // }

    // return true;

    // (2)
    for (let i=0; i<Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
};