/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = (string: string) => {
    if (!string.length) return false;

    const reversedArr = string.toString().split('');

    return reversedArr.every((leftNumber, index) => {
        return leftNumber === reversedArr[reversedArr.length - index - 1];
    });
};
