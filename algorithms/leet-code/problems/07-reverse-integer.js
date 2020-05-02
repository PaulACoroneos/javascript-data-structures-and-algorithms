// attempt 1 iterative

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = function (x) {
//     const strArr = x.toString().split('');
//     let reversedInt;
//     if (strArr[0] === '-') {
//         strArr.shift();
//         strArr.reverse();
//         strArr.unshift('-');
//         reversedInt = parseInt(strArr.join(''));
//     } else {
//         reversedInt = parseInt(strArr.reverse().join(''));
//     }

//     return Math.abs(reversedInt) > -Math.pow(2, 31) && Math.abs(reversedInt) < Math.pow(2, 31) - 1 ? reversedInt : 0;
// };

//method 2. remainder

/**
 * @param {number} x
 * @return {number}
 */

const validNumCheck = function (number, x) {
    return Math.abs(number) < Math.pow(2, 31) - 1 && Math.abs(number) > -Math.pow(2, 31) ? number : 0;
};
const reverse = function (x) {
    let reversedInt = 0;
    let num = x;
    while (num) {
        const digit = num % 10;
        num = (num - digit) / 10;
        reversedInt = digit + reversedInt;
        if (num !== 0) reversedInt = reversedInt * 10;
    }
    return validNumCheck(reversedInt, x);
};
