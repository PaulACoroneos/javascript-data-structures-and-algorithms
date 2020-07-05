/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
    const hashTable = {};
    for (let idx = 0; idx < arr.length; idx++) {
        const num = arr[idx];
        if (hashTable.hasOwnProperty(num * 2) || hashTable.hasOwnProperty(num / 2)) return true;
        else {
            hashTable[num] = num;
        }
    }
    return false;
};
