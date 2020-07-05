/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
    return A.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};
