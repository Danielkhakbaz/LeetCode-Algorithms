/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // for (let i=0; i<=n; i++) {
    //     if (isBadVersion(i)) {
    //         return i;
    //     }
    // }

    // Too Slow

    // (1)
    // let left = 1, right = n;

    // while (left < right) {
    //     let middle = Math.floor((left + right) / 2);

    //     if (isBadVersion(middle)) {
    //         right = middle;
    //     } else {
    //         left = middle + 1;
    //     }
    // }

    // return left;

    // (2)
    let left = 0,
      right = n - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};
