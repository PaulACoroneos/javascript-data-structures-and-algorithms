/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i > -1; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }
    }
    return [1, ...digits];
};