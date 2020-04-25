/**
 * @param {number} n
 * @return {boolean}
 */

function splitToDigit(n) {
    return (n + '').split('').map((i) => {
        return Number(i);
    });
}

export const isHappy = function (n, cache = new Set()) {
    if (n === 1) return true;
    const happyNumber = splitToDigit(n).reduce((accum, digit) => {
        return accum + Math.pow(digit, 2);
    }, 0);
    return cache.has(happyNumber) ? false : isHappy(happyNumber, cache.add(happyNumber));
};
