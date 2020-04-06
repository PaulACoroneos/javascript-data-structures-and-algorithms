/**
 * @param {number} x
 * @return {number}
 */
export const reverse = (num: number) => {
    let reversedNum = 0;
    let numToReverse = Math.abs(num);

    while (numToReverse) {
        reversedNum *= 10;
        reversedNum = reversedNum + (numToReverse % 10);
        numToReverse = Math.floor(numToReverse / 10);
    }

    if (reversedNum > Math.pow(2, 31)) return 0;

    return num < 0 ? `-${reversedNum}` : reversedNum;
};
