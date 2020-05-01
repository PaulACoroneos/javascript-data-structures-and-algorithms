/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
    let profit = 0;
    for (let day = 1; day < prices.length; day++) {
        if (prices[day] > prices[day - 1]) {
            profit += prices[day] - prices[day - 1];
        }
    }
    return profit;
};
