/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x, start = 0, end = x) {
    //base cases
    if (x === 0) return 0;
    if (x === 1) return 1;

    const root = Math.ceil((end + start) / 2); //to round integer number
    if (root * root <= x && (root + 1) * (root + 1) > x) return root;
    else if (root * root > x) {
        return mySqrt(x, start, root);
    } else {
        return mySqrt(x, root, end);
    }
};
