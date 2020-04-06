/**This function accepts two vars. If the second var is greater than the first return true. Otherwise if the first var  is larger return false. If both vars are equal return -1
 *  @param {number} num1
 *  @param {number} num2
 */

export const CheckNums = (num1: number, num2: number) => {
    if (num2 > num1) return true;
    else if (num1 > num2) return false;
    else return -1;
};
