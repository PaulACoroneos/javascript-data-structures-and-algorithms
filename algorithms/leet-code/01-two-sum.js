/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const deltaTarget = target - nums[i];
        if (hashTable.hasOwnProperty(deltaTarget)) {
            return [hashTable[deltaTarget], i];
        }
        hashTable[nums[i]] = i;
    }
};
