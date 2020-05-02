/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let num = x;
    let reversed = 0;
    while (num) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return x === reversed;
};
