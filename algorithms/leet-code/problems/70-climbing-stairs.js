//2^N slow fib sol'n

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//     //base case
//     if (n <= 1) return 1;

//     //otherwise this is basically fib sequence f(n) = f(n-1) + f(n-2)
//     return climbStairs(n - 1) + climbStairs(n - 2);
// };

//faster method using memoized recursive solution
/**
 * @param {number} n
 * @return {number}
 */
const cache = {
    '0': 1,
    '1': 1,
};

const climbStairs = function (n) {
    //base cases
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
};
