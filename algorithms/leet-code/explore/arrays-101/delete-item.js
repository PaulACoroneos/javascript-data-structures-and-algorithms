/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] === val) {
            nums.splice(idx, 1);
            idx--;
        }
    }
};
