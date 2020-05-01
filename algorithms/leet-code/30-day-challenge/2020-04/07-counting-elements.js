/**
 * @param {number[]} arr
 * @return {number}
 */
export const countElements = function (arr) {
    let count = 0;
    const numSet = {};
    arr.forEach((num) => {
        numSet[num] ? numSet[num]++ : (numSet[num] = 1);
    });
    const maxNum = Object.keys(numSet).sort((a, b) => b - a)[0];
    for (let num = 0; num < maxNum; num++) {
        if (numSet[num] && numSet[num + 1]) {
            count += numSet[num];
        }
    }

    return count;
};
