/** Counts odd amount of numbers below given number n
 *
 * @param {number} n
 */
export const oddCount = (n: number) => {
    if (n % 2 === 0) return n / 2;
    else return (n - 1) / 2;
};
