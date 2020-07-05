// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// const rotate = function (nums, k) {
//     //base case
//     if (k === 0) return nums;

//     while (k) {
//         nums.unshift(nums.pop());
//         k--;
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    //base case
    if (k === 0) return nums;

    //if rotation num exceeds array length offset by array length
    const rotations = k > nums.length ? k - nums.length : k;

    // 3 steps

    // reverse entire array
    nums.reverse();

    //now reverse the numbers up until the rotation number (0 to k)
    nums.unshift(...nums.splice(0, rotations).reverse());

    //now reverse k to n
    nums.push(...nums.splice(rotations, nums.length - 1).reverse());
};
