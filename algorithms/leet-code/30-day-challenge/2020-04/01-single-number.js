/**
 * @param {number[]} nums
 * @return {number}
 */

// map method O (n^2)
export const singleNumberNumberMap = function (nums) {
    const numMap = nums.reduce((accum, num) => {
        accum[num] ? (accum[num] += 1) : (accum[num] = 1);
        return accum;
    }, {});
    return Object.keys(numMap)
        .filter((key) => numMap[key] === 1)
        .join();
};

//Use XOR
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumberXor = function (nums) {
    let singleNumber = 0;
    nums.forEach((num) => (singleNumber = singleNumber ^ num));
    return singleNumber;
};
