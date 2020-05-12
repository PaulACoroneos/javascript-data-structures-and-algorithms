/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
    //base cases
    if (A.length <= 2) return false;
    let peak = false;
    let max = -1;
    let localMax = -1;

    for (let idx = 0; idx < A.length; idx++) {
        const num = A[idx];
        if (num === max) return false;

        if (!peak) {
            if (num > max) {
                max = num;
            } else if (num < max) {
                peak = true;
                localMax = num;
            }
        } else {
            if (num < localMax) {
                localMax = num;
            } else {
                return false;
            }
        }
    }
    return localMax === -1 || max === A[0] ? false : true;
};
