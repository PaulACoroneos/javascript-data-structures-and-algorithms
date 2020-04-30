// O(N^2) solution

/**
 * @param {number} n
 * @return {number}
 */

/**
 * @param {number} n
 * @return {number}
 */

// attempt 1

// const isPrime = function (n) {
//     if (n === 2) return true;
//     for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// };
// const countPrimes = function (n) {
//     if (n <= 1) return 0;
//     let primeCount = 0;
//     for (let num = 2; num < n; num++) {
//         if (isPrime(num)) primeCount++;
//     }
//     return primeCount;
// };

// attempt 2 Sieve of Eratosthenes

const countPrimes = function (n) {
    if (n <= 2) return 0;

    const primeArr = Array(n).fill(true);
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primeArr[i]) {
            for (let j = i + i; j < n; j = j + i) {
                primeArr[j] = false;
            }
        }
    }
    return primeArr.filter((isPrime) => isPrime).length - 2;
};
