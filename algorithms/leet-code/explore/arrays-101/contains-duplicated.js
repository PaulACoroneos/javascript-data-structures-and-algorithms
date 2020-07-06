/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    //base case
    if (nums.length <= 1) return false;

    const hashTable = {};

    for (const num of nums) {
        if (hashTable[num]) return true;
        hashTable[num] = 1;
    }
    return false;
};
