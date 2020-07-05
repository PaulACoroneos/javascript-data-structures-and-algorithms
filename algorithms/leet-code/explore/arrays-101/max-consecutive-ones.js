/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0) return 0;
    let count = 0;
    let maxLength = 0;

    for (num of nums) {
        if (num === 1) {
            count++;
            maxLength = maxLength < count ? count : maxLength;
        } else {
            count = 0;
        }
    }
    return maxLength;
};
