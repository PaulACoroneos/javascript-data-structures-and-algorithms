/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    // base cases

    let iterateIdx = m + n - 1;
    let mIdx = m - 1;
    let nIdx = n - 1;

    while (nIdx >= 0) {
        if (nums1[mIdx] > nums2[nIdx]) {
            nums1[iterateIdx] = nums1[mIdx];
            mIdx--;
        } else {
            nums1[iterateIdx] = nums2[nIdx];
            nIdx--;
        }
        iterateIdx--;
    }
};
