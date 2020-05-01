/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = function (nums) {
    let numsLength = nums.length;
    for (let num = 0; num < numsLength; num++) {
        if (nums[num] === 0) {
            nums.splice(num, 1);
            nums.push(0);
            numsLength--;
            num--;
            console.log('hey', numsLength, nums);
        }
    }
};
