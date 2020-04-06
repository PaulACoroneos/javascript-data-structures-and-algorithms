/** this js function accepts a user input number then sums the integers from 1 to the value of the number submitted
 * @param {number} num
 */
export const SimpleAdding = (num: number) => {
    const iterate = num;
    for (let i = iterate - 1; i > 0; i--) num = num + i;
    return num;
};
