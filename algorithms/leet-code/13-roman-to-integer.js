/**
 * @param {string} s
 * @return {number}
 */

const romanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const romanToInt = function (s) {
    let sum = 0;
    const strArr = s;
    for (let i = 0; i < strArr.length; i++) {
        if (romanToInteger[strArr[i]] < romanToInteger[strArr[i + 1]]) {
            sum -= romanToInteger[strArr[i]];
        } else {
            sum += romanToInteger[strArr[i]];
        }
    }
    return sum;
};
