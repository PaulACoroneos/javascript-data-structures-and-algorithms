/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function (nums) {
    let calculatedMax = nums[0];
    let maxAtNumInArr = nums[0];

    for (let num = 1; num < nums.length; num++) {
        maxAtNumInArr = Math.max(nums[num], maxAtNumInArr + nums[num]);
        calculatedMax = Math.max(maxAtNumInArr, calculatedMax);
    }
    return calculatedMax;
};
