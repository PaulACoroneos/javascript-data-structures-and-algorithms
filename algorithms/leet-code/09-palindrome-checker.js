/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) return false;

    const reversedArr = x.toString().split('');

    return reversedArr.every((leftNumber, index) => {
        return (leftNumber === reversedArr[reversedArr.length - index - 1]);
    })

};