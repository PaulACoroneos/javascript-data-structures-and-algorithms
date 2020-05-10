/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
    let evenCnt = 0;
    for (num of nums) {
        if (num.toString().length % 2 === 0) evenCnt++;
    }
    return evenCnt;
};
