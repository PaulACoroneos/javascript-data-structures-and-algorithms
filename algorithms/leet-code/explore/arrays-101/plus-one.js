/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    //base case where last digits is less than 9
    if (digits[digits.length - 1] < 9) {
        let last = digits.pop();
        last += 1;
        digits.push(last);
        return digits;
    }

    const length = digits.length - 1;

    //at least last digits is 9. Travel from back to front of array
    for (let i = length; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }
    //if we got here we had an overflow, return an array of 1 and pad by 0's in previous arr
    return [1, ...digits];
};
