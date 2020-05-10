/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
    const origLength = arr.length;
    let addedZeroCount = 0;
    for (let num = 0; num < origLength; num++) {
        if (arr[num] === 0) {
            arr.splice(num, 0, 0);
            num += 1;
            addedZeroCount++;
        }
    }
    arr.splice(origLength, addedZeroCount);
};
