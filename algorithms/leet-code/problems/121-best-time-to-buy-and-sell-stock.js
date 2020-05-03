//solution 1 iterative
/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = function (prices) {
//     //base case
//     if (prices.length === 0) return 0;
//     let profit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > profit) {
//                 profit = prices[j] - prices[i];
//             }
//         }
//     }
//     return profit;
// };

//min/max
const maxProfit = function (prices) {
    //base case
    if (prices.length === 0) return 0;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};
