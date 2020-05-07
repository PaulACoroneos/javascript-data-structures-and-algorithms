/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    //base cases. if 1 thats it. if 2 both nums are same to maintain majority
    if (nums.length <= 2) return nums[0];

    const hashMap = nums.reduce((hashTable, num) => {
        hashTable[num] ? (hashTable[num] += 1) : (hashTable[num] = 1);
        return hashTable;
    }, {});

    return Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a])[0];
};
