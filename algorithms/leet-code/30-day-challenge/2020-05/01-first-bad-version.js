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
const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n <= 1) return 1;
        let goodPtr = 0;
        let badPtr = n;
        let ptr = Math.floor((badPtr + goodPtr) / 2);
        while (goodPtr !== badPtr - 1) {
            if (isBadVersion(ptr)) {
                badPtr = ptr;
            } else {
                goodPtr = ptr;
            }
            ptr = Math.floor((badPtr + goodPtr) / 2);
        }
        return badPtr;
    };
};
