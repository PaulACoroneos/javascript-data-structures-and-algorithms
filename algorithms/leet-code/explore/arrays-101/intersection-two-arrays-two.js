//method 1. ES6
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    //base cases
    if (nums1.length === 0 || nums2.length === 0) return [];

    const hashTable = {};
    for (const num of nums1) {
        hashTable[num] ? (hashTable[num] += 1) : (hashTable[num] = 1);
    }

    return nums2
        .map((num) => {
            if (hashTable[num] > 0) {
                hashTable[num]--;
                return num;
            }
        })
        .filter((num) => num !== undefined);
};
