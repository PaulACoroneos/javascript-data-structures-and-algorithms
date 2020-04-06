/** This js function takes the user inputted number and calculates the first factorial
 * @param {number} num
 */
export const FirstFactorial = (num: number) => {
    const passedNum = num;
    for (let i = passedNum - 1; i > 0; i--) num = num * i;
    return num;
};
