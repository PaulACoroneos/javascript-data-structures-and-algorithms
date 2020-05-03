//method one, array push/unshift

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const rotate = function (nums, k) {
//     //base case
//     if (k === 0) return nums;

//     let count = k;
//     while (count > 0) {
//         const num = nums.pop();
//         nums.unshift(num);
//         count--;
//     }
//     return nums;
// };

//method 2. string slicing
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// const rotate = function (nums, k) {
//     //base case
//     if (k === 0) return nums;
//     const shiftArr = nums.splice(nums.length - k, k);
//     return nums.unshift(...shiftArr);
// };
